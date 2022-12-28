import ChatMessage from "../models/ChatMessage.js";
import { check, validationResult } from "express-validator";

export const createMessage = async (req, res) => {
  // Validate the request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Create the new message
  const newMessage = new ChatMessage(req.body);

  try {
    // Save the message to the database
    await newMessage.save();

    // Send a response with the created message
    res.status(201).json(newMessage);
  } catch (error) {
    // If there is an error, send a response with a conflict status and the error message
    res.status(409).json({
      message: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  // Extract the query parameters from the request
  const { chatRoomId, sender, recipient, content } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Set up the query
  const query = { chatRoomId };
  if (sender) query.sender = sender;
  if (recipient) query.recipient = recipient;
  if (content) query.content = { $regex: content, $options: "i" };

  try {
    // Find the messages in the database
    const messages = await ChatMessage.find(query)
      .skip(skip)
      .limit(limit);

    // Send a response with the messages
    res.status(200).json(messages);
  } catch (error) {
    // If there is an error, send a response with a conflict status and the error message
    res.status(409).json({
      message: error.message,
    });
  }
};

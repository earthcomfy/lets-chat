import express from "express";

import { createMessage, getMessages } from "../controllers/chatMessage.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatRoomId", getMessages);

export default router;

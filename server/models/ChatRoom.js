import mongoose from "mongoose";

const ChatRoomSchema = mongoose.Schema(
  {
    members: Array,
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", ChatRoomSchema);

export default ChatRoom;

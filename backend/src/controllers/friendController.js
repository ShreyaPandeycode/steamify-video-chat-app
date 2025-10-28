// controllers/friendController.js
import User from "../models/User.js";

export const addFriend = async (req, res) => {
  try {
    const { friendId } = req.body; // ID of the user to add
    const userId = req.user._id; // current logged-in user

    if (userId === friendId) {
      return res.status(400).json({ message: "You cannot add yourself as a friend" });
    }

    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!friend) {
      return res.status(404).json({ message: "Friend not found" });
    }

    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: "Already friends" });
    }

    user.friends.push(friendId);
    friend.friends.push(userId);

    await user.save();
    await friend.save();

    res.status(200).json({ message: "Friend added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

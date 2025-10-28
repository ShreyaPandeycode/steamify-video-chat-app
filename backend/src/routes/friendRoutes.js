import express from "express";
import { addFriend } from "../controllers/friendController.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/add", protectRoute, addFriend);

export default router;

import { Router } from "express";
import {addUsers, getUsers} from "./users.js";

const router = Router();
router.get("/", getUsers);
router.post("/", addUsers);
// router.patch("/users", updateUser);
// router.del("/users", deleteUser);

export default router;
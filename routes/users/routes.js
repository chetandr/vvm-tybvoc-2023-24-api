import { Router } from "express";
import getUsers from "./users.js";

const router = Router();
router.get("/", getUsers);
// router.post("/users", AddUsers);
// router.patch("/users", updateUser);
// router.del("/users", deleteUser);

export default router;
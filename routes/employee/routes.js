import { Router } from "express";
import getEmployee from "./employee.js";

const router = Router();
router.get("/", getEmployee);
// router.post("/custmers", AddUsers);
// router.patch("/custmers", updateUser);
// router.del("/custmers", deleteUser);

export default router;
import { Router } from "express";
import getCustomers from "./customers.js";

const router = Router();
router.get("/", getCustomers);
// router.post("/custmers", AddUsers);
// router.patch("/custmers", updateUser);
// router.del("/custmers", deleteUser);

export default router;
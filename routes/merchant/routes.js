import { Router } from "express";
import {getMerchant, addMerchant} from "./merchant.js";

const router = Router();
router.get("/", getMerchant);
router.post("/", addMerchant);
// router.patch("/custmers", updateUser);
// router.del("/custmers", deleteUser);

export default router;
import { Router } from "express";
import getDeliveryPerson from "./deliveryPerson.js";

const router = Router();
router.get("/", getDeliveryPerson);
// router.post("/custmers", AddUsers);
// router.patch("/custmers", updateUser);
// router.del("/custmers", deleteUser);

export default router;
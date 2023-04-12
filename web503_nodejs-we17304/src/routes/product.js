import express from "express";
import {
  create,
  getAll,
  getDetail,
  update,
  remove,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", checkPermission, remove);

export default router;
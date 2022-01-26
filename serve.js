import { Router, json } from "express";
import * as serverImport from "@proxtx/combine/server.js";

export const server = serverImport;

export const router = Router();
router.use(json());

router.post("/data", async (req, res) => {
  res.status(200).send(await server.data(req.body));
});

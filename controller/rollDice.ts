import { Request, Response } from "express";
import crypto from "crypto";
import {
  RollDiceRequest,
  RollDiceResponse,
  RollDiceResponseError,
} from "../types/types";

export const rollDice = (
  req: Request<{}, {}, RollDiceRequest>,
  res: Response<RollDiceResponse | RollDiceResponseError>
) => {
  const { betAmount, walletBalance } = req.body;
  if (typeof betAmount !== "number" || typeof walletBalance !== "number") {
    res.status(400).json({ error: "Invalid betAmount or walletBalance" });
  }
  const roll: number = Math.floor(Math.random() * 6) + 1;
  const hash: string = crypto
    .createHash("sha256")
    .update(roll.toString())
    .digest("hex");

  let newBalance: number = walletBalance;
  if (roll >= 4) {
    newBalance += betAmount * 2;
  } else {
    newBalance -= betAmount;
  }

  res.status(200).json({ roll, newBalance, hash });
};

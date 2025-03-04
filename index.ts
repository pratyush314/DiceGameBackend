import express from "express";

import cors from "cors";
import { rollDice } from "./controller/rollDice";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/roll-dice", rollDice);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

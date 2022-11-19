import express, { Request, Response } from "express";
import cors from "cors";
import buildResume from "./buildResume";
import temp0 from "./schemas/temp0";
import temp1 from "./schemas/temp1";
const app = express();
const PORT = 8080;
app.use("/static",express.static("static"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/resume/:index", (req: Request, res: Response) => {
  if (!Number(req.params.index)) {
    res.status(400).send("Index is not a number");
    console.log("Index is not a number")
    return;
  }
  const index = Number(req.params.index);
  const payload = req.body;
  const temps = [temp0, temp1];
  console.log(payload)
  const validResults = temps[index].validate(payload);
  if (validResults.error) {
    res.status(400).send(validResults.error.message);
    console.log(validResults.error.message);
    return;
  }
  buildResume(payload, index)
    .then((bufferData) => {
      res
        .status(200)
        .setHeader("Content-Type", "Application/PDF")
        .send(bufferData);
    })
    .catch((err) => {
      console.log(err)
    });

  //res.send("Working3")
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

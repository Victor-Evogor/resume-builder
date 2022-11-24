import express from "express";
import data from "./resumeData.json";

const router = express.Router();

router.get("/", (_, res)=>{
  res.render("home.ejs", { resumes: data});
})

export default router

import express from "express";
import data from "./resumeData.json";

const router = express.Router();

router.get("/", (_, res)=>{
  res.render("home.ejs", { resumes: data});
});

router.get("/temp0", (_, res)=>{
  res.render("pages/temp0.ejs");
})

router.get("/temp1", (_,res)=>{
  res.render("pages/temp1.ejs");
});


export default router

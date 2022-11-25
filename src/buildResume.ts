import pdf from "pdf-creator-node";
import { readFileSync } from "fs";
import path from "path";

const options = {
  format: "Letter",
  orientation: "portrait",
  border: "0mm",
};


async function buildResume<T>(resumeData: T, index: number): Promise<Buffer> {

  const html = readFileSync(path.join(__dirname , `../templates/temp${index}/template.hbs`), "utf-8");
  const document = {
    html: html,
    data: resumeData,
    type: "buffer"
  }


  try{
    const resumePdf = await pdf.create(document, options);
    return resumePdf;
  }catch(error){
    throw error;
  }
}

export default buildResume

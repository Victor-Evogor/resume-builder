import buildResume from "../buildResume";
import temp1 from "../mocks/temp1.json";

describe("PDF creation with mock data", ()=>{
  it("Print a pdf", done =>{
    buildResume(temp1,1).then(res =>{
      //console.log(res);
      done()
    }).catch(err =>{
      done(err);

    })
  })
})

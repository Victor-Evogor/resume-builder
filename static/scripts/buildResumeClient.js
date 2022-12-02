function build(resumeData, index) {
  $("#loader").toggleClass("d-none");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  window
    .fetch(`/api/resume/${index}`, {
      method: "POSt",
      body: JSON.stringify(resumeData),
      headers: myHeaders,
    })
    .then((response) => {
      if(response.status !== 200){
        response.text().then(message =>{
          alert(message+"\n Check the console for more info");
          console.log("Example Data: "+ window.fields.exampleData);
          $("#loader").toggleClass("d-none");
        })
        return ;
      }
      response.blob().then((data) => {
        const url = window.URL.createObjectURL(data);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = resumeData.firstName + resumeData.surname + "Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url)
        $("#loader").toggleClass("d-none");
      });
    })
}

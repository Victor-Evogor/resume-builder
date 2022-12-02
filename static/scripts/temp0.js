function main(event) {
  event.preventDefault();
  const resumeData = {
    firstName: $("#first-name")[0].value,
    surname: $("#surname")[0].value,
    address: $("#address")[0].value,
    linkedin: $("#linkedin")[0].value,
    twitter: $("#twitter")[0].value,
    blog: $("#blog")[0].value,
    phone: $("#phone")[0].value,
    portfolio: $("#portfolio")[0].value,
    email: $("#email")[0].value,
    bio: $("#bio")[0].value,
    skills: $("#skills")[0].value.split(","),
    activities: $("#activities")[0].value,
    education: [{
      month: $("#month-0")[0].value,
      school: $("#school-0")[0].value,
      year: $("#year-0")[0].value,
      degree: $("#degree-0")[0].value,
      summary: $("#education-summary-0")[0].value,
    },{
      month: $("#month-1")[0].value,
      school: $("#school-1")[0].value,
      year: $("#year-1")[0].value,
      degree: $("#degree-1")[0].value,
      summary: $("#education-summary-1")[0].value,
    }],
    experience: [
      {
        startYear: $("#start-year-0")[0].value,
        endYear: $("#end-year-0")[0].value,
        jobTitle: $("#job-title-0")[0].value,
        summary: $("#work-summary-0")[0].value,
        company: $("#company-0")[0].value,
      },
      {
        startYear: $("#start-year-1")[0].value,
        endYear: $("#end-year-1")[0].value,
        jobTitle: $("#job-title-1")[0].value,
        summary: $("#work-summary-1")[0].value,
        company: $("#company-1")[0].value,
      }
    ],
  };
  console.log(resumeData);
  build(resumeData, 0);
}

window.fields = {
  exampleData: {
    firstName: "Johnson",
    surname: "Doe",
    title: "Senior Developer",
    address: "Houston Texas, USA",
    street: "Satellite Town road II",
    city: "Texas",
    phone: "+23491 332 403 45",
    zipCode: 36281321,
    email: "john@gmail.com",
    profile:
      "A resume is a document that sums up your qualifications for the job that you're applying for. Studies say that the average recruiter scans a resume for all of six seconds—so it’s absolutely critical for your resume to be clear, concise, and easy to read. You don’t want the recruiter to read your resume over and over again or find it really boring. First impressions matter.State your career goals and show how they align with the job description you’re targeting. Be brief and keep it from sounding generic. Be yourself.",
    workExperience: [
      {
        startYear: 2019,
        endYear: 2020,
        title: "Design Director",
        position: "Lead",
        company: "First Up Consultants",
      },
      {
        startYear: 2010,
        endYear: 2019,
        title: "Senior Developer",
        position: "Lead",
        company: "Nod Publishing",
      },
      {
        startYear: 2004,
        endYear: 2010,
        title: "Junior Developer",
        position: "intern",
        company: "Adatum Corporation",
      },
    ],
    skills: ["HTML", "CSS", "REACT", "ANGULAR", "Javascript", "NodeJS"],
    communicationExperience:
      "To start your resume, summarize your key responsibilities, accomplishments, and past experience. Where appropriate, definitely use the language and words you find in the specific job description and target 3-5 key areas",
    leadershipExperience:
      'For example, if you\'re a quick learner, then maybe you can write something like "motivated to quickly resolve challenges."',
    references: "JohnCitation.com",
    workSummary: "I did something cool in this company",
    education: {
      name: "BSc Computer Science",
      city: "Texas",
      state: "Houston",
      summary: "I did some internships here",
    },
  },
  fill: () => {

    // About

    $("#first-name")[0].value = "John";
    $("#surname")[0].value = "Doe";
    $("#phone")[0].value = "+2348133240345";
    $("#email")[0].value = "johndoe@gmail.com";
    $("#bio")[0].value ="A resume is a document that sums up your qualifications for the job that you're applying for. Studies say that the average recruiter scans a resume for all of six seconds—so it’s absolutely critical for your resume to be clear, concise, and easy to read. You don’t want the recruiter to read your resume over and over again or find it really boring. First impressions matter.State your career goals and show how they align with the job description you’re targeting. Be brief and keep it from sounding generic. Be yourself.";
    $("#twitter")[0].value = "twitter.com/victorevogor";
    $("#blog")[0].value = "example.com";
    $("#linkedin")[0].value = "linkedin.com/in/victorevogor";
    $("#portfolio")[0].value = "youtportfolio.website";
    $("#address")[0].value = "Houston Texas"

    // Skills and Activities

    $("#skills")[0].value = "HTML, CSS, Javascript, React, SQL";
    $("#activities")[0].value = "I love to hike, play the piano, teach and occasionally go skiing";

    // Education

    $("#degree-0")[0].value = "BSc Computer Science";
    $("#school-0")[0].value = "Cambridge";
    $("#year-0")[0].value = 2002;
    $("#month-0")[0].value = "July";
    $("#education-summary-0")[0].value = "I did some internships here";

    $("#degree-1")[0].value = "BSc Computer Science";
    $("#school-1")[0].value = "Cambridge";
    $("#year-1")[0].value = 2002;
    $("#month-1")[0].value = "July";
    $("#education-summary-1")[0].value = "I did some internships here";


    // Experience

    $("#work-summary-0")[0].value = "I did something cool in this company";
    $("#start-year-0")[0].value = 2019;
    $("#end-year-0")[0].value = 2020;
    $("#job-title-0")[0].value = "Lead";
    $("#company-0")[0].value = "Faceboook";

    $("#work-summary-1")[0].value = "I did something cool in this company";
    $("#start-year-1")[0].value = 2019;
    $("#end-year-1")[0].value = 2020;
    $("#job-title-1")[0].value = "Lead";
    $("#company-1")[0].value = "Faceboook";

  },
};


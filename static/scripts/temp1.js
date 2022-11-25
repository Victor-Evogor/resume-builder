function main(event) {
  event.preventDefault();
  const resumeData = {
    firstName: $("#first-name")[0].value,
    surname: $("#surname")[0].value,
    address: $("#address")[0].value,
    street: $("#street")[0].value,
    city: $("#city")[0].value,
    title: $("#title")[0].value,
    phone: $("#phone")[0].value,
    zipCode: $("#zip-code")[0].value,
    email: $("#email")[0].value,
    profile: $("#profile")[0].value,
    skills: $("#skills")[0].value.split(","),
    references: $("#references")[0].value,
    communicationExperience: $("#communication-experience")[0].value,
    leadershipExperience: $("#leadership-experience")[0].value,
    workSummary: $("#work-summary")[0].value,
    education: {
      name: $("#course-name")[0].value,
      city: $("#course-city")[0].value,
      state: $("#course-state")[0].value,
      summary: $("#education-summary")[0].value,
    },
    workExperience: [
      {
        startYear: $("#start-year-0")[0].value,
        endYear: $("#end-year-0")[0].value,
        title: $("#title-0")[0].value,
        position: $("#position-0")[0].value,
        company: $("#company-0")[0].value,
      },
      {
        startYear: $("#start-year-1")[0].value,
        endYear: $("#end-year-1")[0].value,
        title: $("#title-1")[0].value,
        position: $("#position-1")[0].value,
        company: $("#company-1")[0].value,
      },
      {
        startYear: $("#start-year-2")[0].value,
        endYear: $("#end-year-2")[0].value,
        title: $("#title-2")[0].value,
        position: $("#position-2")[0].value,
        company: $("#company-2")[0].value,
      },
    ],
  };
  build(resumeData);
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
    $("#first-name")[0].value = "John";
    $("#surname")[0].value = "Doe";
    $("#address")[0].value = "Houston";
    $("#street")[0].value = "Mains Street Rd II";
    $("#city")[0].value = "Texas";
    $("#title")[0].value = "Senior Software Engineer";
    $("#phone")[0].value = "+2348133240345";
    $("#zip-code")[0].value = 157281;
    $("#email")[0].value = "johndoe@gmail.com";
    $("#profile")[0].value =
      "A resume is a document that sums up your qualifications for the job that you're applying for. Studies say that the average recruiter scans a resume for all of six seconds—so it’s absolutely critical for your resume to be clear, concise, and easy to read. You don’t want the recruiter to read your resume over and over again or find it really boring. First impressions matter.State your career goals and show how they align with the job description you’re targeting. Be brief and keep it from sounding generic. Be yourself.";
    $("#skills")[0].value = "HTML, CSS, Javascript, React";
    $("#references")[0].value = "@johndoe";
    $("#communication-experience")[0].value =
      "To start your resume, summarize your key responsibilities, accomplishments, and past experience. Where appropriate, definitely use the language and words you find in the specific job description and target 3-5 key areas";
    $("#leadership-experience")[0].value =
      "For example, if you're a quick learner, then maybe you can write something like &quot;motivated to quickly resolve challenges.&quot;";
    $("#work-summary")[0].value = "I did something cool in this company";
    $("#course-name")[0].value = "BSc Computer Science";
    $("#course-city")[0].value = "Texas";
    $("#course-state")[0].value = "Houston";
    $("#education-summary")[0].value = "I did some internships here";
    $("#start-year-0")[0].value = 2019;
    $("#end-year-0")[0].value = 2020;
    $("#title-0")[0].value = "Senior Dev";
    $("#position-0")[0].value = "Lead";
    $("#company-0")[0].value = "Faceboook";
    $("#start-year-1")[0].value = 2010;
    $("#end-year-1")[0].value = 2012;
    $("#title-1")[0].value = "Front End Dev";
    $("#position-1")[0].value = "Junior";
    $("#company-1")[0].value = "Google";
    $("#start-year-2")[0].value = 2003;
    $("#end-year-2")[0].value = 2004;
    $("#title-2")[0].value = "System Administrator";
    $("#position-2")[0].value = "Senior";
    $("#company-2")[0].value = "Amazon";
  },
};

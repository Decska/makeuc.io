module.exports = {
  siteMetadata: {
    title: `MakeUC 2020`,
    siteUrl: `https://makeuc.io`,
    description: `MakeUC 2020 is a 24-hour hackathon hosted by IEEE at University of Cincinnati!`,
    tracks: [
      {
        title: `EDUCATION`,
        content: `Education technology aims to improve the accessibility of information to students at any level. 
        These projects include any sort of technology that enhances the learning experiences of students.`
      },
      {
        title: `SPACE EXPLORATION`,
        content: `Space exploration technology aligns with the main theme of MakeUC 2020! This track includes any 
        technologies aimed to enhance or otherwise improve any aspect of space exploration.`
      },
      {
        title: `HEALTH TECHNOLOGY`,
        content: `Health technology aims to make improvements to a variety of health technologies including but 
        not limited to medical imaging, healthcare technology systems, and interpreting health-related data.`
      },
      {
        title: `SOCIAL RESPONSIBILITY`,
        content: `Technologies for social responsibility encompasses technologies concerning social and economic inequality as well 
        as reducing environmental impact. This aims to increase overall social responsibility.`
      }
    ],
    faq: [
      {
        question: `WHAT IS A HACKATHON?`,
        answer: `A hackathon is an event where student developers bring their passion for technology to 
        create a project in 24 hours. It is a chance to collaborate and create something unique in a number of forms – 
        an app, a robot, or a website! It is an event where you can constantly think outside of the box! You will 
        hopefully learn something new along the way in our engaging environment! We will also have programming mentors 
        during the hackathon to answer any questions that you may have!`
      },
      {
        question: `WHEN IS MAKEUC?`,
        answer: `MakeUC 2020 will start on October 3rd and end on the 4th over the span of 24 hours!`
      },
      {
        question: `HOW MUCH DOES IT COST?`,
        answer: `Nothing! The entire event is free for any student, with development tools and prizes all included. 
        We will be sharing free resources from our sponsors (i.e. APIs) post-registration!`
      },
      {
        question: `WHAT IF I\'M NEW TO HACKATHONS?`,
        answer: `Wonderful! MakeUC is open to all skill levels, beginners to veterans. There is nothing we love more 
        than helping our hackers learn something new while they build something cool!`
      },
      {
        question: `HOW DO I FORM TEAMS?`,
        answer: `Teams are formed at the event (we will be having a team formation segment) but you\'re free to organize 
        before the event, if all participants are registered. Team size must be between 1 and 4 people.`
      },
      {
        question: `WHAT IF I HAVE A SLOW INTERNET CONNECTION?`,
        answer: `Plan ahead! Inform your team members about the situation and try to collaborate as much as possible. 
        Just make sure to download all developer tools in advance!`
      },
      {
        question: `WILL I BE ABLE TO MEET SPONSORS?`,
        answer: `Many of our sponsors will be doing live presentations and a virtual expo which every participant is 
        encouraged to join!`
      },
      {
        question: `WHAT ARE HACKATHON TRACKS?`,
        answer: `We have developed 4 tracks (impact areas) to assist you with building your idea. However, you're not 
        required to submit your hack to a track to win a prize!`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};

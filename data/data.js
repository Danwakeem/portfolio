import { faLaptop, faMobile, faCloud, faVideo, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const data = {
  header: {
    header: 'Danwakeem',
    subSection: 'Developer X Creative'
  },
  about: {
    header: 'Yo, my name is Dan',
    subSection: 'I am a very passionate software engineer... and that pretty much sums it up.'
  },
  skills: {
    title: 'Skills',
    skills: [
      {
        icon: faLaptop,
        title: 'Web',
        description: 'I have worked with a wide range of web tools through out my engineering journey. I prefer to work full stack and build things that matter.',
      },
      {
        icon: faMobile,
        title: 'Mobile',
        description: 'Native, progressive web apps, cordova, oh my! Whatever the project, I always try and pick the right tool for the job.',
      },
      {
        icon: faCloud,
        title: 'Cloud',
        description: 'I ♥️ the cloud. I have designed and implemented complex systems on many different cloud providers such as AWS, IBM Cloud, and Azure.',
      },
      {
        icon: faVideo,
        title: 'Videography',
        description: 'I know this might seem out of left field but I also happen to be a passionate Photographer / Videographer.',
      },
    ]
  },
  portfolio: {
    title: 'Latest Projects',
    modalData: {},
    projects: [
      {
        fullImage: 'estimate.png',
        category: 'iOS, Android, AWS',
        name: 'Estimate: Shopping',
        description: 'Estimate: Shopping is an app designed to help you stay on budget while shopping at the grocery store.'
      },
      {
        fullImage: 'enigma.png',
        category: 'iOS, Graphic Design',
        name: 'Enigma Keyboard',
        description: 'Enigma Keyboard is another iOS application for iPhone and iPad that I made for my software development class at UNT. I was responsible for making the keyboard and managing CoreData as well as making the demo site for it. This is another iOS application that is an on going project for me. Any time I think of a new feature I add it as quickly as I can to keep the app fresh in the app store. I just recently updated the app to support the new version of swift. It has been a blast to work on and you should try it out if you get a chance.'
      },
      {
        fullImage: 'tweetblocker.png',
        category: 'Web, Chrome',
        name: 'Tweet Blocker',
        description: '<a href="https://chrome.google.com/webstore/detail/promoted-tweet-blocker/deeecajlbnnmcnehldadkhjahbmhnpgk?hl=en&gl=US" target="_blank">Promoted Tweet blocker</a> is exactly what it sounds like, it is a chrome extension that blocks all promoted content on Twitter. I will try to actually keep this program updated. It is a really simple javascript program that uses jQuery to select all of the elements on the page with the tweet-promoted tag and removes them when the actual page loads. I am going to try to keep my github more up to date with what I am doing so if you would like to check out the source code you should check out the repository for it.'
      },
      {
        fullImage: 'townsquare.jpg',
        category: 'AWS, Web, Graphic Design, Video',
        name: 'TownSquareBuzz',
        description: 'I wore many hats while I worked at TownSquareBuzz. I was their web developer both front end and back end and I was their director of cinematography. I worked at TownSquareBuzz for 1 and a half years. In that time I resigned their logo, redesigned their website from the ground up and produced over 20 videos. One of the videos I produced was viewed over 2,000 times and featured on google’s facebook page. They were a lot of fun to work with and I hope to work with them again in the future.'
      },
      {
        fullImage: 'braceeditor.png',
        category: 'iOS',
        name: 'Brace Editor',
        description: 'Brace Editor is an iPhone and iPad app that allows users to write and compile code straight from their mobile device. It is a personal project that I have really enjoyed working on. I have everything from syntax highlighting to line numbers included in the application. It is an ongoing project I am working on so I update the app anytime I come up with something new I could do. I also make sure to support all the fancy new features apple comes out with so the app stays fresh.'
      },
      {
        fullImage: 'codenamegreen.png',
        category: 'Web, AWS',
        name: 'Code Name Green',
        description: '<a href="http://codenamegreen.com" target="_blank">CodeNameGreen</a> is a website in the the pursuit of finding the best, most efficient, and easiest ways possible of being Eco-friendly with everything we do. It is a very cool website with a really awesome message and I am in charge of hosting and maintaining it.'
      }
    ]
  },
  github: {
    header: 'Like all developers, I am on Github',
    subSection: 'Github.com/Danwakeem',
    link: 'https://github.com/danwakeem',
  },
  cta: {
    header: 'Shoot me a message!',
    subSection: 'I hope you like what you see! If you would like to know more or get in touch with me feel free to shoot me an email and I will try to get back to you as soon as possible!',
    email: 'danwakeem@gmail.com',
    icon: faPaperPlane,
  },
};

export const agenda = [
  {
    id: 1,
    title: "",
    subtitle: "",
    sessions: [
      {
        id: 1,
        timeFrom: "9:00",
        timeTo: "10:00",
        title: "Registration",
        description:
          "The formal arrangement made by individuals to secure their place at our conference, ensuring that they have access to the full range of conference offerings.",
        speakers: [],
      },
      {
        id: 2,
        timeFrom: "10:00",
        timeTo: "10:20",
        title: "Opening speech",
        description:
          "This event is your gateway to unlocking the full potential of Microsoft technologies, fostering collaboration, and driving innovation. Get ready for a transformative experience that will empower you to lead in the ever-evolving world of technology.",
        speakers: [],
      },
      {
        id: 3,
        timeFrom: "10:20",
        timeTo: "10:40",
        title: "Promotion and Growth",
        description:
          "We'll delve into strategies to propel your career and organizations forward through the adoption of Microsoft solutions. With a focus on promotion and growth, we aim to empower you to embrace innovation and thrive in the digital age",
        speakers: ["Martin Tatar"],
      },
      {
        id: 4,
        timeFrom: "10:40",
        timeTo: "11:00",
        title: "Scoring goals together: leadership and teamwork",
        description:
          "This encapsulates the journey we'll explore at our conference. We'll delve into not just the technical aspects but also the leadership and teamwork skills needed to excel in the dynamic world of technology. Join us as we navigate this transformative path together, from mastering code to becoming leaders in our field.",
        speakers: ["Djakhongir Makhkamov"],
      },
      {
        id: 5,
        timeFrom: "11:00",
        timeTo: "11:20",
        title: "Open Source Models in Enterprise Environments",
        description:
          "It will be a central theme at our conference. We will delve into the dynamic landscape of open-source technologies and their integration within enterprise settings. Join us to explore innovative strategies and success stories that showcase the power of open-source solutions in driving enterprise growth and innovation",
        speakers: ["Hassan Habib"],
      },
      {
        id: 6,
        timeFrom: "11:20",
        timeTo: "11:40",
        title: "Social Engineering and Cybersecurity Awareness",
        description:
          "Critical topic, we'll address at our conference. We'll equip you with the knowledge and tools to defend against social engineering attacks while fostering a culture of cybersecurity awareness. Join us to learn how to safeguard your digital presence and protect your organization from evolving security threats.",
        speakers: ["Saud Abdulwahed"],
      },
      {
        id: 7,
        timeFrom: "11:40",
        timeTo: "12:00",
        title: "The Evolution of AI in the Cloud Ecosystem",
        description:
          "Focal point of discussion at our conference, We'll delve into the remarkable journey of artificial intelligence within cloud environments, exploring its impact on industries and innovation. Join us to witness the latest advancements, applications, and strategies that are shaping the future of AI in the cloud ecosystem.",
        speakers: ["Bobur Umurzokov"],
      },
      {
        id: 8,
        timeFrom: "12:00",
        timeTo: "13:00",
        title: "Lunch break / Networking",
        description:
          "Take the opportunity to refuel both your body and your professional network. Connect with fellow attendees, engage in meaningful conversations, and build lasting relationships in a relaxed and social setting. Enjoy your meal and make the most of this valuable networking time",
        speakers: [""],
      },
      {
        id: 9,
        timeFrom: "13:00",
        timeTo: "14:30",
        title: "Welcome to .NET 8",
        description:
          "This marks the beginning of an exciting journey into the latest advancements and capabilities in the .NET ecosystem. Join us as we explore the innovations, enhancements, and opportunities that .NET 8 has to offer",
        speakers: ["Nozim Turakulov"],
      },
      {
        id: 10,
        timeFrom: "14:30",
        timeTo: "15:00",
        title: "Full stack web UI with Blazor in .NET 8",
        description:
          "Captivating topic we'll delve into during our conference. Join us to uncover the power of Blazor in developing end-to-end web applications with .NET 8, embracing both the front-end and back-end aspects of web development. Don't miss this opportunity to explore the future of web UI ",
        speakers: ["Izzatkhon Shamsiev"],
      },
      {
        id: 11,
        timeFrom: "15:00",
        timeTo: "15:30",
        title:
          "Performance Improvements in .NET 8, ASP.NET Core, and .NET MAUI",
        description:
          "It will be a spotlight topic at our conference. Join us to discover the substantial enhancements and optimizations in these key frameworks, and learn how they can elevate the speed and efficiency of your applications. Don't miss this chance to stay ahead of the curve in performance-driven development.",
        speakers: ["Oybek Jumaniyozov"],
      },
      {
        id: 12,
        timeFrom: "15:30",
        timeTo: "16:00",
        title: "What's New in C# 12",
        description:
          "Highly anticipated session at our conference. Join us to explore the latest features, enhancements, and language innovations in C# 12, and stay at the forefront of modern programming capabilities. This session is your gateway to unlocking the full potential of the C# language.",
        speakers: ["Doniyor Niyozov"],
      },
      {
        id: 13,
        timeFrom: "16:00",
        timeTo: "16:30",
        title: "Building Cloud Native apps with .NET 8",
        description:
          "Building Cloud-Native Apps with .NET 8 is a key focus of our conference. Join us to delve into the world of cloud-native development, harnessing the power of .NET 8 to create scalable, resilient, and highly available cloud applications. This session is your gateway to mastering the art of cloud-native architecture with .NET.",
        speakers: ["Milan Jovanović"],
      },
      {
        id: 14,
        timeFrom: "16:30",
        timeTo: "18:00",
        title: "Closing Session",
        description:
          "We'll conclude our conference with gratitude and reflection. It's the time to recap key takeaways, express appreciation to our speakers and attendees, and look ahead to the future of technology and innovation. Thank you for being a part of this incredible journey, and let's close our conference on a high note.",
        speakers: [],
      },
    ],
  },
];

export const speakers = [
  {
    id: 1,
    name: "Martin",
    surname: "Tatar",
    img: "/images/speakers/martin-tatar.jpg",
    position: "Community Builder at Microsoft",
    isFeatured: true,
    url: "https://www.linkedin.com/in/martintatar/",
    username: "martintatar",
  },
  {
    id: 2,
    name: "Hassan",
    surname: "Habib",
    img: "/images/speakers/hassan-habib.jpg",
    position: "Innovator, Engineer and Entrepreneur",
    isFeatured: true,
    url: "https://www.linkedin.com/in/hassanrezkhabib/",
    username: "hassanrezkhabib",
  },
  {
    id: 3,
    name: "Djakhongir",
    surname: "Makhkamov",
    img: "/images/speakers/djakhongir-makhkamov.jpg",
    position: "Tech Lead Ex Amazon",
    isFeatured: true,
    url: "https://www.linkedin.com/in/djahon/",
    username: "djahon",
  },
  {
    id: 1122,
    name: "Shavkat",
    surname: "Karimov",
    img: "/images/speakers/shavkat-karimov.jpg",
    position:
      "Head of IT Community of Uzbekistan | Keynote Speaker | SEO Executive | ex-Microsoft",
    isFeatured: true,
    url: "https://www.linkedin.com/in/shavkat",
    username: "shavkat",
  },
  {
    id: 4,
    name: "Bobur",
    surname: "Umurzokov",
    img: "/images/speakers/bobur-umurzokov.jpg",
    position: "ex-Microsoft Developer Audience Lead",
    isFeatured: true,
    url: "https://www.linkedin.com/in/boburumurzokov/",
    username: "boburumurzokov",
  },
  {
    id: 5,
    name: "Milan",
    surname: "Jovanović",
    img: "/images/speakers/milan-jovanovic.jpg",
    position: "Microsoft MVP",
    isFeatured: true,
    url: "https://www.linkedin.com/in/milan-jovanovic/",
    username: "milan-jovanovic",
  },
  {
    id: 6,
    name: "Doniyor",
    surname: "Niazov",
    img: "/images/speakers/doniyor-niyozov.jpg",
    position: "Lead Engineer at Silk Road",
    isFeatured: true,
    url: "https://www.linkedin.com/in/doniyorniazov",
    username: "doniyorniazov",
  },
  {
    id: 7,
    name: "Oybek",
    surname: "Jumaniyozov",
    img: "/images/speakers/oybek-jumaniyozov.jpg",
    position: "Platform Architect at Medyear",
    isFeatured: true,
    url: "https://www.linkedin.com/in/oybekjumaniyozov",
    username: "oybekjumaniyozov",
  },
  {
    id: 8,
    name: "Nozim",
    surname: "Turakulov",
    img: "/images/speakers/nozim-turakulov.jpg",
    position: "Lead .Net Engineer at Opinov8",
    isFeatured: true,
    url: "https://www.linkedin.com/in/nozimturakulov/",
    username: "nozimturakulov",
  },
  {
    id: 9,
    name: "Izzatkhon",
    surname: "Shamsiev",
    img: "/images/speakers/izzat-sh.jpg",
    position: "Lead .NET Engineer at EPAM Systems",
    isFeatured: true,
    url: "https://www.linkedin.com/in/izzatkhon",
    username: "izzatkhon",
  },
  {
    id: 10,
    name: "Saud",
    surname: "Abdulwahed",
    img: "/images/speakers/saud.jpg",
    position: "Software Engineer and CEO",
    isFeatured: true,
    url: "https://www.linkedin.com/in/saud-abdulwahed-002b8016b/",
    username: "saud-abdulwahed",
  },
  {
    id: 11,
    name: "Steven",
    surname: "Giesel",
    img: "/images/speakers/steven-giesel.jpg",
    position:
      "Software Engineer | Microsoft MVP | Freelancer | Speaker | Open Source Enthusiast",
    isFeatured: true,
    url: "https://www.linkedin.com/in/steven-giesel/",
    username: "steven-giesel",
  },
];

export const swags = [
  {
    id: 1,
    title: "Free Swag",
    description:
      "Have fun with these free swag items. Show them off on Twitter using #mcdconfuz2023",
    linkTitle: "View on GitHub",
    linkUrl: "/swag",
  },
  {
    id: 2,
    title: "Sponsor swag bag",
    description:
      "Enter to win 1 of 25 swag bags with prizes from our sponsors.",
    linkTitle: "Enter to win",
    linkUrl: "/swag",
  },
  {
    id: 3,
    title: "Challenges",
    description:
      "Participate for a chance to win an awesome price from our sponsors.",
    linkTitle: "Find the clues",
    linkUrl: "/swag",
  },
];

export const headerLinks = [
  {
    id: 1,
    title: "Home",
    slug: "/",
  },
  {
    id: 2,
    title: "Speakers",
    slug: "speakers",
  },
  {
    id: 3,
    title: "Agenda",
    slug: "agenda",
  },
  {
    id: 4,
    title: "Core team",
    slug: "core-team",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Powered by .NET 8.0.0",
    url: "#",
  },
  {
    id: 2,
    title: "Privacy Policy",
    url: "https://go.microsoft.com/fwlink/?LinkId=521839",
  },
  {
    id: 3,
    title: "Code of Conduct",
    url: "code-of-conduct",
  },
  {
    id: 4,
    title: "© 2023 Microsoft",
    url: "https://microsoft.com/",
  },
];

export const features = [
  {
    id: 1,
    title: "The Biggest Microsoft Event in Uzbekistan",
    description:
      "Our Microsoft Conference in Uzbekistan is making its debut this year as an in-person event. We're excited to bring you an exceptional conference experience that celebrates innovation and collaboration. We are dedicated to providing a world-class, engaging event for all attendees. As we embark on this journey, we aim to connect with technology enthusiasts, industry experts, and businesses across Uzbekistan and beyond. Join us as we kickstart this inaugural event and make history together.",
  },
  {
    id: 2,
    title: "What to expect at the conference",
    description:
      "In just one day, our conference brings together .NET gurus like Hassan Habib, Djakhongir Makhkamov, Martin Tatar, and more. You'll gain invaluable insights and advice from these experts, plus the chance to network with fellow enthusiasts. And that's not all! Attendees can look forward to exciting giveaways, unforgettable gifts, and ample networking opportunities. Best of all, you can ask any questions!",
  },
];

export const schedule = [
  {
    id: 1,
    title: ".NET 8 release",
    description:
      "Stay tuned for exciting news about .NET 8! Join the .NET team to discover all the new possibilities with our latest release.",
  },
  {
    id: 2,
    title: "Networking",
    description:
      "Connect and network with industry peers at our conference, fostering valuable relationships and collaborations.",
  },
  {
    id: 3,
    title: "Feel the vibe",
    description:
      "Immerse yourself in the conference vibe with a complimentary lunch, exciting gifts, and the latest news.",
  },
];

export const sponsors = [
  {
    id: 3,
    title: "Microsoft",
    lightImg: "/images/sponsors/microsoft.svg",
    darkImg: "/images/sponsors/microsoft.svg",
    imgWidth: 236,
    imgHeight: 104,
    link: "https://microsoft.com",
  },
  {
    id: 1,
    title: "Digital Generation Uzbekistan",
    lightImg: "/images/sponsors/dg-light.png",
    darkImg: "/images/sponsors/dg.png",
    imgWidth: 196,
    imgHeight: 84,
    link: "https://digitalgeneration.uz/uz/",
  },
  {
    id: 2,
    title: "Microsoft developers community in Uzbekistan",
    lightImg: "/images/sponsors/mdcu.svg",
    darkImg: "/images/sponsors/mdcu-black.svg",
    imgWidth: 236,
    imgHeight: 104,
    link: "/",
  },
];

export const organizers = [
  {
    id: 1,
    name: "Mukhammadkarim",
    surname: "Tukhtaboev",
    img: "/images/core-team/mukhammadkarim.jpg",
    url: "https://www.linkedin.com/in/mukhammadkarim-tukhtaboev/",
    username: "mukhammadkarim-tukhtaboev",
  },
  {
    id: 2,
    name: "Khondamir",
    surname: "Abdukhoshimov",
    img: "/images/core-team/xondamir.jpg",
    url: "https://www.linkedin.com/in/khondamir-abdukhoshimov/",
    username: "khondamir-abdukhoshimov",
  },
  {
    id: 3,
    name: "Aziza",
    surname: "Abdurakhmonova",
    img: "/images/core-team/aziza.jpg",
    url: "https://www.linkedin.com/in/aziza-abdurakhmonova-721844192/",
    username: "aziza-abdurakhmonova",
  },
  {
    id: 4,
    name: "Voriskhon",
    surname: "Ganikhujaev",
    img: "/images/core-team/voriskhon.jpg",
    url: "https://www.linkedin.com/in/voriskhon-ganikhujaev/",
    username: "voriskhon-ganikhujaev",
  },
  {
    id: 5,
    name: "Elbek",
    surname: "Normurodov",
    img: "/images/core-team/elbek.jpg",
    url: "https://www.linkedin.com/in/elbekdeveloper/",
    username: "elbekdeveloper",
  },
  {
    id: 6,
    name: "Ozodakhon",
    surname: "Muminova",
    img: "/images/core-team/ozoda.jpg",
    url: "https://www.linkedin.com/in/ozodakhon/",
    username: "ozodakhon",
  },
  {
    id: 7,
    name: "Mokhira",
    surname: "Kodirova",
    img: "/images/core-team/mokhira.jpg",
    url: "https://www.linkedin.com/in/mokhira-kodirova-834789255/",
    username: "mokhira-kodirova",
  },
  {
    id: 8,
    name: "Abbos",
    surname: "Haydarov",
    img: "/images/core-team/abbos.jpg",
    url: "https://www.linkedin.com/in/abbos-haydarov-a93972250/",
    username: "abbos-haydarov",
  },
  {
    id: 9,
    name: "Temirxon",
    surname: "Shodiyev",
    img: "/images/core-team/temir.jpg",
    url: "https://www.linkedin.com/in/temurxon-shodiyev/",
    username: "temurxon-shodiyev",
  },
  {
    id: 10,
    name: "Bekhzodkhon",
    surname: "Makhkamov",
    img: "/images/core-team/bekhzodkhon.jpg",
    url: "https://www.linkedin.com/in/bekhzodkhon-makhkamov-514791b2/",
    username: "bekhzodkhon-makhkamov",
  },
  {
    id: 11,
    name: "Ma'ruf",
    surname: "Zakirov",
    img: "/images/core-team/maruf.jpg",
    url: "https://www.linkedin.com/in/ma-ruf-zakirov/",
    username: "maruf-zakirov",
  },
];

export const ROLES = [
  {
    id: 1,
    title: "Architect",
    value: "1",
  },
  {
    id: 2,
    title: "Data analyst",
    value: "2",
  },
  {
    id: 3,
    title: "Data Engineer",
    value: "3",
  },
  {
    id: 4,
    title: "Data Scientist",
    value: "4",
  },
  {
    id: 5,
    title: "Developer",
    value: "5",
  },
  {
    id: 6,
    title: "Designer",
    value: "6",
  },
  {
    id: 7,
    title: "Devops",
    value: "7",
  },
  {
    id: 8,
    title: "Entrepreneur",
    value: "8",
  },
  {
    id: 9,
    title: "Executive",
    value: "9",
  },
  {
    id: 10,
    title: "Marketing",
    value: "10",
  },
  {
    id: 11,
    title: "Machine Learning Engineer",
    value: "11",
  },
  {
    id: 12,
    title: "Network Engineer",
    value: "12",
  },
  {
    id: 13,
    title: "Product Manager",
    value: "13",
  },
  {
    id: 14,
    title: "Undergraduate student",
    value: "14",
  },
  {
    id: 15,
    title: "Graduate student",
    value: "15",
  },
  {
    id: 16,
    title: "Sales",
    value: "16",
  },
  {
    id: 17,
    title: "QA",
    value: "17",
  },
  {
    id: 18,
    title: "Other",
    value: "18",
  },
];

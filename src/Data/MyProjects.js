import bookStoreImg from "../Assets/Images/bookstoreScreenShot.PNG";
import businessWebsiteImg from "../Assets/Images/businessWebsite.PNG";
import cssManipImg from "../Assets/Images/CSSTextApp.PNG";

const myProjects = [
  {
    name: "CSS Text Editor",
    image: cssManipImg,
    description:
      "A website created with React.js. This app will allow you to enter any text you desire, manipulate its CSS properties with an easy to use UI, and will display the CSS code required to mimick the results. Still in progress, and adding more features.",
    githubRepo: "https://github.com/pkaseta/CSS-Text-Manipulaor",
    website: "https://pkaseta.github.io/CSS-Text-Manipulaor/",
  },
  {
    name: "eCommerce Store",
    image: bookStoreImg,
    description:
      "An ecommerce bookstore website. This site was a capstone project with Kenzie Academy, developed by myself, and three other teamates. There is a built in back end database, and the front end development was done in React.js.",
    githubRepo: "https://github.com/efgon/kapstone-frontend-book-resale",
    website: "https://efgon.github.io/kapstone-frontend-book-resale/",
  },
  {
    name: "Business Website",
    image: businessWebsiteImg,
    description:
      "A business landing page for a web design and application small business start-up. Built with React.js and utilizing node packages, this site is fully responsive, and deployed utilizing firebase.",
    githubRepo: "https://github.com/pkaseta/KW-Web-Integrations-Site",
    website: "https://kw-web-integrations.com",
  },
];

export default myProjects;

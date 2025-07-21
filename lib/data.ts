export const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    path: "https://github.com/Tejass087",
  },
  {
    id: 2,
    img: "/link.svg",
    path: "https://www.linkedin.com/in/tejas-dhanawate-077766295/",
  },
];




export const projects = [
  {
    id: 1,
    title: "Skin Analysis and Virtual Makeup Recommendation System",
    des: `Skin Analysis and Virtual Makeup Recommendation System §
Technologies: Python, OpenCV, CNN (MobileNet/ResNet), Django, HTML/CSS/Bootstrap, SMTP, SQLite
• Developed a web-based system that uses image processing and deep learning (CNN) to detect skin tone and acne
from user-uploaded facial images.
• Implemented a rule-based and similarity-based recommendation engine to suggest personalized skincare and makeup
products.
• Integrated email automation (SMTP) to deliver recommendations and designed a responsive Django-based frontend
for user interaction`,
    img: "skin.jpg",
    link: "https://github.com/Tejass087/Skin-Care_Reccomadation",
  },
  {
    id: 2,
    title: "E-Commerce Customer Behavior Analysis",
    des: `E-Commerce Customer Behavior Analysis
• Developed a customer behavior analysis solution using Machine Learning to provide actionable insights for an e-commerce
platform. The project focused on customer segmentation, behavior prediction, and personalized recommendations.
• Applied K-Means Clustering to segment customers based on purchasing patterns, identifying categories like Frequent Shop-
pers, Discount Lovers, and Big Spenders.
• Built and deployed predictive models using XGBoost to forecast customer actions including purchase likelihood, churn risk, and
product preferences.
• Developed a personalized recommendation engine using Collaborative Filtering, enhancing customer experience and increasing
sales.`,
    img: "/chart.jpeg",
    link: "https://github.com/Tejass087/E-commerce-customer-beheviour-analysis",
  },
  {
     id: 3,
    title: "DataWarehouse and Analytics Solution",
    des: `Building DataWarehouse and Analytics Solution
Technologies: Python (pandas, pyodbc), T-SQL, Medallion Architecture, ETL Pipelines, Star Schema Design
• Designed and implemented a complete Data Warehouse system using SQL Server, based on the Medallion
Architecture (Bronze, Silver, Gold layers)
• Built and automated ETL pipelines using Python (pandas, pyodbc)
• Developed a Star Schema with Fact and Dimension tables to support efficient analytical queries and reporting `,
    img: "datawarehouse.jpeg",
    link: "https://github.com/Tejass087/Data-Warehouse-System",
  },
];
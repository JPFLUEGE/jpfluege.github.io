import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Landing from "./components/landing/Landing"
import ProjectList from "./components/ProjectList/ProjectList"
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"
import CV from "./components/CV/CV"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Sent from "./components/Sent/Sent"
import Impressum from "./components/Impressum/Impressum"
import Datenschutz from "./components/Datenschutz/Datenschutz"



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Projects: [],
    }

    this.getProjects = this.getProjects.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this); 
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
  };

projects = [
    {
      id: 0,
      name: "www.julipsen.com",
      scope: "Web Development",
      lang: "HTML, CSS, Javascript",
      tech: "Next.js (Frontend), next-int (internationalization), VPS (Linux), NGNIX (Routing)",
      href: "https://julipsen.com",
      vidSrc: "",
      explanation: "Built new personal page with Next.js instead of react for server side rendering (better SEO) since blog content will be added. Also allows for further customization as well as to implement backend functionalities",
      learning: "Next.js, internationalization with next-int,"
      },
      {
      id: 1,
      name: "Python (Pandas & PySpark) challenge",
      scope: "Analytics Engineering",
      lang: "Python",
      tech: "Pandas for data manipulation, PySpark for big data processing",
      href: "https://platform.stratascratch.com/user/JulianP",
      vidSrc: "",
      explanation: "Completed datacamps courses for Pandas and PySpark. Applied the gained knowledge on 150+ real-world interview questions on Stratascratch for further practice",
      learning: "SQL, Pandas for regular data processing, PySpark for big data"
      },
      {
      id: 2,
      name: "www.Totally-Wrapped.com",
      scope: "Full Stack Web Development & Analytics Engineering",
      lang: "Python, HTML, CSS, Javascript",
      tech: "FastAPI (backend), Next.js (Frontend), VPS (Linux), NGNIX (Routing)",
      href: "https://www.totally-wrapped.com",
      vidSrc: "https://www.youtube.com/watch?v=N4FeXEl286k",
      explanation: "What started as a simple Python script to analyze my own Spotify data turned into a full-stack web app: www.totally-wrapped.com. It’s live on a VPS and lets anyone upload and explore their complete Spotify listening history.",
      learning: "Pandas, FastAPI, (re-)learning web development with Next.js, routing with NGNIX, self-hosting on a VPS"
    },
    {
      id: 3,
      name: "Near real-time Power BI reports",
      scope: "Analytics engineering",
      lang: "Python, SQL",
      tech: "Python, Azure Cloud, Power BI, SQL, Postgres",
      href: "https://app.powerbi.com/view?r=eyJrIjoiMTI2NmUwMmMtZDI1NS00OWIzLWFlMjQtOTdkOWZhYTMzMTQ2IiwidCI6Ijc2MzM1M2FjLTFiZWMtNDQyMi04NGIzLWYwMGQyMTNkOTRkOSJ9",
      vidSrc: "https://www.linkedin.com/posts/julian-m-pflueger_easter-break-is-here-and-youre-going-activity-7317888992740356098-oHvh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIhsRoBpBmYAS1lRus8_DPnaQW7RQY6vYs",
      explanation: "Created a data pipeline to extract data from an API and fed it into a database or a Power BI dataset directly to achieve a near real-time reporting.",
      learning: "Azure Cloud, Postgres, Python, Streaming Dataset, Data Engineering"
    },
    {
      id: 4,
      name: "Streamlit report (data web app)",
      scope: "Analytics engineering",
      lang: "Python",
      tech: "Python, Streamlit, API",
      href: "https://parks-wt.streamlit.app/",
      vidSrc: "https://www.linkedin.com/posts/julian-m-pflueger_easter-break-is-here-and-youre-going-activity-7317888992740356098-oHvh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIhsRoBpBmYAS1lRus8_DPnaQW7RQY6vYs",
      explanation: "Created a near real-time Streamlit data web app that allows users to explore current waiting times at amusement parks across Europe.",
      learning: "Reporting with Python/Streamlit"
    },
    {
      id: 5,
      name: "8-weeks+ SQL challenge",
      scope: "Analytics engineering",
      lang: "SQL",
      tech: "SQL, Postgres",
      href: "https://www.linkedin.com/posts/julian-m-pflueger_after-several-years-of-self-studying-various-activity-7309220922446512128-N5F2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIhsRoBpBmYAS1lRus8_DPnaQW7RQY6vYs",
      vidSrc: "",
      explanation: "Completed datacamps career track plus additional courses for SQL. Applied the gained knowledge on 200+ real-world SQL interview questions on Stratascratch for further practice",
      learning: "Intensive SQL for data analysis and engineering"
    },
    {
    id: 6,
    name: "Portfolio Website",
    scope: "Frontend Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "React (Frontend)",
    href: "",
    vidSrc: "",
    explanation: "Current minimalistic portfolio website created with React.js",
    learning: "Reusing learned frontend knowlegde"
  },
  {
    id: 7,
    name: "Song Recommendations",
    scope: "Full Stack Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "React (Frontend), Express (Backend), Cookies, OAuth2, APIs",
    href: "",
    vidSrc: "https://youtu.be/zxrxqRI8P5g/",
    explanation: "OAuth and all external requests handled via backend in Express.js. Returned user token saved in encrypted HTTPonly session cookie. API used: Spotify",
    learning: "How the backend, APIs and queries work; how OAuth and cookies validate user logins"
  },
  {
    id: 8,
    name: "Restaurant Search",
    scope: "Frontend Web Development",
    lang: "HTML, CSS, Javascript",
    tech: "React, API",
    href: "https://github.com/JPFLUEGE/Restaurant_Finder",
    vidSrc: "",
    explanation: "Search by name or location for a restaurant and sort it based on 'Best Match', 'Rating' or 'Most Reviewed'. API used: Yelp",
    learning: "How API requests work"
  }]





  getProjects() {
    this.setState({ Projects: this.projects})
  } 

  handleChangeName(e) {
    this.setState({ Name: e.target.value });
  }

  handleChangeMail(e) {
    this.setState({ Mail: e.target.value })
  }

  handleChangeTextarea(e) {
    this.setState({ Textarea: e.target.value })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-background">
          <Landing />
          <Routes>
            <Route path="/" element={<ProjectList projects={this.state.Projects} />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/legal" element={<Impressum />} />
            <Route path="privacy" element={<Datenschutz />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Menu />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    // might implement backenddd instead of hardcode
    this.getProjects();
  }
}

export default App;
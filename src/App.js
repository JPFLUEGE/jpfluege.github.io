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
      name: "Near real-time Power BI reports",
      scope: "Data",
      lang: "Python, SQL",
      tech: "Python, Azure Cloud, Power BI, SQL, Postgres",
      href: "https://github.com/JPFLUEGE/Near-real-time-reporting-Power-BI",
      vidSrc: "",
      explanation: "Created a near real-time Power BI report that visualizes data from an amusement park. The report is automatically updated every few minutes and provides insights into the park's waiting times.",
      learning: "Azure Cloud, Postgres, Python"
    },
    {
      id: 1,
      name: "Streamlit report",
      scope: "Data",
      lang: "Python",
      tech: "Python, Streamlit, API",
      href: "https://github.com/JPFLUEGE/streamlit_amusement_park_api",
      vidSrc: "",
      explanation: "Created a near real-time Streamlit app that allows users to explore the API of an amusement park. The app provides a user-friendly interface for interacting with the API and visualizing data.",
      learning: "Reporting with Python/Streamlit"
    },
    {
      id: 2,
      name: "SQL challenge",
      scope: "Data",
      lang: "SQL",
      tech: "SQL, API",
      href: "https://www.linkedin.com/posts/julian-m-pflueger_after-several-years-of-self-studying-various-activity-7309220922446512128-N5F2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIhsRoBpBmYAS1lRus8_DPnaQW7RQY6vYs",
      vidSrc: "",
      explanation: "Completed datacamps career track for SQL. Solved 200+ SQL challenges on Stratascratch in a row",
      learning: "SQL for data analysis and engineering"
    },
    {
    id: 3,
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
    id: 4,
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
    id: 5,
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
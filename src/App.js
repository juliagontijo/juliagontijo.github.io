import React, {Component} from 'react'
import './App.css';
import {Home} from './components/Home'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UpperNavBar from './components/UpperNavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import FooterProgressBar from './components/FooterProgressBar'


class App extends Component{

  constructor(props) {
    super(props);

    // Initial state with Home page marked as visited
    const initialVisitedPages = { home: true };
    const initialProgress = (1 / 5) * 100;
    let initialMessage = `This page is just a quick intro... If you want to see some cool stuff I've built, go to Projects page to check it out!`;

    this.state = {
      visitedPages: initialVisitedPages,
      progress: initialProgress,
      message: initialMessage
    };
  }

  handleNavigation = (page) => {
    this.setState(prevState => {
      const visitedPages = { ...prevState.visitedPages, [page]: true };
      const visitedCount = Object.keys(visitedPages).length;
      const totalPages = 5; // total number of pages
      const progress = (visitedCount / totalPages) * 100;
      let message;

      if (visitedCount < (totalPages - 1)) {
        const nextPages = ['projects', 'resume', 'interests', 'contact'].filter(p => !visitedPages[p]);
        const firstUnvisitedPage = nextPages[0]; // Assuming nextPages is not empty

        // initial message
        switch (page) {
          case 'projects':
              message = "I hope you've enjoyed my projects. ";
              break;
          case 'resume':
              message = "I know, resumes are boring... ";
              break;
          case 'interests':
              message = "I hope we have something in common to talk about! ";
              break;
          case 'contact':
              message = "Please reach out so we can chat and exchange ideas! ";
              break;
          default:
              message = "Fell free to explore all the sections on this website";
              break;
      }

        switch (firstUnvisitedPage) {
            case 'projects':
                message += "Try to go on Projects page to see some cool stuff I've built!";
                break;
            case 'resume':
                message += "Maybe have a look at my Resume now ";
                break;
            case 'interests':
                message += "I also like to do things outside of the computer, go to What we could talk about to see more. ";
                break;
            case 'contact':
                message += "If you want to chat all my infos are in Contact page ";
                break;
            default:
                message += "Fell free to explore all the sections on this website";
                break;
        }

      } else {
        message = 'Great! You have visited all the pages. Please reach out so we can chat and exchange ideas!';
      }

      return { visitedPages, progress, message };
    });
  }

  render(){
    const { progress, message } = this.state;

    return (
      <Router>
        <div className='app'>
          <UpperNavBar onPageChange={this.handleNavigation}/>
          <div className='full-screen-container'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/interests" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          </div>
          <FooterProgressBar now={progress} message={message} />
        </div>
      </Router>
    );
  }
}

export default App;

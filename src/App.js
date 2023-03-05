import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
   if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
 <div>
 <Header handlePageChange={handlePageChange}currentPage={currentPage}/>
 {/* We are passing the currentPage from state and the function to update it */}
 <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
 </div>
  );
}

export default App;

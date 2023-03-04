import React, {useState} from 'react';
import Header from './components/Header';
// import Nav from './Nav';
// import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Projects') {
  //     return <Projects />;
  //   }
  //   if (currentPage === 'Resume') {
  //     return <Resume />;
  //   }
  //  if (currentPage === 'Contact') {
  //     return <Contact />;
  //   }
  //   return <Contact />;
  // };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
 <div>
 <Header handlePageChange={handlePageChange}currentPage={currentPage}/>
 </div>
  );
}

export default App;

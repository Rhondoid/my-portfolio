import React, {useState} from 'react';
import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   if (currentPage === 'Blog') {
  //     return <Blog />;
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

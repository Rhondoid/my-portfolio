import Nav from "../Nav";

function Footer({ currentPage, handlePageChange }) {
  return (
    <div>
        <footer>
        
      {/* <h4>I'm a footer</h4> */}
      {/*         
        <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        /> */}
        <ul>
          {/* <li>Phone# 555-555-5555</li> */}
          <li><a href="https://github.com/Rhondoid">GitHub</a></li>
          <li><a href="https://www.linkedin.com/feed/">LinkedIn</a></li>
        </ul>
        
        </footer>
    </div>
    
    
  );
}

export default Footer;

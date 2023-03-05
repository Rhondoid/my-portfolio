import Nav from "../Nav";
   

function Header({currentPage, handlePageChange}){
    
return (
    <header>
        <h1>Rhonda Van Dam</h1>
        {/* <h3>Full Stack Web Developer</h3> */}
        
        <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        />
    </header>
    
)
}

export default Header;
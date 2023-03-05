import Nav from "../Nav";

function Footer({currentPage, handlePageChange}){
    
return (
    <header>
        <h1>I'm a footer</h1>
        
        <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        />
    </header>
    
)
}

export default Footer;
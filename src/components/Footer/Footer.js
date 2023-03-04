import Footer from "../Footer";

function Footer({currentPage, handlePageChange}){
    
return (
    <header>
        <h1>links to websites</h1>
        
        <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        />
    </header>
)
}

export default Footer;
function Navbar() {
    return (
        <nav className="navbar">
            
            <h3>Arshad</h3>
            <div className="nav-links">
                <a href="#about" style={{margin:"10px", color:"white"}}>About</a>
                <a href="#skills" style={{margin:"10px", color:"white"}}>Skills</a>
                <a href="#projects" style={{margin:"10px", color:"white"}}>Projects</a>
                <a href="#contact" style={{margin:"10px", color:"white"}}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
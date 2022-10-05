const Navbar=() => {
    const clicked=(item) => {
        console.log(item);
    }
    return (
        <nav className="navbar">
            <h1>Dojo blog</h1>
            <div className="links">
                <a  onClick={() => {clicked('Home')}}>Home</a>
                <a  onClick={() => {clicked('Creat Blog')}}>Creat Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;
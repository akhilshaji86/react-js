import {useState} from "react";

const Navbar=() => {
    const [selectedItem,setselectedItem]=useState();
    const clicked=(item) => {
        setselectedItem(item);
    }
    return (
        <div>
            <nav className="navbar">
                <h1>Dojo blog</h1>
                <div className="links">
                    <a onClick={() => {clicked('Home')}}>Home</a>
                    <a onClick={() => {clicked('Creat Blog')}}>Creat Blog</a>
                </div>
            </nav>
            <div>{selectedItem}</div>
        </div>
    );
}

export default Navbar;
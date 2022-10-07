import {useState} from "react";
import BlogList from "./Bloglist";

const HomePage=() => {
    const [blogs,setBlogs]=useState([
        {title: 'Title 1',body: 'body 1',author: 'mario 1',id: 1},
        {title: 'Title 2',body: 'body 2',author: 'mario 2',id: 2},
        {title: 'Title 3',body: 'body 3',author: 'mario 3',id: 3}
    ])
    return (
        <div className="container">
            <BlogList blogs={blogs} title="All Blogs"></BlogList>
        </div>
    );
}

export default HomePage;
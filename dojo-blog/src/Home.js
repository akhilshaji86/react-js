import {useState} from "react";
import BlogList from "./Bloglist";

const HomePage=() => {
    const [blogs,setBlogs]=useState([
        {title: 'Title 1',body: 'body 1',author: 'mario',id: 1},
        {title: 'Title 2',body: 'body 2',author: 'yoshi',id: 2},
        {title: 'Title 3',body: 'body 3',author: 'mario',id: 3}
    ])
    const [name,setName]=useState('firstname');
    const handleDelete=(id) => {
        const newBlogs=blogs.filter(blog => blog.id!==id);
        setBlogs(newBlogs);
    }
    return (
        <div className="container">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}></BlogList>
            <button onClick={() => {setName('lastname')}} >change name</button>
            <div>{name}</div>
        </div>
    );
}

export default HomePage;
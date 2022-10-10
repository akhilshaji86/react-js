const BlogList=({blogs,title,handleDelete}) => {
    return (
        <div className="blog-list">
            <h2 className="pt-5">{title}</h2>
            {blogs.map((blog) => (
                <div className="preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => {handleDelete(blog.id)}}>Delete blog</button>
                </div>
            ))
            }
        </div>
    );
}

export default BlogList;
const BlogList=({blogs,title}) => {
    return (
        <div className="blog-list">
            <h2 className="pt-5">{title}</h2>
            {blogs.map((blog) => (
                <div className="preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))
            }
        </div>
    );
}

export default BlogList
    ;
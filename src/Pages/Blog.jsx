// Blog.js
import React from 'react';

const Blog = (props) => {
    const blogs = props.blogs;

  
    return (
        <div>
            {blogs.map((blogItem, index) => (
                <div key={index++}>
                    <h2>{blogItem.title}</h2>
                    {/* Render other blog details here */}
                </div>
            ))}
        </div>
    );
};

export default Blog;

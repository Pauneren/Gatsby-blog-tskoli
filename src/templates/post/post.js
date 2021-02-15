import React from 'react';
import BlogLayout from "../../layouts/BlogLayout";
import "./post.scss";

export default function Post(props) {
    const { pageContext } = props
    const { data: post } = pageContext
        

    console.log(post)
    return (
        <BlogLayout className="post">
            <h1>{post.title}</h1>

            <div className="markdown-body">
                <div dangerouslySetInnerHTML={{ __html: post.content}} />
            </div>
        </BlogLayout>
    )
}

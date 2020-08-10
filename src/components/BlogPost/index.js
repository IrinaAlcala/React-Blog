import React from "react";
import "./style.css";
import Card from "../UI/Card";

const BlogPost = (props) => {
    return (
       
            <div className="blogPostContainer">
               <Card>
                    <div className="blogHeader">

                    <span>Featured</span>
                    <h1 className="postTitle">Beautiful is always beautiful</h1>
                    <span>Posted on August 10 by Irina</span>
                    </div>
                </Card>
            </div>
    )
}

export default BlogPost;
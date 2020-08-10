import React from "react";
import './style.css';
import BlogPost from "../../components/BlogPost";
import Sidebar from "../../components/Sidebar";

const Post = (props) => {
    console.log(props);

    return(
       
<BlogPost {...props} />

       
    )
}

export default Post;
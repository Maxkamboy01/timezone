import React from "react";
import BigText from "../BigText";
import { Blogstyle } from "./style";
import LeftBlog from "./LeftBlog";
import RigthBlog from "./RightBlog";

function Blog() {
  return (
    <Blogstyle>
      <BigText>Blog</BigText>
      <div style={{ display: "flex", justifyContent: "space-between",padding: "50px 200px"}}>
        <LeftBlog />
        <RigthBlog />
      </div>
    </Blogstyle>
  );
}

export default Blog;

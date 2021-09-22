import React from "react";
import Leftblogdetails from "./Leftblogdetails";
import RigthBlog from "../Blog/RightBlog";
import { BlogDetailsstyle } from "./style";
import BigText from "../BigText.jsx";

function Blogdetails() {
  return (
    <BlogDetailsstyle>
        <BigText>
            Blog Details
        </BigText>
      <div className="display">
        <Leftblogdetails />
        <RigthBlog />
      </div>
    </BlogDetailsstyle>
  );
}

export default Blogdetails;

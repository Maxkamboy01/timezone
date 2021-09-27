import React, { useState } from "react";
import { LEftstyle } from "./style";
import Firstcontent from "../../assets/img/blog/single_blog_1.png";
import Secondcontent from "../../assets/img/blog/single_blog_2.png";
import THirdcontent from "../../assets/img/blog/single_blog_3.png";
import Forthcontent from "../../assets/img/blog/single_blog_4.png";
import Fifthcontent from "../../assets/img/blog/single_blog_5.png";

function LeftBlog() {
  const [state, setstate] = useState([
    {
      img: Firstcontent,
    },
    {
      img: Secondcontent,
    },
    {
      img: THirdcontent,
    },
    {
      img: Forthcontent,
    },
    {
      img: Fifthcontent,
    },
  ]);
  return (
    <LEftstyle>
      {state.map((value,index) => {
        return (
          <div key={index} className="content">
            <img src={value.img} alt="" />
            <div className="data">
              15 <br /> Jan
            </div>
            <div className="texts">
              <p className="title">Google inks pact for new 35-storey office</p>
              <p className="text">
                That dominion stars lights dominion divide years for fourth have
                don't stars is that he earth it first without heaven in place
                seed it second morning saying.
              </p>
              <div className="travel">
                <p>
                  <i className="fas fa-user"></i>Travel, Lifestyle |
                </p>

                <p>
                  <i className="far fa-comments"></i> 03 Comments
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </LEftstyle>
  );
}

export default LeftBlog;

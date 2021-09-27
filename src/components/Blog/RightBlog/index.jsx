import React, { useState } from "react";
import { Rightstyle } from "./style";
import Recentli_1 from "../../assets/img/post/post_1.png";
import Recentli_2 from "../../assets/img/post/post_2.png";
import Recentli_3 from "../../assets/img/post/post_3.png";
import Recentli_4 from "../../assets/img/post/post_4.png";
import Recentli_5 from "../../assets/img/post/post_5.png";
import Recentli_6 from "../../assets/img/post/post_6.png";
import Recentli_7 from "../../assets/img/post/post_7.png";
import Recentli_8 from "../../assets/img/post/post_8.png";
import Recentli_9 from "../../assets/img/post/post_9.png";
import Recentli_10 from "../../assets/img/post/post_10.png";

function RigthBlog() {
  const [state, setstate] = useState([
    {
      img: Recentli_1,
      title: "From life was you fish...",
      date: "January 12, 2019",
      id: 0,
    },
    {
      img: Recentli_2,
      title: "The Amazing Hubble",
      date: "02 Hours ago",
      id: 1,
    },
    {
      img: Recentli_3,
      title: "Astronomy Or Astrology",
      date: "03 Hours ago",
      id: 2,
    },
    {
      img: Recentli_4,
      title: "Asteroids telescope",
      date: "01 Hours ago",
      id: 3,
    },
  ]);
  return (
    <Rightstyle>
      <div className="search-box">
        <div className="inputs">
          <input type="text" placeholder="Search Keyword" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <button>Search</button>
      </div>
      <div className="category-box">
        <p className="title">Category</p>
        <ul>
          <li>Restaurant food (37)</li>
          <li>Travel news (10)</li>
          <li>Modern technology (03)</li>
          <li>Product (11)</li>
          <li>Inspiration 21 Health Care (21) 09</li>
        </ul>
      </div>
      <div className="recent-box">
        <p className="title">Recent Post</p>
        <ul>
          {state.map((value,index) => {
            return (
              <li key={index}>
                <img src={value.img} alt="" />
                <div className="texts">
                  <span className="title">{value.title}</span>
                  <br />
                  <span className="subtitle">{value.date}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="tagclouds">
        <p className="title">Tag Clouds</p>
        <div className="tags">
          <button>project</button>
          <button>love</button>
          <button>technology</button>
          <button>travel</button>
          <button>restaurant</button>
          <button>life style</button>
          <button>design</button>
          <button>illustration</button>
        </div>
      </div>
      <div className="instagram-box">
        <p className="title">Instagram Feeds</p>
        <div className="images">
          <img src={Recentli_5} alt="" />
          <img src={Recentli_6} alt="" />
          <img src={Recentli_7} alt="" />
          <img src={Recentli_8} alt="" />
          <img src={Recentli_9} alt="" />
          <img src={Recentli_10} alt="" />
        </div>
      </div>
      <div className="newsletter">
        <p className="title">Newsletter</p>
        <input type="text" placeholder="Enter email" />
        <button>SUBSCRIBE</button>
      </div>
    </Rightstyle>
  );
}

export default RigthBlog;

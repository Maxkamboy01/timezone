import React, {useState} from "react";
import FirstImg from "../../assets/img/blog/single_blog_1.png";
import Next from "../../assets/img/post/next.png";
import Prev from "../../assets/img/post/preview.png";
import Harvard from "../../assets/img/blog/author.png";
import Comment_1 from "../../assets/img/blog/c1.png";
import Comment_2 from "../../assets/img/blog/c2.png";
import Comment_3 from "../../assets/img/blog/c3.png";
import {LeftblogdetailsStyle} from "./style"

function Leftblogdetails() {
  const [comment, setcomment] = useState([
    {
      img: Comment_1,
    },
    {
      img: Comment_2,
    },
    {
      img: Comment_3,
    },
  ]);
  return (
    <LeftblogdetailsStyle>
      <div className="firstcontent">
        <img src={FirstImg} />
        <p className="title">
          Second divided from form fish beast made every of seas all gathered us
          saying he our
        </p>
        <div className="travel_box">
          <p>
            <i className="fas fa-user"></i>Travel, Lifestyle |
          </p>

          <p>
            <i className="far fa-comments"></i> 03 Comments
          </p>
        </div>
        <p className="text">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower
        </p>
        <p className="text">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training. who has the willpower to actually
        </p>
      </div>
      <div className="mcse">
        <p>
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training.
        </p>
      </div>
      <p className="text">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower
      </p>
      <p className="text">
        MCSE boot camps have its supporters and its detractors. Some people do
        not understand why you should have to spend money on boot camp when you
        can get the MCSE study materials yourself at a fraction of the camp
        price. However, who has the willpower to actually sit through a
        self-imposed MCSE training. who has the willpower to actually
      </p>
      <div className="prev-next">
        <div className="prevbox">
          <img src={Prev} alt="" />
          <div className="texts">
            <p>Prev Post</p>
            <p>Space The Final Frontier</p>
          </div>
        </div>
        <div className="nextbox" >
          <img src={Next} alt="" />
          <div className="texts">
            <p className="title">Next Post</p>
            <p>Telescopes 101</p>
          </div>
        </div>
      </div>
      <div className="author">
        <img src={Harvard} alt="" />
        <div className="texts">
          <span>Harvard milan</span>
          <span>
            Second divided from form fish beast made. Every of seas all gathered
            use saying you're, he our dominion twon Second divided from
          </span>
        </div>
      </div>
      <div className="comments_box">
        <p className="title">05 Comments</p>
        <div className="comments">
          {comment.map((value,index) => {
            return (
              <div key={index} className="comment">
                <img src={value.img} alt="" />
                <div className="others">
                  <p className="text">
                    Multiply sea night grass fourth day sea lesser rule open
                    subdue female fill which them Blessed, give fill lesser
                    bearing multiply sea night grass fourth day <br /> sea
                    lesser
                  </p>
                  <p>
                    <span>Emilly Blunt</span>
                    <span>December 4, 2017 at 3:12 pm</span>
                    <span>REPLY</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="reply_box">
        <p className="title">Leave a Reply</p>
        <div className="inputs">
          <textarea placeholder="Write Comment"></textarea>
          <div className="name_inputs">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <input type="text" placeholder="Website" />
        </div>
        <button className="send">SEND MESSAGE</button>
      </div>
    </LeftblogdetailsStyle>
  );
}

export default Leftblogdetails;

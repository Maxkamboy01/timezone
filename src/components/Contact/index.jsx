import React from "react";
import Bigtext from "../BigText";
import { ReactComponent as Homesvg } from "../assets/icons/home.svg";
import { ReactComponent as Mailsvg } from "../assets/icons/mail.svg";
import { ReactComponent as Phonesvg } from "../assets/icons/smartphone.svg";
import { Contactstyle } from "./style";

function Contact() {
  return (
    <Contactstyle>
      <Bigtext>Contacts</Bigtext>
      <div className="content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.221498401615!2d70.06746281527754!3d41.02040977929962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe97f0aaf8423%3A0x17b7c884781428f0!2sIBS%20School!5e0!3m2!1sru!2s!4v1630851877498!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div className="form-box">
          <form>
            <p className="title">Get in Touch</p>
            <textarea placeholder="Enter Message" name="textarea"></textarea>
            <div className="name_email">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter email address" />
            </div>
            <input
              type="text"
              className="subject"
              placeholder="Enter subject"
            />
            <button>SEND</button>
          </form>
          <ul>
            <li>
              <div>
                <Homesvg />
              </div>
              <div className="texts">
                Buttonwood, California. <br />
                Rosemead, CA 91770
              </div>
            </li>
            <li>
              <div>
                <Mailsvg />
              </div>
              <div className="texts">
                +1 253 565 2365 <br />
                Mon to Fri 9am to 6pm
              </div>
            </li>
            <li>
              <div>
                <Phonesvg />
              </div>
              <div className="texts">
                support@colorlib.com <br />
                Send us your query anytime!
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Contactstyle>
  );
}

export default Contact;

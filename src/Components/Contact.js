import React from "react";

export default function Contact() {
  return (
    <>
      {/* contact section starts  */}
      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <i className="fas fa-paw" /> contact us <i className="fas fa-paw" />{" "}
        </h1>
        <form action>
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="number" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea
            name
            id
            cols={30}
            rows={10}
            placeholder="message"
            defaultValue={""}
          />
          <input type="submit" defaultValue="send message" className="btn" />
        </form>
      </section>
      {/* contact section ends */}
      {/* footer section  */}
      <section className="footer">
        <div className="share">
          <a href="#" className="btn">
            <i className="fab fa-youtube" />
          </a>
          <a href="#" className="btn">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="btn">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="btn">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" className="btn">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <h1 className="credit">
          {" "}
          created by <span> Hritik Singh</span> | all rights reserved!{" "}
        </h1>
      </section>
    </>
  );
}

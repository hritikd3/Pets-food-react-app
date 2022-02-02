import { React } from "react";

export default function Featured() {
  return (
    <>
      <section className="featured" id="featured">
        <h1 className="heading">
          {" "}
          <i className="fas fa-paw" /> our featured products{" "}
          <i className="fas fa-paw" />{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="price">$14.05</div>
            <img src="images/p1.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>tasty pets food</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia, facilis?
              </p>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <div className="price">$15.40</div>
            <img src="images/p2.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>tasty pets food</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia, facilis?
              </p>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

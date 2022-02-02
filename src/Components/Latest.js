import { React } from "react";

export default function Latest() {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          <i className="fas fa-paw" /> our latest products{" "}
          <i className="fas fa-paw" />{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="images/p1.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>healthy pets food</h3>
              <div className="price">
                {" "}
                $10.03 <span>12.50</span>{" "}
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/p2.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>healthy pets food</h3>
              <div className="price">
                {" "}
                $10.03 <span>12.50</span>{" "}
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/p3.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>healthy pets food</h3>
              <div className="price">
                {" "}
                $10.03 <span>12.50</span>{" "}
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/p4.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>healthy pets food</h3>
              <div className="price">
                {" "}
                $10.03 <span>12.50</span>{" "}
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/p5.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>healthy pets food</h3>
              <div className="price">
                {" "}
                $10.03 <span>12.50</span>{" "}
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/p6.webp" alt="" />
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h3>healthy pets food</h3>
              <div className="price">
                {" "}
                $10.03 <span>12.50</span>{" "}
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* offer section starts  */}
      <section className="offer" id="offer">
        <h1 className="heading">
          {" "}
          <i className="fas fa-paw" /> our latest offer{" "}
          <i className="fas fa-paw" />{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="images/offer-img1.webp" alt="" />
            <div className="content">
              <span>best offer</span>
              <h3>upto 40% off</h3>
              <a href="#" className="btn">
                see offer
              </a>
            </div>
          </div>
          <div className="box">
            <img src="images/offer-img2.webp" alt="" />
            <div className="content">
              <span>only for today</span>
              <h3>upto 80% off</h3>
              <a href="#" className="btn">
                see offer
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* offer section ends */}
    </>
  );
}

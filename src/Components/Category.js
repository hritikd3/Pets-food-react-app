import { React } from "react";

export default function Category() {
  return (
    <>
      {/* category section starts  */}
      <section className="category" id="category">
        <h1 className="heading">
          {" "}
          <i className="fas fa-paw" /> shop by category{" "}
          <i className="fas fa-paw" />{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="./images/c1.webp" alt="" />
            <h3>food for dogs</h3>
            <a href="#" className="btn">
              shop now
            </a>
          </div>
          <div className="box">
            <img src="./images/c2.webp" alt="" />
            <h3>food for cats</h3>
            <a href="#" className="btn">
              shop now
            </a>
          </div>
          <div className="box">
            <img src="./images/c3.webp" alt="" />
            <h3>food for rabbits</h3>
            <a href="#" className="btn">
              shop now
            </a>
          </div>
          <div className="box">
            <img src="./images/c4.webp" alt="" />
            <h3>food for birds</h3>
            <a href="#" className="btn">
              shop now
            </a>
          </div>
        </div>
      </section>
      {/* category section ends */}
    </>
  );
}

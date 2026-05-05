import React from "react";
import { FaGem, FaMagic, FaRupeeSign } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="container-fluid px-2">
        <h3 className="text-center text-danger fw-bold mt-2">
          About Royal Kitchen
        </h3>

        <p className="text-center small mb-4">
          Your one-stop destination for exquisite culinary ingredients and snacks.
          We combine elegance, purity,and quality.
        </p>

        <h5 className="text-danger text-center fw-bold">Our Mission</h5>
        <p className="text-center small mb-4">
          Every kitchen is unique—and your food should be too.
        </p>

        <h5 className="text-danger text-center fw-bold mt-4">
          Our Values
        </h5>

       
        <div className="row mt-3">
          
          <div className="col-12 mb-3">
            <div className="hover-card">
              <div className="card-face card-top pink">
                <FaGem className="icon" />
                <h5>Quality Products</h5>
              </div>
              <div className="card-face card-bottom">
                <p>
                  High-quality food products, affordable prices, and health essentials.
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-12 mb-3">
            <div className="hover-card">
              <div className="card-face card-top yellow">
                <FaMagic className="icon" />
                <h5>Healthy Fruits</h5>
              </div>
              <div className="card-face card-bottom">
                <p>
                 Fresh fruits and lowest price.
                </p>
              </div>
            </div>
          </div>

         
          <div className="col-12 mb-3">
            <div className="hover-card">
              <div className="card-face card-top blue">
                <FaRupeeSign className="icon" />
                <h5>Affordable price</h5>
              </div>
              <div className="card-face card-bottom">
                <p>
                  Kitchen Nutrients at affordable prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <style>
        {`
          .hover-card {
            position: relative;
            height: 240px;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 10px 22px rgba(0,0,0,0.15);
            cursor: pointer;
          }

          .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 20px;
            transition: 0.4s ease;
          }

          .card-top {
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .icon {
            font-size: 36px;
          }

          .card-bottom {
            background: #fff;
            top: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hover-card:hover .card-top {
            transform: translateY(-100%);
          }

          .hover-card:hover .card-bottom {
            top: 0;
          }

          .pink { background: #e56b8c; }
          .yellow { background: #f4b942; }
          .blue { background: #4aa3df; }
        `}
      </style>
    </>
  );
};

export default About;
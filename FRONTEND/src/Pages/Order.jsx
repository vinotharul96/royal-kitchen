import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const totalAmount = location.state?.total || 0;

  const [seconds, setSeconds] = useState(10);
  const [show, setShow] = useState(false);

  
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  
  useEffect(() => {
    if (seconds === 0) {
      navigate("/home");
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  return (
    <>
      <div className="order-page">
        <div className={`order-content ${show ? "show" : ""}`}>
          <h2>🎉 Order Placed Successfully</h2>

          <h3 className="amount">
            Total Paid : ₹ {totalAmount}
          </h3>

          <p className="redirect">
            Redirecting to Home in <span>{seconds}</span> seconds
          </p>
        </div>
      </div>

      <style>{`
        .order-page {
          height: 100vh;
          background: #e9fbe9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .order-content {
          text-align: center;
          transform: translateY(80px);
          opacity: 0;
          transition: all 0.8s ease;
        }

        .order-content.show {
          transform: translateY(0);
          opacity: 1;
        }

        h2 {
          color: #2e7d32;
          margin-bottom: 15px;
        }

        .amount {
          color: #1b5e20;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .redirect {
          color: #444;
          font-size: 14px;
        }

        .redirect span {
          color: #2e7d32;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Order;
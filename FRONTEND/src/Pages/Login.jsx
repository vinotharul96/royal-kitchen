
import React, { useContext } from "react";
import { myContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
    loginSubmitFun
  } = useContext(myContext);

 const navigate = useNavigate();

  return (
    <>
      <div className="auth-container">
        <div className="auth-box">

          
          <div className="auth-left">
            <h3>Login</h3>

            <form onSubmit={loginSubmitFun}>
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                required
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              <button type="submit">Login</button>
              
              <p className="register-text">
                Don't have an account-
                <span onClick={() => navigate("/register")}>
                  {""}Register
                </span>
              </p>
            </form>
            
          </div>

         
          <div className="auth-right">
            <h2>WELCOME BACK!</h2>
            <p>
              We are happy to have you with us again. <br />
              If you need anything, we are always here to help.
            </p>
          </div>

        </div>
      </div>

     
      <style>{`
        .auth-container {
          min-height: 100vh;
          background: #0f0f14;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .auth-box {
          width: 850px;
          height: 420px;
          background: #14141c;
          display: flex;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(255, 87, 34, 0.45);
          animation: fadeSlide 0.9s ease;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(70px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .auth-left {
          width: 50%;
          padding: 55px 45px;
          color: white;
        }

        .auth-left h3 {
          text-align: center;
          margin-bottom: 30px;
          color: #ff6a3d;
        }

        .auth-left input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #555;
          padding: 12px 5px;
          margin-bottom: 25px;
          color: white;
          outline: none;
        }

        .auth-left button {
          width: 100%;
          padding: 11px;
          background: linear-gradient(135deg, #ff512f, #dd2476);
          border: none;
          color: white;
          font-weight: bold;
          border-radius: 25px;
        }

        .auth-right {
          width: 50%;
          background: linear-gradient(135deg, #ff512f, #dd2476);
          color: white;
          padding: 60px 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .register-text {
  margin-top: 18px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
}

.register-text span {
  color: #4da3ff;
  cursor: pointer;
  font-weight: 600;
}

.register-text span:hover {
  text-decoration: underline;
}

        @media (max-width: 768px) {
          .auth-box {
            flex-direction: column;
            width: 90%;
            height: auto;
          }

          .auth-left,
          .auth-right {
            width: 100%;
            clip-path: none;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Login;
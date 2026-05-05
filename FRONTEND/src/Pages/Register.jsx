
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../Context/ContextProvider'

const Register = () => {

  const navigate = useNavigate()

  const {
    registerUsername,
    setRegisterUsername,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerSubmitFun
  } = useContext(myContext)

  return (
    <>
      <div className="auth-container">
        <div className="auth-box">

         
          <div className="auth-left">
            <h2>WELCOME!</h2>
            <p>
              We’re delighted to have you here. <br />
              Create your account and start your journey with
              <b> Royal Kitchen</b>.
            </p>
          </div>

          
          <div className="auth-right">
            <h3>Register</h3>

          
            <input type="text" style={{ display: "none" }} />
            <input type="password" style={{ display: "none" }} />

            <form onSubmit={registerSubmitFun}>

              <input
                type="text"
                name="username_new"
                placeholder="Username"
                autoComplete="off"
                required
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
              />

              <input
                type="email"
                name="email_new"
                placeholder="Email"
                autoComplete="off"
                required
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />

              <input
                type="password"
                name="password_new"
                placeholder="Password"
                autoComplete="new-password"
                required
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />

              <button type="submit">Register</button>

              <p className="login-text">
                you have an account- 
                <span onClick={() => navigate("/")}>
                  {""}Login
                </span>
              </p>
            </form>
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
          width: 900px;
          max-width: 95%;
          background: #14141c;
          display: flex;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(255, 87, 34, 0.45);
        }

        .auth-left {
          width: 50%;
          background: linear-gradient(135deg, #ff512f, #dd2476);
          color: white;
          padding: 60px 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .auth-right {
          width: 50%;
          padding: 55px 45px;
          color: white;
        }

        .auth-right h3 {
          text-align: center;
          color: #ff6a3d;
          margin-bottom: 25px;
        }

        .auth-right input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #666;
          padding: 12px 5px;
          margin-bottom: 25px;
          color: white;
          outline: none;
        }

        .auth-right button {
          width: 100%;
          padding: 11px;
          background: linear-gradient(135deg, #ff512f, #dd2476);
          border: none;
          color: white;
          font-weight: bold;
          border-radius: 25px;
        }

        .login-text {
  margin-top: 18px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
}

.login-text span {
  color: #4da3ff;
  cursor: pointer;
  font-weight: 600;
}

.login-text span:hover {
  text-decoration: underline;
}


        @media (max-width: 768px) {
          .auth-box {
            flex-direction: column;
          }

          .auth-left,
          .auth-right {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}

export default Register



                 

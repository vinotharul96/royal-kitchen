import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  const navigate = useNavigate();

  
  const texts = [
    "All the nutrient-rich products we offer will enhance your capabilities",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[index].length) {
        setText(texts[index].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(texts[index].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((index + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      

      
      <section className="hero slide-up">
        <h1 className="hero-title">Royal Kitchan</h1>

       
        <h3 className="typing-text">
          {text}
          <span className="cursor">|</span>
        </h3>

        <button className="hero-btn" onClick={() => navigate("/vegetables")}>
          All ingredients required for cooking
        </button>
      </section>

     
      <section className="collection reveal slide-up">
        <h2 className="section-title">Our Kitchen Items</h2>

        <div className="card-grid">
          <div
            className="collection-card dairyproducts reveal"
            onClick={() => navigate("/dairyproducts")}
          >
            Dairy Products For Childrens
          </div>

          <div
            className="collection-card nuts reveal"
            onClick={() => navigate("/nuts")}
          >
            Nuts Varieties For Youth
          </div>

          <div
            className="collection-card fruits reveal"
            onClick={() => navigate("/fruits")}
          >
            Fruits For The Elderly
          </div>
        </div>
      </section>

      
      <section className="about reveal slide-up">
        <h2 className="section-title">Why Royal Kitchen?</h2>
        <p>
          Created exclusively for you—pure, hygienic, and a symbol of health.
        </p>
      </section>

      
<section className="section reveal slide-up">
  <h2 className="section-title">The Sign Of Health</h2>

  <div className="testimonial-wrapper">
    <div className="testimonial-card">
      “Cleanly manufactured products 💖”
    </div>

    <div className="testimonial-card">
      “Perfect Food for my  day 👰”
    </div>

    <div className="testimonial-card">
      “Loved the quality & service ✨”
    </div>
  </div>
</section>

     
      <Footer />

      
      <style>{`
        :root {
          --primary: #8b3a62;
          --secondary: #f5e1ec;
          --dark: #3e1f2b;
        }

       
        .hero {
          height: 90vh;
          background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
            url("https://tse1.mm.bing.net/th/id/OIP.gEyvRz_r1HXWG4Ic7uRVDgHaFS?pid=Api&h=220&P=0");
          background-size: cover;
          background-position: center;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .hero-title {
          font-size: 3.8rem;
          animation: slideDown 1s ease;
        }

        
        .typing-text {
          font-size: 1.4rem;
          margin: 15px 0 30px;
          color: #ffd6e8;
          min-height: 30px;
        }

        .cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .hero-btn {
          padding: 14px 42px;
          border-radius: 30px;
          border: none;
          background: var(--primary);
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: 0.4s;
        }

        .hero-btn:hover {
          background: #a94b78;
          transform: scale(1.1);
        }

        
        .collection {
          padding: 90px 20px;
          text-align: center;
        }

        .section-title {
          opacity: 0;
          text-align: center;
          transform: translateY(40px) scale(0.95);
          transition: 0.8s ease;
          font-size: 2.6rem;
          color: var(--primary);
          margin-bottom: 50px;
        }

        .reveal.active .section-title {
          opacity: 1;
          transform: translateY(0) scale(1);
          text-shadow: 0 8px 25px rgba(139,58,98,0.4);
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: auto;
        }

        .collection-card {
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          font-weight: bold;
          color: #fff;
          border-radius: 22px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0,0,0,0.25);
          transition: 0.5s;
        }

        .collection-card:hover {
          transform: scale(1.1);
          box-shadow: 0 25px 50px rgba(139,58,98,0.6);
        }

        .dairyproducts {
          background: url("https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg")
            center/cover no-repeat;
        }

        .nuts {
          background: url("https://www.butter-n-thyme.com/wp-content/uploads/2022/11/Types-of-Nuts-23-Nut-Varieties.jpg")
            center/cover no-repeat;
        }

        .fruits {
          background: url("https://i.pinimg.com/736x/fc/18/29/fc182965fbbe9e50e66fa19da023ca0a.jpg")
            center/cover no-repeat;
        }

        .about {
          padding: 80px 20px;
          background: var(--secondary);
          text-align: center;
        }

       
.testimonial-wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  max-width: 1100px;
  margin: auto;
  flex-wrap: wrap;
}

.testimonial-card {
  flex: 1;
  max-width: 320px;
  background: #fff;
  padding: 30px 25px;
  border-radius: 18px;
  text-align: center;
  font-style: italic;
  font-size: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transition: 0.4s;
}

.testimonial-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 25px 50px rgba(139, 58, 98, 0.4);
}


@media (max-width: 768px) {
  .testimonial-wrapper {
    flex-direction: column;
    align-items: center;
  }
}

        @keyframes slideDown {
          from {
            transform: translateY(-40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
.slide-up {
  animation: slideFromBottom 1s ease;
}

@keyframes slideFromBottom {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

      `}</style>
    </>
  );
};

export default Home;
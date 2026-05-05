import React from "react"

const Footer = () => {
return(
    
<footer
  className="text-dark pt-5 pb-4"
  style={{ backgroundColor: "#f7f2f8", marginTop: "50px" }}
>
  <div className="container">

    
    <div className="row">

     
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="fw-bold mb-3">CUSTOMER SERVICE</h6>
        <p>DOWNLOAD APP</p>
        <p>TRACK ORDER</p>
        <p>SHIPPING</p>
        <p>RETURNS</p>
        <p>CONTACT US</p>
      </div>

      
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="fw-bold mb-3">ABOUT</h6>
        <p>OUR STORY</p>
        <p>STORE LOCATOR</p>
        <p>CAREERS</p>
        <p>TERMS & CONDITIONS</p>
        <p>PRIVACY POLICY</p>
      </div>

      
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="fw-bold mb-3">POPULAR SEARCHES</h6>
        <p>Friuts</p>
        <p>Dairy products</p>
        <p>Nuts</p>
        <p>Snacks</p>
        <p>Vegetable oil</p>
        <p>Vegitables</p>
      </div>

      
      <div className="col-md-3 col-sm-6 mb-4">
        <h6 className="fw-bold mb-3">SIGN UP AND SAVE</h6>
        <p>Subscribe to get special offers and updates</p>

        
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control mb-3"
        />
       
        <div className="mt-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            width="140"
            className="me-2"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            width="130"
          />
        </div>
      </div>
    </div>

    <hr />

    
    <div className="text-center">
      © {new Date().getFullYear()} Royal Kitchen — All Rights Reserved.
    </div>
  </div>
</footer>

)
}
export default Footer
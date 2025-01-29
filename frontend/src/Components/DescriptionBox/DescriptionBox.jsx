import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descrptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is a digital platform that enables businesses to
          sell products or services online. It features a user-friendly
          interface for browsing items, secure payment gateways, and options for
          order tracking. E-commerce sites often include categories, search
          functionality, and personalized recommendations to enhance the
          shopping experience, catering to both desktop and mobile users.
        </p>
        <p>
          An e-commerce website allows users to browse, buy, and pay for
          products online. It features search, categories, secure checkout, and
          mobile-friendly design for easy shopping.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;

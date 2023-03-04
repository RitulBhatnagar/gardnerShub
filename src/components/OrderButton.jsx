import React from 'react';
import '../css/OrderButton.css';

const OrderButton = ({ text, icon }) => {

  const handleOnOrderClick = () => {
    console.log("clicked");
    const whatsappUrl = 'whatsapp://send?phone=+918076861086';
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.open(whatsappUrl, '_blank');
    } else {
      const fallbackUrl = 'https://web.whatsapp.com/send?phone=+1234567890';
      window.open(fallbackUrl, '_blank');
    }
  }

  return (
    <button className="orderButton" onClick={handleOnOrderClick}>
      <img src={icon} alt="" className="button-icon"/>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default OrderButton;
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'animate.css';

const Button = ({ text, cartChangeable, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`text-white mt-4 flex flex-row justify-center items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 ${
        cartChangeable ? 'cart-changeable' : ''
      } animate__animated animate__heartBeat`}
      onClick={handleClick}
    >
      {cartChangeable ? <FaShoppingCart className="mr-2" /> : null}
      {text}
    </button>
  );
};

export default Button;

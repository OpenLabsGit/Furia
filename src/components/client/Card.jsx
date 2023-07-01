import React, { useEffect, useState } from "react";
import {
  FaHdd,
  FaMemory,
  FaDatabase,
  FaInfoCircle,
  FaEnvelope,
  FaShieldAlt,
  FaNetworkWired
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../Button/";
import Toggle from "../Toggle";

const Card = ({
  name,
  description,
  price,
  currency,
  annualPayment,
  serverPerformances,
}) => {
  const [isAnnual, setIsAnnual] = useState(annualPayment);

  const formattedPrice = isAnnual
    ? `${price} ${
        currency && !isNaN(parseFloat(currency))
          ? parseFloat(currency) / 2
          : ""
      }`
    : `${price} ${currency || ""}`;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleToggleChange = (isChecked) => {
    setIsAnnual(isChecked);
  };

  return (
    <div
      className="card border border-primary-500 rounded-lg shadow-lg py-4 px-8 flex-col flex justify-center items-center"
      data-aos="fade-up"
    >
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex items-center flex-col justify-between">
          <div className="flex flex-row justify-center items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formattedPrice}
            </span>
            <Toggle onChange={handleToggleChange} />
          </div>

          <Button text="Add To cart" changeCarteable />

          <div className="server-performance">
            <h6 className="text-lg font-semibold mt-4 mb-2">
              Performances du serveur :
            </h6>
            <ul className="pl-6 list-none">
              <li>
                <FaHdd className="inline mr-2" /> Stockage :{" "}
                {serverPerformances.storage}
              </li>
              <li>
                <FaMemory className="inline mr-2" /> RAM :{" "}
                {serverPerformances.ram}
              </li>
              <li>
                <FaNetworkWired className="inline mr-2" /> Bande passante :{" "}
                {serverPerformances.bandwidth}
              </li>
              <li>
                <FaDatabase className="inline mr-2" /> Base de données :{" "}
                {serverPerformances.database}
              </li>
              <li>
                <FaEnvelope className="inline mr-2" /> Compte Mail :{" "}
                {serverPerformances.emailAccount}
              </li>
              <li>
                <FaShieldAlt className="inline mr-2" /> Protection :{" "}
                {serverPerformances.protection}
              </li>
              <li>
                <FaInfoCircle className="inline mr-2" /> Informations
                supplémentaires : {serverPerformances.additionalInfo}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

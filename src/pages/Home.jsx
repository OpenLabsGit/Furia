import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaServer, FaDatabase, FaCloud } from "react-icons/fa";

const Home = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisation de AOS avec une durée de 1 seconde
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">Hébergement Web de Qualité</h1>

        <div className="flex flex-wrap -mx-4">
          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-4">
                <FaServer className="text-primary-500 text-3xl mr-2" />
                <h2 className="text-xl font-semibold">Serveurs Puissants</h2>
              </div>
              <p className="text-gray-600">
                Nos serveurs sont conçus pour offrir des performances optimales et une disponibilité maximale.
              </p>
            </div>
          </div>

          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-primary-500 text-3xl mr-2" />
                <h2 className="text-xl font-semibold">Base de Données Évolutive</h2>
              </div>
              <p className="text-gray-600">
                Notre infrastructure de base de données est conçue pour s'adapter à la croissance de vos données.
              </p>
            </div>
          </div>

          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center mb-4">
                <FaCloud className="text-primary-500 text-3xl mr-2" />
                <h2 className="text-xl font-semibold">Stockage dans le Cloud</h2>
              </div>
              <p className="text-gray-600">
                Profitez d'un stockage sécurisé et fiable dans le cloud pour vos données et fichiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

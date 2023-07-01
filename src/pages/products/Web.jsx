import React from "react";
import Card from "../../components/client/Card";

const Web = () => {
  const products = [
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet.",
      price: 10,
      currency: "USD",
      annualPayment: true,
      serverPerformances: {
        storage: "1 TB",
        bandwidth: "1 Gbps",
        database: "10",
        emailAccount: "10",
        protection: "Firewall",
        additionalInfo: "Lorem ipsum dolor sit amet.",
      },
    },
    {
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet.",
        price: 10,
        currency: "USD",
        annualPayment: true,
        serverPerformances: {
          storage: "1 TB",
          bandwidth: "1 Gbps",
          database: "10",
          emailAccount: "10",
          protection: "Firewall",
          additionalInfo: "Lorem ipsum dolor sit amet.",
        },
      },
    // ... autres produits
  ];

  return (
    <div>
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
};

export default Web;

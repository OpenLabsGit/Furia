import React from "react";
import Card from "../../components/client/Card";

const Node = () => {
  const products = [
    {
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet.",
      price: 10,
      currency: "USD",
      annualPayment: true,
      serverPerformances: {
        storage: "2 TB",
        ram: "32 GB",
        bandwidth: "1 Gbps",
        database: "MySQL",
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

export default Node;

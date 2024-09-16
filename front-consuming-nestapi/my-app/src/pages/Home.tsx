import React from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductForm />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;

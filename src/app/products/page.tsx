"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFormModal from "@/components/ProductFormModal";

type Product = {
  title: string;
  img: string;
  price: string;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    title: "Camel Safari Experience",
    img: "https://thardesertphotography.com/gallery/IMG_3883.webp",
    price: "1999",
    description: "Half-day camel ride, sunset dunes, snacks, photo session, and more.",
  },
  {
    title: "Desert Camp Night",
    img: "https://thardesertphotography.com/gallery/IMG_4762.webp",
    price: "2999",
    description: "Overnight camp under the stars with dinner, folk music, and morning chai.",
  },
  {
    title: "Private Photo Shoot",
    img: "https://thardesertphotography.com/gallery/IMG_5307-Edit.webp",
    price: "1499",
    description: "Book a personalized desert photo shoot for individuals, couples, or groups.",
  },
  // Add more products as needed
];

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product|null>(null);

  function handleBuy(product: Product) {
    setSelectedProduct(product);
    setModalOpen(true);
  }

  function handleFormSubmit(formData: { name: string; phone: string; email: string; message: string }) {
    // Here, you could call an API/send email/integrate form handling, etc.
    alert(`Thank you for your interest in ${selectedProduct?.title}! We'll contact you soon.`);
  }

  return (
    <section>
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">Our Products & Tour Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {PRODUCTS.map(product => (
          <ProductCard
            key={product.title}
            title={product.title}
            img={product.img}
            price={product.price}
            description={product.description}
            onBuy={() => handleBuy(product)}
          />
        ))}
      </div>
      <ProductFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productTitle={selectedProduct?.title || ""}
        onSubmit={handleFormSubmit}
      />
    </section>
  );
}

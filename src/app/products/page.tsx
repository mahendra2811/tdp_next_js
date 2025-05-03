'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductFormModal from '@/components/ProductFormModal';
import { useLanguage } from '@/context/LanguageContext';

type Product = {
  title: string;
  img: string;
  price: string;
  description: string;
};

const ENGLISH_PRODUCTS: Product[] = [
  {
    title: 'Camel Safari Experience',
    img: 'https://thardesertphotography.com/gallery/IMG_3883.webp',
    price: '1999',
    description: 'Half-day camel ride, sunset dunes, snacks, photo session, and more.',
  },
  {
    title: 'Desert Camp Night',
    img: 'https://thardesertphotography.com/gallery/IMG_4762.webp',
    price: '2999',
    description: 'Overnight camp under the stars with dinner, folk music, and morning chai.',
  },
  {
    title: 'Private Photo Shoot',
    img: 'https://thardesertphotography.com/gallery/IMG_5307-Edit.webp',
    price: '1499',
    description: 'Book a personalized desert photo shoot for individuals, couples, or groups.',
  },
  // Add more products as needed
];

const HINDI_PRODUCTS: Product[] = [
  {
    title: 'ऊंट सफारी अनुभव',
    img: 'https://thardesertphotography.com/gallery/IMG_3883.webp',
    price: '1999',
    description: 'आधे दिन की ऊंट की सवारी, सूर्यास्त रेत के टीले, नाश्ता, फोटो सेशन, और बहुत कुछ।',
  },
  {
    title: 'रेगिस्तान कैंप रात',
    img: 'https://thardesertphotography.com/gallery/IMG_4762.webp',
    price: '2999',
    description: 'तारों के नीचे रात भर का कैंप, रात का खाना, लोक संगीत और सुबह की चाय के साथ।',
  },
  {
    title: 'निजी फोटो शूट',
    img: 'https://thardesertphotography.com/gallery/IMG_5307-Edit.webp',
    price: '1499',
    description: 'व्यक्तियों, जोड़ों या समूहों के लिए एक व्यक्तिगत रेगिस्तान फोटो शूट बुक करें।',
  },
  // Add more products as needed
];

export default function ProductsPage() {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Select products based on language
  const PRODUCTS = language === 'en' ? ENGLISH_PRODUCTS : HINDI_PRODUCTS;

  function handleBuy(product: Product) {
    setSelectedProduct(product);
    setModalOpen(true);
  }

  function handleFormSubmit(formData: {
    name: string;
    phone: string;
    email: string;
    message: string;
  }) {
    // Here, you could call an API/send email/integrate form handling, etc.
    const successMessage =
      language === 'en'
        ? `Thank you for your interest in ${selectedProduct?.title}! We'll contact you soon.`
        : `${selectedProduct?.title} में आपकी रुचि के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।`;
    alert(successMessage);
  }

  return (
    <section>
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        {language === 'en' ? 'Our Products & Tour Packages' : 'हमारे उत्पाद और टूर पैकेज'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {PRODUCTS.map((product) => (
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
        productTitle={selectedProduct?.title || ''}
        onSubmit={handleFormSubmit}
      />
    </section>
  );
}

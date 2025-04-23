import React from "react";
type Props = {
  title: string;
  img: string;
  price: string;
  description: string;
  onBuy: () => void;
};
export default function ProductCard({ title, img, price, description, onBuy }: Props) {
  return (
    <div className="bg-card border border-border rounded-lg shadow-sm flex flex-col">
      <img src={img} alt={title} className="h-36 w-full object-cover rounded-t-lg" />
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="font-bold text-lg text-primary mb-1">{title}</div>
          <div className="text-muted-foreground text-sm mb-2 line-clamp-2">{description}</div>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-primary font-semibold">₹ {price}</span>
          <button onClick={onBuy} className="bg-primary text-primary-foreground py-1 px-4 rounded hover:opacity-90 text-sm">Enquire</button>
        </div>
      </div>
    </div>
  );
}

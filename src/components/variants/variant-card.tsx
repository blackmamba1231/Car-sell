"use client";

import { Button } from "@/components/ui/button";

interface VariantCardProps {
  name: string;
  price: string;
  features: string;
}

export function VariantCard({ name, price, features }: VariantCardProps) {
  return (
    <div className="bg-card p-4 rounded-lg space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{name}</h3>
        <Button variant="outline" size="sm">Compare</Button>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span>{features}</span>
        <span className="font-semibold">{price}</span>
      </div>
      <div className="flex gap-2">
        <Button className="flex-1">Get Offers</Button>
        <Button variant="outline" className="flex-1">More Details</Button>
      </div>
    </div>
  );
}
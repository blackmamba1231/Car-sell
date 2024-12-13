"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { VariantCard } from "./variants/variant-card";
import { variants } from "./variants/variants-data";

export default function CarVariants() {
  return (
    <div className="space-y-6 p-4 bg-gradient-to-br from-white via-orange-100 to-red-200 rounded-lg shadow-md">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gradient-to-br from-orange-300 via-red-400 to-red-600">
          <Search className="text-white w-4 h-4" />
        </div>
        <Input
          className="pl-12 border border-transparent focus:ring-2 focus:ring-orange-400 focus:outline-none"
          placeholder="Search variants..."
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          className="bg-gradient-to-br from-orange-300 via-red-400 to-red-500 text-white hover:from-orange-400 hover:via-red-500 hover:to-red-600 border-transparent"
        >
          ELECTRIC
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-gradient-to-br from-orange-300 via-red-400 to-red-500 text-white hover:from-orange-400 hover:via-red-500 hover:to-red-600 border-transparent"
        >
          AUTOMATIC
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-gradient-to-br from-orange-300 via-red-400 to-red-500 text-white hover:from-orange-400 hover:via-red-500 hover:to-red-600 border-transparent"
        >
          5 SEATER
        </Button>
      </div>

      {/* Variant Cards */}
      <div className="space-y-4">
        {variants.map((variant, index) => (
          <VariantCard
            key={index}
            {...variant}
            
          />
        ))}
      </div>
    </div>
  );
}

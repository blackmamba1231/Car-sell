"use client";

import { Button } from "@/components/ui/button";

export default function PriceBreakdown() {
  const breakdown = {
    exShowroom: "₹13,85,199",
    rto: "₹1,43,320",
    insurance: "₹97,846",
    others: "₹14,451.99",
    optional: "₹65,120",
    total: "₹16,40,817",
  };

  return (
    <div className="bg-gradient-to-br from-white via-orange-100 to-red-200 p-6 rounded-lg shadow-md space-y-6">
      {/* Breakdown Items */}
      <div className="space-y-4">
        {Object.entries(breakdown).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-center p-2 rounded-md bg-gradient-to-r from-orange-50 to-red-100 shadow-sm"
          >
            <span className="capitalize text-orange-800 font-medium">
              {key.replace(/([A-Z])/g, " $1").toLowerCase()}
            </span>
            <span className="font-semibold text-red-900">{value}</span>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <Button className="w-full bg-gradient-to-br from-orange-400 via-red-500 to-red-600 text-white hover:from-orange-500 hover:via-red-600 hover:to-red-700">
        Get a Call from Dealer
      </Button>
    </div>
  );
}

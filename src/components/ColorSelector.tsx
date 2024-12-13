"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const colors = [
  { name: "Pearl White", value: "#FFFFFF" },
  { name: "Metallic Grey", value: "#4A4A4A" },
  { name: "Auburn Brown", value: "#8B4513" },
  { name: "Nexa Blue", value: "#1E3F66" },
  { name: "Premium Silver", value: "#C0C0C0" },
];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Available Colors</h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={cn(
              "w-8 h-8 rounded-full border-2",
              selectedColor.name === color.name ? "border-primary" : "border-border"
            )}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">{selectedColor.name}</p>
    </div>
  );
}
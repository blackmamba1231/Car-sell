"use client";

import { SpecItem } from "./specs/spec-item";
import { specs } from "./specs/specs-data";

export default function CarSpecs() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-br from-white via-orange-100 to-red-200 rounded-lg shadow-lg">
      {specs.map((spec, index) => (
        <SpecItem key={index} {...spec} />
      ))}
    </div>
  );
}

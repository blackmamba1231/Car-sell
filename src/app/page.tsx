"use client";

import { Share2, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarSpecs from "@/components/CarSpecs";
import PriceBreakdown from "@/components/PriceBreakdown";
import CarVariants from "@/components/CarVariants";
import ColorSelector from "@/components/ColorSelector";
import ImageGallery from "@/components/ImageGallery";
import AddToCompare from "@/components/compare";
import PriceInfo from "@/components/dynamicprice";

export default function Home() {
  
  return (
    <main className="mx-auto px-4 py-8 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-400">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-red-900">Maruti Suzuki WagonR</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="flex items-center gap-1 bg-red-100 text-red-900">
                  <Star className="w-4 h-4 text-yellow-500" />
                  4.7
                </Badge>
                <span className="text-sm text-red-700">360 Reviews</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="border-red-500 text-red-700 hover:bg-red-100">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-red-500 text-red-700 hover:bg-red-100">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <ImageGallery />
          <ColorSelector />
          <AddToCompare />
        </div>

        <div className="space-y-6">
          <PriceInfo></PriceInfo>

          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-orange-300 to-red-500 text-white rounded-lg">
              <TabsTrigger value="specs" className="hover:bg-red-400">Key Specs</TabsTrigger>
              <TabsTrigger value="variants" className="hover:bg-red-400">Variants</TabsTrigger>
              <TabsTrigger value="reviews" className="hover:bg-red-400">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="p-4 bg-red-50 rounded-lg">
              <CarSpecs />
            </TabsContent>
            <TabsContent value="variants" className="p-4 bg-red-50 rounded-lg">
              <CarVariants />
            </TabsContent>
            <TabsContent value="reviews" className="p-4 bg-red-50 rounded-lg">
              <PriceBreakdown />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

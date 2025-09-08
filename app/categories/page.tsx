"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import categories from "@/data/products.json";

// Define types for better code safety
type Variant = {
  type: string;
  price: string;
  image: string;
};

type SweetItem = {
  name: string;
  tamilName: string;
  image: string;
  variants: Variant[];
};

export default function CategoriesPage() {
  const [selectedSweet, setSelectedSweet] = useState<SweetItem | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  // Effect to update the active image when a new sweet is selected
  useEffect(() => {
    if (selectedSweet) {
      setActiveImage(selectedSweet.image);
    }
  }, [selectedSweet]);

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedSweet(null)}>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* ... Header remains the same ... */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">Shop by Category</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our selection of traditional Indian sweets. Click on any item to see available sizes and prices.
            </p>
          </div>
        </section>

        {/* Dynamically Generated Category Sections */}
        {categories.map((category) => (
          <section key={category.slug} id={category.slug} className="py-16 even:bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{category.title} Collection</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <DialogTrigger key={index} asChild onClick={() => setSelectedSweet(item)}>
                    <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.name}</h3>
                        <p className="text-2xl mb-4 text-primary" style={{ fontFamily: 'var(--font-anek-tamil)' }}>
                          {item.tamilName}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ... CTA Section remains the same ... */}
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Can't Find What You're Looking For?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    We offer custom orders and seasonal specialties. Contact us to discuss your specific requirements.
                </p>
                <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                    <Link href="/contact">Contact Us for Custom Orders</Link>
                </Button>
            </div>
        </section>

      </div>

      {/* The Modal Dialog Content */}
      <DialogContent className="sm:max-w-[425px]">
        {selectedSweet && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">{selectedSweet.name}</DialogTitle>
              <DialogDescription style={{ fontFamily: 'var(--font-anek-tamil)' }} className="text-xl text-primary pt-1">
                {selectedSweet.tamilName}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="aspect-square rounded-md overflow-hidden mb-4">
                 <img src={activeImage} alt="Selected sweet variant" className="w-full h-full object-cover transition-opacity duration-300" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Available Options</h4>
              {selectedSweet.variants.length > 0 ? (
                <Table>
                  <TableBody>
                    {selectedSweet.variants.map((variant, index) => (
                      <TableRow key={index} onClick={() => setActiveImage(variant.image)} className="cursor-pointer">
                        <TableCell className="font-medium">{variant.type}</TableCell>
                        <TableCell className="text-right">{variant.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-sm text-muted-foreground">Please contact us for available sizes and pricing.</p>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
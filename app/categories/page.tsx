import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import categories from "@/data/products.json"; 

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-4">Shop by Category</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our carefully curated selection of traditional Indian sweets, organized by category for your
            convenience.
          </p>
        </div>
      </section>

      {/* Dynamically Generated Category Sections */}
      {categories.map((category) => (
        <section key={category.slug} id={category.slug} className="py-16 even:bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">{category.title} Collection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center"> {/* Added text-center for better alignment */}
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.name}</h3>
                    <p 
                      className="text-2xl mb-4 text-primary" 
                      style={{ fontFamily: 'var(--font-tamil)' }}
                    >
                      {item.tamilName}
                    </p>
                    {/* The "Contact for Order" button has been removed from here */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
             Contact us to discuss your specific requirements. We offer custom orders and seasonal specialties.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8">
            <Link href="/contact">Contact Us for Custom Orders</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
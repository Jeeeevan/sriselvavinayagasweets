import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = {
  burfi: [
    { name: "Coconut Burfi", price: "₹250/kg", image: "coconut burfi squares white traditional" },
    { name: "Pistachio Burfi", price: "₹450/kg", image: "pistachio burfi green squares nuts" },
    { name: "Cashew Burfi", price: "₹400/kg", image: "cashew burfi golden squares rich" },
    { name: "Chocolate Burfi", price: "₹300/kg", image: "chocolate burfi brown squares modern" },
  ],
  sweets: [
    { name: "Gulab Jamun", price: "₹200/kg", image: "gulab jamun brown round syrup traditional" },
    { name: "Rasgulla", price: "₹180/kg", image: "rasgulla white spongy round bengali sweet" },
    { name: "Jalebi", price: "₹220/kg", image: "jalebi orange spiral crispy syrup" },
    { name: "Kaju Katli", price: "₹500/kg", image: "kaju katli silver diamond cashew sweet" },
  ],
  balls: [
    { name: "Besan Laddu", price: "₹240/kg", image: "besan laddu yellow round gram flour" },
    { name: "Coconut Laddu", price: "₹200/kg", image: "coconut laddu white round fresh coconut" },
    { name: "Date Balls", price: "₹280/kg", image: "date balls brown round healthy dates nuts" },
    { name: "Rava Laddu", price: "₹220/kg", image: "rava laddu golden round semolina ghee" },
  ],
}

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

      {/* Burfi Section */}
      <section id="burfi" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Burfi Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rich, dense milk-based sweets that melt in your mouth. Perfect for celebrations and gifting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.burfi.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-lg font-semibold text-primary mb-4">{item.price}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href="/contact">Contact for Order</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Sweets Section */}
      <section id="sweets" className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Traditional Sweets</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Classic favorites that have been delighting families for generations. Authentic recipes, authentic taste.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.sweets.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-lg font-semibold text-primary mb-4">{item.price}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href="/contact">Contact for Order</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Balls Section */}
      <section id="balls" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Sweet Balls Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delightful round sweets that are perfect for any occasion. Bite-sized happiness in every piece.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.balls.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=200&query=${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-lg font-semibold text-primary mb-4">{item.price}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href="/contact">Contact for Order</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
  )
}

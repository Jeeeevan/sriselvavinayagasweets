import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-black text-foreground mb-6">
              Traditional Indian Sweets
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Crafted with love and tradition, our authentic Indian sweets bring the taste of home to your celebrations.
              Made fresh daily using time-honored recipes passed down through generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/categories">Explore Our Sweets</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of traditional Indian sweets, each category offering unique
              flavors and textures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Burfi Category */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                  <img
                    src="/traditional-indian-burfi-sweets-colorful-squares.png"
                    alt="Traditional Burfi Sweets"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Burfi</h3>
                <p className="text-muted-foreground mb-4">
                  Rich, dense milk-based sweets in various flavors including coconut, pistachio, and cashew. Perfect for
                  special occasions.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href="/categories#burfi">View Burfi Collection</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Traditional Sweets Category */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                  <img
                    src="/traditional-indian-sweets-gulab-jamun-rasgulla-col.png"
                    alt="Traditional Indian Sweets"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Traditional Sweets</h3>
                <p className="text-muted-foreground mb-4">
                  Classic favorites like Gulab Jamun, Rasgulla, and Jalebi. Time-tested recipes that bring joy to every
                  celebration.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href="/categories#sweets">View Sweet Collection</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Balls Category */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center">
                  <img
                    src="/indian-sweet-balls-laddu-coconut-balls-round-sweet.png"
                    alt="Indian Sweet Balls"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Balls</h3>
                <p className="text-muted-foreground mb-4">
                  Delightful round sweets including Laddu, Coconut balls, and Date balls. Bite-sized happiness in every
                  piece.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href="/categories#balls">View Ball Collection</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Our Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over three generations, our family has been crafting authentic Indian sweets using traditional
                methods and the finest ingredients. Every sweet tells a story of our rich cultural heritage and
                unwavering commitment to quality.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From our kitchen to your celebrations, we ensure that each piece carries the authentic taste and love
                that has made us a trusted name in traditional sweets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Made Fresh Daily</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Traditional Recipes</span>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <img
                src="/traditional-indian-sweet-shop-family-business-heri.png"
                alt="Our Heritage"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to place your order or learn more about our traditional sweets. We're here to make your
            celebrations sweeter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-lg px-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="tel:+1234567890">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-serif font-black text-primary mb-4">मिठाई पैलेस</div>
              <p className="text-muted-foreground mb-4">
                Traditional Indian sweets made with love and authentic recipes passed down through generations.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/categories" className="block text-muted-foreground hover:text-primary transition-colors">
                  Shop by Category
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Sweet Street, City, State</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat: 9AM-8PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mithai Palace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

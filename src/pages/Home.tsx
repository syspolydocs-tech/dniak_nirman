import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { BookOpen, Trophy, TrendingUp, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Contests from "./Contests";
export default function Home() {
  const scrollToContest = () => {
  const section = document.getElementById("contest");
  section?.scrollIntoView({ behavior: "smooth" });
};
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1623771702313-39dc4f71d275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjByZWFkaW5nJTIwYm9va3N8ZW58MXx8fHwxNzc0NTg1MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Bookstore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Dainik Nirman</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              A modern book marketplace and writing contest platform
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/books">
                <Button size="lg" className="text-lg">
                  Browse Books
                </Button>
              </Link>
              <Link to="#">
                <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm" onClick={scrollToContest}>
                  View Contests
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dainik Nirman?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Vast Book Collection</h3>
            <p className="text-muted-foreground">
              Access thousands of books across various genres and categories
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Writing Contests</h3>
            <p className="text-muted-foreground">
              Participate in exciting writing competitions and showcase your talent
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy Purchases</h3>
            <p className="text-muted-foreground">
              Seamless buying experience with secure payment options
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p className="text-muted-foreground">
              Join a vibrant community of readers and writers
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of readers and writers on Dainik Nirman
          </p>
          <section id="contest">
          <Contests classname="contest" />
          </section>
        </div>
      </section>
    </div>
  );
}

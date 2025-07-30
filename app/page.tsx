import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Star } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
              Trusted by 500+ Growing Businesses
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              CRM Implementation That Powers{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Predictable Sales Growth
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transform your sales process with expert CRM setup, automation, and optimization. Get measurable results
              in 30 days or less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-white">Start Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
              >
                <span className="text-black">Book a Demo</span>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-12 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-center text-slate-500 mb-8 font-medium">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=Client+Logo+${i}`}
                  alt={`Client Logo ${i}`}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Loreshelf Solutions?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We don't just implement CRMs—we transform your entire sales operation for sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven ROI</h3>
                <p className="text-slate-600 mb-6">
                  Our clients see an average 40% increase in sales productivity within the first quarter.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <span className="text-black">View Case Studies</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Expert Team</h3>
                <p className="text-slate-600 mb-6">
                  Certified consultants with 10+ years of experience in CRM implementation and optimization.
                </p>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white bg-transparent"
                >
                  <span className="text-black">Meet Our Team</span>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Fast Implementation</h3>
                <p className="text-slate-600 mb-6">
                  Get up and running in 30 days with our proven implementation methodology.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  <span className="text-black">Learn More</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it—hear from businesses that have transformed their sales operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "VP of Sales, TechCorp",
                content:
                  "Loreshelf transformed our chaotic sales process into a well-oiled machine. Our conversion rates increased by 45% in just 3 months.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                title: "CEO, GrowthLabs",
                content:
                  "The ROI was immediate. Their CRM implementation paid for itself within the first month through improved efficiency alone.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                title: "Sales Director, InnovateCo",
                content:
                  "Professional, knowledgeable, and results-driven. They didn't just implement a CRM—they revolutionized how we sell.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses that have already revolutionized their CRM operations with Loreshelf Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
            >
              <span className="text-black">Start Free Trial</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
            >
              <span className="text-white hover:text-blue-600">Schedule Consultation</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

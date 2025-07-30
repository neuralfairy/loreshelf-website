import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium mb-6">
            About Loreshelf Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Transforming Sales Through{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Expert CRM Implementation
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Founded in Tacoma, we've helped over 500 businesses optimize their sales processes and achieve predictable
            growth through strategic CRM implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <span className="text-white">Leadership Team</span>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 hover:border-blue-600 bg-transparent">
              <span className="text-black">Careers</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We believe every business deserves a sales process that works as hard as they do. Our mission is to
                eliminate the chaos and inefficiency that holds sales teams back, replacing it with systems that drive
                predictable, sustainable growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Results-Driven Approach</h3>
                    <p className="text-slate-600">
                      Every implementation is measured by tangible business outcomes, not just technical completion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">People-First Philosophy</h3>
                    <p className="text-slate-600">
                      Technology serves people, not the other way around. We design systems that empower your team.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Continuous Improvement</h3>
                    <p className="text-slate-600">
                      We don't just implement and leave—we partner with you for ongoing optimization and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Team+at+Work"
                alt="Loreshelf team collaborating"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven Track Record</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Numbers that speak to our commitment to client success and industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-slate-300 font-medium">Businesses Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-green-400 mb-2">40%</div>
              <p className="text-slate-300 font-medium">Average Productivity Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">10+</div>
              <p className="text-slate-300 font-medium">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-orange-400 mb-2">98%</div>
              <p className="text-slate-300 font-medium">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Industry veterans with decades of combined experience in CRM implementation and sales optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                title: "CEO & Founder",
                bio: "Former VP of Sales Operations at Fortune 500 companies. 15+ years optimizing sales processes.",
                image: "/placeholder.svg?height=300&width=300&text=Sarah+Mitchell",
              },
              {
                name: "David Chen",
                title: "CTO & Co-Founder",
                bio: "Technical architect with expertise in CRM integrations and automation. Former Salesforce consultant.",
                image: "/placeholder.svg?height=300&width=300&text=David+Chen",
              },
              {
                name: "Maria Rodriguez",
                title: "VP of Client Success",
                bio: "Dedicated to ensuring every client achieves their ROI goals. Expert in change management and training.",
                image: "/placeholder.svg?height=300&width=300&text=Maria+Rodriguez",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Growing Team</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                We're always looking for talented individuals who share our passion for helping businesses succeed. If
                you're excited about transforming how companies sell, we'd love to hear from you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-200" />
                  <span>Competitive compensation and benefits</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-200" />
                  <span>Collaborative, supportive work environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-200" />
                  <span>Opportunities for professional growth</span>
                </div>
              </div>
              <Button size="lg" className="bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 text-lg font-semibold">
                <span className="text-black">View Open Positions</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Team+Culture"
                alt="Team collaboration"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's discuss how we can help transform your sales process and drive predictable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold">
              <span className="text-white">Schedule Consultation</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 hover:border-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <span className="text-black">Learn More About Us</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

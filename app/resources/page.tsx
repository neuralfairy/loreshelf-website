import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Download, Video, FileText, Search, ArrowRight, Calendar } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium mb-6">
            Knowledge Center
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            CRM Resources &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Expert Insights
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Everything you need to master CRM implementation, sales automation, and process optimization. Free guides,
            tutorials, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <span className="text-white">Tutorials</span>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 hover:border-blue-600 bg-transparent">
              <span className="text-black">Whitepapers</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search resources, guides, tutorials..."
              className="pl-10 py-3 text-lg border-slate-300 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-slate-600">
              Our most popular guides and resources to accelerate your CRM success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Featured Guide */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <Badge className="bg-blue-600 text-white mb-4">Featured Guide</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Complete CRM Implementation Playbook</h3>
                <p className="text-slate-600 mb-6">
                  A comprehensive 50-page guide covering everything from initial planning to post-implementation
                  optimization. Includes templates, checklists, and real-world case studies.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <FileText className="h-4 w-4" />
                    <span>50 pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Download className="h-4 w-4" />
                    <span>2,500+ downloads</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <span className="text-white">Download Free Guide</span>
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Featured Video */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <Badge className="bg-green-600 text-white mb-4">Video Series</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">CRM Optimization Masterclass</h3>
                <p className="text-slate-600 mb-6">
                  A 5-part video series walking through advanced CRM optimization techniques. Learn from real
                  implementations and see results in action.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Video className="h-4 w-4" />
                    <span>5 episodes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>3 hours total</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                >
                  <span className="text-black">Watch Series</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Studies */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Case Studies</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "TechCorp: 45% Sales Increase",
                    description: "How we transformed a struggling sales team into a revenue-generating machine.",
                    tag: "CRM Optimization",
                  },
                  {
                    title: "GrowthLabs: Automation Success",
                    description: "Implementing sales automation that saved 20 hours per week per rep.",
                    tag: "Sales Automation",
                  },
                  {
                    title: "InnovateCo: Integration Mastery",
                    description: "Connecting 8 different systems into one unified sales process.",
                    tag: "Data Integration",
                  },
                ].map((study, index) => (
                  <Card
                    key={index}
                    className="border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <Badge className="bg-blue-100 text-blue-800 text-xs mb-2">{study.tag}</Badge>
                      <h4 className="font-semibold text-slate-900 mb-2">{study.title}</h4>
                      <p className="text-sm text-slate-600">{study.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-6 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                <span className="text-black">Case Studies</span>
              </Button>
            </div>

            {/* Whitepapers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Whitepapers</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "The ROI of CRM Implementation",
                    description: "Data-driven analysis of CRM investment returns across 200+ companies.",
                    pages: "24 pages",
                  },
                  {
                    title: "Sales Process Optimization Guide",
                    description: "Best practices for designing sales processes that convert.",
                    pages: "18 pages",
                  },
                  {
                    title: "CRM Integration Strategies",
                    description: "Technical guide to connecting your CRM with essential business tools.",
                    pages: "32 pages",
                  },
                ].map((paper, index) => (
                  <Card
                    key={index}
                    className="border border-slate-200 hover:border-green-300 transition-colors cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Download className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-green-600 font-medium">{paper.pages}</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{paper.title}</h4>
                      <p className="text-sm text-slate-600">{paper.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-6 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
              >
                <span className="text-black">Whitepapers</span>
              </Button>
            </div>

            {/* Tutorials */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Video className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Tutorials</h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "HubSpot Setup Essentials",
                    description: "Step-by-step guide to configuring HubSpot for maximum efficiency.",
                    duration: "45 min",
                  },
                  {
                    title: "Salesforce Automation Basics",
                    description: "Learn to create workflows that save time and increase accuracy.",
                    duration: "30 min",
                  },
                  {
                    title: "CRM Reporting Mastery",
                    description: "Build dashboards and reports that drive better decisions.",
                    duration: "60 min",
                  },
                ].map((tutorial, index) => (
                  <Card
                    key={index}
                    className="border border-slate-200 hover:border-purple-300 transition-colors cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Video className="h-4 w-4 text-purple-600" />
                        <span className="text-xs text-purple-600 font-medium">{tutorial.duration}</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{tutorial.title}</h4>
                      <p className="text-sm text-slate-600">{tutorial.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-6 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
              >
                <span className="text-black">Tutorials</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest CRM insights, implementation tips, and industry trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white text-slate-900 border-0 flex-1" />
            <Button className="bg-white hover:bg-slate-100 text-blue-600 px-8">
              <span className="text-black">Subscribe</span>
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">Join 5,000+ sales professionals. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}

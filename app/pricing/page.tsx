"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Calculator, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const [roiInputs, setRoiInputs] = useState({
    currentRevenue: "",
    salesTeamSize: "",
    avgDealSize: "",
    conversionRate: "",
  })
  const [showROI, setShowROI] = useState(false)

  const calculateROI = () => {
    const revenue = Number.parseFloat(roiInputs.currentRevenue) || 0
    const teamSize = Number.parseFloat(roiInputs.salesTeamSize) || 0
    const dealSize = Number.parseFloat(roiInputs.avgDealSize) || 0
    const conversion = Number.parseFloat(roiInputs.conversionRate) || 0

    // Simple ROI calculation based on 40% productivity increase
    const productivityIncrease = 0.4
    const additionalRevenue = revenue * productivityIncrease
    const monthlyROI = additionalRevenue / 12

    setShowROI(true)
    return monthlyROI
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium mb-6">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Choose the Perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CRM Solution
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Flexible pricing plans designed to scale with your business. All plans include our proven implementation
            methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <span className="text-white">Plans Overview</span>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 hover:border-blue-600 bg-transparent">
              <span className="text-black">Request a Quote</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-2 border-slate-200 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Starter</CardTitle>
                <p className="text-slate-600 mb-4">Perfect for small teams getting started</p>
                <div className="text-4xl font-bold text-slate-900 mb-2">$2,500</div>
                <p className="text-slate-500 text-sm">One-time setup fee</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Basic CRM setup & configuration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Up to 5 users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Standard integrations (3)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Basic training (2 sessions)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">30-day support</span>
                  </li>
                </ul>
                <Button className="w-full bg-slate-600 hover:bg-slate-700">
                  <span className="text-white">Get Started</span>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Pro</CardTitle>
                <p className="text-slate-600 mb-4">Ideal for growing businesses</p>
                <div className="text-4xl font-bold text-slate-900 mb-2">$7,500</div>
                <p className="text-slate-500 text-sm">One-time setup fee</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Advanced CRM setup & customization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Up to 25 users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Premium integrations (10)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Sales automation setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Comprehensive training (5 sessions)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">90-day support</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <span className="text-white">Get Started</span>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-slate-200 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Enterprise</CardTitle>
                <p className="text-slate-600 mb-4">Complete solution for large organizations</p>
                <div className="text-4xl font-bold text-slate-900 mb-2">Custom</div>
                <p className="text-slate-500 text-sm">Tailored to your needs</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Full CRM transformation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Advanced automation & AI</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">Dedicated success manager</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">12-month support</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white bg-transparent"
                >
                  <span className="text-black">Enterprise & Custom</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Calculate Your ROI</h2>
            <p className="text-xl text-slate-600">
              See how much revenue you could generate with improved CRM efficiency
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">ROI Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="revenue" className="text-sm font-medium text-slate-700">
                    Current Annual Revenue ($)
                  </Label>
                  <Input
                    id="revenue"
                    type="number"
                    placeholder="1000000"
                    value={roiInputs.currentRevenue}
                    onChange={(e) => setRoiInputs({ ...roiInputs, currentRevenue: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="team" className="text-sm font-medium text-slate-700">
                    Sales Team Size
                  </Label>
                  <Input
                    id="team"
                    type="number"
                    placeholder="10"
                    value={roiInputs.salesTeamSize}
                    onChange={(e) => setRoiInputs({ ...roiInputs, salesTeamSize: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="deal" className="text-sm font-medium text-slate-700">
                    Average Deal Size ($)
                  </Label>
                  <Input
                    id="deal"
                    type="number"
                    placeholder="5000"
                    value={roiInputs.avgDealSize}
                    onChange={(e) => setRoiInputs({ ...roiInputs, avgDealSize: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="conversion" className="text-sm font-medium text-slate-700">
                    Current Conversion Rate (%)
                  </Label>
                  <Input
                    id="conversion"
                    type="number"
                    placeholder="15"
                    value={roiInputs.conversionRate}
                    onChange={(e) => setRoiInputs({ ...roiInputs, conversionRate: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <Button
                onClick={calculateROI}
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg font-semibold"
              >
                <span className="text-white">Calculate ROI</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {showROI && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Projected Monthly ROI: ${calculateROI().toLocaleString()}
                  </h3>
                  <p className="text-green-600">
                    Based on a conservative 40% productivity increase from CRM optimization
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your plan or schedule a consultation to discuss custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
              <span className="text-black">Start Your Project</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <span className="text-white hover:text-blue-600">Schedule Consultation</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

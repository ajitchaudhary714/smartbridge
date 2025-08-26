import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/sections/Footer";
const offices = [
  {
    city: "HYDERABAD",
    address:
      "6th Floor, Sundarayya Vignana Kendram, Technical Block, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032.",
  },
  {
    city: "NOIDA",
    address:
      "3rd Floor, Big Box Co-working Space, Office No. 303, Plot No. 8, Sector 142, Noida, Uttar Pradesh – 201301",
  },
  {
    city: "SINGAPORE",
    address: "78 Bayshore Rd, #18-24, Singapore 469991.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Ready to bridge the skills gap? Connect with our team and discover
            how we can transform careers together.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Phone Card */}
            <Card className="bg-gradient-to-br from-smartbridge-card-from to-smartbridge-card-to border-smartbridge-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Phone className="text-white text-xl h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Phone
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">+91 6304320044</p>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="bg-gradient-to-br from-smartbridge-card-from to-smartbridge-card-to border-smartbridge-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Mail className="text-white text-xl h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Email
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">info@thesmartbridge.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find us across three strategic locations to serve you better
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <Card
                key={office.city}
                className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 p-3 rounded-full mr-4">
                      <MapPin className="text-white text-xl h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {office.city}
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form (Static) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-smartbridge-primary via-smartbridge-secondary to-smartbridge-accent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-smartbridge-primary-light max-w-4xl mx-auto">
              Have a question or want to partner with us? We'd love to hear from
              you.
            </p>
          </div>

          <Card className="bg-white rounded-2xl shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      className="border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Message
                  </label>
                  <Textarea
                    rows={6}
                    placeholder="Tell us about your inquiry..."
                    className="border-gray-300 resize-none rounded-md"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="button"
                    className="bg-gradient-to-r from-smartbridge-primary to-smartbridge-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

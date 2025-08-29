"use client";

import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="bg-gradient-primary  py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl   font-semibold text-white mb-4">
            Send Us a Message
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have a question or want to partner with us? We'd love to hear from
            you.
          </p>
        </div>

        {/* Form */}
        <div className="form-container p-6 md:p-12 max-w-3xl mx-auto bg-white rounded-2xl">
          {isSubmitted && (
            <div className="success-message mb-6 text-green-500 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitted(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
              <div className="space-y-1 md:space-y-2">
                <label className="form-label " htmlFor="firstName">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="input-field w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-md"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="form-label" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="input-field w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-md"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
              <div className="space-y-1 md:space-y-2">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-md"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="form-label" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input-field w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
              <div className="space-y-1 md:space-y-2">
                <label className="form-label" htmlFor="orgType">
                  Organization Type *
                </label>
                <select
                  id="orgType"
                  className="input-field w-full px-4  h-[50px] border text-gray-400 border-gray-300 rounded-md"
                >
                  <option value="">Select organization type</option>
                  <option value="industry">Company</option>
                  <option value="academia">Academia</option>
                  <option value="government">Government</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1 md:space-y-2">
                <label className="form-label" htmlFor="orgName">
                  Organization Name *
                </label>
                <input
                  type="text"
                  id="orgName"
                  className="input-field w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-md"
                  placeholder="Enter your organization name"
                />
              </div>
            </div>

            {/* Designation */}
            <div className="space-y-1 md:space-y-2 mb-6 ">
              <label className="form-label" htmlFor="designation">
                Designation *
              </label>
              <input
                type="text"
                id="designation"
                className="input-field w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-md"
                placeholder="Enter your job title"
              />
            </div>

            {/* Enquiry */}
            <div className="space-y-1 md:space-y-2 mb-6">
              <label className="form-label" htmlFor="enquiry">
                Enquiry
              </label>
              <textarea
                id="enquiry"
                rows={5}
                className="input-field w-full px-4 py-3 border text-gray-400 border-gray-300 rounded-md"
                placeholder="Tell us about your Enquiry..."
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="submit-btn flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

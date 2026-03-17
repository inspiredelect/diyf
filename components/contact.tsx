'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', interest: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0F1E] mb-6">
              Get In Touch
            </h2>
            <p className="text-[#3D3D3D] text-lg leading-relaxed mb-12">
              Whether you're interested in our programs, want to partner with us, or simply
              want to learn more about the De Inspired movement, we'd love to hear from you.
            </p>

            {/* Contact Info Items */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="font-semibold text-[#0A0F1E] mb-1">Location</h3>
                  <p className="text-[#3D3D3D]">
                    Nigeria
                    <br />
                    <span className="text-sm text-[#7A8499]">(Address TBD by Board)</span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">📞</div>
                <div>
                  <h3 className="font-semibold text-[#0A0F1E] mb-1">Phone</h3>
                  <a
                    href="tel:+2349068478932"
                    className="text-[#C8922A] hover:text-[#B8792A] transition-colors"
                  >
                    +234 906 847 8932
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">📧</div>
                <div>
                  <h3 className="font-semibold text-[#0A0F1E] mb-1">Email</h3>
                  <a
                    href="mailto:Inspiredelect1@gmail.com"
                    className="text-[#C8922A] hover:text-[#B8792A] transition-colors"
                  >
                    Inspiredelect1@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">🌐</div>
                <div>
                  <h3 className="font-semibold text-[#0A0F1E] mb-3">Follow Us</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {[
                      { label: 'YouTube', href: 'https://youtube.com/@de_inspired?si=wrrbCg8GyTMJUYk5' },
                      { label: 'TikTok', href: 'https://www.tiktok.com/@de_inspired_?_r=1&_t=ZS-94M4CfeDVEz' },
                      { label: 'Instagram', href: 'https://www.instagram.com/de_inspired_?igsh=N3JkbmVubmluN2Zh' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C8922A] hover:text-[#B8792A] text-sm font-medium transition-colors"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#FAFAF5] rounded-xl p-6 sm:p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold text-[#0A0F1E] mb-8">
              Send us a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-[#1A5C3A]/10 border border-[#1A5C3A] rounded-lg">
                <p className="text-[#1A5C3A] font-medium">
                  Thank you! We've received your message and will get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0A0F1E] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E8E8E3] rounded-lg bg-white text-[#0A0F1E] placeholder-[#7A8499] focus:outline-none focus:border-[#C8922A] transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A0F1E] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-[#E8E8E3] rounded-lg bg-white text-[#0A0F1E] placeholder-[#7A8499] focus:outline-none focus:border-[#C8922A] transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#0A0F1E] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E8E8E3] rounded-lg bg-white text-[#0A0F1E] placeholder-[#7A8499] focus:outline-none focus:border-[#C8922A] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Interest Dropdown */}
              <div>
                <label className="block text-sm font-medium text-[#0A0F1E] mb-2">
                  Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#E8E8E3] rounded-lg bg-white text-[#0A0F1E] focus:outline-none focus:border-[#C8922A] transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="membership">Membership</option>
                  <option value="partnership">Partnership</option>
                  <option value="donation">Donation</option>
                  <option value="program">Program Inquiry</option>
                  <option value="advisory">Advisory Role</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#0A0F1E] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-[#E8E8E3] rounded-lg bg-white text-[#0A0F1E] placeholder-[#7A8499] focus:outline-none focus:border-[#C8922A] transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#1A5C3A] text-white rounded-lg font-medium hover:bg-[#154a2f] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

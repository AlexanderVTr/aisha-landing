import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hoochawhnrfqcarqabal.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvb2NoYXdobnJmcWNhcnFhYmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzUyNzksImV4cCI6MjA2MDA1MTI3OX0.O_4ajuv-YG4hjQ_ID_IOdoc1AMGVJgq-4Qwkn-ZLiFo";
const supabase = createClient(supabaseUrl, supabaseKey);

const ContactSection = ({ website }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Сохранение в базу данных
      const { error: dbError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          comments: "Grok 3: " + formData.comments,
          created_at: new Date().toISOString(),
        },
      ]);

      if (dbError) {
        throw dbError;
      }

      // Вызов Edge Function для отправки email
      const { error: emailError } = await supabase.functions.invoke(
        "send-email",
        {
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            productName: "Grok 3",
            comments: formData.comments,
            website: website || window.location.hostname,
          }),
        }
      );

      if (emailError) {
        throw emailError;
      }

      toast({
        title: "Thank you for reaching out!",
        description: "We'll get back to you as soon as possible.",
      });

      // Сброс формы
      setFormData({
        name: "",
        email: "",
        company: "",
        productName: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div
        className="container max-w-7xl mx-auto px-4 sm

:px-6"
      >
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our AISha Assistant platform? Drop us a
            message, and our team will respond promptly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Comments
                </label>
                <Textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Your questions or comments..."
                  required
                  rows={5}
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// CREATE TABLE IF NOT EXISTS contacts (
//   id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   name TEXT NOT NULL,
//   email TEXT NOT NULL,
//   company TEXT,
//   comments TEXT NOT NULL,
//   created_at TIMESTAMPTZ DEFAULT NOW()
// );

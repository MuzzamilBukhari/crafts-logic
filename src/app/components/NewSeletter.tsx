import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await emailjs.send(
        "service_59y1o89", // your service ID
        "template_wtctir8", // your new template ID
        {
          user_email: email,
          time: new Date().toLocaleString(),
        },
        "mBvLKjIPbvne7jbtx" // your public key
      );

      if (result.status === 200) {
        setStatus("success");
        setEmail("");
      }
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-blue-950 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights on web development, AI, and digital innovation delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-xl text-gray-100 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-blue-950 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-70"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? "Sending..." : "Subscribe"}
            </motion.button>
          </form>

          {status === "success" && (
            <p className="text-green-400 mt-4">✅ Subscription successful!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;

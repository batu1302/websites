"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
    } else if (formData.message.length < 10) {
      newErrors.message = "Die Nachricht muss mindestens 10 Zeichen lang sein";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", company: "", message: "" });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        } else {
          setErrors({ 
            message: data.error || 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.' 
          });
        }
      } catch (error) {
        console.error('Fehler beim Senden:', error);
        setErrors({ 
          message: 'Verbindungsfehler zum Server. Bitte prüfen Sie Ihre Internetverbindung.' 
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Fehler beim Tippen entfernen
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (fieldName: string, hasError: boolean) => `
    w-full px-6 py-4 rounded-xl
    bg-white dark:bg-[#1a1a1a]
    border-2 transition-all duration-300
    text-[#1a1a1a] dark:text-white
    placeholder-[#9a9a9a] dark:placeholder-[#6a6a6a]
    ${hasError 
      ? "border-red-500 focus:border-red-500" 
      : focusedField === fieldName
        ? "border-[#00CED1] shadow-md shadow-[#00CED1]/20"
        : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500"
    }
    focus:outline-none focus:ring-0
  `;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <motion.div 
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>
        <h3 className="text-3xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors duration-300">
          Danke, {formData.name}! Batuhan meldet sich innerhalb von 24 Stunden bei dir.
        </h3>
        <p className="text-[#4a4a4a] dark:text-gray-300 mb-2 transition-colors duration-300">
          Deine Nachricht wurde erfolgreich gesendet.
        </p>
        <p className="text-sm text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">
          📧 Antwort an: {formData.email}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] dark:text-gray-200 mb-2 transition-colors duration-300">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className={inputClasses("name", !!errors.name)}
            placeholder="Max Mustermann"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* E-Mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] dark:text-gray-200 mb-2 transition-colors duration-300">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className={inputClasses("email", !!errors.email)}
            placeholder="max@unternehmen.de"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-400 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </motion.p>
          )}
        </div>
      </div>

      {/* Unternehmen */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[#1a1a1a] dark:text-gray-200 mb-2 transition-colors duration-300">
          Unternehmen (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          onFocus={() => setFocusedField("company")}
          onBlur={() => setFocusedField(null)}
          className={inputClasses("company", false)}
          placeholder="Ihr Unternehmen GmbH"
        />
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] dark:text-gray-200 mb-2 transition-colors duration-300">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          rows={6}
          className={inputClasses("message", !!errors.message)}
          placeholder="Erzählen Sie uns von Ihrem Projekt..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-400 flex items-center gap-1"
          >
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={!isLoading ? { scale: 1.02 } : {}}
        whileTap={!isLoading ? { scale: 0.98 } : {}}
        className={`w-full md:w-auto px-10 py-4 bg-[#00CED1] text-white text-lg font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-[#00A8AB] transition-all duration-300 flex items-center justify-center gap-2 ${
          isLoading ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Wird gesendet...
          </>
        ) : (
          <>
            Nachricht senden
            <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>

      <p className="text-sm text-[#6a6a6a] dark:text-gray-400 transition-colors duration-300">
        * Pflichtfelder
      </p>
    </form>
  );
}


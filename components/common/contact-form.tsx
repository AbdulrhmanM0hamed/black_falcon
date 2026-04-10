"use client";

import { useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactInquiry } from "@/lib/api/contact";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/messages/en";
import type { Locale, Service } from "@/types/content";
import { localize } from "@/lib/i18n";

const budgetOptions = {
  en: ["Under $5k", "$5k - $15k", "$15k - $30k", "$30k+"],
  ar: ["أقل من 5 آلاف دولار", "من 5 إلى 15 ألف دولار", "من 15 إلى 30 ألف دولار", "أكثر من 30 ألف دولار"],
} as const;

export function ContactForm({
  locale,
  dictionary,
  services,
  className,
}: {
  locale: Locale;
  dictionary: Dictionary["form"];
  services: Service[];
  className?: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: services[0]?.slug ?? "",
    budget: "",
    message: "",
  });

  function updateField(name: string, value: string) {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    const requiredFieldsFilled =
      formData.name.trim() &&
      formData.email.trim() &&
      formData.service.trim() &&
      formData.message.trim();

    if (!requiredFieldsFilled) {
      setErrorMessage(dictionary.validationError);
      return;
    }

    startTransition(async () => {
      const result = await submitContactInquiry(formData);

      if (!result.success) {
        setErrorMessage(dictionary.validationError);
        return;
      }

      setSuccessMessage(dictionary.successMessage);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: services[0]?.slug ?? "",
        budget: "",
        message: "",
      });
    });
  }

  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8",
        className,
      )}
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-white/72" htmlFor="name">
              {dictionary.name}
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder={dictionary.name}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/72" htmlFor="company">
              {dictionary.company}
            </label>
            <Input
              id="company"
              value={formData.company}
              onChange={(event) => updateField("company", event.target.value)}
              placeholder={dictionary.company}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-white/72" htmlFor="email">
              {dictionary.email}
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="name@company.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/72" htmlFor="phone">
              {dictionary.phone}
            </label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+20"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-white/72" htmlFor="service">
              {dictionary.service}
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(event) => updateField("service", event.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition-colors duration-300 focus:border-[#ffa240]/55 focus:bg-white/8"
            >
              {services.map((service) => (
                <option
                  key={service.slug}
                  value={service.slug}
                  className="bg-neutral-950 text-white"
                >
                  {localize(service.name, locale)}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/72" htmlFor="budget">
              {dictionary.budget}
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(event) => updateField("budget", event.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition-colors duration-300 focus:border-[#ffa240]/55 focus:bg-white/8"
            >
              <option value="" className="bg-neutral-950 text-white">
                {dictionary.budget}
              </option>
              {budgetOptions[locale].map((option) => (
                <option key={option} value={option} className="bg-neutral-950 text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white/72" htmlFor="message">
            {dictionary.message}
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder={dictionary.message}
          />
        </div>

        <AnimatePresence mode="wait">
          {errorMessage ? (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100"
            >
              {errorMessage}
            </motion.p>
          ) : null}
          {successMessage ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
            >
              <div className="font-medium">{dictionary.successTitle}</div>
              <div className="mt-1 text-emerald-100/80">{successMessage}</div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Button type="submit" disabled={isPending}>
          {isPending ? "..." : dictionary.submit}
        </Button>
      </form>
    </div>
  );
}

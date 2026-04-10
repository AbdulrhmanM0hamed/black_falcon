"use client";

import { motion } from "framer-motion";
import { MessageCircleMore } from "lucide-react";

export function WhatsAppFloat({ href }: { href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ffa240] text-neutral-950 shadow-[0_20px_50px_rgba(255,162,64,0.32)] max-md:start-5 md:bottom-8 md:end-8"
    >
      <MessageCircleMore className="h-6 w-6" />
    </motion.a>
  );
}

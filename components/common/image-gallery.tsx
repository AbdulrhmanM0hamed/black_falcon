"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { type GalleryImage, type Locale } from "@/types/content";
import { localize } from "@/lib/i18n";

export function ImageGallery({
  images,
  locale,
}: {
  images: GalleryImage[];
  locale: Locale;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {images.slice(0, 4).map((image, index) => {
          const isLastVisible = index === 3;
          const hasMore = images.length > 4;
          const remainingCount = images.length - 3;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative aspect-video">
                <Image
                  src={image.src}
                  alt={localize(image.alt, locale)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Last slot overlay if more images exist */}
                {isLastVisible && hasMore ? (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                    <div className="text-4xl font-bold text-white">
                      +{remainingCount}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-white/10 p-4 backdrop-blur-md">
                        <Maximize2 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 backdrop-blur-lg"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute right-6 top-6 z-[110] rounded-full bg-white/5 p-3 text-white transition-colors hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <X className="h-6 w-6" />
            </button>

            <div 
              className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-[1.5rem]"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={images[selectedIndex].src}
                    alt={localize(images[selectedIndex].alt, locale)}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4 md:px-10">
              <button
                className="rounded-full bg-white/5 p-4 text-white backdrop-blur-md transition-colors hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              <button
                className="rounded-full bg-white/5 p-4 text-white backdrop-blur-md transition-colors hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

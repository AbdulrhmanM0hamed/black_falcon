const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../app/[locale]/index-1.html');
const cssOutPath = path.join(__dirname, '../components/common/global-loader.module.css');
const tsxOutPath = path.join(__dirname, '../components/common/global-loader.tsx');

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extract CSS
const cssMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
let cssStr = cssMatch ? cssMatch[1] : '';

// Convert CSS to CSS module syntax
cssStr = cssStr.replace(/#preloader/g, '.preloader');
cssStr = cssStr.replace(/\.loader-content/g, '.loaderContent');
cssStr = cssStr.replace(/#plane/g, '.plane');
cssStr = cssStr.replace(/\.loader-hidden/g, '.loaderHidden');
// Update z-index to ensure it sits on top of everything
cssStr = cssStr.replace(/z-index: 9999;/g, 'z-index: 999999;');

// Extract HTML SVG content
const svgMatch = htmlContent.match(/<section class="loader-content">([\s\S]*?)<\/section>/);
const svgStr = svgMatch ? svgMatch[1].trim() : '';

// Create TSX component
const tsxContent = `"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./global-loader.module.css";
import { cn } from "@/lib/utils";

export function GlobalLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader on path change
    setIsLoading(true);

    // Hide loader after 3 seconds as requested
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Optionally avoid completely unmounting so CSS transitions work:
  return (
    <div className={cn(styles.preloader, !isLoading && styles.loaderHidden)}>
      <section 
        className={styles.loaderContent}
        dangerouslySetInnerHTML={{ __html: \`${svgStr.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} 
      />
    </div>
  );
}
`;

// Make sure directories exist
if (!fs.existsSync(path.dirname(cssOutPath))) {
    fs.mkdirSync(path.dirname(cssOutPath), { recursive: true });
}

fs.writeFileSync(cssOutPath, cssStr, 'utf8');
fs.writeFileSync(tsxOutPath, tsxContent, 'utf8');

console.log("Successfully extracted CSS and TSX component!");

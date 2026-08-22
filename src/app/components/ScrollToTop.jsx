"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

// Real device viewport sizes so the site's responsive breakpoints apply.
const DEVICES = {
  mobile: { w: 390, h: 844, label: "Mobile · 390px" },
  tablet: { w: 820, h: 1180, label: "Tablet · 820px" },
};

const DeviceSwitcher = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    document.body.style.overflow = device === "desktop" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [device]);

  const dims = DEVICES[device];
  const baseBtn =
    "p-2 rounded-full transition-all duration-200 flex items-center justify-center";
  const activeBtn = "bg-gradient-to-br from-purple-500 to-pink-500 text-white";
  const idleBtn =
    "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-purple-500/10";

  return (
    <>
      <div className="hidden lg:flex fixed bottom-6 left-6 z-[70] items-center gap-1 p-1 rounded-full border border-purple-500/30 bg-[var(--bg-secondary)] shadow-lg shadow-purple-900/20 backdrop-blur-sm">
        <button
          onClick={() => setDevice("mobile")}
          className={`${baseBtn} ${device === "mobile" ? activeBtn : idleBtn}`}
          title="Mobile view"
          aria-label="Mobile view"
        >
          <DevicePhoneMobileIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => setDevice("tablet")}
          className={`${baseBtn} ${device === "tablet" ? activeBtn : idleBtn}`}
          title="Tablet view"
          aria-label="Tablet view"
        >
          <DeviceTabletIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => setDevice("desktop")}
          className={`${baseBtn} ${device === "desktop" ? activeBtn : idleBtn}`}
          title="Desktop view"
          aria-label="Desktop view"
        >
          <ComputerDesktopIcon className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {device !== "desktop" && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setDevice("desktop")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-white/80 text-sm font-medium">{dims.label}</span>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              style={{ width: dims.w, maxWidth: "95vw", height: `min(85vh, ${dims.h}px)` }}
              className="rounded-[2rem] border-[10px] border-neutral-800 bg-black overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <iframe
                src="/?preview=1"
                title={dims.label}
                style={{ width: dims.w, height: "100%", border: "0", backgroundColor: "var(--bg-primary)" }}
              />
            </motion.div>
            <span className="text-white/60 text-xs">Click outside to exit</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isPreviewFrame, setIsPreviewFrame] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setIsPreviewFrame(params.get("preview") === "1");
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Inside the preview iframe, hide all floating controls to avoid nesting.
  if (isPreviewFrame) return null;

  return (
    <>
      <DeviceSwitcher />
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpIcon className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;

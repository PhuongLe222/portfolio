"use client";
import { useState } from "react";
import WelcomeScreen from "./_components/welcome";
import { Hero } from "./_components/hero";
import { AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return (
      <AnimatePresence mode="wait">
        <WelcomeScreen onCompleted={() => setShowWelcome(false)} />
      </AnimatePresence>
    );
  }
  return <Hero />;
}

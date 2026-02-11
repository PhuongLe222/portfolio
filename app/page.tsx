"use client";
import { useState } from "react";
import WelcomeScreen from "./_components/welcome";
import { AnimatePresence } from "framer-motion";
import { Homepage } from "./_components/homepage";

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return (
      <AnimatePresence mode="wait">
        <WelcomeScreen onCompleted={() => setShowWelcome(false)} />
      </AnimatePresence>
    );
  }
  return <Homepage />;
}

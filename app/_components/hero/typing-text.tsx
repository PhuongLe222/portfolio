"use client";

import { useEffect, useState } from "react";

export const TypingText = ({
  words,
  pauseDuration = 1000,
  typingSpeed = 100,
  erasingSpeed = 50,
}: {
  words: string[];
  pauseDuration?: number;
  typingSpeed?: number;
  erasingSpeed?: number;
}) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isTyping) {
          if (charIndex < words[wordIndex].length) {
            setText((prev) => prev + words[wordIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsTyping(false), pauseDuration);
          }
        } else {
          if (charIndex > 0) {
            setText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            setWordIndex((prev) => (prev + 1) % words.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? typingSpeed : erasingSpeed
    );
    return () => clearTimeout(timeout);
  }, [
    charIndex,
    erasingSpeed,
    isTyping,
    pauseDuration,
    typingSpeed,
    wordIndex,
    words,
  ]);
  return (
    <div
      className="h-12 flex items-center"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <span className="text-xl md:text-2xl bg-gradient-to-r from-foreground to-sub-text bg-clip-text text-transparent font-light">
        {text}
      </span>
      <span className="w-[3px] h-6 bg-gradient-to-t from-primary to-secondary ml-1 animate-blink"></span>
    </div>
  );
};

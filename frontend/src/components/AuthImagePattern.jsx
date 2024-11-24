import { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const texts = [
    "Welcome to ChatSphere!",
    "Connect with friends.",
    "Start a new conversation.",
  ];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const typingSpeed = 100; // Typing speed in ms
  const eraseSpeed = 50; // Erase speed in ms

  useEffect(() => {
    let timeout;

    if (!isErasing && charIndex < texts[textIndex].length) {
      // Typing phase
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isErasing && charIndex === texts[textIndex].length) {
      // Pause before erasing
      timeout = setTimeout(() => setIsErasing(true), 2000);
    } else if (isErasing && charIndex > 0) {
      // Erasing phase
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else if (isErasing && charIndex === 0) {
      // Switch to the next text
      setIsErasing(false);
      setTextIndex((prev) => (prev + 1) % texts.length); // Loop through texts
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, textIndex]);

  return (
    <div
      className="size-12 rounded-xl  flex items-center justify-center 
      group-hover:bg-primary/20 transition-colors"
    >
      <div className="text-2xl font-mono text-center text-gray-800">
        <span className="text-white">{currentText}</span>
        <span className="border-r-2 border-gray-800 animate-pulse">&nbsp;</span>
      </div>
    </div>
  );
};

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200  p-12">
      <div className="max-w-md text-center">
        <div className="mockup-phone border-primary mb-4">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <TypewriterEffect />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Cycles through `words` with a type / pause / delete rhythm. */
export function useTyping(words: string[]) {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0] ?? "");
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex] ?? "";
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? 38 : 72;
      if (!deleting && charIndex === word.length) {
        delay = 1700;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 420;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [words, reduceMotion]);

  return text;
}

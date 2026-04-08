"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const SNIPPETS = [
  {
    filename: "page.tsx",
    code: [
      { indent: 0, tokens: [{ c: "#c678dd", t: "import" }, { c: "#e5c07b", t: " { WebApp, Success }" }, { c: "#c678dd", t: " from" }, { c: "#98c379", t: " '@vyntrax/core'" }, { c: "#6c7986", t: ";" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ c: "#c678dd", t: "const" }, { c: "#61afef", t: " buildProject" }, { c: "#56b6c2", t: " =" }, { c: "#c678dd", t: " async" }, { c: "#abb2bf", t: " () =>" }, { c: "#e5c07b", t: " {" }] },
      { indent: 1, tokens: [{ c: "#c678dd", t: "const" }, { c: "#e06c75", t: " score" }, { c: "#56b6c2", t: " =" }, { c: "#c678dd", t: " await" }, { c: "#61afef", t: " optimize" }, { c: "#abb2bf", t: "()" }, { c: "#6c7986", t: ";" }] },
      { indent: 1, tokens: [{ c: "#c678dd", t: "if" }, { c: "#abb2bf", t: " (score" }, { c: "#56b6c2", t: " ===" }, { c: "#98c379", t: " '100%'" }, { c: "#abb2bf", t: ")" }, { c: "#e5c07b", t: " {" }] },
      { indent: 2, tokens: [{ c: "#c678dd", t: "return" }, { c: "#e5c07b", t: " <" }, { c: "#e06c75", t: "Success" }, { c: "#d19a66", t: " growth" }, { c: "#56b6c2", t: "=" }, { c: "#e5c07b", t: "{Max}" }, { c: "#e5c07b", t: " />" }, { c: "#6c7986", t: ";" }] },
      { indent: 1, tokens: [{ c: "#e5c07b", t: "}" }] },
      { indent: 0, tokens: [{ c: "#e5c07b", t: "}" }] },
    ],
  },
  {
    filename: "api/analytics.ts",
    code: [
      { indent: 0, tokens: [{ c: "#c678dd", t: "interface" }, { c: "#e5c07b", t: " Analytics" }, { c: "#e5c07b", t: " {" }] },
      { indent: 1, tokens: [{ c: "#e06c75", t: "visitors" }, { c: "#6c7986", t: ":" }, { c: "#e5c07b", t: " number" }, { c: "#6c7986", t: ";" }] },
      { indent: 1, tokens: [{ c: "#e06c75", t: "conversion" }, { c: "#6c7986", t: ":" }, { c: "#e5c07b", t: " number" }, { c: "#6c7986", t: ";" }] },
      { indent: 0, tokens: [{ c: "#e5c07b", t: "}" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ c: "#c678dd", t: "export async function" }, { c: "#61afef", t: " getStats" }, { c: "#abb2bf", t: "()" }, { c: "#e5c07b", t: " {" }] },
      { indent: 1, tokens: [{ c: "#c678dd", t: "const" }, { c: "#e06c75", t: " data" }, { c: "#56b6c2", t: " =" }, { c: "#c678dd", t: " await" }, { c: "#61afef", t: " db" }, { c: "#abb2bf", t: ".analytics." }, { c: "#61afef", t: "findAll" }, { c: "#abb2bf", t: "()" }, { c: "#6c7986", t: ";" }] },
      { indent: 1, tokens: [{ c: "#c678dd", t: "return" }, { c: "#abb2bf", t: " { data, " }, { c: "#d19a66", t: "status" }, { c: "#56b6c2", t: ":" }, { c: "#98c379", t: " 'ok'" }, { c: "#abb2bf", t: " };" }] },
    ],
  },
  {
    filename: "hooks/useSEO.ts",
    code: [
      { indent: 0, tokens: [{ c: "#c678dd", t: "import" }, { c: "#e5c07b", t: " { useEffect }" }, { c: "#c678dd", t: " from" }, { c: "#98c379", t: " 'react'" }, { c: "#6c7986", t: ";" }] },
      { indent: 0, tokens: [] },
      { indent: 0, tokens: [{ c: "#c678dd", t: "export function" }, { c: "#61afef", t: " useSEO" }, { c: "#abb2bf", t: "(title: string)" }, { c: "#e5c07b", t: " {" }] },
      { indent: 1, tokens: [{ c: "#61afef", t: "useEffect" }, { c: "#abb2bf", t: "(() => {" }] },
      { indent: 2, tokens: [{ c: "#abb2bf", t: "document.title = " }, { c: "#98c379", t: "`${title} | Vyntrax`" }, { c: "#6c7986", t: ";" }] },
      { indent: 1, tokens: [{ c: "#abb2bf", t: "}, [title]);" }] },
      { indent: 0, tokens: [{ c: "#e5c07b", t: "}" }] },
    ],
  },
];

function buildCharStream(snippet: (typeof SNIPPETS)[0]) {
  const chars: { char: string; color: string; indent: number }[] = [];
  snippet.code.forEach((line) => {
    if (line.tokens.length === 0) {
      chars.push({ char: "\n", color: "", indent: 0 });
      return;
    }
    line.tokens.forEach((token) => {
      token.t.split("").forEach((ch) => {
        chars.push({ char: ch, color: token.c, indent: line.indent });
      });
    });
    chars.push({ char: "\n", color: "", indent: 0 });
  });
  return chars;
}

function buildLines(chars: ReturnType<typeof buildCharStream>, count: number) {
  const lines: { parts: { text: string; color: string }[]; indent: number }[] = [];
  let cur: { parts: { text: string; color: string }[]; indent: number } = { parts: [], indent: 0 };

  chars.slice(0, count).forEach((ch) => {
    if (ch.char === "\n") {
      lines.push({ parts: [...cur.parts], indent: cur.indent });
      cur = { parts: [], indent: 0 };
    } else {
      if (cur.parts.length === 0) cur.indent = ch.indent;
      const last = cur.parts[cur.parts.length - 1];
      if (last && last.color === ch.color) {
        last.text += ch.char;
      } else {
        cur.parts.push({ text: ch.char, color: ch.color });
      }
    }
  });
  if (cur.parts.length > 0) lines.push(cur);
  return lines;
}

export default function HeroVisual() {
  // All state as refs to avoid stale closure issues in the timer loop
  const snippetIdxRef = useRef(0);
  const revealedRef = useRef(0);
  const phaseRef = useRef<"typing" | "pausing" | "deleting">("typing");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Only state used for rendering
  const [displaySnippetIdx, setDisplaySnippetIdx] = useState(0);
  const [displayRevealed, setDisplayRevealed] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const startTyping = useCallback(() => {
    clearTimers();
    phaseRef.current = "typing";
    setShowCursor(true);

    const stream = buildCharStream(SNIPPETS[snippetIdxRef.current]);
    const total = stream.length;

    timerRef.current = setInterval(() => {
      revealedRef.current += 1;
      setDisplayRevealed(revealedRef.current);

      if (revealedRef.current >= total) {
        clearTimers();
        phaseRef.current = "pausing";
        setShowCursor(false);
        // After pause, start deleting
        timeoutRef.current = setTimeout(startDeleting, 1800);
      }
    }, 22);
  }, [clearTimers]);

  const startDeleting = useCallback(() => {
    clearTimers();
    phaseRef.current = "deleting";
    setShowCursor(true);

    timerRef.current = setInterval(() => {
      revealedRef.current -= 1;
      setDisplayRevealed(revealedRef.current);

      if (revealedRef.current <= 0) {
        revealedRef.current = 0;
        clearTimers();
        // Switch snippet
        snippetIdxRef.current = (snippetIdxRef.current + 1) % SNIPPETS.length;
        setDisplaySnippetIdx(snippetIdxRef.current);
        setDisplayRevealed(0);
        setShowCursor(false);
        // Short pause before typing next
        timeoutRef.current = setTimeout(startTyping, 400);
      }
    }, 8);
  }, [clearTimers, startTyping]);

  // Kick off on mount
  useEffect(() => {
    timeoutRef.current = setTimeout(startTyping, 300);
    return clearTimers;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const snippet = SNIPPETS[displaySnippetIdx];
  const charStream = buildCharStream(snippet);
  const lines = buildLines(charStream, displayRevealed);
  const totalLines = snippet.code.length;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#00CED1] opacity-20 blur-[100px] rounded-full" />

      {/* Editor Mockup */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[300px] sm:w-[380px] md:w-[450px] lg:w-[500px]"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 bg-[#1e1e1e] flex flex-col">
          {/* Mac Header */}
          <div className="h-10 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-gray-700/50 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <div className="flex-1 text-center text-xs text-gray-400 font-mono tracking-wide flex items-center justify-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
              </svg>
              {snippet.filename}
            </div>
          </div>

          {/* Code Body */}
          <div
            className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-[1.65] overflow-hidden"
            style={{ minHeight: `${totalLines * 1.65 + 2}em` }}
          >
            <div className="flex gap-4">
              {/* Line Numbers */}
              <div className="select-none text-right text-gray-700 flex flex-col" style={{ minWidth: "1rem" }}>
                {snippet.code.map((_, i) => (
                  <span key={i} className="leading-[1.65]">{i + 1}</span>
                ))}
              </div>

              {/* Code */}
              <div className="flex-1 flex flex-col">
                {lines.map((line, li) => {
                  const isLastLine = li === lines.length - 1;
                  if (line.parts.length === 0) {
                    return <div key={li} style={{ height: "1.65em" }} />;
                  }
                  return (
                    <div
                      key={li}
                      className="flex flex-wrap items-center leading-[1.65]"
                      style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                    >
                      {line.parts.map((p, pi) => (
                        <span key={pi} style={{ color: p.color, whiteSpace: "pre" }}>
                          {p.text}
                        </span>
                      ))}
                      {isLastLine && showCursor && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-[2px] h-[1em] bg-[#00CED1] ml-px"
                        />
                      )}
                    </div>
                  );
                })}

                {/* Show cursor on empty line when all is deleted */}
                {lines.length === 0 && showCursor && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-[2px] h-[1em] bg-[#00CED1]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge 1 - Top Right */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-10 right-0 md:-right-8 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl z-20"
      >
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Performance</span>
          <span className="text-3xl font-bold text-[#1a1a1a] dark:text-white flex items-baseline">
            100<span className="text-[#00CED1] text-xl ml-1">%</span>
          </span>
        </div>
      </motion.div>

      {/* Floating Badge 2 - Bottom Left */}
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-12 left-0 md:-left-12 bg-[#1a1a1a] px-6 py-4 rounded-2xl shadow-2xl z-20 border border-gray-800"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#00CED1]/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#00CED1] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 font-medium">Umsatzplus</span>
            <span className="text-2xl font-bold text-white">+42%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

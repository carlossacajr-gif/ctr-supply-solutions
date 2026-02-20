"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Mic, Send, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [step, setStep] = useState<"idle" | "listening" | "processing" | "done">("idle");

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query) return;
        setStep("processing");
        setTimeout(() => {
            setStep("done");
        }, 1500);
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <Button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full h-14 w-14 p-0 bg-ctr-slate shadow-2xl hover:bg-slate-800 border border-slate-700 flex items-center justify-center group"
                >
                    <Command className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                </Button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-ctr-slate/90 border border-slate-700 backdrop-blur-xl rounded-2xl shadow-2xl z-50 overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                                        <span className="text-ctr-blue">AI</span> Sourcing Assistant
                                    </h2>
                                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {step === "done" ? (
                                    <div className="text-center py-8">
                                        <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send className="h-8 w-8 text-green-400" />
                                        </div>
                                        <h3 className="text-white font-bold text-lg">Request Received!</h3>
                                        <p className="text-slate-400 text-sm mt-2">
                                            Our AI is analyzing your request for "{query}". <br />
                                            A sourcing agent will email you a quote shortly.
                                        </p>
                                        <Button onClick={() => { setIsOpen(false); setStep("idle"); setQuery(""); }} className="mt-6" variant="outline">
                                            Close
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="relative">
                                        <textarea
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder="Example: I need 2,000 units of Bluetooth 5.0 headphones with custom packaging, target price $12..."
                                            className="w-full h-32 bg-slate-800/50 border border-slate-600 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-ctr-blue resize-none"
                                            autoFocus
                                        />
                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex gap-2 text-xs text-slate-500">
                                                <span className="bg-slate-800 px-2 py-1 rounded">⌘ K to close</span>
                                            </div>
                                            <Button
                                                type="submit"
                                                disabled={!query || step === "processing"}
                                                className={step === "processing" ? "animate-pulse" : ""}
                                            >
                                                {step === "processing" ? "Analyzing..." : "Analyze Request"}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 rounded-full border-slate-200">
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="group relative w-10 h-10 p-0 rounded-full border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:bg-slate-50 dark:hover:hover:bg-slate-800 transition-colors"
        >
            <span className="sr-only">Toggle theme</span>
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === "dark" ? 40 : 0,
                        opacity: theme === "dark" ? 0 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun className="h-[1.1rem] w-[1.1rem] text-ctr-slate group-hover:text-ctr-blue transition-colors" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        y: theme === "dark" ? 0 : -40,
                        opacity: theme === "dark" ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon className="h-[1.1rem] w-[1.1rem] text-slate-100 group-hover:text-blue-400 transition-colors" />
                </motion.div>
            </div>
        </Button>
    )
}

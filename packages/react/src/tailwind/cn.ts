/**
 * Utility for merging Tailwind CSS class names with conflict resolution.
 * Replaces Emotion's runtime CSS-in-JS with static Tailwind classes.
 *
 * @param inputs - Class names, arrays, or conditional objects
 * @returns Merged and deduplicated class string
 * @example
 * cn("px-4 py-2", "px-8")       // => "py-2 px-8"
 * cn("bg-red-500", false, "p-4") // => "bg-red-500 p-4"
 */
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

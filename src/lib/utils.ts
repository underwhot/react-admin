import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string) {
  return text
    .toLowerCase()                 // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, '')  // Remove special characters
    .trim()                        // Remove leading/trailing spaces
    .replace(/\s+/g, '-')          // Replace spaces with dashes
}
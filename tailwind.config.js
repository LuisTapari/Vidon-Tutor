import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
    theme: {
        extend: {
            colors: {
                'verde-vidon': 'var(--verde-vidon)',
                'verde-oscuro': 'var(--verde-oscuro)',
                'blanco-hueso': 'var(--blanco-hueso)',
                'negro-suave': 'var(--negro-suave)',
                'marron-claro': 'var(--marron-claro)',
            },
            fontFamily: {
                'anton': ['Anton', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
                'bebas': ['Bebas Neue', 'sans-serif'],
                'lobster': ['Lobster', 'cursive'],
                'outfit': ['Outfit', 'sans-serif'],
                'playfair': ['Playfair Display', 'serif'],
            },
        },
    },
})
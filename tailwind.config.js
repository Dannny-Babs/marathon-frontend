import { text } from 'stream/consumers';


/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				Instrument: ["Plus Jakarta Sans", "sans-serif"]
			},
			backgroundImage: {
				"auth-bg": "url('/src/assets/images/auth-bg.png')",
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				gray: {
					100: 'hsl(var(--Gray-100))',
					200: 'hsl(var(--Gray-200))',
					300: 'hsl(var(--Gray-300))',
					400: 'hsl(var(--Gray-400))',
					500: 'hsl(var(--Gray-500))',
					600: 'hsl(var(--Gray-600))',
					700: 'hsl(var(--Gray-700))',
					800: 'hsl(var(--Gray-800))',
					900: 'hsl(var(--Gray-900))'
				},
				primaryBlue: {
					100: 'hsl(var(--Blue-100))',
					200: 'hsl(var(--Blue-200))',
					300: 'hsl(var(--Blue-300))',
					400: 'hsl(var(--Blue-400))',
					500: 'hsl(var(--Blue-500))',
					600: 'hsl(var(--Blue-600))',
					700: 'hsl(var(--Blue-700))',
					800: 'hsl(var(--Blue-800))',
					900: 'hsl(var(--Blue-900))'

				},
				text: {
					dark: 'hsl(var(--textDark))',
					light: 'hsl(var(--textLight))'
				}

		
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}


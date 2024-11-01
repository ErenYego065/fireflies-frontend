import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backdropBlur: {
				'16': '16px'
			},
			backgroundImage: {
				'gradient-radial': 'linear-gradient(215.95deg, #13AFB6 0%, rgba(217, 217, 217, 0) 57.47%)',
				'gradient-to-r-from-blue-to-teal': 'linear-gradient(90deg, #10507F 0%, #00ADB5 100%)',
				'gradient-fade': 'linear-gradient(0deg, rgba(0, 173, 181, 0.175) -29.68%, rgba(255, 255, 255, 0.35) 100%)',
				'mobile-background': 'url("/images/home/mobile-bg.png")',
				'desktop-background': 'url("/images/home/desktop-bg.png")',
				'blog-background': 'url("/images/blogs/blog-bg.jpg")',
				'blog-gradient': `
          linear-gradient(270deg, rgba(255, 255, 255, 0.015) -20%, rgba(40, 40, 40, 0.186781) 25.96%, rgba(255, 255, 255, 0.015) 123.64%),
          linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
        `,
				'gradient-to-r-from-teal-to-blue': 'linear-gradient(270deg, #10507F 0%, #00ADB5 100%)',
				'custom-gradient-dark': 'linear-gradient(98.32deg, #505D65 20.43%, #000000 100%)',
				'custom-gradient-light': 'linear-gradient(180deg, #CCEDEE 0%, #FAFAFA 100%)',
				'reward-bg': 'linear-gradient(0.47deg, #FAFAFA 85.1%, #13AFB6 129.31%)',
				'streak-dashboard': 'linear-gradient(218.15deg, rgba(217, 217, 217, 0) 47.48%, #13AFB6 145.36%)',
				"card-1": "linear-gradient(270deg, #00ADB5 0%, #A460EC 100%)",
				"card-2": "linear-gradient(230.17deg, #00ADB5 15.59%, #E8CD5C 89.71%)",
				"card-3": "linear-gradient(90deg, #101D7F 0%, #00ADB5 100%)",
			},
			borderColor: {
				'streak': '1 linear-gradient(130.82deg, #E9EBED 0%, #A9AEB7 100%) 1'
			},
			height: {
				'screen-minus-header': 'calc(100vh - 5rem)'
			},
			boxShadow: {
				'white-inset': '0px 0px 16px 0px #FFFFFF8F inset',
				'teal-drop': '0px 12px 16px 0px #00727766',
				'custom-inset': 'inset 4px -4px 10px 0px rgba(255, 255, 255, 0.33)',
				'streak-shadow': '0px 10px 20px 0px #00000026',
				sm: "0px 1px 2px 0px #0000000D"
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
					foreground: 'hsl(var(--primary-foreground))',
					500: "#00ADB5",
					900: "#007277"
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					200: "#D4D7DB",
					400: "#A9AEB7",
					500: "#6A727F",
					700: "#5A616C",
					900: "#3B3F46"
				},
				neutral: {
					200: "#CCCBCB",
					700: "#5A5555",
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
				authBackgroundFromColor: 'rgba(19, 175, 182, 1)',
				authBackgroundToColor: 'rgba(217, 217, 217, 0)',
				'custom-gray': '#505D65',
				'custom-black': '#000000'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			screens: {
				"2xl": "1440px"
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	],
};
export default config;

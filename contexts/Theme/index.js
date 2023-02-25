import { createContext, useContext } from "react";

export const ThemeContext = createContext({ theme: "light" });
export const useTheme = () => useContext(ThemeContext);

const common = {
	spacing: {
		size: 4,
	},
	container: 1276,
	breakPoints: {
		min: 0,
		xs: 768,
		sm: 992,
		md: 1200,
		lg: 1366,
		xl: 1920,
	},
	font: {
		base: "ProximaRegular",
		bold: "ProximaBold",
		black: "ProximaBlack",
	},
	fontSize: {
		xs: "0.625rem" /* 10px */,
		sm: "0.75rem" /* 12px */,
		md: "0.875rem" /* 14px */,
		base: "1rem" /* 16px */,
		lg: "1.125rem" /* 18px */,
		xl: "1.25rem" /* 20px */,
		"2xl": "1.375rem" /* 22px */,
		"3xl": "1.5rem" /* 24px */,
		"4xl": "2rem" /* 32px */,
		"5xl": "2.25rem" /* 36px */,
		"6xl": "2.625rem" /* 42px */,
		"10xl": "3.4rem" /* 10px */,
	},
	colors: {
		primary: "#fafafa",
		white: "#fff",
		black: "#000",
		black_3: "rgba(0, 0, 0, 0.3)",
		grey: "#BDBDBD",
		grey_100: "#C4C4C4",
		light_grey: "#8D8D8D",
		dark_grey: "#323232",
		purple: "#C0A9F0",
		light_purple: "#D8CCF3",
		border: "#E5E5E5",
		yellow: "#E6DFA0",
		light_green: "#98E1C5",
		dark: "#333333",
		light_gray: "#F2F2F2",
		dark_gray: "#323232",
		gray: "#D9D9D9",
		black_100: "rgba(0,0,0,0.1)",
		white_500: "rgba(255, 255, 255, 0.5)",
		white_900: "rgba(255,255,255,0.9)",
		transparent: "rgba(255,255,255,0)",
	},
};
export const lightTheme = {
	...common,
};
export const darkTheme = {
	...common,
};
export const getTheme = (value) => {
	const theme = { ...value };
	const variants = {
		button: {
			sm: {
				height: "40px",
				padding: "0 14px",
				font: theme.fontSize.sm,
			},
			lg: {
				height: "48px",
				padding: "0 14px",
				font: theme.fontSize.md,
			},
			md: {
				height: "32px",
				padding: "0 14px",
				font: theme.fontSize.md,
			},
			outlined: {
				background: theme.colors.primary,
				color: theme.colors.black,
				border: theme.colors.black,
			},
			ghost: {
				background: theme.colors.transparent,
				color: theme.colors.black,
				border: theme.colors.black,
			},
			ghost_white: {
				background: theme.colors.transparent,
				color: theme.colors.white,
				border: theme.colors.white,
			},
			contained: {
				background: theme.colors.light_gray,
				color: theme.colors.black,
				border: theme.colors.light_gray,
			},
			black: {
				background: theme.colors.black,
				color: theme.colors.white,
				border: theme.colors.black,
			},
			rounded: {
				borderRadius: "50px",
			},
			flat: {
				borderRadius: "5px",
			},
		},
		slider: {
			sm: {
				dot: "18px",
				bar: "6px",
			},
			md: {
				dot: "24px",
				bar: "14px",
			},
		},
	};
	return {
		...theme,
		...variants,
	};
};

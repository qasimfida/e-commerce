import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import {
	darkTheme,
	getTheme,
	lightTheme,
	ThemeContext,
} from "../contexts/Theme";
import { GlobalStyle } from "../styles";

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = useCallback(
		(value) => {
			if (value !== theme) {
				setTheme(value);
				localStorage.setItem("theme", value);
			}
		},
		[theme]
	);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (savedTheme && ["dark", "light"].includes(savedTheme)) {
			toggleTheme(savedTheme);
		} else if (prefersDark) {
			toggleTheme("light");
		}
	}, [toggleTheme]);

	const value = useMemo(() => {
		return { theme, toggleTheme };
	}, [theme, toggleTheme]);
	return (
		<>
			<ThemeContext.Provider value={value}>
				<ThemeProvider
					theme={theme === "dark" ? getTheme(darkTheme) : getTheme(lightTheme)}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</ThemeContext.Provider>
			<GlobalStyle />
		</>
	);
}

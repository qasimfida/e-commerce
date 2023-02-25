import Image from "next/image";
import { useTheme } from "../../contexts/Theme";
import { MenuIcon, MoonIcon, SignInIcon } from "../Icons";
import SearchBar from "../SearchBar";
import Container from "./container";
import { Flex, Header, HeaderWrapper, Img, ThemeIcon } from "./styles";

export default function Navbar() {
	const context = useTheme();
	const { theme, toggleTheme } = context;
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<HeaderWrapper>
			<Container>
				<Header>
					<Img>
						<Image
							src="./images/logo.svg"
							alt="mobilekiya-logo"
							width={124}
							height={32}
						/>
					</Img>
					<SearchBar
						className="hide-sm"
						placeholder="Search here for mobile price"
						onSubmit={handleSubmit}
					/>
					<Flex>
						<SignInIcon className="nav-icons " />
						<MenuIcon className="nav-icons " />
						<ThemeIcon className="hide-sm">
							<MoonIcon color="#000" fill="#000" size="10px" />
						</ThemeIcon>
					</Flex>
					{/* <div onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>
					{theme}
				</div> */}
				</Header>
				<SearchBar
					className="hidden-sm mt-3 ml-0"
					placeholder="Search here for mobile price"
					onSubmit={handleSubmit}
				/>
			</Container>
		</HeaderWrapper>
	);
}

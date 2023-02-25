import Navbar from "./navbar";
import Footer from "./footer";
import { LayoutWrapper } from "./styles";

export default function Layout({ children }) {
	return (
		<LayoutWrapper>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</LayoutWrapper>
	);
}

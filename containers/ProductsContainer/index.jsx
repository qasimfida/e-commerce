import React from "react";
import Container from "../../components/Layout/container";
import MainContainer from "../MainContainer";
import Slider from "../Slider";
import { ProductsContainerWrapper } from "./styles";

const ProductsContainer = ({ bg }) => {
	const priceAboveGrid2 = { xs: 6, sm: 4, md: 2 };
	const items = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
		{ id: 10 },
		{ id: 11 },
		{ id: 12 },
		{ id: 13 },
		{ id: 14 },
		{ id: 15 },
		{ id: 16 },
	];

	const onClick = () => {
		console.log("CLICK");
	};
	return (
		<ProductsContainerWrapper bg={bg} className="pb-sm-20 pb-xs-8  ">
			<Container>
				<MainContainer
					title="How about these?"
					onClick={onClick}
					grid={priceAboveGrid2}
					items={items?.slice(0, 12)}
					size="small"
					border=""
					cardBg="white"
					btnLabel="View more"
					className="mt-10 pt-4"
					gapXs={4}
					gapSm={4}
				/>
				<Slider
					title="Recommended for you"
					hasBorder
					items={items?.slice(3, 9)}
				/>
				<MainContainer
					title="Recommended for you"
					onClick={onClick}
					grid={priceAboveGrid2}
					items={items?.slice(3, 9)}
					size="small"
					border=""
					cardBg="white"
					btnLabel="View more"
					gapXs={5}
					gapSm={4}
					className="hiddenXs"
				/>
			</Container>
		</ProductsContainerWrapper>
	);
};

export default ProductsContainer;

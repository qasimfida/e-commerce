import Image from "next/image";
import React, { useState } from "react";
import Divider from "../../components/Divider";
import {
	CameraIcon,
	ProcessorIcon,
	SizeIcon,
	Star,
} from "../../components/Icons";
import Col from "../../components/Layout/col";
import Container from "../../components/Layout/container";
import Row from "../../components/Layout/row";
import ProductsContainer from "../ProductsContainer";
import Reviews from "./Reviews";
import Specifications from "./Specifications";
import {
	BorderedTitle,
	BreadCrum,
	Chip,
	Color,
	Colors,
	ColorsWrapper,
	DetailsWrapper,
	Header,
	Img,
	Info,
	Price,
	ProductCover,
	Spec,
	Specs,
	TabsTitle,
	TabsWrapper,
	Text,
	Title,
	Wrapper,
} from "./styles";
const TPYES = {
	REVIEWS: "REVIEWS",
	SPECIFICATIONS: "SPECIFICATIONS",
};
const Details = ({ props }) => {
	return (
		<DetailsWrapper {...props}>
			<BreadCrum>Home / Apple / iPhone 14</BreadCrum>
			<Chip>
				<Star size="medium" className="mr star-icon" />
				3.4
			</Chip>
			<Title>iPhone 14 Pro Max</Title>
			<Text height="auto" className="pr-10 mt-4 mb-5">
				Apple iPhone 14 Pro Max price in Pakistan. Official dealers and warranty
				providers regulate the retail price of Apple mobile products in official
				warranty.
			</Text>
		</DetailsWrapper>
	);
};
const Features = () => {
	return (
		<Specs>
			<Text light>RELEASED</Text>
			<Text className="mb-5">2022, September 16</Text>
			<Text light>CAPACITY</Text>
			<Text className="mb-5">128 GB / 256 GB / 512 GB / 1TB / 2TB</Text>
			<Text light>BATTERY</Text>
			<Text className="mb-5">3279mAh</Text>
			<Info>
				<Spec>
					<SizeIcon />
					<Text bold className="mt-4">
						{"6.1"}&quot;
					</Text>
					<Text>1170x2532 pixels</Text>
				</Spec>
				<Spec>
					<CameraIcon />
					<Text bold className="mt-4">
						12MP
					</Text>
					<Text>2160p</Text>
				</Spec>
				<Spec>
					<ProcessorIcon />
					<Text bold className="mt-4">
						6GB
					</Text>
					<Text>Apple A15 Bionic</Text>
				</Spec>
			</Info>
			<ColorsWrapper className="py-13">
				<Text light className="mr-3" height="auto">
					AVAILABLE COLORS
				</Text>
				<Colors>
					<Color color="purple" />
					<Color color="yellow" />
					<Color color="light_green" />
					<Color color="black" />
					<Color color="white" />
				</Colors>
			</ColorsWrapper>
			<Price>Rs. 125000 </Price>
		</Specs>
	);
};
const Product = ({ title, onClick, grid, items, size, border, bg }) => {
	const [active, setActive] = useState(TPYES.SPECIFICATIONS);
	return (
		<Wrapper>
			<Container>
				<Row gapSm={18} cols={2}>
					<Col xs={12} md={7}>
						<Row gap={0}>
							<Col xs={12} hiddenUp="sm">
								<Details />
							</Col>
							<Col xs={12}>
								<ProductCover>
									<Img>
										<Image src="/images/products/1.png" fill alt="product" />
									</Img>
								</ProductCover>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={5}>
						<Row gap={0}>
							<Col xs={12} hiddenDown="sm">
								<Details />
							</Col>
							<Col xs={12}>
								<Features />
							</Col>
						</Row>
					</Col>
				</Row>
				<TabsWrapper>
					<Header>
						<TabsTitle
							light={active !== TPYES.SPECIFICATIONS}
							onClick={() => setActive(TPYES.SPECIFICATIONS)}
						>
							Specifications
						</TabsTitle>{" "}
						<Divider direction="y" />
						<TabsTitle
							light={active !== TPYES.REVIEWS}
							onClick={() => setActive(TPYES.REVIEWS)}
						>
							Reviews
						</TabsTitle>
					</Header>
					{active === TPYES.REVIEWS ? <Reviews /> : <Specifications />}
				</TabsWrapper>
				<ProductsContainer bg="light_gray" />
			</Container>
		</Wrapper>
	);
};

export default Product;

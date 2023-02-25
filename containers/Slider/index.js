import React, { useRef } from "react";
import ProductCard from "../../components/ProductCard";
import { MainContainerWrapper } from "../MainContainer/styles";
import { SlickSlider, Navigations, TitleBar, BlogContainer } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextIcon, PrevIcon } from "../../components/Icons";
import Blog from "../../components/Blog";

const Slider = ({
	title,
	items,
	size,
	cardBg,
	bg,
	hiddenDown,
	hasBorder,
	settings = {},
	type,
}) => {
	const ref = useRef(null);
	const defaultSettings = {
		slidesToShow: 2,
		arrows: false,
	};
	const onNext = () => {
		if (ref.current) {
			ref.current.slickNext();
		}
	};
	const onPrev = () => {
		if (ref.current) {
			ref.current.slickPrev();
		}
	};
	const newSettings = Object.assign(defaultSettings, settings);
	if (type === "blog") {
		return (
			<BlogContainer className="p-6 hidden-xs">
				{title && (
					<TitleBar hasBorder={hasBorder}>
						<h2>{title}</h2>{" "}
						<Navigations>
							<PrevIcon onClick={onPrev} />
							<NextIcon onClick={onNext} />
						</Navigations>
					</TitleBar>
				)}
				<SlickSlider ref={ref} {...newSettings}>
					{items?.map((item) => (
						<Blog
							className=""
							key={item.id}
							url=""
							category={item.category}
							title={item.title}
							desc={item.desc}
						/>
					))}
				</SlickSlider>
			</BlogContainer>
		);
	}
	return (
		<MainContainerWrapper bg={bg} className="hidden-xs" hiddenDown={hiddenDown}>
			{title && (
				<TitleBar hasBorder={hasBorder}>
					<h2>{title}</h2>{" "}
					<Navigations>
						<PrevIcon onClick={onPrev} />
						<NextIcon onClick={onNext} />
					</Navigations>
				</TitleBar>
			)}
			<SlickSlider ref={ref} {...newSettings}>
				{items?.map((item) => (
					<ProductCard key={item.id} size={size} bg={cardBg} />
				))}
			</SlickSlider>
		</MainContainerWrapper>
	);
};

export default Slider;

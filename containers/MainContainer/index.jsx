import React from "react";
import Col from "../../components/Layout/col";
import Row from "../../components/Layout/row";
import ProductCard from "../../components/ProductCard";
import TitleBar from "../../components/TitleBar";
import { MainContainerWrapper, Slider } from "./styles";

const MainContainer = ({
	title,
	onClick,
	grid,
	items,
	size,
	border,
	cardBg,
	bg,
	className,
	gapSm,
	gapXs,
	btnLabel,
	hiddenDown,
	type,
}) => {
	const settings = {
		slidesToShow: 2,
	};
	return (
		<MainContainerWrapper bg={bg} className={className} hiddenDown={hiddenDown}>
			{title && (
				<Row>
					<Col xs={12}>
						<TitleBar
							className=""
							btnLabel={btnLabel}
							border={border}
							onClick={onClick}
						>
							{title}
						</TitleBar>
					</Col>
				</Row>
			)}
			<Row gapSm={gapSm} gapXs={gapXs} cols={5}>
				{items?.map((item) => (
					<Col {...grid} key={item.id}>
						<ProductCard size={size} bg={cardBg} />
					</Col>
				))}
			</Row>
		</MainContainerWrapper>
	);
};

export default MainContainer;

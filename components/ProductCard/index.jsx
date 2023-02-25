import Image from "next/image";
import React from "react";
import { Heart, Star } from "../Icons";
import {
	Body,
	Footer,
	Img,
	Price,
	ProductCardWrapper,
	Rate,
	Ratting,
	Separator,
	Title,
} from "./styles";

const ProductCard = ({
	size,
	bg = "light-gray",
	url,
	title,
	price,
	ratting,
	...rest
}) => {
	return (
		<ProductCardWrapper bg={bg} size={size} {...rest} href="/products/1">
			<Heart className="product-fav" size={size} />
			<Body>
				<Img
					className={`text-center ${
						size == "small" ? "mb-3" : size == "medium" ? "mb-6" : "mb-15"
					}`}
				>
					<Image
						src={`${url || "/images/iphone.png"}`}
						alt="mobilekiya-logo"
						fill
					/>
				</Img>
				<Title size={size}>{title || "iPhone 12 Pro"}</Title>
			</Body>
			<Separator
				className={`${
					size == "small"
						? "mb-2 mt-0"
						: size == "medium"
						? "mb-5 mt-2"
						: "mb-7 mt-3"
				}`}
			/>
			<Footer>
				<Price size={size}>Rs. {price || "120,000"}</Price>
				<Ratting>
					<div>
						<Star
							size={size}
							className={`${size == undefined ? "mr-2" : "mr-1"}`}
						/>
					</div>
					<Rate size={size}>{ratting || "3.2"}</Rate>
				</Ratting>
			</Footer>
		</ProductCardWrapper>
	);
};

export default ProductCard;

import Image from "next/image";
import React from "react";
import Button from "../Button";
import { Bookmark } from "../Icons";
import {
	ActionWrapper,
	BlogWrapper,
	Category,
	Content,
	Desc,
	ImageWrapper,
	Title,
} from "./styles";

const Blog = ({ url, category, title, desc, ...rest }) => {
	return (
		<BlogWrapper {...rest}>
			<ImageWrapper>
				<Image
					src={`${url || "/images/blog.png"}`}
					alt="mobilekiya-logo"
					fill
				/>
			</ImageWrapper>
			<Content>
				<Category>{category || "News"}</Category>
				<Title>
					{title ||
						"OnePlus x Oppo Unified OS now rumored to debut in the second half of this year"}
				</Title>
				<Desc>
					{desc ||
						"Realme just announced a new affordable smartphone in Thailand, called Realme C35. It comes with a 50MP main camera, a large display and a large battery."}
				</Desc>
				<ActionWrapper>
					<Button
						variant="ghost"
						shape="rounded"
						size="sm"
						className="uppercase"
					>
						Read More
					</Button>
					<Bookmark />
				</ActionWrapper>
			</Content>
		</BlogWrapper>
	);
};

export default Blog;

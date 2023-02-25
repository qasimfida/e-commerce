import React from "react";
import { RightArrow } from "../Icons";
import { Button, HeadingWrapper, TitleBarWrapper } from "./styles";

const TitleBar = ({ children, border, onClick, btnLabel, ...rest }) => {
	return (
		<TitleBarWrapper
			className={`${border === "bottom" ? "pt-0 mb-10 pb-1" : "pt-8 pb-3"} `}
			border={border}
		>
			<HeadingWrapper {...rest}>{children}</HeadingWrapper>
			{onClick && (
				<Button onClick={onClick}>
					<span>{btnLabel || "View All"}</span> <RightArrow className="ml-3" />
				</Button>
			)}
		</TitleBarWrapper>
	);
};

export default TitleBar;

import Image from "next/image";
import React, { useState } from "react";
import Chip from "../Chip";
import { RightArrow } from "../Icons";
import Col from "../Layout/col";
import Container from "../Layout/container";
import Row from "../Layout/row";
import RangeSlider from "../RangeSlider";
import {
	BannerWrapper,
	Flex,
	Img,
	RangeTitle,
	RangeWrapper,
	Title,
	Typo,
	ViewAllButton,
	Wrapper,
} from "./styles";

const Banner = () => {
	const [singleRange, setSingleRange] = useState(15000);
	return (
		<Wrapper>
			<BannerWrapper>
				<Container>
					<Row gap={15} className="z-1">
						<Col xs={8} md={5} className="mt-8">
							<Title className="">
								Pakistan’s <span>#</span> 1 mobile price website
							</Title>
							<Typo className="mt-4 mt-sm-6">
								Looking for your latest smartphone? Choose smartly, start with
								your price range here.
							</Typo>
						</Col>
						<Col xs={12} md={2}></Col>
						<Col sm={8} md={5} hiddenDown={"sm"} className="mt-12">
							<div>
								<Chip label="Apple" count={88} className="float-r ml-3 mb-3" />
								<Chip
									label="Samsung"
									count={88}
									className="float-r ml-3 mb-3"
								/>
								<Chip label="Xaiomi" count={88} className="float-r ml-3 mb-3" />
								<Chip label="Vivo" count={88} className="float-r ml-3 mb-3" />
								<Chip label="Oppo" count={88} className="float-r ml-3 mb-3" />
								<Chip label="Huawei" count={88} className="float-r ml-3 mb-3" />
								<Chip label="Realme" count={88} className="float-r ml-3 mb-3" />
								<Chip label="Sony" count={88} className="float-r ml-3 mb-3" />
								<Chip
									label="Oneplus"
									count={88}
									className="float-r ml-3 mb-3"
								/>
								<Chip
									label="Google Pixel"
									count={88}
									className="float-r ml-3 mb-3"
								/>
							</div>
						</Col>
					</Row>
					<Row gap={15} className="z-1 pt-7 pm-sm-13 mb-11 mb-sm-15 ">
						<Col xs={6} sm={5} md={5}>
							<RangeWrapper className=" ">
								<RangeTitle className="mb-3 mb-sm-1">{singleRange}</RangeTitle>
								<RangeSlider
									value={singleRange}
									max={150000}
									onChange={(e) => {
										setSingleRange(e);
									}}
									symbol={""}
									size="md"
								/>
							</RangeWrapper>
						</Col>
						<Col sm={12} md={2}></Col>
						<Col sm={8} md={5} hiddenDown={"sm"}>
							<div>
								<div className="float-c">
									<ViewAllButton variant="black" className="px-3  ml-auto">
										All{" "}
										<RightArrow
											color="white"
											className="ml-2 "
											height="26px"
											width="22px"
										/>{" "}
									</ViewAllButton>
								</div>
							</div>
						</Col>
					</Row>
					<Img>
						<Image
							src="/images/avatar.png"
							alt="mobilekiya-logo"
							width={440}
							height={554}
						/>
					</Img>
				</Container>
			</BannerWrapper>
			<Container>
				<Flex className="hidden-sm mt-9">
					<Chip label="Apple" count={88} className="" />
					<Chip label="Samsung" count={88} className="" />
					<Chip label="Samsung" count={88} className="" />
					<Chip label="Xaiomi" count={88} className="" />
					<ViewAllButton variant="black" className="">
						All
						<RightArrow
							color="white"
							className="ml-2 "
							height="26px"
							width="22px"
						/>
					</ViewAllButton>
				</Flex>
			</Container>
		</Wrapper>
	);
};

export default Banner;

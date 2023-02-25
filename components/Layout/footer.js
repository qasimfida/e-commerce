import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedIcon, TwitterIcon } from "../Icons";
import Subscribe from "../Subscribe";
import Col from "./col";
import Container from "./container";
import Row from "./row";
import {
	FooterTitle,
	FooterWrapper,
	Img,
	FooterCol,
	FooterInfo,
	FooterLink,
	FooterDesc,
	FooterFlex,
	FlexBox,
	FlexContent,
	Flex,
	FlexIcons,
} from "./styles";

export default function Footer() {
	return (
		<>
			<Subscribe />
			<FooterWrapper>
				<Container>
					<Row gap={0}>
						<FooterCol lg={2} xs={12} sm={6}>
							<FooterFlex>
								<Img className="footer_logo">
									<Image
										src="./images/logo_white.svg"
										alt="mobilekiya-logo-white"
										fill
									/>
								</Img>
								<FooterDesc>Pakistan’s # 1 mobile price website</FooterDesc>
							</FooterFlex>
						</FooterCol>
						<FooterCol lg={2} xs={12} sm={6} hiddenDown="xs">
							<FlexBox>
								<FooterTitle>QUESTIONS? EMAIL US AT</FooterTitle>
								<FooterInfo>info@mobilekya.com</FooterInfo>
							</FlexBox>
						</FooterCol>
						<FooterCol lg={2} xs={12} sm={6}>
							<FlexBox>
								<FooterTitle>FOLLOW US</FooterTitle>
								<FlexIcons>
									<FacebookIcon className=" icon" />
									<TwitterIcon className=" icon" />
									<InstagramIcon className=" icon" />
									<LinkedIcon className=" icon" />
								</FlexIcons>
							</FlexBox>
						</FooterCol>
						<FooterCol lg={2} xs={12} sm={6}>
							<FooterTitle>SUPPORT</FooterTitle>
							<FlexContent>
								<FooterLink href="/terms">TERMS & CONDITIONS</FooterLink>{" "}
								<FooterLink href="/privacy">PRIVACY POLICY</FooterLink>
								<FooterLink href="/cookies">COOKIES</FooterLink>
								<FooterLink href="/help">HELP & FAQ</FooterLink>
								<FooterLink href="/contact">CONTACT</FooterLink>
							</FlexContent>
						</FooterCol>
						<FooterCol lg={4} xs={12} hiddenDown="xs">
							<FooterTitle>DISCLAMER</FooterTitle>
							<FooterInfo>
								Mobile Phone Prices / price list is updated daily from local
								Mobile shops & Mobile dealers in Pakistan but we can&apos;t
								guarantee that mobile prices / price list on this page is 100%
								correct (Human error is possible). Always visit your local shop
								for exact mobile prices. Mobile Kya Pakistan - Nokia mobile
								prices / LG mobile prices / Samsung mobile prices / Sony
								Ericsson mobile prices / HTC mobile prices - Mobile Kiya Prices
								in Pakistan
							</FooterInfo>
						</FooterCol>
					</Row>
					<Row>
						<Col xs={12}>
							<FooterInfo className="my-4 text-center">
								Intellectual Property Protection - Privacy Policy - Sitemap -
								Terms of Use - User Information Legal Enquiry Guide ©️2022-2022
								mobilekya.com. All rights reserved.
							</FooterInfo>
						</Col>
					</Row>
				</Container>
			</FooterWrapper>
		</>
	);
}

import { useState } from "react";
import { AngleDown } from "../../components/Icons";
import ProductsContainer from "../ProductsContainer";
import {
	Cell,
	Collapse,
	CollapseIcon,
	JustifyBetween,
	TableData,
	TableHeading,
	TableText,
	TabRow,
} from "./styles";
const TableDataSet = ({ title, options = [] }) => {
	const [open, setOpen] = useState(true);
	return (
		<TabRow open={open}>
			<Cell>
				<JustifyBetween>
					<TableHeading>{title}</TableHeading>
					<CollapseIcon
						onClick={() => setOpen(!open)}
						className="mobile-collapse"
					/>
				</JustifyBetween>
			</Cell>
			<Collapse>
				<Cell>
					{options.map(({ name, description }, index) => (
						<TableData key={`${name}-${index}`}>
							<TableText>{name}</TableText>
							<TableText>{description}</TableText>
						</TableData>
					))}
				</Cell>
			</Collapse>
		</TabRow>
	);
};
const Specifications = () => {
	return (
		<>
			<TableDataSet
				title={"NETWORK"}
				options={[
					{
						name: "Technology",
						description: "GSM / CDMA / HSPA / EVDO / LTE / 5G",
					},
				]}
			/>
			<TableDataSet
				title={"LAUNCH"}
				options={[
					{
						name: "Announced",
						description: "2022, September 07",
					},
					{
						name: "Status",
						description: "Available. Released 2022, September 16",
					},
				]}
			/>
			<TableDataSet
				title={"BODY"}
				options={[
					{
						name: "Dimensions",
						description: "146.7 x 71.5 x 7.8 mm (5.78 x 2.81 x 0.31 in)",
					},
					{
						name: "Weight",
						description: "172 g (6.07 oz)",
					},
					{
						name: "Build",
						description:
							"Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame",
					},
					{
						name: "SIM",
						description:
							"Nano-SIM and eSIM - International Dual eSIM with multiple numbers - USA Dual SIM (Nano-SIM, dual stand-by) - China",
					},
				]}
			/>
			<TabRow>
				<Cell>
					<TableHeading>Display</TableHeading>
				</Cell>
				<Cell>
					<TableData>
						<TableText>Type</TableText>
						<TableText>
							Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200
							nits (peak)
						</TableText>
					</TableData>
					<TableData>
						<TableText>Size</TableText>
						<TableText>
							6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)
						</TableText>
					</TableData>
					<TableData>
						<TableText>Resolution</TableText>
						<TableText>
							1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)
						</TableText>
					</TableData>
					<TableData>
						<TableText>Protection</TableText>
						<TableText>Ceramic Shield glass</TableText>
					</TableData>
				</Cell>
			</TabRow>
			<TabRow>
				<Cell>
					<TableHeading>Platform</TableHeading>
				</Cell>
				<Cell>
					<TableData>
						<TableText>OS</TableText>
						<TableText>iOS 16, upgradable to iOS 16.2</TableText>
					</TableData>
					<TableData>
						<TableText>Chipset</TableText>
						<TableText>Apple A15 Bionic (5 nm)</TableText>
					</TableData>
					<TableData>
						<TableText>CPU</TableText>
						<TableText>
							Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)
						</TableText>
					</TableData>
					<TableData>
						<TableText>GPU</TableText>
						<TableText>Apple GPU (5-core graphics) </TableText>
					</TableData>
				</Cell>
			</TabRow>
			<TabRow>
				<Cell>
					<TableHeading>Memory</TableHeading>
				</Cell>
				<Cell>
					<TableData>
						<TableText>Card Slot</TableText>
						<TableText>No</TableText>
					</TableData>
					<TableData>
						<TableText>Internal</TableText>
						<TableText>128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM</TableText>
					</TableData>
				</Cell>
			</TabRow>
			<TabRow>
				<Cell>
					<TableHeading>MAIN CAMERA</TableHeading>
				</Cell>
				<Cell>
					<TableData>
						<TableText>Dual</TableText>
						<TableText>
							12 MP, f/1.5, 26mm (wide), 1/1.7", 1.9µm, dual pixel PDAF,
							sensor-shift OIS 12 MP, f/2.4, 13mm, 120˚ (ultrawide)
						</TableText>
					</TableData>
					<TableData>
						<TableText>Features</TableText>
						<TableText>
							Dual-LED dual-tone flash, HDR (photo/panorama)
						</TableText>
					</TableData>
					<TableData>
						<TableText>Video</TableText>
						<TableText>
							4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision
							HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound rec.
						</TableText>
					</TableData>
				</Cell>
			</TabRow>
			<TabRow>
				<TableText bold fluid>
					Disclaimer. We can not guarantee that the information on this page is
					100% correct.
				</TableText>
			</TabRow>
		</>
	);
};
export default Specifications;

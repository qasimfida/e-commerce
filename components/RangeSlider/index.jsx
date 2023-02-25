import React, { useCallback, useEffect, useState, useRef } from "react";
import {
	Bars,
	InputsWraper,
	LabelWrapper,
	Range,
	RangeInput,
	RangeLabels,
	WidthFull,
	Wrapper,
} from "./styles";

const RangeSlider = ({
	max,
	onChange,
	value,
	symbol,
	hasLabels,
	min = 10,
	size = "md",
}) => {
	const [maxVal, setMaxVal] = useState(value < min ? min : value);
	const maxValRef = useRef(RangeInput);
	const range = useRef(Range);

	const getPercent = useCallback(
		(value) => Math.round((value / max) * 100),
		[max]
	);

	useEffect(() => {
		setMaxVal(value < min ? min : value);
	}, [value, min]);
	useEffect(() => {
		if (maxValRef.current) {
			const maxPercent = getPercent(+maxValRef.current.value);
			if (range.current) {
				range.current.style.left = `${0}%`;
				range.current.style.width = `${
					maxPercent < 50 ? maxPercent + 1 : maxPercent
				}%`;
			}
		}
	}, [getPercent, maxVal]);

	const handleChange = (event) => {
		const value = Math.max(+event.target.value);
		setMaxVal(value < min ? min : value);
		event.target.value = value.toString();
		if (onChange) {
			onChange(value);
		}
	};
	return (
		<Wrapper size={size}>
			<InputsWraper>
				<RangeInput
					ref={maxValRef}
					type="range"
					min={0}
					max={max}
					value={maxVal}
					onChange={handleChange}
					onBlur={(e) => console.log(e)}
					index={4}
					className="thumb"
				/>
				<WidthFull>
					<Bars>
						<Range first />
						<Range ref={range} />
					</Bars>
				</WidthFull>
			</InputsWraper>
			{hasLabels && (
				<RangeLabels>
					<LabelWrapper>
						<span>{min}</span>
						<span>
							{symbol === "Rs" ? null : symbol}
							{max}
							{symbol !== "Rs" ? null : symbol}
						</span>
					</LabelWrapper>
				</RangeLabels>
			)}
		</Wrapper>
	);
};

export default RangeSlider;

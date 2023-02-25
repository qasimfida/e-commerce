import {
	StyledInput,
	StyledLabel,
	StyledTextArea,
	StyledWrapper,
} from "./styles";

const Input = ({
	label,
	className = "",
	inputClass = "",
	type = "text",
	...rest
}) => {
	return (
		<StyledWrapper className={className}>
			{label && <StyledLabel> {label}</StyledLabel>}
			{type === "textarea" ? (
				<StyledTextArea {...rest} type={type} className={inputClass} />
			) : (
				<StyledInput {...rest} type={type} className={inputClass} />
			)}
		</StyledWrapper>
	);
};
const Form = {
	Input,
};

export default Form;

import { StyledButton } from "./styles";

const Button = ({
	children,
	size = "lg",
	shape = "flat",
	variant = "contained",
	className,
	onClick,
	...rest
}) => {
	return (
		<StyledButton
			className={className}
			onClick={onClick}
			size={size}
			variant={variant}
			shape={shape}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};
export default Button;

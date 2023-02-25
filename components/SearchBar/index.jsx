import { SearchIcon } from "../Icons";
import { SearchBarWrapper, Icon } from "./styles";

const SearchBar = ({
	value,
	onChange,
	onSubmit,
	placeholder,
	className,
	...rest
}) => {
	return (
		<SearchBarWrapper onSubmit={onSubmit} className={className}>
			<Icon type="submit">
				<SearchIcon />
			</Icon>
			<input
				{...rest}
				value={value}
				onChange={onChange}
				name="searchbar"
				placeholder={placeholder}
			/>
		</SearchBarWrapper>
	);
};
export default SearchBar;

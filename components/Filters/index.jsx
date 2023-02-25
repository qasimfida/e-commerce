import Button from "../Button";
import Dropdown from "../Dropdown";
import { CloseIcon, MenuIcon } from "../Icons";
import { FilteredData, FiltersPanel, StyledDropDown, Wrapper } from "./styles";

const Filters = () => {
	return (
		<Wrapper>
			<FiltersPanel>
				<StyledDropDown
					placeholder="Select"
					// hasSearch
					options={[]}
				/>
				<StyledDropDown
					placeholder="Select"
					// hasSearch
					options={[]}
				/>
				<StyledDropDown
					placeholder="Select"
					// hasSearch
					options={[]}
				/>
				<StyledDropDown
					placeholder="Select"
					// hasSearch
					options={[]}
				/>
				<StyledDropDown
					placeholder="Select"
					// hasSearch
					options={[]}
				/>
				<StyledDropDown
					placeholder="Select"
					// hasSearch
					options={[]}
				/>
				<StyledDropDown
					placeholder="Select"
					// hasSearch
					options={[]}
				/>
			</FiltersPanel>
			<FilteredData>
				<Button variant="ghost" justifyContent="space-between">
					<CloseIcon className="pr-7" />{" "}
					<span>
						High<span className="text-num">-</span>end
					</span>
				</Button>
				<Button variant="ghost" justifyContent="space-between">
					<CloseIcon className="pr-7" />
					<span>
						20000<span className="text-num">+</span>
					</span>
				</Button>
				<Button variant="contained" className="px-6">
					Clear all
				</Button>
			</FilteredData>
		</Wrapper>
	);
};

export default Filters;

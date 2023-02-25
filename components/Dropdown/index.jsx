import { Fragment, useEffect, useRef, useState } from "react";
import Form from "../Form";
import { AngleDown, SearchIcon } from "../Icons";
import {
	DropdownItem,
	List,
	ListWrapper,
	SearchBar,
	SearchBarWrapper,
	StyledAngleDown,
	StyledDropDown,
	StyledLabel,
	Wrapper,
} from "./styles";
const Input = Form.Input;
const Dropdown = (props) => {
	const {
		icon,
		onChange,
		selected = [],
		children,
		className = "",
		innerClass = "",
		outerClass = "",
		dropdownClass = "",
		deleteAble = true,
		options,
		onSearch,
		hasSearch = false,
		...rest
	} = props;
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");
	const ref = useRef();

	useEffect(() => {
		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	});

	const handleClick = (e) => {
		if (open) {
			let a = ref.current.contains(e?.target);
			if (!a) {
				setOpen(false);
			}
		}
	};
	const handleSelect = (i) => (e) => {
		if (!deleteAble) {
			setOpen(!open);
		}
		if (onChange) {
			onChange(i);
		}
	};
	const handleSearch = (e) => {
		if (onSearch) {
			onSearch(e);
		} else {
			setSearch(e.target.value);
		}
	};
	const handleFilter = (i) => {
		const label = (i?.name || i).toLowerCase();
		if (onSearch || !search) {
			return true;
		} else {
			return label.includes(search.toLocaleLowerCase());
		}
	};
	const filterdList = options.filter(handleFilter);

	return (
		<Wrapper className={className} ref={ref} open={open} {...rest}>
			<StyledDropDown
				className={` ${outerClass}`}
				onClick={() => setOpen(!open)}
			>
				<StyledLabel>
					{selected.length ? (
						selected.map((item) => {
							return (
								<div
									key={item.id}
									onClick={handleSelect(item)}
									className={`${innerClass}`}
								>
									{deleteAble && <span className="mr-1">X</span>}
									{item.label || item.name}
								</div>
							);
						})
					) : (
						<div
							className={`text-black-400 text-base bg-blue-default font-normal min-w-[7.75rem] h-6 px-2 rounded-lg flex items-center justify-center ${innerClass}`}
						>
							Select
						</div>
					)}
				</StyledLabel>
				{icon || (
					<StyledAngleDown
						stroke="#000487"
						strokeWidth="2"
						className="ml-1"
						size="16"
					/>
				)}
			</StyledDropDown>
			<ListWrapper className={`${dropdownClass}`}>
				<SearchBarWrapper className={`py-2`}>
					{hasSearch && (
						<SearchBar className="py-2 px-2">
							<Input
								placeholder="Search"
								onChange={handleSearch}
								inputClass="pl-7"
							/>
							<SearchIcon size={16} className="icon ml-2" />
						</SearchBar>
					)}
					<List className="px-2" hasSearch>
						<DropdownItem disabled className={`p-2`}>
							Select
						</DropdownItem>
						{filterdList.map((i, ind) => {
							return (
								<Fragment key={i.id || `card-${ind} `}>
									<DropdownItem
										onClick={handleSelect(i)}
										className="block w-full p-2 text-base font-normal font-roboto text-black-400 "
									>
										{i?.name || i}
									</DropdownItem>
								</Fragment>
							);
						})}
						{children}
					</List>
				</SearchBarWrapper>
			</ListWrapper>
		</Wrapper>
	);
};

export default Dropdown;

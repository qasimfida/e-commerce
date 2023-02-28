import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	margin-left: auto;
	position: relative;
	box-sizing: border-box;
	margin-right: auto;
	display: block;
	padding-left: 16px;
	padding-right: 16px;
	overflow: hidden;
	@media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xs}px) {
		padding-left: 24px;
		padding-right: 24px;
		overflow: auto;
	}
	@media (min-width: ${({ theme }) => theme.container}px) {
		max-width: ${({ theme }) => theme.container}px;
	} ;
`;

export default Container;

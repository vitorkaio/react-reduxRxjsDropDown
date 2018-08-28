import React from 'react';
import styled from 'styled-components';
import { IoIosMenu } from "react-icons/io";
import DropDown from './../dropDown/DropDown.jsx';

const ToolbarWrapper = styled.div`
  background-color: #FFD600;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 200;

	& .menu {
		margin-left: 7px;
		flex: 1;
		display: flex;
		justify-content: flex-start;
	}

	& .title {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	& .drop {
		margin-right: 7px;
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}

	& .menu > *:active, .drop > *:active{
		opacity: 0;
	}
`;

const Toolbar = (props) => {
	return ( 
		<ToolbarWrapper>
			<div className="menu" ><IoIosMenu onClick={props.showDropDownDrawer} size="30px" /></div>
			<div className="title"><span>DDDrawer</span></div>
			<div className="drop"><DropDown /></div>
		</ToolbarWrapper>
	);
}

export default Toolbar;
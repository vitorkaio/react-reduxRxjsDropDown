import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoMdMore } from "react-icons/io";
import { zoomIn } from 'react-animations';

const zoomInAnimation = keyframes`${zoomIn}`;

const DropDownWrapper = styled.div`
	position: relative;
`;

const DropDownItemWrapper = styled.div`
	width: 110px;
	height: 120px;
	background-color: white;
	border: 1px solid white;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
	border-radius: 3px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;

	position: absolute;
	top: 10%;
	right: 50%;

	animation: ${zoomInAnimation} 0.3s ease-out;
	/* visibility: ${props => props.show ? "visible" : "hidden"}; */
  z-index: 200;

	& * {
		margin-left: 10px;
		width: 100%;
	}

	& > *:hover {
		color: coral;
	}
`;

const BackDropWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0)};
	z-index: ${props => props.show ? 100 : -100};
	visibility: ${props => props.show ? "visible" : "hidden"};
`;

class DropDown extends Component {
	
	constructor(props) {
		super(props);

		this.state = {openDropDown: false, backDropShow: false};
		this.handler = 0;
	}

	showDropDown = () => {
		this.handler = 1;
		console.log("DropDown ", !this.state.openDropDown);
		this.setState((prevState) => {
			return {
				openDropDown: !prevState.openDropDown,
				backDropShow: !prevState.backDropShow
			}
		});
	}

	optionClickHandler = (op) => {
		console.log(op);
	}

	// Renderiza ou não o dropdown.
	dropDownRenderShow = () => {
		return (
			<DropDownItemWrapper show={this.state.openDropDown}>
					<span onClick={() => this.optionClickHandler("Ajustar")}>Ajustar</span>
					<span onClick={() => this.optionClickHandler("Versões")}>Versões</span>
					<span onClick={() => this.optionClickHandler("Sair")}>Sair</span>
			</DropDownItemWrapper>
		);
	}

	render() {
		const dropDown = this.state.openDropDown ? this.dropDownRenderShow() : null;
		return (
			<DropDownWrapper onClick={this.showDropDown}>
				<IoMdMore size="30px" />
				{dropDown}
				<BackDropWrapper show={this.state.backDropShow} />
			</DropDownWrapper>
		);
	}
}

export default DropDown;
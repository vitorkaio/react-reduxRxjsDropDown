import React, { Component } from 'react';
import styled from 'styled-components';

const DropDownDrawerWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: coral;
	
	position: fixed;
	width: 100%;
	height: 40px;
	z-index: 201;
	top: ${props => props.show ? "0" : "-40px"};
	animation: ${props => props.show ? "slideInDown" : "slideInUp"} 1s ease-out;
`;

const DropDefaultWrapper = DropDownDrawerWrapper.extend`
	top: -40px;
	animation: null;
`;

class DropDownDrawer extends Component {

	constructor(props) {
		super(props);
		this.handler = 0;
	}

	dropDefaultHandler = (show) => {

		// Renderiza uma toolbar sem animações.
		if(this.handler === 0) {
			this.handler = 1;
			return (
				<DropDefaultWrapper>
					<span>Cadastrar</span>
					<span>Listar</span>	
				</DropDefaultWrapper>
			);
		}
		return (
			<DropDownDrawerWrapper show={this.props.show}>
				<span>Cadastrar</span>
				<span>Listar</span>
			</DropDownDrawerWrapper>
		);
	}

	render() {
		const drop = this.dropDefaultHandler(this.props.show);
		return drop;
	}
}

export default DropDownDrawer;
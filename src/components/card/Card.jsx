import React, {Component} from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
	margin-top: 8px;
	margin-bottom: 10px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CardItemWrapper = styled.div`
	width: 10rem;
	height: 70%;
	border: 1px solid cornflowerblue;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	overflow: hidden;

	& button {
		outline: none;
		width: 100px;
		height: 35px;
		border: 1px solid cornflowerblue;
		border-radius: 3px;
		background-color: white;
		color: cornflowerblue;
		font-size: 18px;
	}

	& button:active {
		background-color: cornflowerblue;
		color: white;
	}
	position: relative;
`;

const ItemWrapper = styled.div`
	background-color: cornflowerblue;
	position: absolute;
	width: 100%;
	height: 50%;
	bottom: ${props => props.show ? "0" : "-50%"};
	animation: ${props => props.show ? "slideInUp" : "slideInDown"} 1s ease-out;
`;

const ItemWrapperDefault = ItemWrapper.extend`
	background-color: coral;
	position: absolute;
	width: 100%;
	height: 50%;
	bottom: ${props => props.show ? "0" : "-50%"};
	animation: null;
`;

class CardWithReveal extends Component {
	constructor(props) {
		super(props);

		this.state = {openReveal: false};
		this.handler = 0;
	}

	// Abre o o reveal.
	showOpenRevealHandler = () => {
		this.handler = 1;
		this.setState({openReveal: !this.state.openReveal});
	}

	// Fecha o reveal
	closeRevealHandler = () => {
		this.setState({openReveal: false});
	}

	// Renderiza o reveal com animação.
	itemWrapperRender = () => {
		return (
			<ItemWrapper show={this.state.openReveal} onClick={this.closeRevealHandler}>Reveal</ItemWrapper>
		);
	}

	// Renderiza o reveal sem a animação.
	itemWrapperDefaultRender = () => {
		return (
		<ItemWrapperDefault show={this.state.openReveal} onClick={this.closeRevealHandler}>Reveal</ItemWrapperDefault>
		);
	}

	render() {
		const item = this.handler === 1 ? this.itemWrapperRender() : this.itemWrapperDefaultRender(); 
		return (
			<CardWrapper>
				<CardItemWrapper>
					<span>Card</span>
					<button onClick={this.showOpenRevealHandler}>Reveal</button>
					{item}
				</CardItemWrapper>
			</CardWrapper>
		);
	}
}

export default CardWithReveal
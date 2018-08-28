import React from 'react';
import styled from 'styled-components';

const BackDropWrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: ${props => props.translucid ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)"};
	z-index: ${props => props.show ? 100 : -100};
	visibility: ${props => props.show ? "visible" : "hidden"};
	/* left: ${props => props.show ? "0" : "-1%"}; */
	/* animation: ${props => props.show ? "slideInLeft" : "slideOutLeft"} 1s ease-out both; */
`;

const BackDrop = (props) => {
	return ( 
		<BackDropWrapper show={props.show} onClick={props.closeDrawer} translucid={props.translucid}/>
	);
}

export default BackDrop;
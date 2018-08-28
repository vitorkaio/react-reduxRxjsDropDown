import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& span {
		font-size: 2rem;
		margin: 3px 0;
	}
`;

const List = (props) => {
	let lista = [];
	for(let i = 0; i < props.size; i++)
		lista.push(<span key={i}>{i}</span>);
	return ( 
		<ListWrapper>
			{
				lista
			}
		</ListWrapper>
	);
}

export default List;
import React, { Component } from 'react';
import styled from 'styled-components';
import Mobile from './components/mobile/Mobile.jsx';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  color: cornflowerblue;
`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {larguraTela: window.innerWidth};
  }

  componentDidMount() {
    window.addEventListener("resize", this.getInnerWidth);
 }

  // Determina a largura da tela e renderiza o componente correto.
  getInnerWidth = () => {
    this.setState({larguraTela: window.innerWidth});
  }

  render() {
    const width = this.state.larguraTela;
    const ren = width < 768 ? <Mobile /> : <AppWrapper>Toggle resolution device: {"<"} 769px</AppWrapper>

    return (
      <div>
        {ren}
      </div>
    );
  }
}

export default App;

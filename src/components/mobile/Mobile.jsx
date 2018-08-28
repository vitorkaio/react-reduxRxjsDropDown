import React, { Component } from 'react';
import styled from 'styled-components';

import Toolbar from './../toolbar/Toolbar.jsx';
import List from './../list/List.jsx';
import DropDownDrawer from './../dropDownDrawer/DropDownDrawer.jsx';
import BackDrop from './../backDrop/BackDrop.jsx';
import CardWithReveal from './../card/Card.jsx';
import { connect } from 'react-redux';
import * as backDropActions from "./../../redux/actions/backDropActions";

const MobileWrapper = styled.div`
  margin-top: 40px;

  @media(max-width: 768px) {
    & {
      background-color: #FAFAFA;
    }
  }
`;

class Mobile extends Component {
	constructor(props) {
    super(props);
    this.state = {openDropDownDrawer: false, openBackDrop: false};

    this.backDropTranslucid = true;
  }

  showOpenDropDownDrawer = () => {
    // Utilizar o setState dessa forma quando for utilizar o state anterior.
    this.setState((prevState) => {
      return {
        openDropDownDrawer: !prevState.openDropDownDrawer,
      };
    });
    this.props.requestBackDrop(true, true);
  }

  closeDropDownDrawer = () => {
    this.setState({openDropDownDrawer: false});
    this.props.requestBackDrop(false, false);
  }

	render() {
    console.log("Mobile Render");
		return (
			<MobileWrapper> 
				<Toolbar showDropDownDrawer={this.showOpenDropDownDrawer} />
      	<DropDownDrawer show={this.state.openDropDownDrawer} />
      	<BackDrop show={this.props.backDropReducer.data.get("show")} 
        closeDrawer={this.closeDropDownDrawer}
        translucid={this.props.backDropReducer.data.get("transparent")} />
        <CardWithReveal />
      	<List size={34} />
			</MobileWrapper>
		);
	}

}

const mapStateToProps = (state) => {
  return {
    backDropReducer: state.backDropReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestBackDrop: (show, transparent) => {
      dispatch(backDropActions.showBackDrop(show, transparent))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
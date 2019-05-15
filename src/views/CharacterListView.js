import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return 'data is fetching';
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.isLoading
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps/* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApiGameOfThrones } from '../Redux/Actions';
import CharacterCard from './CharacterCard';

function mapStateToProps(state) {
  return {
    name: state.characterReducer.name,
    born: state.characterReducer.born,
    isLoading: state.characterReducer.isLoading
  };
}

class AppGame extends Component {
  state = {
    nameCharacter: '',
  }
  handleClick = () => {
    const { dispatch } = this.props;
    const { nameCharacter } = this.state;
    dispatch(fetchApiGameOfThrones(nameCharacter))
  }


  render() {
    const { nameCharacter } = this.state;
    return (
      <div>
        
        <input
        type="text"
        onChange={ ({ target }) => this.setState({ nameCharacter: target.value }) } 
        value={ nameCharacter }
        />
        
        <button
        type="button"
        onClick={ this.handleClick }
        > Search

        </button>
        <CharacterCard />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(AppGame);

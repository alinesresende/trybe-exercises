import React, { Component } from 'react';
import { connect } from 'react-redux';


class CharacterCard extends Component {
  render() {
    const { name, born, isLoading } = this.props;
    if (!isLoading && name && born) {
      return (
        <div>
          <ul>
            <li>Name: {name}</li>
            <li>Born: {born}</li>
            {/* <li>
              Titles:
              <ol>
                {character.titles.map((title, index) => (
                  <li key={`${title}-${index}`}>{title}</li>
                ))}
              </ol>
            </li>
            <li>
              Aliases:
              <ol>
                {character.aliases.map((alias, index) => (
                  <li key={`${alias}-${index}`}>{alias}</li>
                ))}
              </ol>
            </li> */}
          </ul>
        </div>
      );
    }
    if (isLoading) { return <h3>Loading...</h3>; }
  }
}

function mapStateToProps(state) {
  return {
    name: state.characterReducer.name,
    born: state.characterReducer.born,
    isLoading: state.characterReducer.isLoading
  };
}

export default connect(mapStateToProps)(CharacterCard);

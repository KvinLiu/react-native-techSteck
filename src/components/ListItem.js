import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { CardSection } from './common';

class ListItem extends Component {

  renderDescription() {
    const { library, expend } = this.props;
    if (expend) {
      return (
        <Text>{library.description}</Text>
      )
    }
  }
  render() {
    const { id, title, description } = this.props.library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
        >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expend = state.selectedLibraryId === ownProps.library.id
  return { expend }
}

export default connect(mapStateToProps, actions)(ListItem);

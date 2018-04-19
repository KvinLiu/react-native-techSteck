import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      { props.children }
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative'
  }
}

export { CardSection };

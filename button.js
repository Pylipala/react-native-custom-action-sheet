import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, Platform, Dimensions } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');
const isIphoneX = Platform.OS === 'ios' && (deviceHeight === 812 || deviceWidth === 812);
const buttonBottomMargin = isIphoneX ? 12 : 10;

function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#0069d5',
    alignSelf: 'center',
    fontSize: 18,
  },
  button: {
    height: 58,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: buttonBottomMargin,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;

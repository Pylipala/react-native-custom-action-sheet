import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const window = Dimensions.get('window');

class FadeInView extends Component {
  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this._animate(this.props);
  }

  componentWillReceiveProps(newProps) {
    this._animate(newProps);
  }

  _animate(newProps) {
    return Animated.timing(this.state.fadeAnim, {
      toValue: newProps.visible ? 0.3 : 0,
      duration: 300,
    }).start();
  }

  render() {
    const { fadeAnim } = this.state;
    const { backgroundColor, children } = this.props;
    return (
      <Animated.View
        style={[
          styles.overlay,
          { opacity: fadeAnim },
          { backgroundColor: backgroundColor || 'black' },
        ]}
      >
        {children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: window.height,
    width: window.width,
    position: 'absolute',
    elevation: 10,
  },
});

FadeInView.propTypes = {
  backgroundColor: PropTypes.string,
};

export default FadeInView;

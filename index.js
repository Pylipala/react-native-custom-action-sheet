import React, { Component } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Button from './button';
import FadeInView from './fade_in_view';

const window = Dimensions.get('window');

class ActionModal extends Component {
  render() {
    const {
      modalVisible, backgroundColor, children, onCancel, buttonText,
    } = this.props;

    return (
      <View>
        {modalVisible && (
          <FadeInView visible={modalVisible} backgroundColor={backgroundColor}>
            <Modal
              animationType="slide"
              transparent
              visible={modalVisible}
              onRequestClose={onCancel}
            >
              <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.container} onPress={onCancel} />
                {children}
                <Button style={styles.button} onPress={onCancel} text={buttonText || 'Cancel'} />
              </View>
            </Modal>
          </FadeInView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingTop: 30,
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 20,
    justifyContent: 'flex-end',
    // top: window.height,
  },
});

ActionModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  buttonText: PropTypes.string,
};

export default ActionModal;

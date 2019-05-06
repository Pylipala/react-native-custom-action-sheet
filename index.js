import React, { Component } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Dimensions, Text } from 'react-native';
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
            <View style={styles.overlay}>
              <FadeInView visible={modalVisible}>
                {modalVisible && (
                    <View>
                      <Modal
                          animationType="slide"
                          transparent
                          visible={modalVisible}
                          onRequestClose={onCancel}
                      >
                        <View style={styles.modalContainer}>
                          <TouchableOpacity style={styles.container} onPress={onCancel} />
                          <View style={{backgroundColor: 'white'}}>
                              {children}
                            <Button style={styles.button} onPress={onCancel} text={buttonText || 'Cancel'} />
                          </View>
                        </View>
                      </Modal>
                    </View>
                )}
              </FadeInView>
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
        justifyContent: 'flex-end',
    },
    overlay: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: window.height,
        width: window.width,
        position: 'absolute',
        elevation: 9999999999,
    },
});

ActionModal.propTypes = {
    modalVisible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
    buttonText: PropTypes.string,
};

export default ActionModal;

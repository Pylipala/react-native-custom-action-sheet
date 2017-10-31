'use strict'

import React, { Component } from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import Button from './button'
import FadeInView from './fade_in_view'

class ActionModal extends Component {
  render() {
    const { modalVisible, backgroundColor, children, onCancel, buttonText } = this.props

    return (
      <View>
        {modalVisible && (
          <FadeInView visible={modalVisible} backgroundColor={backgroundColor}>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={onCancel}>
              <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.container} onPress={onCancel} />
                {children}
                <Button onPress={onCancel} text={buttonText || 'Cancel'} />
              </View>
            </Modal>
          </FadeInView>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
    justifyContent: 'flex-end'
  }
})

ActionModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  buttonText: PropTypes.string
}

export default ActionModal

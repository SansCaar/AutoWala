import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";


class BaseModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false
        }
    }
    show = () => this.setState({visible:true})
    
    close = () => this.setState({visible:false})
  render() {
    let animationType = this.props.animationType
    return (
      <Modal
        transparent={true}
        visible={this.state.visible}
        onRequestClose={this.close}
        animationType={animationType}
        style={{...this.props.styleModal, backgroundColor:'#0000'}}
        
      >
        <View style={[styles.outsideContainer, {...this.props.style}]}>
          <TouchableWithoutFeedback
            onPress={this.close}
          >
            <View style={{ flex: 1, width: "100%" }} />
          </TouchableWithoutFeedback>
          {this.props.children}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    backgroundColor:'#000000AA',
  },
});

export default BaseModal;

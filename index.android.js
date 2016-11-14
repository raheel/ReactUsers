/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Modal,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/header';
import UserListView from './src/userlistview';
import UserDetailsView from './src/userdetailsview';

export default class ReactUsers extends Component {

 constructor() {
    super();
    this.state = {
      user: null,
      userDetailsVisible: false
    }
  }

  render() {
    return (
      <View>
        <Header />
            <UserListView onUserSelected={this._onUserSelected.bind(this)} />

            <Modal animationType={"fade"}
                   visible={this.state.userDetailsVisible}
                   onRequestClose={function() {}}>

                <UserDetailsView user={this.state.user}
                                    onClose={this._onCloseUserDetails.bind(this)} />

            </Modal>
      </View> 
    );
  }

  _onUserSelected(user) {
    this.setState({
      userDetailsVisible: true,
      user: user
    })
  }

  _onCloseUserDetails() {
    this.setState({
      userDetailsVisible: false,
      user: null
    })
  }

}



AppRegistry.registerComponent('ReactUsers', () => ReactUsers);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
  actionChangeBackgroundColor,
  actionChangeText,
} from '../redux/actionCreators/app.action';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class AppTouchables extends Component {
    handleBackgroundColorToRed = () => {
        const color = this.props.color === 'red' ? 'white' : 'red';
        this.props.actionChangeBackgroundColor(color);
    }

    handleTextToBold = () => {
        const textStyle = this.props.textStyle === 'bold' ? 'normal' : 'bold';
        this.props.actionChangeText(textStyle);
    }

    render() {
    return (
        <View style={{
            ...styles.container,
            backgroundColor: this.props.color,
        }}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <TouchableOpacity
            onPress={this.handleBackgroundColorToRed}
            >
            <Text style={styles.welcome}>Change Background Color</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.handleTextToBold}
            >
            <Text style={{
                ...styles.welcome,
                fontWeight: this.props.textStyle,
            }}>Change Text to Bold</Text>
            </TouchableOpacity>
        </View>
    );
    }
}

const mapStateToProps = ({ AppReducer }) => {
    return ({
        color: AppReducer.color,
        textStyle: AppReducer.textStyle,
    })
};

const mapDispatchToProps = dispatch => ({
    actionChangeBackgroundColor: color => dispatch(actionChangeBackgroundColor(color)),
    actionChangeText: textStyle => dispatch(actionChangeText(textStyle)),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppTouchables.defaultProps = {
    color: 'white',
    textStyle: 'normal',
};

export default connect(mapStateToProps, mapDispatchToProps)(AppTouchables);

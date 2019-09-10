import React, { Component } from 'react';
import {
  Platform,
  Text,
  Button,
  View,
} from 'react-native';
import {
  actionEditBackgroundColor,
  actionEditFontWeight,
} from '../actions/styles.actions';
import { connect } from 'react-redux';
import WelcomeStyles from './welcome.styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const mapStateToProps = ({ StylesReducers }) => {
  const {
    backgroundColor,
    isBold,
  } = StylesReducers;
  return {
      backgroundColor,
      isBold,
  }
}

class WelcomeComponent extends Component {

  shouldComponentUpdate(nextProps) {
    const {
      backgroundColor: newBackgroundColor,
      isBold: newIsBold,
    } = nextProps;
    const {
      backgroundColor: currentBackgroundColor,
      isBold: currentIsBold,
    } = this.props;

    return newBackgroundColor !== currentBackgroundColor || newIsBold !== currentIsBold;
  }

  changeBackgroundColor = (isBackgroundColor) => {
    this.props.actionEditBackgroundColor(isBackgroundColor);
  };

  switchFontWeight = (isBold) => {
    this.props.actionEditFontWeight(isBold)
  };

  render() {
    let {
      backgroundColor: currentBackgroundColor,
      isBold,
    } = this.props;

    return (
      <View style={[WelcomeStyles.container, {
          backgroundColor: currentBackgroundColor ? 'green' : '#F5FCFF',
      }]}>
        <Text style={WelcomeStyles.welcome}>Welcome to React Native!</Text>
        <Text 
          style={WelcomeStyles.instructions,
          { fontWeight: isBold ? 'bold': 'normal' }}
        >
          To get started, edit App.js
        </Text>
        <Text 
          style={WelcomeStyles.instructions,
          {fontWeight: isBold ? 'bold': 'normal'}}
        >
          {instructions}
        </Text>
        <Button
          style={WelcomeStyles.welcome}
          title='Change Background Color'
          onPress={() => this.changeBackgroundColor(currentBackgroundColor)}
        />
        <Button 
          style={WelcomeStyles.welcome}
          title='Change Text to Bold'
          onPress={() => this.switchFontWeight(isBold)}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, {
  actionEditBackgroundColor,
  actionEditFontWeight,
})(WelcomeComponent);
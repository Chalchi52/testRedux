import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {
    actionUpdateBackground,
    actionUpdateFont,
} from '../redux/actions/launcher.actions';

const mapStateToProps = ({ LauncherReducer }) => {
  const {
    backgroundStyle,
    fontStyle,
  } = LauncherReducer;
  return {
      backgroundStyle,
      fontStyle,
  };
};

class LauncherView extends PureComponent {

    handleChangeBackground = () => {
        this.props.actionUpdateBackground();
    };

    handleUpdateFont = () => {
        this.props.actionUpdateFont();
    };

    render() {
        return (
            <View style={[styles.container, this.props.backgroundStyle]}>
                <Text style={[styles.welcome, this.props.fontStyle]}>Welcome to React Native!</Text>
                <Text style={[styles.welcome, this.props.fontStyle]}>To get started, edit App.js</Text>
                <TouchableOpacity
                    onPress={this.handleChangeBackground}>
                    <Text style={[styles.welcome, this.props.fontStyle]}>Change Background Color</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleUpdateFont}>
                    <Text style={[styles.welcome, this.props.fontStyle]}>Change Text to Bold</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

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

export default connect(mapStateToProps, {
    actionUpdateBackground,
    actionUpdateFont,
})(LauncherView);

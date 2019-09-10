import React  from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import { actionMakeBackgroundWhite, actionMakeBackgroundBlack } from '../actions/background.action';
import { actionMakeBoldText, actionMakeNormalText } from '../actions/text.action';

class TestComponent extends React.PureComponent {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.textStyle !== nextProps.textStyle || this.props.backgroundStyle !== nextProps.backgroundStyle;
    }

    handleChangeText = () => {
        this.props.actionMakeBoldText();
    };

    handleChangeBackground = () => {
        this.props.actionMakeBackgroundBlack();
    };

    render() {
        return (
            <View style={[styles.container,this.props.backgroundStyle]}>
                <Text style={[styles.welcome,this.props.textStyle]}>Welcome to React Native!</Text>
                <Text style={[styles.instructions,this.props.textStyle]}>To get started, edit App.js</Text>
                <Text style={[styles.instructions,this.props.textStyle]}>{instructions}</Text>
                <TouchableOpacity
                    onPress={this.handleChangeBackground}
                    >
                    <Text style={[styles.welcome,this.props.textStyle]}>Change Background Color</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleChangeText}
                >
                    <Text style={[styles.welcome,this.props.textStyle]}>Change Text to Bold</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const mapStateToProps = state => {
    return {
        textStyle: state.TextReducers.textStyle,
        backgroundStyle: state.BackgroundReducers.backgroundStyle
    };
};

export default connect(mapStateToProps, {
    actionMakeBackgroundWhite,
    actionMakeBackgroundBlack,
    actionMakeBoldText,
    actionMakeNormalText,
})(TestComponent);

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

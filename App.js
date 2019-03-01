import React, { Component } from 'react';
import { Constants, Svg } from 'expo';
import {
  LayoutAnimation,
  ScrollView,
  Animated,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native';

import styles, { BAR_HEIGHT } from './app/components/styles.js';
import Header from './app/components/header';

import { Ionicons } from '@expo/vector-icons';
import Router from './app/index';

import {
  NavigationProvider,
  StackNavigation,
  SharedElementOverlay
} from '@expo/ex-navigation';

const { Stop, Defs, LinearGradient, G, Use, Circle, Ellipse } = Svg;

var { height, width } = Dimensions.get('window');

class TopHeader extends Component {
  render() {
    return (
      <Svg height={BAR_HEIGHT} width={width} style={styles.headerShadow}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor="#FF0EE5" stopOpacity="1" />
            <Stop offset="1" stopColor="#FF0000" stopOpacity="1" />
          </LinearGradient>
          <G id="shape">
            <G>
              <Ellipse
                cx={width / 2}
                cy="0"
                rx={100 + width / 2}
                ry={BAR_HEIGHT}
              />
            </G>
          </G>
        </Defs>

        <Use href="#shape" x="0" y="0" fill="url(#grad)" />
      </Svg>
    );
  }
}

export default class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <NavigationProvider router={Router}>
        <SharedElementOverlay>
          <StackNavigation
            initialRoute="home"
            defaultRouteConfig={{
              navigationBar: {
                tintColor: '#FFF',
                renderRight: props => (
                  <Ionicons
                    name="md-options"
                    onPress={() => Alert.alert('Todo: Filter preferences')}
                    size={30}
                    style={[
                      styles.shadow,
                      {
                        backgroundColor: 'transparent',
                        marginTop: 8,
                        marginRight: 14
                      }
                    ]}
                    color={props.config.navigationBar.tintColor}
                  />
                ),
                renderTitle: props => (
                  <Header {...props.config.navigationBar} />
                ),
                renderBackground: () => <TopHeader />
              }
            }}
          />
        </SharedElementOverlay>
      </NavigationProvider>
    );
  }
}

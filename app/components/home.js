import React, { Component } from 'react';
import { Svg } from 'expo';
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
import { withNavigation } from '@expo/ex-navigation';
import styles, { BAR_HEIGHT } from './styles.js';
import Slider from './slider';

const { Stop, Defs, LinearGradient, G, Use, Circle, Ellipse } = Svg;

import { Ionicons } from '@expo/vector-icons';

var { height, width } = Dimensions.get('window');

@withNavigation
export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Nearby Pokemon',
      subtitle: '5/807'
    }
  };

  componentDidMount() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Slider />
        <View
          style={{
            flex: 0.35,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center'
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              textAlign: 'center',
              justifyContent: 'space-between',
              //margin-right: '5px',
              width: 200
            }}>
            <AButton size={90} color={'#FF0000'} icon={'md-star'} pop={'Todo: Like'}/>
            <AButton size={90} color={'#FF0000'} icon={'md-chatboxes'} pop={'Todo: Chat'}/>
          </View>
        </View>
      </View>
    );
  }
}

class AButton extends Component {
  render() {
    const stroke = 3;
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(`${this.props.pop}`)}
        style={{
          width: this.props.size,
          height: this.props.size,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Svg
          height={this.props.size}
          width={this.props.size}
          style={{
            shadowColor: this.props.color,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.29,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
          }}>
          <Defs>
            <LinearGradient id="buttonGrad" x1="0%" y1="0%" x2="10%" y2="100%">
              <Stop offset="0" stopColor={this.props.color} stopOpacity=".5" />
              <Stop offset="1" stopColor={this.props.color} stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Circle
            cx={this.props.size / 2}
            cy={this.props.size / 2}
            r={this.props.size / 2 - stroke * 2}
            stroke="url(#buttonGrad)"
            strokeWidth={stroke}
            fill="#fff"
          />
        </Svg>
        <Ionicons
          name={this.props.icon}
          size={this.props.size * 0.45}
          style={{ backgroundColor: 'transparent', position: 'absolute' }}
          color={this.props.color}
        />
      </TouchableOpacity>
    );
  }
}

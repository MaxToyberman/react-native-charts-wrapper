import React, {Component} from 'react';
import { UIManager, findNodeHandle} from 'react-native';
import { Commands } from './RNLineChartNativeComponent';

export default function ScaleEnhancer(Chart) {
  return class ScaleExtended extends Chart {
    fitScreen() {
      if(this.getNativeComponentRef()) {
        Commands.fitScreen();
      }
    }

  }
}
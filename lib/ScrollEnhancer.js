import React, {Component} from 'react';
import { Commands } from './RNLineChartNativeComponent';

export default function ScrollEnhancer(Chart) {
  return class ScrollExtended extends Chart {
    setDataAndLockIndex(data) {
      if(this.getNativeComponentRef()) {
        Commands.setDataAndLockIndex(data);
      }
    }
  }
}
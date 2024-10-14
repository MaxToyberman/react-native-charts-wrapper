import React, {Component} from 'react';
import { Commands } from './RNLineChartNativeComponent';

export default function MoveEnhancer(Chart) {
  return class MoveExtended extends Chart {
    // x, y, left/right
    moveViewTo(x, y, axisDependency) {
      if(this.getNativeComponentRef()) {
        Commands.moveViewTo(x, y, axisDependency);
      }
    }
    moveViewToX(x) {
      if(this.getNativeComponentRef()) {
        Commands.moveViewToX(x);
      }
    }
    moveViewToAnimated(x, y, axisDependency, duration) {
      if(this.getNativeComponentRef()) {
        Commands.moveViewToAnimated(x, y, axisDependency, duration);
      }
    }
    centerViewTo(x, y, axisDependency) {
      if(this.getNativeComponentRef()) {
        Commands.centerViewTo(x, y, axisDependency);
      }
    }
    centerViewToAnimated(x, y, axisDependency, duration) {

      if(this.getNativeComponentRef()) {
        Commands.centerViewToAnimated(x, y, axisDependency, duration);
      }
    }
  }
}
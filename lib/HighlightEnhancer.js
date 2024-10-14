import React, {Component} from 'react';
import { Commands } from './RNLineChartNativeComponent';


export default function HighlightEnhancer(Chart) {
  return class HighlightExtended extends Chart {
    highlights(config) {
      if(this.getNativeComponentRef()) {
        Commands.highlights(config);
      }
    }
  }
}
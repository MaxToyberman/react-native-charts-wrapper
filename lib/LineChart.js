import React from 'react';

import MoveEnhancer from './MoveEnhancer'
import ScaleEnhancer from "./ScaleEnhancer";
import HighlightEnhancer from "./HighlightEnhancer";
import ScrollEnhancer from "./ScrollEnhancer";

import RNLineChartNativeComponent from './RNLineChartNativeComponent';

export class LineChart extends React.Component {
  getNativeComponentName() {
    return 'RNLineChart'
  }

  getNativeComponentRef() {
    return this.nativeComponentRef
  }

  render() {
    return <RNLineChartNativeComponent {...this.props} ref={ref => this.nativeComponentRef = ref} />;
  }
}

export default ScrollEnhancer(HighlightEnhancer(ScaleEnhancer(MoveEnhancer(LineChart))))
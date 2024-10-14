import { WithDefault, Int32, Float } from 'react-native/Libraries/Types/CodegenTypes';

export type YAxisType = Readonly<{
  enabled?: WithDefault<boolean, true>;
  inverted?: WithDefault<boolean, false>;
  drawLabels?: WithDefault<boolean, true>;
  drawAxisLine?: WithDefault<boolean, true>;
  drawGridLines?: WithDefault<boolean, true>;

  textColor?: Int32;
  textSize?: Float;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  gridColor?: Int32;
  gridLineWidth?: Float;
  axisLineColor?: Int32;
  axisLineWidth?: Float;
  
  limitLines?: ReadonlyArray<{
    limit: Float;
    label?: string;
    lineColor?: Int32;
    lineWidth?: Float;
    valueTextColor?: Int32;
    valueFont?: Int32;
    fontFamily?: string;
    fontStyle?: string;
    fontWeight?: string;
    labelPosition?: 'LEFT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_TOP' | 'RIGHT_BOTTOM';
    lineDashPhase?: Float;
    lineDashLengths?: ReadonlyArray<Float>;
  }>;

  drawLimitLinesBehindData?: WithDefault<boolean, true>;
  axisMaximum?: Float;
  axisMinimum?: Float;
  granularity?: Float;
  granularityEnabled?: WithDefault<boolean, false>;
  
  labelCount?: Int32;
  labelCountForce?: WithDefault<boolean, false>;

  centerAxisLabels?: WithDefault<boolean, false>;

  valueFormatter?: 'largeValue' | 'percent' | 'date' | string | ReadonlyArray<string>;
  valueFormatterPattern?: string;
  since?: Float;
  timeUnit?: 'MILLISECONDS' | 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';

  // Additional Y-axis properties
  spaceTop?: Float;
  spaceBottom?: Float;
  maxWidth?: Float;
  minWidth?: Float;
  
  zeroLine?: Readonly<{
    enabled: WithDefault<boolean, false>;
    lineWidth?: Float;
    lineColor?: Int32;
  }>;
}>;

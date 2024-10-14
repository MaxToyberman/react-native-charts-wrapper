import type { ViewProps } from "ViewPropTypes";
import type { HostComponent } from "react-native";
import type {
  Int32,
  Double,
  Float,
  WithDefault,
  BubblingEventHandler
} from 'react-native/Libraries/Types/CodegenTypes';

import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

interface YaxisMinMaxChangeEvent {
  nativeEvent: {
    minValue: Int32;
    maxValue: Int32;
  };
}

type yAxisLeftPosition = 'OUTSIDE_CHART' | 'INSIDE_CHART'
type yAxisRightPosition = 'OUTSIDE_CHART' | 'INSIDE_CHART'

interface DatasetProps {
    dataSets: Array<{
      values: Array<
        {
            x?: Int32;
            y: Int32;
            marker?: string;
            icon?: {
              bundle?: {
                uri?: string;   // For image URI
                type?: string;  // For bundle type, if applicable
              };
              width?: Int32;
              height?: Int32;
            };
          }
      >;
      label: string;
      config?: {
        circleRadius?: Float;
        drawCircles?: boolean;
        mode?: WithDefault<"LINEAR" | "STEPPED" | "CUBIC_BEZIER" | "HORIZONTAL_BEZIER", 'LINEAR'>;
        drawCubicIntensity?: Float;
        circleColor?: Int32;
        circleColors?: Int32[];
        circleHoleColor?: Int32;
        drawCircleHole?: boolean;
        fillFormatter?: {
          min: Float;
        };
        dashedLine?: {
          lineLength: Float;
          spaceLength: Float;
          phase?: Float;
        };
        // Assuming ChartDataSetConfig is an interface defined elsewhere in your codebase
        // common?: ChartDataSetConfig['common'];
        // barLineScatterCandleBubble?: ChartDataSetConfig['barLineScatterCandleBubble'];
        // lineScatterCandleRadar?: ChartDataSetConfig['lineScatterCandleRadar'];
        // lineRadar?: ChartDataSetConfig['lineRadar'];
      };
    }>;
}

type Marker = Readonly<{
  enabled?: boolean;
  digits?: Int32;
  markerColor?: Int32;
  textColor?: Int32;
  textSize?: Int32;
}>
export interface NativeProps extends ViewProps, DatasetProps {

  animation?: {
    durationX?: Int32; // Milliseconds
    durationY?: Int32; // Milliseconds
    easingX?: string; // Easing functions (e.g., 'Linear', 'EaseInQuad', etc.)
    easingY?: string; // Easing functions
  };

  chartBackgroundColor?: Int32;
  logEnabled?: boolean;
  noDataText?: string;
  noDataTextColor?: Int32;

  touchEnabled?: boolean;
  dragDecelerationEnabled?: boolean;
  dragDecelerationFrictionCoef?: Float; // Value must be between 0 and 1

  highlightPerTapEnabled?: boolean;
  chartDescription?: {
    readonly text?: string;
    readonly textColor?: Int32;
    readonly textSize?: Int32;
  
    readonly positionX?: Float;
    readonly positionY?: Float;
  }
  legend?: {
    enabled?: boolean;

    textColor?: Int32;
    textSize?: Int32;
    fontFamily?: string;
    fontStyle?: string;
    fontWeight?: string;
  
    wordWrapEnabled?: boolean;
    maxSizePercent?: Double;
  
    horizontalAlignment?: WithDefault<'LEFT' | 'CENTER' | 'RIGHT', 'CENTER'>;
    verticalAlignment?: WithDefault<'TOP' | 'CENTER' | 'BOTTOM', 'CENTER' >;
    orientation?: WithDefault<'HORIZONTAL' | 'VERTICAL', 'HORIZONTAL'>;
    drawInside?: boolean;
    direction?: WithDefault<'LEFT_TO_RIGHT' | 'RIGHT_TO_LEFT', 'LEFT_TO_RIGHT'>;
  
    form?: WithDefault<'NONE' | 'EMPTY' | 'DEFAULT' | 'SQUARE' | 'CIRCLE' | 'LINE', 'NONE'>;
    formSize?: Double;
    xEntrySpace?: Double;
    yEntrySpace?: Double;
    formToTextSpace?: Double;
  
    custom?: {
      colors?: Int32[];
      labels?: string[];
    };
  }; 
  xAxis?: {
    labelRotationAngle?: Float;
    avoidFirstLastClipping?: boolean;
    xAxisPosition?: WithDefault<'TOP' | 'BOTTOM' | 'BOTH_SIDED' | 'TOP_INSIDE' | 'BOTTOM_INSIDE', 'TOP'>;
    yOffset?: Float;  
  }

  onYaxisMinMaxChange?: BubblingEventHandler<YaxisMinMaxChangeEvent>;

  marker?: Marker;

  highlights?: Array<{
    x: Int32;
    dataSetIndex?: Int32; // Used in stacked bar charts
    dataIndex?: Int32; // Necessary in combined charts when default highlight is set
    y?: Int32;
    stackIndex?: Int32;
  }>;


   /// 2  
  maxHighlightDistance?: Float;
  drawGridBackground?: boolean;
  gridBackgroundColor?: Int32;

  drawBorders?: boolean;
  borderColor?: Int32;
  borderWidth?: Int32;

  minOffset?: Float;
  maxVisibleValueCount?: Int32;
  visibleRange?: {
    x?: {
      min?: Int32;
      max?: Int32;
    };
    y?: {
      left?: {
        min?: Int32;
        max?: Int32;
      };
      right?: {
        min?: Int32;
        max?: Int32;
      };
    };
  };
  maxScale?: {
    x?: Int32;
    y?: Int32;
  };
  autoScaleMinMaxEnabled?: boolean;
  keepPositionOnRotation?: boolean;

  highlightPerDragEnabled?: boolean;

  scaleEnabled?: boolean;
  scaleXEnabled?: boolean;
  scaleYEnabled?: boolean;
  dragEnabled?: boolean;
  pinchZoom?: boolean;
  doubleTapToZoomEnabled?: boolean;

  yAxis?: { 
    left?: {
      inverted?: boolean;
      spaceTop?: Float;
      spaceBottom?: Float;
    
      yAxisLeftPosition?: WithDefault<yAxisLeftPosition, 'INSIDE_CHART'>;
    
      maxWidth?: Int32;
      minWidth?: Int32;
    
      // zero line
      zeroLine?: {
        enabled?: boolean;
        lineWidth?: Float;
        lineColor?: Int32;
      };
    };
    right?: {
      inverted?: boolean;
      spaceTop?: Float;
      spaceBottom?: Float;
    
      yAxisRightPosition?: WithDefault<yAxisRightPosition, 'INSIDE_CHART'>;
    
      maxWidth?: Int32;
      minWidth?: Int32;
    
      // zero line
      zeroLine?: {
        enabled?: boolean;
        lineWidth?: Float;
        lineColor?: Int32;
      };
    };
  };
  zoom?: {
    scaleX: Int32;
    scaleY: Int32;
    xValue: Double;
    yValue: Double;
    axisDependency?: WithDefault<'LEFT' | 'RIGHT', 'LEFT'>;
  };
  viewPortOffsets?: {
    left?: Double;
    top?: Double;
    right?: Double;
    bottom?: Double;
  };
  extraOffsets?: {
    left?: Double;
    top?: Double;
    right?: Double;
    bottom?: Double;
  };

  group?: string;
  identifier?: string;
  syncX?: boolean;
  syncY?: boolean;

}

// commands

type LineChartNativeComponentType = HostComponent<NativeProps>;

interface NativeCommands {
  setDataAndLockIndex: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
    data: boolean,
  ) => void;
  highlights: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
    config: boolean,
  ) => void;
  fitScreen: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
  ) => void;
  moveViewTo: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
    x: Float,
    y: Float,
    axisDependency: string
  ) => void;
  moveViewToX: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
    x: Float
  ) => void;
  moveViewToAnimated: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
    x: Float,
    y: Float,
    axisDependency: string,
    duration: Int32
  ) => void;
  centerViewTo: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
    x: Float,
    y: Float,
    axisDependency: string,
  ) => void;
  centerViewToAnimated: (
    viewRef: React.ElementRef<LineChartNativeComponentType>,
    x: Float,
    y: Float,
    axisDependency: string,
    duration: Int32
  ) => void;
}


export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ["setDataAndLockIndex", "highlights", "fitScreen", "moveViewTo", "moveViewToX", "moveViewToAnimated", "centerViewTo", "centerViewToAnimated"],
});

export default codegenNativeComponent<NativeProps>(
  "RNLineChart"
) as HostComponent<NativeProps>;
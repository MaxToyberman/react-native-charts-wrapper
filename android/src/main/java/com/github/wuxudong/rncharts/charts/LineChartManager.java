package com.github.wuxudong.rncharts.charts;


import android.view.View;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.viewmanagers.RNLineChartManagerDelegate;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.components.YAxis;
import com.github.mikephil.charting.data.Entry;
import com.github.wuxudong.rncharts.data.DataExtract;
import com.github.wuxudong.rncharts.data.LineDataExtract;
import com.github.wuxudong.rncharts.listener.RNOnChartValueSelectedListener;
import com.github.wuxudong.rncharts.listener.RNOnChartGestureListener;

import com.facebook.react.viewmanagers.RNLineChartManagerInterface;

public class LineChartManager extends BarLineChartBaseManager<LineChart, Entry> implements RNLineChartManagerInterface<LineChart> {

    private final ViewManagerDelegate<LineChart> mDelegate;

    static final String NAME = "RNLineChart";

    public LineChartManager(ReactApplicationContext context) {
        mDelegate = new RNLineChartManagerDelegate<>(this);
    }

    @Nullable
    @Override
    protected ViewManagerDelegate<LineChart> getDelegate() {
        return mDelegate;
    }

    @Override
    public String getName() {
        return LineChartManager.NAME;
    }

    @Override
    protected LineChart createViewInstance(ThemedReactContext reactContext) {
        LineChart lineChart = new LineChart(reactContext);
        lineChart.setOnChartValueSelectedListener(new RNOnChartValueSelectedListener(lineChart));
        lineChart.setOnChartGestureListener(new RNOnChartGestureListener(lineChart));
        return lineChart;
    }

    @Override
    DataExtract getDataExtract() {
        return new LineDataExtract();
    }



    @Override
    public void setDataSets(LineChart view, @Nullable ReadableArray value) {

    }

    @Override
    public void setAnimation(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setChartBackgroundColor(LineChart view, int value) {

    }

    @Override
    public void setLogEnabled(LineChart view, boolean value) {
        view.setLogEnabled(value);
    }

    @Override
    public void setNoDataText(LineChart view, @Nullable String value) {
        view.setNoDataText(value);
    }

    @Override
    public void setNoDataTextColor(LineChart view, int value) {
        view.setNoDataTextColor(value);
    }

    @Override
    public void setTouchEnabled(LineChart view, boolean value) {
        view.setTouchEnabled(value);
    }

    @Override
    public void setDragDecelerationEnabled(LineChart view, boolean value) {
        view.setDragDecelerationEnabled(value);
    }

    @Override
    public void setDragDecelerationFrictionCoef(LineChart view, float value) {

    }

    @Override
    public void setHighlightPerTapEnabled(LineChart view, boolean value) {
        view.setHighlightPerTapEnabled(value);
    }

    @Override
    public void setChartDescription(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setXAxis(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setMarker(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setMaxHighlightDistance(LineChart view, float value) {

    }

    @Override
    public void setDrawGridBackground(LineChart view, boolean value) {

    }

    @Override
    public void setGridBackgroundColor(LineChart view, int value) {

    }

    @Override
    public void setDrawBorders(LineChart view, boolean value) {

    }

    @Override
    public void setBorderColor(LineChart view, int value) {

    }

    @Override
    public void setBorderWidth(LineChart view, int value) {

    }

    @Override
    public void setMinOffset(LineChart view, float value) {

    }

    @Override
    public void setMaxVisibleValueCount(LineChart view, int value) {

    }

    @Override
    public void setVisibleRange(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setMaxScale(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setAutoScaleMinMaxEnabled(LineChart view, boolean value) {

    }

    @Override
    public void setKeepPositionOnRotation(LineChart view, boolean value) {
        view.setKeepPositionOnRotation(value);
    }

    @Override
    public void setHighlightPerDragEnabled(LineChart view, boolean value) {
        view.setHighlightPerDragEnabled(value);
    }

    @Override
    public void setScaleEnabled(LineChart view, boolean value) {
        view.setScaleEnabled(value);
    }

    @Override
    public void setScaleXEnabled(LineChart view, boolean value) {
        view.setScaleXEnabled(value);
    }

    @Override
    public void setScaleYEnabled(LineChart view, boolean value) {
        view.setScaleYEnabled(value);
    }

    @Override
    public void setDragEnabled(LineChart view, boolean value) {
        view.setDragEnabled(value);
    }

    @Override
    public void setPinchZoom(LineChart view, boolean value) {
        view.setPinchZoom(value);
    }

    @Override
    public void setDoubleTapToZoomEnabled(LineChart view, boolean value) {
        view.setDoubleTapToZoomEnabled(value);
    }

    @Override
    public void setYAxis(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setZoom(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setViewPortOffsets(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setExtraOffsets(LineChart view, @Nullable ReadableMap value) {

    }

    @Override
    public void setGroup(LineChart view, @Nullable String value) {

    }

    @Override
    public void setIdentifier(LineChart view, @Nullable String value) {

    }

    @Override
    public void setSyncX(LineChart view, boolean value) {

    }

    @Override
    public void setSyncY(LineChart view, boolean value) {

    }

    @Override
    public void setDataAndLockIndex(LineChart view, boolean data) {

    }

    @Override
    public void highlights(LineChart view, boolean config) {

    }

    @Override
    public void fitScreen(LineChart view) {
        view.fitScreen();
    }

    @Override
    public void moveViewTo(LineChart view, float x, float y, String axisDependency) {

        YAxis.AxisDependency z = YAxis.AxisDependency.valueOf(axisDependency);
        view.moveViewTo(x,y, z);
    }

    @Override
    public void moveViewToX(LineChart view, float x) {
        view.moveViewToX(x);
    }

    @Override
    public void moveViewToAnimated(LineChart view, float x, float y, String axisDependency, int duration) {
        YAxis.AxisDependency z = YAxis.AxisDependency.valueOf(axisDependency);
        view.moveViewToAnimated(x,y, z, duration);
    }

    @Override
    public void centerViewTo(LineChart view, float x, float y, String axisDependency) {
        YAxis.AxisDependency z = YAxis.AxisDependency.valueOf(axisDependency);
        view.centerViewTo(x,y, z);
    }

    @Override
    public void centerViewToAnimated(LineChart view, float x, float y, String axisDependency, int duration) {
        YAxis.AxisDependency z = YAxis.AxisDependency.valueOf(axisDependency);

        view.centerViewToAnimated(x,y,z,duration);
    }
}

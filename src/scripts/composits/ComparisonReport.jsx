/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/ComparisonReport.css');

var FlexGrid = require('components/FlexGrid');
var Chart = require('components/Chart');
var UniqueIdMixin = require('mixins/UniqueIdMixin');

var ReportEntry = require('components/ReportEntry');


var ComparisonReport = React.createClass({
  mixins: [UniqueIdMixin],
  render: function () {
    var self = this;

    var layoutOptions = {
      flexWrap: 'wrap',
      justify: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'strech',
      display: 'flex'
    };



    var reports = this.props.entry.timeseries.map(function(report){
      var chartId = self.makeId();
      return (
        <div>
          <Chart chartId={chartId} data={report.entries} axis={report.resolution} type='line' />
        </div>
      )
    });

    return (
        <FlexGrid layout={layoutOptions}>
            {reports}
        </FlexGrid>
      );
  }
});

module.exports = ComparisonReport;

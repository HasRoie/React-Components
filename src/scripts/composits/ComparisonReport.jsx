/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/ComparisonReport.css');

var Grid = require('components/Grid');
var ReportEntry = require('components/ReportEntry');


var ComparisonReport = React.createClass({

  render: function () {


    var layoutOptions = {
      flexWrap: 'wrap',
      justify: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'strech',
      display: 'flex'
    };

    var reports = this.props.entry.timeseries.map(function(report){
      var entries = report.entries.map(function(entry){
        return (
          <ReportEntry entry={entry}/>
        )
      });

      return (
        <div>
          {entries}
        </div>
      )
    });

    return (
        <Grid layout={layoutOptions}>
            {reports}
        </Grid>
      );
  }
});

module.exports = ComparisonReport;

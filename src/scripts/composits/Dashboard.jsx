/**
 * @jsx React.DOM
 */

var React = require('React');
var ReportEntry = require('components/ReportEntry');
var ComparisonReport = require('composits/ComparisonReport');
var Chart = require('components/Chart');
var UniqueIdMixin = require('mixins/UniqueIdMixin');

var _ = require('lodash');

var Dashboard = React.createClass({
  mixins: [UniqueIdMixin],
  getInitialState: function() {
    return {
        entries: [
          {
            id:1,
            app: 'Clash of Clans Android',
            publisher: 'All Publishers',
            fact: 'conversion has grown',
            operator: 'by',
            sentiment: 'positive',
            unitType: 'percentage',
            ratio: 0.14,
            resolution: 'week',
            timeseries:[ {
              resolution: 'week',
              entries: [
                {
                  week: 1,
                  value: 0.130
                },
                {
                  week: 2,
                  value: 0.06
                },
                {
                  week: 3,
                  value: 0.03
                },
                {
                  week: 4,
                  value: 0.20
                },
                {
                  week: 5,
                  value: 0.1
                },
                {
                  week: 6,
                  value: 0.06
                },
                {
                  week: 7,
                  value: 0.03
                },
                {
                  week: 8,
                  value: 0.20
                },
                {
                  week: 9,
                  value: 0.10
                },
                {
                  week: 10,
                  value: 0.06
                },
                {
                  week: 11,
                  value: 0.03
                },
                {
                  week: 12,
                  value: 0.34
                },
                {
                  week: 13,
                  value: 0.10
                },
                {
                  week: 14,
                  value: 0.06
                },
                {
                  week: 15,
                  value: 0.03
                },
                {
                  week: 16,
                  value: 0.20
                },
                {
                  week: 17,
                  value: 0.78
                },
                {
                  week: 18,
                  value: 0.06
                },
                {
                  week: 19,
                  value: 0.03
                },
                {
                  week: 20,
                  value: 0.11
                }
              ]
            }]
          },
          {
            id:2,
            app: 'BeJewled iOS',
            publisher: 'ScaleIn',
            fact: 'conversion is unstable',
            operator: 'around',
            sentiment: 'negative',
            unitType: 'percentage',
            ratio: 0.23,
            resolution: 'week',
            timeseries:[ {
              resolution: 'week',
              entries: [
                {
                  week: 1,
                  value: -0.10
                },
                {
                  week: 2,
                  value: -0.04
                },
                {
                  week: 3,
                  value: 0.12
                },
                {
                  week: 4,
                  value: 0.02
                }
              ]
            },
            {
              resolution: 'week',
              entries: [
                {
                  week: 1,
                  value: -0.10
                },
                {
                  week: 2,
                  value: -0.04
                },
                {
                  week: 3,
                  value: 0.12
                },
                {
                  week: 4,
                  value: 0.02
                }
              ]
            }]
          },
          {
            id:3,
            app: 'Midnight Castle iOS',
            publisher: 'ScaleIn',
            fact: 'conversion has dropped',
            operator: 'by',
            sentiment: 'negative',
            unitType: 'percentage',
            ratio: -0.3,
            resolution: 'week',
            timeseries:[ {
              resolution: 'week',
              entries: [
                {
                  week: 1,
                  value: -0.10
                },
                {
                  week: 2,
                  value: -0.03
                },
                {
                  week: 3,
                  value: -0.08
                },
                {
                  week: 4,
                  value: -0.23
                }
              ]
            }]
          },
          {
            id:4,
            app: 'Midnight Castle iOS',
            publisher: 'ScaleUp',
            fact: 'Installs have increased',
            operator: 'by',
            sentiment: 'positive',
            unitType: 'integer',
            ratio: 1542,
            resolution: 'day',
            timeseries:[ {
              resolution: 'day',
              entries: [
                {
                  day: 1,
                  value: -0.10
                },
                {
                  day: 2,
                  value: -0.03
                },
                {
                  day: 3,
                  value: -0.08
                },
                {
                  day: 4,
                  value: -0.23
                },
                {
                  day: 4,
                  value: -0.23
                },
                {
                  day: 4,
                  value: -0.23
                },
                {
                  day: 4,
                  value: -0.23
                },
                {
                  day: 4,
                  value: -0.23
                },
                {
                  day: 4,
                  value: -0.23
                },
                {
                  day: 4,
                  value: -0.23
                }
              ]
            }]
          },
          {
            id:5,
            app: 'Clash of Clans Android',
            publisher: 'ScaleUp',
            fact: 'Clicks have decreased',
            operator: 'by',
            sentiment: 'negative',
            unitType: 'integer',
            ratio: -12394,
            resolution: 'day',
            timeseries:[
              {
                resolution: 'day',
                average: 100,
                mean: 100,
                stdv: 100,
                sum: 100,

                entries: [
                  {
                    day: 1,
                    value: -0.10
                  },
                  {
                    day: 2,
                    value: -0.03
                  },
                  {
                    day: 3,
                    value: -0.08
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  }
                ]
              },
              {
                resolution: 'day',
                average: 100,
                mean: 100,
                stdv: 100,
                sum: 100,

                entries: [
                  {
                    day: 1,
                    value: -0.10
                  },
                  {
                    day: 2,
                    value: -0.03
                  },
                  {
                    day: 3,
                    value: -0.08
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  },
                  {
                    day: 4,
                    value: -0.23
                  }
                ]
              }
            ]
          }
        ]
    };
  },

  componentWillMount: function() {

  },

  render: function() {
    var self = this;
    var entries = _.map(this.state.entries, function(entry){

      var comparisonReport;
      var comperable = (entry.timeseries.length > 1);

      if (comperable){
        comparisonReport = <ComparisonReport entry={entry} />
      }

      var chartId = self.makeId();
      var chart = <Chart chartId={chartId} data={entry.timeseries[0].entries} axis={entry.resolution} type='line' />;


      return self.transferPropsTo(
        <div>
          <ReportEntry entry={entry} />
          {comperable ? comparisonReport : chart}
        </div>
      )
    });
    return (
      <div>
        {entries}
      </div>
    );
  }

});

module.exports = Dashboard;

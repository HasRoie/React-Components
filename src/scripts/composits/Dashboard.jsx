/**
 * @jsx React.DOM
 */

var React = require('React');
var ReportEntry = require('components/ReportEntry');
var ComparisonReport = require('composits/ComparisonReport');

var _ = require('lodash');

var Dashboard = React.createClass({

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
            timeseries:[ {
              resolution: 'weeks',
              entries: [
                {
                  week: 1,
                  value: 0.10
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
            timeseries:[ {
              resolution: 'weeks',
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
              resolution: 'weeks',
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
            timeseries:[ {
              resolution: 'weeks',
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
            timeseries:[ {
              resolution: 'days',
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
            timeseries:[
              {
                resolution: 'days',
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
                resolution: 'days',
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




      return self.transferPropsTo(
        <div>
          <ReportEntry entry={entry} />
          {comperable ? comparisonReport : ''}
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

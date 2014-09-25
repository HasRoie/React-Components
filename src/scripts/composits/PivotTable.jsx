/**
 * @jsx React.DOM
 */

/*
	<PivotTable data=<Object> ></PivotTable> 
*/


var React = require('React');
var FlexTable = require('components/FlexTable');

var PivotTable = React.createClass({
	getInitialState: function() {
		return {
			data: this.props.data
		};
	},
	componentWillMount: function() {
		
	},
	sortBy: function() {

	},
	pivot: function(){

	},
	render: function() {
		return (
			<FlexTable 	
				// rows="<Array>" 
				// cols="<Array>" 
				// header="<Array>" 
				// hoverRow="<EventHandler>" 
				// hoverCol="<EventHandler>" 
				// hoverCell="<EventHandler>"
			>
			</FlexTable>
		);
	}
});
module.export = PivotTable;
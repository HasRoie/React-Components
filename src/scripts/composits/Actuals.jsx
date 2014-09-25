/**
 * @jsx React.DOM
 */

/*
	<Actuals model=<actuals-model> 
*/


var React = require('React');
var FlexTable = require('components/FlexTable');

var Actuals = React.createClass({
	getInitialState: function() {
		return {
			actuals: this.prop.model 
		};
	},
	componentWillMount: function() {
		
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
				// clickRow="<EventHandler>"
				// clickCell="<EventHandler>"
			>
			</FlexTable>	
		);
	}
});
module.export = Actuals;
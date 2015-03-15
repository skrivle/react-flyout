var React = require('react');

module.exports = React.createClass({

	/* Component methods
	----------------------------------------- */
	getInitialState: function () {
		return {isOpen: false};
	},

	toggle: function () {
		if(this.state.isOpen) {
			this.close();
		}else {
			this.open();
		}
	},

	open: function () {
		this.setState({isOpen: true});
	},

	close: function () {
		this.setState({isOpen: false});
	},


	/* Event handlers
	----------------------------------------- */
	onButtonClick: function () {
		this.toggle();
	},


	/* Render
	----------------------------------------- */
	render: function () {

		var classSet = React.addons.classSet;
		var flyoutClasses = classSet({
			'flyout': true,
			'is-open': this.state.isOpen
		});

		var buttonText = (this.state.isOpen) ? 'open' : 'close';

		return (
			<div className={flyoutClasses}>
				<div className=flyout__header>
					<button onClick={this.onButtonClick}>{buttonText}</button>
				</div>
				<div className=flyout__body></div>
			</div>
		)
	}
});
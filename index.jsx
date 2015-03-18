var React = require('react/addons');

function getParents (el) {

	var parents, parent;

	parents = [];
	parent = el.parentNode;

	while(parent) {
		parents.unshift(parent);
		parent = parent.parentNode;
	}

	return parents;
}

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

		document.addEventListener('click', this.onDocumentClick);
	},

	close: function () {

		this.setState({isOpen: false});

		document.removeEventListener('click', this.onDocumentClick);
	},


	/* Event handlers
	----------------------------------------- */
	onButtonClick: function (e) {
		this.toggle();
	},

	onDocumentClick: function (e) {
		var parents, matchesEl;

		parents = getParents(e.target);
		matchesEl = false;

		for(var i = 0, iLen = parents.length; i < iLen; i ++) {

			if(parents[i] === this.getDOMNode()) {
				matchesEl = true;
				break;
			}
		}

		if(!matchesEl) {
			this.close();
		}

	},


	/* Render
	----------------------------------------- */
	render: function () {

		var classSet = React.addons.classSet;
		var flyoutClasses = classSet({
			'flyout': true,
			'is-open': this.state.isOpen
		});

		var buttonText = (this.state.isOpen) ? 'close' : 'open';

		return (
			<div className={flyoutClasses}>
				<div className="flyout__header">
					<button onClick={this.onButtonClick}>{buttonText}</button>
				</div>
				<div className="flyout__body">flyout body</div>
			</div>
		)
	}
});
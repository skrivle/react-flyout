jest.dontMock('../lib/index.jsx');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

function hasClass(component, className) {
	var classes = component.props.className.split(' ');
	return (classes.indexOf(className) > -1);
}

describe('React flyout', function () {

	var Flyout, instance;

	beforeEach(function () {
		Flyout = require('../lib/index.jsx');
		instance = TestUtils.renderIntoDocument(<Flyout>Test</Flyout>);
	});

	describe('rendering', function () {

		it('Should render a header', function () {

			var header = TestUtils.findRenderedDOMComponentWithClass(instance, 'flyout__header');
			expect(TestUtils.isDOMComponent(header)).toBe(true);
		});

		it('Should render a body', function () {
			var body = TestUtils.findRenderedDOMComponentWithClass(instance, 'flyout__body');
			expect(TestUtils.isDOMComponent(body)).toBe(true);
		});

		it('Should render the body content', function () {
			var body = TestUtils.findRenderedDOMComponentWithClass(instance, 'flyout__body');
			expect(body.getDOMNode().textContent).toEqual('Test');
		});
	});

	describe('expand/collpase', function () {

		var flyout, button;

		beforeEach(function () {
			flyout = TestUtils.findRenderedDOMComponentWithClass(instance, 'flyout');
			button = TestUtils.findRenderedDOMComponentWithClass(instance, 'flyout__toggle');
		})

		it('Should be closed initially', function () {

			expect(hasClass(flyout, 'is-open')).toBe(false);
		});

		it('Should be toggle the flyout on click', function () {

			TestUtils.Simulate.click(button);
			expect(hasClass(flyout, 'is-open')).toBe(true);

			TestUtils.Simulate.click(button);
			expect(hasClass(flyout, 'is-open')).toBe(false);

		});

		it('Should change the button text when toggling between states', function () {

			var header = TestUtils.findRenderedDOMComponentWithClass(instance, 'flyout__header').getDOMNode();

			expect(header.textContent).toEqual('open');

			TestUtils.Simulate.click(button);
			expect(header.textContent).toEqual('close');

			TestUtils.Simulate.click(button);
			expect(header.textContent).toEqual('open');

		});

	});
});

import React from 'react';
import { shallow } from 'enzyme';
import TimerApp from './TimerApp';

describe('TimerApp', () => {
	it('should render a <div />', () => {
		const container = shallow(<TimerApp />);
		expect(container.find('div').length).toEqual(1);
});
});
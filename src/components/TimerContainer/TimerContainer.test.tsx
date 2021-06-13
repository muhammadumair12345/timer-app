import React from 'react';
import { shallow } from 'enzyme';
import TimerContainer from './TimerContainer';

describe('TimerApp', () => {
	it('should render a <div />', () => {
		const container = shallow(<TimerContainer />);
		expect(container.find('div').length).toEqual(1);
});
});
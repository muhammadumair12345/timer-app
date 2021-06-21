import React from 'react';
import { shallow } from 'enzyme';
import TimerApp from './TimerApp';

test('renders the component', () => {
  const component = shallow(<TimerApp/>);
  expect(component);
});
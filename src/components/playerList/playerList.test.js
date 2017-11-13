import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayerList from './index.js';
import FakePlayers from '../../constants/dummy-data/players';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerList players={FakePlayers} />, div);
});

it('should render a list of thumbs for each players', () => {
	const wrapper = shallow(<PlayerList players={FakePlayers}/>);
  	expect(wrapper.find('.thumbnail').length).toEqual(FakePlayers.length);
});

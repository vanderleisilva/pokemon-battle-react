import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayerList from './index.js';
import FakePlayers from '../../constants/dummy-data/players';

configure({ adapter: new Adapter() });

describe('Render Component',() => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<PlayerList players={FakePlayers} onSelect={() => {}} />)
    })

    it('renders without crashing', () => {
		expect(wrapper.length).toEqual(1);
	});

    it('should render a list of thumbs for each players', () => {
       expect(wrapper.find('.thumbnail').length).toEqual(FakePlayers.length);
    });
    
});
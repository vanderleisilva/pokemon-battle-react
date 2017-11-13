import React from 'react';
import ReactDOM from 'react-dom';
import PlayerList from './index.js';
import FakePlayers from '../../constants/dummy-data/players';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerList players={FakePlayers} />, div);
});

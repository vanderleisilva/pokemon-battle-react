import PropTypes from 'prop-types';

export const playerType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	health: PropTypes.number.isRequired,
	agility: PropTypes.number.isRequired
});

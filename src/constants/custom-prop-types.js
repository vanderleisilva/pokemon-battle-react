import PropTypes from 'prop-types';

export const attackType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	power: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	accuracy: PropTypes.number.isRequired,
});

export const playerType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	health: PropTypes.number.isRequired,
	agility: PropTypes.number.isRequired,
	attack: PropTypes.number.isRequired,
	defense: PropTypes.number.isRequired,
	attacks: PropTypes.arrayOf(attackType).isRequired
});

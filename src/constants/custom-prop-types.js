import PropTypes from 'prop-types';

export const attackType = PropTypes.shape({
	name: PropTypes.string,
	power: PropTypes.number,
	type: PropTypes.string,
	accuracy: PropTypes.number,
});

export const playerType = PropTypes.shape({
	name: PropTypes.string,
	type: PropTypes.string,
	avatar: PropTypes.string,
	health: PropTypes.number,
	agility: PropTypes.number,
	attack: PropTypes.number,
	defense: PropTypes.number,
	attacks: PropTypes.arrayOf(attackType)
});

export const actionType = PropTypes.shape({
	attack: PropTypes.string,
	name: PropTypes.string,
	damage: PropTypes.number,
	desc: PropTypes.string
});
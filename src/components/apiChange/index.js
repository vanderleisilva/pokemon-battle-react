import React from "react";
import {connect} from 'react-redux';
import {changeApi} from 'actions/playerActions';
import localForage from "localforage";
import './apiChange.css';

const mapStateToProps = (state) => ({ api: state.api });

class ApiChange extends React.Component { 

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e){
		let item = this.props.api.engines.find(i=>i.url===e.target.value);
		
		localForage.setItem('backends', {
			selected: item,          
          	engines: this.props.api.engines 
		});
		
		this.props.dispatch(changeApi(item));
	}

	render() {
		if (!this.props.api.engines.length) { return false; }

	    return(
	    	<div className="form-inline">
				<div className="form-group hidden-xs">
				    <select 
				    	onChange={this.onChange} 
				    	value={this.props.api.selected ? this.props.api.selected.url : undefined} 
				    	className="form-control" 
				    	title="Backend Api">
				    	
				    	{this.props.api.engines.map((i, key) => (<option key={key} value={i.url}>{i.name}</option>))}
					
					</select>
				</div>
				<i className="btn btn-default fa fa-info-circle help" aria-hidden="true"></i>
			</div>
	    )
	}
}

export default connect(mapStateToProps)(ApiChange);

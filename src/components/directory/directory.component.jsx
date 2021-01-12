import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import MenuItem from './../menu-item/menu-item.component';
import "./directory.styles.scss"
import { selectDirectorySections } from './../../redux/directory/directory.selectors';
import { connect } from 'react-redux';

const Directory = ({sections}) => {
	return <div className="directory-menu">
					{sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} />)}
			</div>;
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)

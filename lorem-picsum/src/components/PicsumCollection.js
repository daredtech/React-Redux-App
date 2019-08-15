import React from 'react';
import { connect } from 'react-redux';
import Picsum from './Picsum';

const PicsumCollection = props => {
    console.log('props received: ', props)
  return (
    <>
    <Picsum temp={props.temp}/>
    </>
  );
};

const mapStateToProps = state => {
  return {
      ...state
  };
};

export default connect(
  mapStateToProps
)(PicsumCollection);


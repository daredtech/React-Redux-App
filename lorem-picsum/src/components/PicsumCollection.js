import React from 'react';
import { connect } from 'react-redux';
import Picsum from './Picsum';
import { getData } from "../actions";

const PicsumCollection = props => {
    console.log('props received: ', props)
  return (
    <>
    <Picsum temp={props.temp}/>
    <button onClick={props.getData}> get images </button>
    </>
  );
};

const mapStateToProps = state => {
  return {
      ...state
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(PicsumCollection);


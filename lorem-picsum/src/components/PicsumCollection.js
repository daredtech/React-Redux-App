import React from 'react';
import { connect } from 'react-redux';
import Picsum from './Picsum';
import { getData } from "../actions";

const PicsumCollection = props => {
    console.log('props received: ', props)
  return (
    <>
    {/* <Picsum picsums={props.picsums}/> */}
    <button onClick={props.getData}> get images </button>

    {props.picsums && props.picsums.map(pic => <Picsum key={pic.id} picsum={pic} />)}

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


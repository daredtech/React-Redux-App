import React from 'react';
import { connect } from 'react-redux';
import Picsum from './Picsum';
import { getData } from "../actions";

const PicsumCollection = props => {
    console.log('props received: ', props)
  return (
  <>
   
   <h1>Enjoy black and white photography</h1>
    <button onClick={props.getData}> get images </button>

    <div className='picsumcollection'>
    {props.picsums && (props.picsums.filter(item => (item.id !== 0))).map(pic => <Picsum key={pic.id} picsum={pic} />)}

    </div>
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


import React from 'react';

const Picsum = props => {
  console.log('i received the following: ', props)

  return (
    <div className='picsum'>
      {props.picsum.id}
    </div>
  );
};

export default Picsum;

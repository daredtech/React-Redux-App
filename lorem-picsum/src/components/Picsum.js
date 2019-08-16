import React from 'react';

const Picsum = props => {
  console.log('i received the following: ', props)

  return (
    <div className='picsum'>
       <img height='300px' src={props.picsum.download_url+'?grayscale'} />
      {/* {props.picsum.author} */}
    </div>
  );
};

export default Picsum;

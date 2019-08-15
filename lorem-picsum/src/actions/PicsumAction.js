import axios from 'axios';

export const GET_PICSUM_DATA_REQUEST = 'GET_PICSUM_DATA_REQUEST';
export const GET_PICSUM_DATA_SUCCESS = 'GET_PICSUM_DATA_SUCCESS';
export const GET_PICSUM_DATA_FAILURE = 'GET_PICSUM_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
      dispatch({ type: GET_PICSUM_DATA_REQUEST });
      axios
        .get('https://picsum.photos/v2/list')

        .then(res => {
          console.log(res);
          dispatch({ type: GET_PICSUM_DATA_SUCCESS, payload: '' });
        })

        .catch(err => {
          dispatch({ type: GET_PICSUM_DATA_FAILURE, payload: '' });
        });
    };
  };
  


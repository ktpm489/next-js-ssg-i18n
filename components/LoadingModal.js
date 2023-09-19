import React from 'react'
import styled from 'styled-components'
const ModalContainer = styled.div`
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black background */
display: flex;
justify-content: center;
align-items: center;
/* Modal Content */
.modal-content {
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fefefe;
}

.modal-text {
  margin-left: 14px;
  font-size: 24px;
}

/* Create the circle loader with pure CSS */
.loader {
  width: 40px;
  height: 40px;
  border: 8px solid #ddd;
  border-top: 8px solid #2196f3;
  border-bottom: 8px solid #2196f3;
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const LoadingModal =({isLoading =true, text ='Loading'}) => {
  return (
    <ModalContainer style={{ display: isLoading ? 'flex' : 'none' }} >
    <div className='modal-content'>
      <div className='loader'></div>
      <div className='modal-text'>{`${text}...`}</div>
    </div>
  </ModalContainer>

  )
}
export default LoadingModal
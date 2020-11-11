import React from 'react';

// PATTERN: RENDER PROP
function ErrorBoundary(props) {
  const Error = () => (<h1>Something went wrong</h1>)
  let isEverythingOk = true;
  return (
    <>
      { isEverythingOk ? props.children : <Error/> }
    </>
  );
}

export default ErrorBoundary;

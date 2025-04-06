import React from 'react';
function greetings({name}) {
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>Please take a look at our products below.</p>
    </div>
  );
}
export default greetings;
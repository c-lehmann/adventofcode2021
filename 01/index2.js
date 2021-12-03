const fs = require('fs');

fs.readFile('./input', 'utf8', (_, data) => {
  const total = data.split('\n').reduce( (prevVal, measurement, idx, data) => {
    if (idx === 0) return prevVal;

    if ( measurement > data[idx - 1] ) {
      console.log( 'INCREASE' )
      return prevVal + 1;
    }
      console.log( 'DECREASE' )
    return prevVal;
  }, 0  );
  console.log(total);

} );

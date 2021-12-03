const fs = require('fs');

fs.readFile('./input', 'utf8', (_, data) => {
  const [x, y] = data.split('\n').reduce( (acc, val) => {

    const [ direction, steps ] = val.split(' ');
    const [ x, y ] = acc;

    switch (direction) {
        case 'up':
            return [x, y - parseInt(steps, 0)]
        case 'down':
            return [x, y + parseInt(steps, 0)]
        case 'forward':
            return [x + parseInt(steps, 0), y]
        default:
            throw( "UNKNOWN DIRECTION: " + direction)
    }
  }, [0, 0] )

  console.log(x*y)
} );

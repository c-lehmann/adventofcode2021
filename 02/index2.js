const fs = require('fs');

fs.readFile('./input', 'utf8', (_, data) => {
  const [x, y, z] = data.split('\n').reduce( (acc, val, idx) => {

    const [ direction, _steps ] = val.split(' ');
    const [ x, y, aim ] = acc;
    const steps = parseInt(_steps, 0)

    switch (direction) {
        case 'down':
            return [x, y + steps, aim + steps ]
        case 'up':
            return [x, y - steps, aim - steps]
        case 'forward':
            return [x + steps, y + (aim * steps), aim]
        default:
            throw( "UNKNOWN DIRECTION: " + direction)
    }

    console.log(acc)
    if ( idx === 19) exit;
  }, [0, 0, 0] )

  console.log(x*y, z)
} );

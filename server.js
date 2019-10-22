const express = require('express'); //set simple expressServer up and running.

const app = express(); //init app variable with express.

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
//look for environment variable called port to use when we deploy to Heroku thats where its gonna get the port number.  locally run port 5000 to set default.

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//take this variable pass to port then we can do a call back. /so if we want sth to happen once it connects, do consoleLog(back-ticks) to put template literal.

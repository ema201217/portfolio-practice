const express = require('express');
const app = express();
const port = 3031;
const path = require('path');

/* Settings */
app.set('port', port);

/* Middleware */
app.use(express.static(path.join(__dirname, 'public')));

/* Routes */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

/* Server */
app.listen(app.get('port'), console.log(`http://localhost:${port}`));
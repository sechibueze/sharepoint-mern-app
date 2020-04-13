const express = require('express');
const app = express();
const dbConfig = require('./config/dbConfig');
dbConfig();
const port = process.env.PORT || 5000;

/*******
 *  *** Routes
 */
const usersRoute = require('./routes/api/usersRoute');
const profilesRoute = require('./routes/api/profilesRoute');
const postsRoute = require('./routes/api/postsRoute');
app.use('/api/users', usersRoute);
app.use('/api/profiles', profilesRoute);
app.use('/api/posts', postsRoute);

app.use('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to Educatus MERN app'});
});

app.listen(port, () => console.log(`Educatus::server running on ${port}`));
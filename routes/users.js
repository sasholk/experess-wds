const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
  res.send('Users page');
});

router.get('/new', (req, res) => {
  res.send('New user page');
});

router.post('/', (req, res) => {
  res.send('Create user');
});

router.route('/:id')
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [
  { name: 'John' },
  { name: 'Jane' },
  { name: 'Jim' }
];

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;

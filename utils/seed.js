const connection = require('../config/connection');
const { User, Thought } = require('../models');

const users = [
  {
    username: 'Jake',
    email: 'jake@gmail.com'
  },
  {
    username: 'Jane',
    email: 'jane@gmail.com'
  },
  {
    username: 'Tim',
    email: 'tim@gmail.com'
  },
  {
    username: 'Tina',
    email: 'tina@gmail.com'
  },
  {
    username: 'Derek',
    email: 'derek@gmail.com'
  },
  {
    username: 'Donna',
    email: 'donna@gmail.com'
  },
  {
    username: 'Eric',
    email: 'eric@gmail.com'
  },
  {
    username: 'Eva',
    email: 'eva@gmail.com'
  },
  {
    username: 'Henry',
    email: 'henry@gmail.com'
  },
  {
    username: 'Hannah',
    email: 'hannah@gmail.com'
  }
]

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  await User.collection.insertMany(users);

  console.info('Seeding complete!');
  process.exit(0);
});
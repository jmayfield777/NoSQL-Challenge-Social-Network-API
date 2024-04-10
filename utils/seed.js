const connection = require('../config/connection');
const { User, Thought } = require('../models');

const users = [
  {
    username: 'Jake',
    email: 'jake@gmail.com',
    thoughts: 'A thought one.'
  },
  {
    username: 'Jane',
    email: 'jane@gmail.com',
    thoughts: 'A thought two.'
  },
  {
    username: 'Tim',
    email: 'tim@gmail.com',
    thoughts: 'A thought three.'
  },
  {
    username: 'Tina',
    email: 'tina@gmail.com',
    thoughts: 'A thought four.'
  },
  {
    username: 'Derek',
    email: 'derek@gmail.com',
    thoughts: 'A thought five.'
  },
  {
    username: 'Donna',
    email: 'donna@gmail.com',
    thoughts: 'A thought six.'
  },
  {
    username: 'Eric',
    email: 'eric@gmail.com',
    thoughts: 'A thought seven.'
  },
  {
    username: 'Eva',
    email: 'eva@gmail.com',
    thoughts: 'A thought eight.'
  },
  {
    username: 'Henry',
    email: 'henry@gmail.com',
    thoughts: 'A thought nine.'
  },
  {
    username: 'Hannah',
    email: 'hannah@gmail.com',
    thoughts: 'A thought ten.'
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
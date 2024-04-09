const { User, Thought } = require('../models');

module.exports = {
  
  async getUsers(req, res) {
    try {
      const users = await User.find()
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .populate({
        path: 'friends',
        select: '-__v',
      })
      res.json(users);
    } catch {
      res.status(500).json(err);
    }
  },

  async getUserById(req, res) {
    try {
      const user = await User.findOne({
        _id: req.params.userId
      })
      .populate({
        path: 'thoughts',
        select: '-__v',
      })
      .populate({
        path: 'friends',
        select: '-__v',
      })
      .select('-__v')

      if (!user) {
        return res.status(404).json({ message: 'No user with that Id!' });
      }

      res.json(user);
    } catch {
      res.status(500).json(err);
    }
  },

  async createNewUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that Id!' });
      }

      res.json(user);
    } catch {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.userId
      })

      if (!user) {
        return res.status(404).json({ message: 'No user with that Id!' });
      }

      res.json(user);
    } catch {
      res.status(500).json(err);
    }
  }

}
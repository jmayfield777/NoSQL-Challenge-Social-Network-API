const { Thought, User } = require('../models');

module.exports = {
  
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
      .populate({
        path: 'reactions',
        select: '-__v',
      });
      res.json(thoughts);
    } catch {
      res.status(500).json(err);
    }
  },

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId
      })
      .populate({
        path: 'reactions',
        select: '-__v',
      })
      .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that Id!' });
      }

      res.json(thought);
    } catch {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $set: { thoughts: Thought._id } },
        { new: true }
      );
      res.json(thought);
    } catch {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that Id!' });
      }

      res.json(thought);
    } catch {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId
      });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that Id!' });
      }

      await Thought.deleteMany({ _id: {
        $in: Thought.thoughts
      }});
      res.json({ message: 'Thought deleted!' });
    } catch {
      res.status(500).json(err);
    }
  }

}
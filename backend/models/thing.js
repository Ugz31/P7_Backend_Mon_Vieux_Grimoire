const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  // required signifie qu'il est obligatoire d'y avoir cet élément pour accepter le schema
  // unique : Indique que les adresses électroniques doivent être uniques},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const bookSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: {
    type: String,
    validate: {
      validator: (value) => /^[A-Za-z\s]+$/.test(value),
      message: 'Le formulaire doit contenir uniquement des lettres de A à Z.',
    },
    required: true,
    unique: true,
  },
  author: {
    type: String,
    validate: {
      validator: (value) => /^[A-Za-z\s]+$/.test(value),
      message: 'Le formulaire doit contenir uniquement des lettres de A à Z.',
    },
    required: true,
  },
  year: { type: Number, required: true },
  genre: {
    type: String,
    validate: {
      validator: (value) => /^[A-Za-z\s]+$/.test(value),
      message: 'Le formulaire doit contenir uniquement des lettres de A à Z.',
    },
    required: true,
  },
  imageUrl: { type: String, required: true },
  ratings: [{ userId: { type: String }, grade: { type: Number, required: true } }],
  averageRating: { type: Number },
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Book: mongoose.model('Book', bookSchema),
};

const contactSubmissions = require('../models/contact');

const postContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const newSubmission = { id: contactSubmissions.length + 1, name, email, message };
  contactSubmissions.push(newSubmission);

  res.status(201).json({ message: 'Contact submission received', submission: newSubmission });
};

module.exports = { postContact };
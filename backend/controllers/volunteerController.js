const volunteerSubmissions = require('../models/volunteer');

const postVolunteer = (req, res) => {
  const { name, email, skills } = req.body;

  if (!name || !email || !skills) {
    return res.status(400).json({ error: 'Name, email, and skills are required' });
  }

  const newSubmission = { id: volunteerSubmissions.length + 1, name, email, skills };
  volunteerSubmissions.push(newSubmission);

  res.status(201).json({ message: 'Volunteer submission received', submission: newSubmission });
};

module.exports = { postVolunteer };
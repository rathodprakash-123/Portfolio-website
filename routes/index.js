const express = require('express');
const router = express.Router();
const Message = require("../models/message")

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/projects', (req, res) => res.render('projects'));
router.get('/designs', (req, res) => res.render('design'));
router.get('/contact', (req, res) => res.render('contact'));
router.post('/contact', async (req, res) => {
  const { name, email,number ,message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  try {
    const newContact = new Message({ name, email,number,message });
    await newContact.save();
    console.log("New contact saved:", newContact);
    res.redirect('/?submitted=true');
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).send("Something went wrong");
  }
});


module.exports = router;

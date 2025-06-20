const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/projects', (req, res) => res.render('projects'));
router.get('/contact', (req, res) => res.render('contact'));
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Submitted:", { name, email, message });
  res.redirect('/');
});


module.exports = router;

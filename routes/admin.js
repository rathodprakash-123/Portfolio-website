const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const session = require('express-session');

// Middleware for auth
function checkAuth(req, res, next) {
  if (req.session && req.session.admin) return next();
  res.redirect('/admin/login');
}

// Login page
router.get('/login', (req, res) => {
  res.render('admin/login');
});

// Handle login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (admin && await bcrypt.compare(password, admin.password)) {
    req.session.admin = admin._id;
    res.redirect('/admin/dashboard');
  } else {
    res.send('Invalid credentials');
  }
});

// Dashboard
router.get('/dashboard', checkAuth, (req, res) => {
  res.render('admin/dashboard'); // UI with edit/delete options
});

router.get('/admin/dashboard', async (req, res) => {
  try {
    // Assuming you have a Project model and fetching from DB
    const projects = [
  { title: "Project 1", description: "Description of project 1" },
  { title: "Project 2", description: "Description of project 2" },
];
    const p1 = await projects.finde();

    res.render('admin/dashboard', { projects });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

module.exports = router;
//password and username
// router.get('/create-admin', async (req, res) => {
//   const bcrypt = require('bcrypt');
//   const hashedPassword = await bcrypt.hash('Dream@2005', 10);
//   const newAdmin = new Admin({ username: 'Prakash Rathod', password: hashedPassword });
//   await newAdmin.save();
//   res.send('Admin created');
// });


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/projects', (req, res) => res.render('projects'));
router.get('/contact', (req, res) => res.render('contact'));
router.get("/admin/add-project",(req,res)=>{ res.render('addProject');});
router.get("/admin/add-education",(req,res)=>{ res.render('addEducation');});
router.get("/admin/add-skill",(req,res)=>{ res.render('addSkill');});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Submitted:", { name, email, message });
  res.redirect('/');
});

//add project
router.post("/admin/add-project",(req,res)=>{
  res.redirect('/admin/dashboard');
});
//add skill
router.post("/admin/add-skill",(req,res)=>{
  // const skill = req.body.Skills;
  // const desc = req.body.Description;
  // res.send(`${skill} for ${desc}`);

  res.redirect('/admin/dashboard');
});

router.post("/admin/add-education",(req,res)=>{
  res.redirect('/admin/dashboard');
});

module.exports = router;

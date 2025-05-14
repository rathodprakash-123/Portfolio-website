const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

const routes = require('./routes/index');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

// admin page

const session = require('express-session');

app.use(session({
  secret: 'yourSecret',
  resave: false,
  saveUninitialized: false,
}));

// Route registration
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

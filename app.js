
// const express = require('express');
// const mongoose = require("mongoose")

// // express app
// const app = express();

// // connect to MongoDB
// const mongoDbConnectionString = "mongodb+srv://adamsXO:adambode32@node.6cq7s.mongodb.net/Node?retryWrites=true&w=majority&appName=Node"
// mongoose.connect(mongoDbConnectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   ssl: true,  // Ensure SSL is enabled (MongoDB Atlas requires it)
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });



// // listen for requests
// app.listen(3001);

// // register view engine
// app.set('view engine', 'ejs');
// // app.set('views', 'myviews');

// app.get('/', (req, res) => {
//   const blogs = [
//     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   ];
//   res.render('index', { title: 'Home', blogs });
// });

// app.get('/about', (req, res) => {
//   res.render('about', { title: 'About' });
// });

// app.get('/blogs/create', (req, res) => {
//   res.render('create', { title: 'Create a new blog' });
// });

// // 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });




const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection string (with the database name)
const mongoDbConnectionString = "mongodb+srv://adamsXO:adambode32@node.6cq7s.mongodb.net/Node?retryWrites=true&w=majority&appName=Node"
// Connect to MongoDB without deprecated options
mongoose.connect(mongoDbConnectionString, {
  ssl: true,  // Ensure SSL is enabled (MongoDB Atlas requires it)
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after a successful DB connection
    app.listen(3001, () => {
      console.log('Server running on http://localhost:3001');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Set view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  const blogs = [
    { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});



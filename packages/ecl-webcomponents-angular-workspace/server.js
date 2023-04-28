const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'projects/ecl-webcomponents-angular-consumer/src/assets')));
app.use(express.static(path.join(__dirname, 'dist/ecl-webcomponents-angular-consumer')));

// Serve SVG files with the correct content type
app.get('/build/images/**/*.svg', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects/ecl-webcomponents-angular/dist', req.url));
});

app.get('/build/scripts/*.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects/ecl-webcomponents-angular/dist', req.url));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ecl-webcomponents-angular-consumer', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

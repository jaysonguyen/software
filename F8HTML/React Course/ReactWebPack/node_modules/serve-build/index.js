#!/usr/bin/env node

const express = require('express')
const path = require('path');
const fs = require('fs');

try {
  fs.accessSync(path.resolve('build/'));
} catch (e) {
  console.log("> 'build/' folder doesn't exist.")
  process.exit(1);
}

const app = express()

app.use(express.static(path.resolve('build/'), {
  index: false,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=315360000')
  }
}));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('> Build is serving on port:', PORT)
})

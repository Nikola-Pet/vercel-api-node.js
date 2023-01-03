const fs = require('fs');

const dataFile = 'data.json';

function get() {
  return JSON.parse(fs.readFileSync(dataFile));
}
  
  function getById(id) {
    const data = JSON.parse(fs.readFileSync(dataFile));
  return data[id];
  }
  
  function insert(item) {
    const data = JSON.parse(fs.readFileSync(dataFile));
  const keys = Object.keys(data);
  const highestKey = Math.max(...keys);
  const newKey = highestKey + 1;
  data[newKey] = item;
  fs.writeFileSync(dataFile, JSON.stringify(data));
  }

  function deleteById(id) {
    const data = JSON.parse(fs.readFileSync(dataFile));
    delete data[id];
    fs.writeFileSync(dataFile, JSON.stringify(data));
  }

  

  module.exports = {
    get,
    getById,
    insert,
    deleteById
  };
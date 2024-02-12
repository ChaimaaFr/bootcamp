// writeFileAsync.js
const fs = require('fs').promises;

async function writeFileAsync(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log(`File "${filePath}" has been written successfully.`);
  } catch (error) {
    console.error(`Error writing to file "${filePath}": ${error.message}`);
    throw error;
  }
}

async function readFileAsync(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(`File "${filePath}" has been read successfully.`);
    return content;
  } catch (error) {
    console.error(`Error reading from file "${filePath}": ${error.message}`);
    throw error;
  }
}

module.exports = { writeFileAsync, readFileAsync };

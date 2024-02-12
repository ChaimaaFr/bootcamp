// processFile.js
const { writeFileAsync, readFileAsync } = require('./fileOperations');

async function processFiles(filePaths) {
  try {
    for (const filePath of filePaths) {
      const content = await readFileAsync(filePath);

      // Manipulate the content 
      const modifiedContent = `${new Date().toISOString()}: ${content}`;

      const outputFilePath = `modified_${filePath}`;
      await writeFileAsync(outputFilePath, modifiedContent);
    }
    console.log('Files processed successfully.');
  } catch (error) {
    console.error(`Error processing files: ${error.message}`);
    throw error;
  }
}

module.exports = { processFiles };

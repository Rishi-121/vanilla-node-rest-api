const fs = require("fs");

const writeDataToFile = (fileName, content) => {
  fs.writeFileSync(fileName, JSON.stringify(content), "UTF-8", (err) => {
    console.log(err);
  });
};

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => (body += chunk.toString()));
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { writeDataToFile, getPostData };

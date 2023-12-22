const fs = require('node:fs/promises');
const path = require('node:path');
const filterByName = (a, b) => {
  a = a.split("-");
  b = b.split("-");
  a = a[0];
  b = b[0];
  (a = Number(a)), (b = Number(b));
  return a - b;
};

let contentList = [];
let baseDir = "";
const setDir = async (tempPath) => {
  baseDir = tempPath;
  try {
    const parentFolders = await fs.readdir(tempPath);
    for (const folder of parentFolders) {
      const files = await fs.readdir(path.join(tempPath, folder), {
        recursive: true,
      });
      files.sort((a, b) => filterByName(a, b));
      const videos = files.filter((file) => path.extname(file) === ".mp4");
      contentList.push({ parentFolder: folder, videosList: videos });
    }
  } catch (error) {
    console.log(error);
  }
};

const getDir = () => {
    return({baseDir : baseDir, contentList : contentList});
}

const resetList = () => contentList.length = 0;

module.exports = {setDir, getDir, resetList}
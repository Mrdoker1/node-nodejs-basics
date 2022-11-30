import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = `${__dirname}/files/fresh.txt`;
const text = 'I am fresh and young';

const writeFile = () => {
    fs.writeFile(filename, text, { flag: `a` }, err => {
        if (err) {
            console.log(err);
        }
    });
}

const createFile = () => {
    fs.stat(filename, function(err, stat) {
        if (err == null) {
            throw new Error('FS operation failed');
        } else {
            writeFile();
        }
      });
}

const create = async () => {
    createFile();
};

await create();
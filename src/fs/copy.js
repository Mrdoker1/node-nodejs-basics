import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const src = `${__dirname}/files`;
const dest = `${__dirname}/files_copy`;

const copy = async () => {
    try {
        fs.stat(dest, function(err, stat) {
            if (err == null) {
                throw new Error('FS operation failed');
            } else {
                fs.cp(src, dest, {recursive: true}, function (err, data) {});
                console.log('success!')
            }
          });
    } catch (err) {
    console.error(err)
    }
};

copy();
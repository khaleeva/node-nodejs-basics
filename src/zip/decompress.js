import {join} from "path";
import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToCompress.txt')
    const compressFilePath = join(import.meta.dirname, 'files', 'archive.gz')

    if (!fs.existsSync(compressFilePath)) {
        console.error('FS operation failed');
    } else{
        const input = fs.createReadStream(compressFilePath);
        const output = fs.createWriteStream(filePath);
        const unzip = zlib.createUnzip();

        input.pipe(unzip).pipe(output);
    }



};

await decompress();
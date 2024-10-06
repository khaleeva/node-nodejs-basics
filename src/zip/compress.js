import fs from "fs";
import zlib from "zlib";
import {join} from "path";

const compress = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToCompress.txt')
    const compressFilePath = join(import.meta.dirname, 'files', 'archive.gz')
    const input = fs.createReadStream(filePath, "utf-8");
    const output = fs.createWriteStream(compressFilePath);
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output);
};

await compress();
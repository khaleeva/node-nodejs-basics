import {createHash} from "crypto";
import {createReadStream} from "fs";
import path from "path";

const calculateHash = async () => {
    const filePath = path.join(import.meta.dirname, "files", "fileToCalculateHashFor.txt");
    const hash = createHash('sha256');

    const input = createReadStream(filePath);
    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(`${hash.digest('hex')}`);
        }
    });
};

await calculateHash();


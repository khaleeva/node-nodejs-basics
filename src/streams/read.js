import path from "path";
import {createReadStream} from "fs";
const { stdout } = process;

const read = async () => {

    const filePath = path.join(import.meta.dirname, "files", 'fileToRead.txt')

    const input = createReadStream(filePath, "utf-8");
    input.on("data", (chunk) => stdout.write(chunk + '\n'));
};

await read();
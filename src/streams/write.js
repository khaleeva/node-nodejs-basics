import path from "path";
import {createWriteStream} from "fs";
const { stdin } = process;

const write = async () => {
    const filePath = path.join(import.meta.dirname, "files", 'fileToWrite.txt')

    const output = createWriteStream(filePath);

    stdin.on("data", (data) => {
        output.write(data);
    });

    stdin.on("end", () => {
        output.end();
    });
};

await write();
import path from "path";
import {promises as fs} from "fs";

const list = async () => {
    const filePath = path.join(import.meta.dirname, "files")
    try {
        await fs.access(filePath);
        const files = await fs.readdir(filePath);
        console.log(files);

    } catch (e) {
        console.error('FS operation failed');
    }

};

await list();
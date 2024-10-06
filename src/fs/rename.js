import path from "path";
import {existsSync, promises as fs} from 'fs';

const rename = async () => {
    const wrong_filePath = path.join(import.meta.dirname, 'files', 'wrongFilename.txt')
    const proper_filePath = path.join(import.meta.dirname, 'files', 'properFilename.md')

    if (!existsSync(wrong_filePath) || existsSync(proper_filePath)) {
        console.error("FS operation failed")
    } else {
        try {
            await fs.rename(wrong_filePath, proper_filePath);
        } catch (error) {
            console.error("FS operation failed");
        }
    }

};

await rename();
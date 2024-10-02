import path from "path";
import {promises as fs, existsSync} from "fs";

const copy = async () => {
    const filePath = path.join(import.meta.dirname, "files")
    const copy_filePath = path.join(import.meta.dirname, "files_copy")

    if (!existsSync(filePath) || existsSync(copy_filePath)) {
        console.error("FS operation failed");
    } else {
        try {
            await fs.mkdir(copy_filePath);
            await fs.cp(filePath, copy_filePath, { recursive: true });
        } catch (error) {
            console.error("FS operation failed");
        }
    }
};

await copy();

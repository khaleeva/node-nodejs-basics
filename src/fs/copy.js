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
            const files = await fs.readdir(filePath);

            for (const file of files) {
                const sourceFile = path.join(filePath, file);
                const copyFile = path.join(copy_filePath, file);
                await fs.copyFile(sourceFile, copyFile);
            }
        } catch (error) {
            console.error("FS operation failed");
        }
    }
};

await copy();

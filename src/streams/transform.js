const { stdin, stdout } = process;
import {Transform} from "stream";

const transform = async () => {

    const reverseString = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).split("").reverse().join(""));
        },
    });

    stdin.pipe(reverseString).pipe(stdout);
};

await transform();
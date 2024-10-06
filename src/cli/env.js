const parseEnv = () => {
    const env_vars = [];

    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
            env_vars.push(`${key}=${value}`);
        }
    }

    console.log(env_vars.join('; '));
};

parseEnv();
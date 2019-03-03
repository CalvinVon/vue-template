import Obeyman from 'obeyman';

function foreRequestMiddleWare(apiMeta, data, next) {
    const { name, schema } = apiMeta;
    console.log(apiMeta, data);

    try {
        Object.keys(data).forEach(key => {
            const value = data[key];
            if (value === undefined || value === null) {
                delete data[key];
            }
        })

        if (schema) {
            Obeyman.validate(data, schema, (_, stack) => {
                if (_) {
                    console.warn(`Api [${name}] validate failed\n`, stack);
                }
            })
        }

        next();
    } catch (error) {
        next(error);
    }
}

function fallbackMiddleWare(apiMeta, error, next) {
    next(error);
}

export default {
    foreRequestMiddleWare,
    fallbackMiddleWare
}
function wrapCallbackToPromise(callback, ...params) {
    return new Promise((resolve, reject) => {
        callback(params, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(response);
        });
    });
}

module.exports = wrapCallbackToPromise;

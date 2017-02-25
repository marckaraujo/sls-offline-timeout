'use strict';

// Multi - Create''
export function respond(event, cb) {

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };
    return cb(null, response);


}

'use strict';

const request = require('request');
const url = 'https://dummy-nv7zfnhhwa-uc.a.run.app/dummy';

function call(start) {
    request.get(url, {}, (error, response, body) => {
        var end = new Date() - start;
         console.log('%dms', end)
    });
}

for (let i=0; i<50; i++) 
 call(new Date());


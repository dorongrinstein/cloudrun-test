'use strict';

const request = require('request');
const url = 'https://dummy-nv7zfnhhwa-uc.a.run.app/dummy';

function call(start) {
    request.get(url, {}, (error, response, body) => {
        var end = new Date() - start;
         if (error) {
             console.log(`error: ${error}`);
         }
         if (response.statusCode != 200) {
             console.log(`response: ${response.statusCode}`);
         } else {
            console.log('%dms', end)    
         }
         
    });
}

for (let i=0; i<5; i++) 
   call(new Date());



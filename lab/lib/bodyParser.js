
//this file interprets whatever gets placed in the body and turns it to json
module.exports = req => {
  return new Promise((resolve, reject)=> {
    //check if content is json otherwise just resolve right away with err.
    //check if method is GET
    if(req.method === 'GET'){
      return resolve();
    }
    const headers = req.headers || req.getHeaders();
    if(headers['content-type'] !== 'application/json') {
      return reject('we only support JSON')
    }
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    })
    req.on('end', () => {
      //has to be null because user can send us an data so we have to parse it.
      let json = null;
      try{
        json = JSON.parse(body);
      } catch(e){
        //this stops it from going to resolve.
        return reject(e);
      }
      resolve(json)
    })
    req.on('error', err => {
        reject(err);
    });
  });
};


















// module.exports = req => {
//   return new Promise((resolve, reject) => {
//     let body = '';
//     req.on('data', chunk =>{
//       body + chunk;
//     });

//     req.on('end', () => {
//       resolve(JSON.parse(body));
//     });
//     req.on('error', err => reject(err));
//   });
// };

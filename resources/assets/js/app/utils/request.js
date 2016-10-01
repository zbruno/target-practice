import Request from 'superagent';
import Promise from 'bluebird';

function setRequestType(type, url) {
  switch (type) {
    case 'get':
      return Request.get(url);
    case 'post':
      return Request.post(url);
    case 'put':
      return Request.put(url);
    case 'delete':
      return Request.delete(url);
  }
}

export default function getRequest(type, url, data = {}, headers = {}) {
  const RequestType = setRequestType(type, url);

  return new Promise((resolve, reject) => {
    RequestType.query(data).set(headers).end((err, res) => {
      if (err) { reject(err) } 
      else { resolve(res.body) }
    });
  });
}

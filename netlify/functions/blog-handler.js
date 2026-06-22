import originalHandler from '../../api/blog.js';

const createVercelMocks = (event) => {
  const req = {
    method: event.httpMethod,
    url: event.path,
    headers: event.headers,
    query: event.queryStringParameters || {},
    body: event.body ? JSON.parse(event.body) : null
  };
  let statusCode = 200;
  let headers = { 'Content-Type': 'text/html; charset=utf-8' };
  let responseBody = '';
  const res = {
    status: (code) => { statusCode = code; return res; },
    setHeader: (key, value) => { headers[key] = value; return res; },
    send: (body) => { responseBody = body; },
    end: (body) => { if (body) responseBody = body; },
    json: (data) => { headers['Content-Type'] = 'application/json; charset=utf-8'; responseBody = JSON.stringify(data); },
    redirect: (url) => { statusCode = 302; headers['Location'] = url; }
  };
  return { req, res, getResult: () => ({ statusCode, headers, body: responseBody }) };
};

export const handler = async (event) => {
  const { req, res, getResult } = createVercelMocks(event);
  await originalHandler(req, res);
  return getResult();
};

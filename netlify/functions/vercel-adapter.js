// netlify/functions/vercel-adapter.js
exports.createVercelMocks = (event) => {
  // 1. 伪装 Vercel 的 req 对象
  const req = {
    method: event.httpMethod,
    url: event.path,
    headers: event.headers,
    query: event.queryStringParameters || {},
    body: event.body ? JSON.parse(event.body) : null
  };

  // 2. 伪装 Vercel 的 res 对象，并拦截响应数据
  let statusCode = 200;
  let headers = { 'Content-Type': 'text/html; charset=utf-8' };
  let responseBody = '';

  const res = {
    status: (code) => { statusCode = code; return res; },
    setHeader: (key, value) => { headers[key] = value; return res; },
    send: (body) => { responseBody = body; },
    end: (body) => { if (body) responseBody = body; }
  };

  // 3. 返回 mocks 和一个获取最终结果的函数
  return {
    req,
    res,
    getResult: () => ({
      statusCode,
      headers,
      body: responseBody
    })
  };
};

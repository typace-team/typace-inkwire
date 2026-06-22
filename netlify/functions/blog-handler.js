// netlify/functions/blog-handler.js
const { createVercelMocks } = require('./vercel-adapter');
const originalHandler = require('../../api/blog'); 

exports.handler = async (event, context) => {
  const { req, res, getResult } = createVercelMocks(event);
  await originalHandler(req, res);
  return getResult();
};

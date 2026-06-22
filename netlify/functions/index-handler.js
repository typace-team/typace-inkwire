// netlify/functions/index-handler.js
const { createVercelMocks } = require('./vercel-adapter');
// 引入原 Vercel 函数（注意路径层级）
const originalHandler = require('../../api/index'); 

exports.handler = async (event, context) => {
  const { req, res, getResult } = createVercelMocks(event);
  
  // 执行原 Vercel 函数
  await originalHandler(req, res);
  
  // 返回 Netlify 格式的结果
  return getResult();
};

// netlify/functions/slug-handler.js
const { createVercelMocks } = require('./vercel-adapter');
// 引入原动态路由函数
const originalHandler = require('../../api/blog/[slug]'); 

exports.handler = async (event, context) => {
  const { req, res, getResult } = createVercelMocks(event);
  
  // Netlify 将 /blog/my-post 匹配到 /blog/* 时，slug 在 event.path 中
  // 我们需要提取 slug 并注入到 req.query 中，以兼容 Vercel 的动态路由行为
  const pathParts = event.path.split('/');
  const slug = pathParts[pathParts.length - 1];
  req.query.slug = slug; 
  
  // 如果原代码依赖 req.query 中的其他参数，也可以在这里补充
  await originalHandler(req, res);
  return getResult();
};

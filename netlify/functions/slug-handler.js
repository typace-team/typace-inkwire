// netlify/functions/slug-handler.mjs
import { createVercelMocks } from './vercel-adapter.mjs';
import originalHandler from '../../api/blog/[slug].js';

export const handler = async (event, context) => {
  const { req, res, getResult } = createVercelMocks(event);
  
  // 提取动态 slug 参数注入到 query 中
  const pathParts = event.path.split('/');
  req.query.slug = pathParts[pathParts.length - 1]; 
  
  await originalHandler(req, res);
  return getResult();
};

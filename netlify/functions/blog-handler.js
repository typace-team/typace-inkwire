// netlify/functions/blog-handler.mjs
import { createVercelMocks } from './vercel-adapter.mjs';
import originalHandler from '../../api/blog.js';

export const handler = async (event, context) => {
  const { req, res, getResult } = createVercelMocks(event);
  await originalHandler(req, res);
  return getResult();
};

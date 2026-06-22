const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const blogsDir = path.join(process.cwd(), 'public', 'blogs');
  let files = [];
  
  try {
    files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
  } catch (e) {
    return res.status(500).send('Error reading blogs directory');
  }

  const siteUrl = 'https://yourdomain.com'; // ⚠️ 替换为你的实际域名
  const today = new Date().toISOString().split('T')[0];

  let urls = `
    <url>
      <loc>${siteUrl}/</loc>
      <lastmod>${today}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${siteUrl}/blog</loc>
      <lastmod>${today}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>`;

  files.forEach(file => {
    const slug = file.replace('.md', '');
    urls += `
    <url>
      <loc>${siteUrl}/blog/${slug}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 缓存24小时
  res.send(sitemap);
};

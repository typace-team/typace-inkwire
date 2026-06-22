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

  const siteUrl = 'https://inkwire.mrche.top'; // ⚠️ 替换为你的实际域名
  let rssItems = '';

  files.forEach(file => {
    const slug = file.replace('.md', '');
    const filePath = path.join(blogsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const stats = fs.statSync(filePath);
    
    // 极简提取：尝试抓取第一个 # 标题，否则用文件名
    const titleMatch = content.match(/^#\s+(.*)$/m);
    const title = titleMatch ? titleMatch[1].trim() : slug;
    
    // 提取前 150 个字符作为摘要，并清理 Markdown 符号
    const excerpt = content.replace(/[#*_\[\]`]/g, '').substring(0, 150).trim() + '...';
    
    // 使用文件修改时间作为发布时间
    const pubDate = new Date(stats.mtime).toUTCString();

    rssItems += `
      <item>
        <title><![CDATA[${title}]]></title>
        <link>${siteUrl}/api/blog/${slug}</link>
        <guid>${siteUrl}/api/blog/${slug}</guid>
        <pubDate>${pubDate}</pubDate>
        <description><![CDATA[${excerpt}]]></description>
      </item>`;
  });

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Typace Inkwire Blog</title>
    <link>${siteUrl}</link>
    <description>Latest posts from Typace Inkwire</description>
    <language>zh-cn</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // 缓存1小时
  res.send(rssFeed);
};

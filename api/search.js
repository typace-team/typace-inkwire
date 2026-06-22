const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const blogsDir = path.join(process.cwd(), 'public', 'blogs');
  let files = [];
  try {
    files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.md'));
  } catch (e) {
    return res.status(500).json({ error: 'Error reading blogs' });
  }

  const posts = files.map(file => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(blogsDir, file), 'utf-8');
    
    const titleMatch = content.match(/^#\s+(.*)$/m);
    const title = titleMatch ? titleMatch[1].trim() : slug;
    const excerpt = content.replace(/[#*_\[\]`]/g, '').substring(0, 100).trim();

    return { slug, title, excerpt };
  });

  // 允许跨域并缓存
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.json(posts);
};

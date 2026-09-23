import { defaultTestimonials } from '../src/data/testimonials.js';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(defaultTestimonials);
  }

  if (req.method === 'POST') {
    const { name, role, content, avatar } = req.body || {};

    if (!name || !role || !content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    return res.status(201).json({
      id: Date.now(),
      name,
      role,
      content,
      avatar: avatar || `https://picsum.photos/seed/${encodeURIComponent(name)}/100/100`,
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

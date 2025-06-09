
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { lang, value } = req.body;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/translations/bulk-update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([
          {
            id,
            value,
            updated_by: 'frontend_user',
            updated_at: new Date().toISOString(),
          },
        ]),
      });

      const data = await response.json();
      if (!response.ok) {
        return res.status(response.status).json({ error: data.detail || 'Update failed' });
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update translation' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

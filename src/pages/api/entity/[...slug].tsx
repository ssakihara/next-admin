import fs from 'fs';

export default function handler(req, res) {
  const [entity, id] = req.query.slug;
  const data = JSON.parse(fs.readFileSync(`${process.cwd()}/mock/entity/${entity}.json`, 'utf8'));
  if (id) {
    res.json({ data: data.data.find((row) => row.id === id) });
    return;
  }
  res.json(data);
}

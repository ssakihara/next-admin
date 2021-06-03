import fs from 'fs';

export default function handler(req, res) {
  const { entity } = req.query
  const data = JSON.parse(fs.readFileSync(`${process.cwd()}/mock/entity/${entity}.json`, 'utf8'));
  res.json(data)
}

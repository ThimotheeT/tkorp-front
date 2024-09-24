import { readFileSync } from 'fs';
import { join } from 'path';

// Pour récupérer les data en utilisant le JSON

export function loadData() {
  const filePath = join(process.cwd(), 'public', 'data.json');
  const { animals, persons } = JSON.parse(readFileSync(filePath, 'utf8'));
  return { animals, persons };
}
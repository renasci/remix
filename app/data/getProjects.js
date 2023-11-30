import fs from 'fs/promises';

export async function getStoredProjects() {
  try {
    const content = await fs.readFile('app/storage/projects.json', { encoding: 'utf-8' });
    const data = JSON.parse(content);
    const storedProjects = data || [];
    return storedProjects;
  } catch (error) {
    throw new Error(`Server error: fetching progects`)
  }
}

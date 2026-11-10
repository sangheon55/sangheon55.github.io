import { getCollection } from 'astro:content';

export async function getPapers() {
  const papers = await getCollection('papers', ({ data }) => !data.draft);
  return papers.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export const tasks = [
  {
    id: 1,
    text: 'Office itinerancy',
    type: 'project',
    start_date: new Date(2026, 1, 2).toISOString(),
    duration: 10,
    progress: 0.4,
    open: true,
    parent: 0,
  },
  {
    id: 2,
    text: 'Planning',
    start_date: new Date(2026, 1, 2).toISOString(),
    duration: 4,
    progress: 0.6,
    parent: 1,
  },
  {
    id: 3,
    text: 'Implementation',
    start_date: new Date(2026, 1, 6).toISOString(),
    duration: 5,
    progress: 0.2,
    parent: 1,
  },
];

export const links = [{ id: 1, source: 2, target: 3, type: '0' }];
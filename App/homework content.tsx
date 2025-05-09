// Type definition for a homework item
export type HomeworkItem = {
  id: string;
  subject: string;
  description: string;
  dueDate?: string; // optional, ISO date string
  completed?: boolean;
};

// Example mock data (for testing/demo)
export const sampleHomework: HomeworkItem[] = [
  {
    id: '1',
    subject: 'Math',
    description: 'Complete algebra worksheet',
    dueDate: '2025-05-10',
    completed: false,
  },
  {
    id: '2',
    subject: 'Science',
    description: 'Read chapter 5 and summarize',
    dueDate: '2025-05-11',
    completed: false,
  },
];

// Helper function to generate a new homework item
export const createHomeworkItem = (
  subject: string,
  description: string,
  dueDate?: string
): HomeworkItem => ({
  id: Date.now().toString(),
  subject,
  description,
  dueDate,
  completed: false,
});
export interface ChildAccount {
  id: string;
  name: string;
  timeAllowed: number;
  timeEarned: number;
  tasksCompleted: number;
  totalTasks: number;
  categories: string[];
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  description: string;
  minutes: number;
}

export interface AdminSettings {
  pin: string;
  theme: 'light' | 'dark';
}
export type User = {
  id: string;
  email: string;
  displayName: string;
  likedProblems: string[];
  dislikedProblems: string[];
  solvedProblems: string[];
  starredProblems: string[];
  createdAt: number;
  updatedAt: number;
};

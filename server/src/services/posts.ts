// Creates, lists, and gets posts.

// Simple in-memory store for demo purposes
export type Post = {
  id: string;
  authorId: string;
  title: string;
  body: string;
  createdAt: string;
};

const posts: Record<string, Post> = {};

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function listPosts(page = 1, limit = 20): Promise<Post[]> {
  const all = Object.values(posts).sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1,
  );
  const start = (page - 1) * limit;
  return all.slice(start, start + limit);
}

export async function createPost(
  authorId: string,
  data: { title: string; body: string },
): Promise<Post> {
  const id = uuid();
  const post: Post = {
    id,
    authorId,
    title: data.title,
    body: data.body,
    createdAt: new Date().toISOString(),
  };
  posts[id] = post;
  return post;
}

export async function getPost(id: string) {
  return posts[id] ?? null;
}

// Creates and lists comments for a post.

export type Comment = {
  id: string;
  postId: string;
  authorId: string;
  body: string;
  createdAt: string;
};

const comments: Record<string, Comment> = {};

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export async function createComment(
  authorId: string,
  postId: string,
  body: string,
): Promise<Comment> {
  const id = uuid();
  const c: Comment = {
    id,
    postId,
    authorId,
    body,
    createdAt: new Date().toISOString(),
  };
  comments[id] = c;
  return c;
}

export async function listCommentsForPost(postId: string): Promise<Comment[]> {
  return Object.values(comments)
    .filter((c) => c.postId == postId)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

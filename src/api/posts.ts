import axios from "../axios";

export const getPostsWithUserId = async (
  userId: number | string | undefined,
  page: number,
  pageSize: number
) => {
  console.log(page);
  const _start = (page - 1) * pageSize;
  const _limit = pageSize;
  const [{ data }, { data: allPosts }] = await Promise.all([
    axios.get(`/users/${userId}/posts`, {
      params: {
        _start,
        _limit,
      },
    }),
    axios.get(`/users/${userId}/posts`),
  ]);

  return { data, total: allPosts.length };
};

export const createPost = async (post: any) => {
  const { data } = await axios.post(`/posts`, post);

  return data;
};

export const deletePost = async (id: string | undefined) => {
  const { data } = await axios.delete(`/posts/${id}`);

  return data;
};

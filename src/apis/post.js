import { getContent } from './ContentService/getContent';
import { postContent } from './ContentService/postContent';
import { updateContent } from './ContentService/updateContent';
export const getPosts = async () => {
  try {
    const posts = await getContent();
    //Filter out the user account item in posts.
    return posts.filter((_, index) => index !== 0).map(post => {
      post.description = JSON.parse(post.description);
      return post;
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};



export const addPost = async ({ content, userId }) => {
  try {
    const payload = {
      id: null,
      rootId: '$posts',
      parentId: '$posts',
      type: 'post',
      title: `{{Æ${userId}Æ}}`,
      summary: '{{æstandardæ}}',
      description: JSON.stringify({ content }),
      status: 'active-test',
      deleted: 'false',
      created: new Date(),
      modified: new Date()
    }
    const { data: { elementId } } = await postContent(payload);
    payload.id = elementId
    await updateContent(payload);
    payload.description = JSON.parse(payload.description);
    return payload;
  } catch (error) {
    console.error(error)
    throw error
  }
};

export const removePost = async (post) => {
  try {
    post.status = 'inactive';
    post.deleted = 'true';
    post.description = JSON.stringify(post.description);
    console.log(post);
    await updateContent(post);
    return post;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
import { getContent } from './ContentService/getContent';
import { postContent } from './ContentService/postContent';
import { updateContent } from './ContentService/updateContent';

export const getComments = async (postId) => {
  try {
    const comments = await getContent({
      type: `comment-${postId}`,
      offset: 0,
      limit: null,
      status: 'active-test'
    });
    //Filter out the user account item in posts.
    return comments.filter((_, index) => index !== 0).map(comment => {
      comment.description = JSON.parse(comment.description);
      return comment;
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const addComment = async (postId, content, userId) => {
  try {
    const payload = {
      id: null,
      rootId: postId,
      parentId: postId,
      type: `comment-${postId}`,
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

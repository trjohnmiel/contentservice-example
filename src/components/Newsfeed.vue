<template>
  <div id="container">
    <div id="input-container">
      <input
        v-model="content"
        placeholder="Type the content here"
        type="text"
      />
      <button v-on:click="submitPost">Submit</button>
    </div>
    <ul id="example-1">
      <li :class="'post'" v-for="(post, index) in posts" :key="index">
        {{ post.description.content }}
        <button v-on:click="deletePost(index)">Delete</button>
        <div>
          Comments: <input placeholder="addComment" v-model="post.commentContent"/> <button v-on:click="submitComment(post.id, post.commentContent)">Submit Comment</button>
          <ul>
            <li v-for="(comment, commentIndex) in post.comments" :key="commentIndex">
              {{comment.description.content}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts, addPost, removePost } from "../apis/post.js";
import { addComment, getComments } from "../apis/comment.js";
export default {
  name: "Newsfeed",
  created: function() {},
  methods: {
    submitPost: function() {
      console.log(this.content);
      addPost({ content: this.content, userId: this.userId })
        .then((post) => {
          this.posts = [post].concat(this.posts);
        })
        .catch((err) => console.error(err));
    },
    deletePost: function(postIndex) {
      const post = this.posts.find((_, index) => postIndex === index);
      removePost(post).then(() => {
        this.posts = this.posts.filter((_, index) => postIndex !== index);
      });
    },

    submitComment: function(postId, content) {
      addComment(postId, content, this.userId)
        .then(comment => {
          this.posts = this.posts.map(post => {
            if(post.id === postId) {
              post.comments = [comment].concat(post.comments);
              post.commentContent = "";
            }
            return post;
          });
          console.log(this.posts);
        });
    }
  },
  data: function() {
    return {
      content: "",
      posts: [],
      userId: 146,
    };
  },
  mounted: function() {
    getPosts().then((posts) => {
      this.posts = posts;
      Promise.all(this.posts.map((post) => insertCommentsToPost(post))).then(
        (postWithComments) => {
          console.log(postWithComments);
          this.posts = postWithComments;
        }
      );
    });
  },
};

function insertCommentsToPost(post) {
  return new Promise((resolve, reject) => {
    const postId = post.id;
    getComments(postId)
      .then((comments) => {
        resolve({
          ...post,
          comments: comments ? comments : [],
        });
      })
      .catch((err) => reject(err));
  });
}
</script>

<style>
#input-container {
  margin-bottom: 50px;
}

.post {
  padding: 25px;
  margin: 10px;
}
</style>

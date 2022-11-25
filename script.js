import { searchComments } from "./searchComments.mjs";

let posts = [
  {
    id: 1,
    postText: "Lorem Ipsum is simply dummy text of the printing ",
    autor: "somebody1",
  },
  {
    id: 2,
    postText:
      "bla2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    autor: "somebody2",
  },
  {
    id: 3,
    postText:
      "bla3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    autor: "somebody1",
  },
];
let comments = [
  {
    id: 1,
    commentText:
      "bla1 Contrary to popular belief, Lorem Ipsum is not simply random text.",
    autor: "1_somebody",
    post_id: 1,
  },
  {
    id: 2,
    commentText:
      "bla2 Contrary to popular belief, Lorem Ipsum is not simply random text.",
    autor: "2_somebody",
    post_id: 1,
  },
  {
    id: 3,
    commentText:
      "bla3 Contrary to popular belief, Lorem Ipsum is not simply random text.",
    autor: "1_somebody",
    post_id: 3,
  },
];

let postsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(posts);
  }, 1000);
});
let commentsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(comments);
  }, 1300);
});

Promise.all([postsPromise, commentsPromise]).then(searchComments);

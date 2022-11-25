import { printToHTML } from "./printToHTML.mjs";

export function searchComments(array) {
  const a = array[0];
  const b = array[1];
  a.forEach((a_element) => {
    let count = 0;
    b.forEach((b_element) => {
      if (a_element.id == b_element.post_id) {
        count++;
      }
    });
    if (count == 0) {
      printToHTML(
        `Post #${a_element.id}: ${a_element.postText} <br> <br>commets: no comments `
      );
    } else {
      printToHTML(
        `Post #${a_element.id}: ${a_element.postText} <br><br>comments: `
      );
      count = 1;
      b.forEach((b_element) => {
        if (a_element.id == b_element.post_id) {
          printToHTML(`comment ${count}: ${b_element.commentText}`);
          count++;
        }
      });
    }
  });
}

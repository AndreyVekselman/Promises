export function searchComments(array) {
  const a = array[0];
  const b = array[1];
  let outText = "";
  a.forEach((a_element) => {
    let count = 0;
    b.forEach((b_element) => {
      if (a_element.id == b_element.post_id) {
        count++;
      }
    });
    if (count == 0) {
      outText += `<br> Post #${a_element.id}: ${a_element.postText} <br> <br>commets: no comments<br><br>`;
    } else {
      outText += `<br> Post #${a_element.id}: ${a_element.postText}<br> <br>comments:<br> `;
      count = 1;
      b.forEach((b_element) => {
        if (a_element.id == b_element.post_id) {
          outText += `comment ${count}: ${b_element.commentText} <br>`;
          count++;
        }
      });
    }
  });
  return outText;
}

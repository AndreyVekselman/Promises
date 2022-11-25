export function searchComments(array) {
  const a = array[0];
  const b = array[1];
  let outText = "";
  a.forEach((a_element) => {
    let count = 0;
    outText += `<br> Post #${a_element.id}: ${a_element.postText}<br> <br>comments:<br> `;
    b.forEach((b_element) => {
      if (a_element.id == b_element.post_id) {
        outText += `comment ${++count}: ${b_element.commentText} <br>`;
      }
    });
    if (count == 0) {
      outText += `no comments<br><br>`;
    }
  });
  return outText;
}

export function printToHTML(txt) {
  let newDiv = document.createElement("div");
  let newP = document.createElement("p");
  newP.innerHTML = txt;
  newDiv.appendChild(newP);
  document.body.appendChild(newDiv);
}

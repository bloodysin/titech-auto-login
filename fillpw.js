console.log("!!!");

chrome.storage.sync.get(['pw'], function(result) {
  // for(let i = 0; i < result.pw.length; i++) {
    // console.log('Value currently is ' + result.pw[i]);
  // }
  let form = document.getElementsByName("login")[0];
  let table = document.querySelectorAll("form tbody")[1];
  let key = table.children[4].firstElementChild.innerText.match(/\[(.*?)\]/)[1].split(",");
  table.children[4].children[2].querySelector("input").value=result.pw[(key[1]-1)*10+(key[0].charCodeAt()-65)];
  console.log(table.children[4].children[2].querySelector("input").value);
  key = table.children[5].firstElementChild.innerText.match(/\[(.*?)\]/)[1].split(",");
  table.children[5].children[2].querySelector("input").value=result.pw[(key[1]-1)*10+(key[0].charCodeAt()-65)];
  console.log(table.children[5].children[2].querySelector("input").value);
  key = table.children[6].firstElementChild.innerText.match(/\[(.*?)\]/)[1].split(",");
  table.children[6].children[2].querySelector("input").value=result.pw[(key[1]-1)*10+(key[0].charCodeAt()-65)];
  console.log(table.children[6].children[2].querySelector("input").value);
  form.submit();
});

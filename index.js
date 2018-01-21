function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector(`#nested, .target`)
}
function increaseRankBy(n){
  var ranks = document.querySelectorAll(`ul.ranked-list li`);
  for (var i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}
function deepestChild(){
  var grandNode = document.querySelector(`#grand-node`);
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i){
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}
function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}

const getFirstSelector = selector => {
    return document.querySelector(selector)
}

const nestedTarget = () => {
    return document.querySelector('#nested .target')
}

const deepestChild = () => {
    let grandNode = document.getElementById('grand-node')
    let childNode = grandNode.children[0]

    while (childNode) {
        grandNode = childNode
        childNode = grandNode.children[0]
    }
    return grandNode
}

const increaseRankBy = n => {
    const rankedList = document.querySelectorAll('.ranked-list')

    for (let i = 0, l = rankedList.length; i < l; i++) {
        let children = rankedList[i].children;
    
        for (let j = 0, k = children.length; j < k; j++) {
          children[j].innerHTML = parseInt(children[j].innerHTML) + n;
        }
      }
  
}
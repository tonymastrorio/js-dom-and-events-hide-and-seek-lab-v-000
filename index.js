function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    let lists = document.querySelectorAll('.ranked-list')
    for(let i=0;i<lists.length;i++) {
        lists[i].innerHTML = (i+1).toString()
    }
}

function deepestChild() {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0]

    while (nextNode) {
        node = nextNode
        nextNode = node.children[0]
    }

    return node
}
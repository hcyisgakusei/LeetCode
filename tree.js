// 二叉树的遍历
// 先序（根左右）


function preOrder1(tree) {
    const list = [];
    function pushNode(node) {
        if (!node) return null;
        list.push(node.value);
        if (node.left) {
            pushNode(node.left)
        }
        if (node.right) {
            pushNode(node.right)
        }
    }
    pushNode(tree);
    return list;
}


function preOrder2(tree) {
    const list = [];
    function pushNode(node) {
        if (!node) return null;
        if (node.left) {
            pushNode(node.left)
        }
        list.push(node.value);
        if (node.right) {
            pushNode(node.right)
        }
    }
    pushNode(tree);
    return list;
}

function preOrder3(tree) {
    const list = [];
    function pushNode(node) {
        if (!node) return null;
        if (node.left) {
            pushNode(node.left)
        }
        if (node.right) {
            pushNode(node.right)
        }
        list.push(node.value);
    }
    pushNode(tree);
    return list;
}


var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
};
console.log(preOrder1(tree));
console.log(preOrder2(tree));
console.log(preOrder3(tree));
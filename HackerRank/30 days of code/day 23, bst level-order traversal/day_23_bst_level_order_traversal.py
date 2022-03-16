import sys

class Node:
    def __init__(self,data):
        self.right=self.left=None
        self.data = data
class Solution:
    def insert(self,root,data):
        if root==None:
            return Node(data)
        else:
            if data<=root.data:
                cur=self.insert(root.left,data)
                root.left=cur
            else:
                cur=self.insert(root.right,data)
                root.right=cur
        return root

    # Immutable HackerRank code above
    def levelOrder(self, root):
        if not root:
            return;

        from collections import deque

        myQueue = Queue
        myQueue.push(root);
        process.stdout.write(myQueue[0].data + " ");

        for ( ; myQueue.length; myQueue.shift()) {
            
            if (myQueue[0].left) {
                myQueue.push(myQueue[0].left);
                process.stdout.write(myQueue[0].left.data + " ");
            }

            if (myQueue[0].right) {
                myQueue.push(myQueue[0].right);
                process.stdout.write(myQueue[0].right.data + " ");
            }
        }

# Immutable HackerRank code below
T=int(input())
myTree=Solution()
root=None
for i in range(T):
    data=int(input())
    root=myTree.insert(root,data)
myTree.levelOrder(root)

import java.io.*;
import java.util.*;

class Node {
    Node left, right;
    int data;

    Node(int data) {
        this.data = data;
        left = right = null;
    }
}

class Solution{

    private static int height = 0, maxHeight = 0;

    public static int getHeight(Node root) {

        if (root.left != null || root.right != null) {
            ++height;
            if (root.left != null)
                getHeight(root.left);
            if (root.right != null)
                getHeight(root.right);
            --height;
        }
        else if (height > maxHeight)
            maxHeight = height;
        
        return maxHeight;
    }

    public static Node insert (Node root, int data) {

        if (root == null)
            return new Node(data);
        else {
            Node cur;
            if (data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            }
            else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }
    
    public static void main(String args[]) {
        
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        Node root = null;

        for (int data; T-- > 0; ) {
            data = sc.nextInt();
            root = insert(root, data);
        }
        System.out.println(getHeight(root));
    }
}

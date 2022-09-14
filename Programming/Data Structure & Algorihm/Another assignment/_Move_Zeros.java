public class _Move_Zeros {

    public static void move_zeros(int[] arr) {
        int curIndex = 0;
        int size = arr.length;
        for (int i = 0; i < size; i++) {
            if (arr[i] != 0) {
                arr[curIndex] = arr[i];
                curIndex++;
            }
        }

        for (; curIndex < size; curIndex++) {
            arr[curIndex] = 0;
        }

    }

    public static void main(String[] args) {
        int[] a = { 1, 0, 0, 3, 4 };
        move_zeros(a);

        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);            
        }
    }
}
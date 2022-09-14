public class _Bubble_sort {
    public static void Ouput(int i, int[] a) {
        System.out.println("%d: " + i);
        for (int j = 0; j < a.length; j++) {
            System.out.println("%d " +a[i]);
        }
        System.out.println();
    }

    public static void bubble_sort(int[] a) {
        int n = a.length;
        for (int i = 0; i < n; i++) {
            boolean isSorted = true;
            for (int j = 0; j < n-i-1; j++) {
                if(a[j] > a[j+1]) {
                    isSorted = false;
                    int tmp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = tmp;
                }
            }
            if(isSorted)
                Ouput(i, a);
        }
    }

    public static void main(String[] args) {
        int[] a = { 4, 3, 1, 5, 6, 2 };
        bubble_sort(a); 
    } 
}
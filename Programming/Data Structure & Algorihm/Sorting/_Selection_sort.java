// Tìm phần tử nhỏ nhất rồi đổi chõ cho i
public class _Selection_sort{

    public static void Ouput(int i, int[] a) {
        System.out.println("%d: " + i);
        for (int j = 0; j < a.length; j++) {
            System.out.println("%d" +a[i]);
        }
        System.out.println();
    }

    public static void selectionSort(int[] a){
        int n = a.length;
        for (int i = 0; i < n; i++) {
            int minIndex = i;
            for (int j = i+1; j < n; j++) {
                // Tìm min[n]
                if(a[j] > a[minIndex]){
                    minIndex = j;
                }
            }
            if(minIndex != i) {
               int t = a[i];
               a[i] = a[minIndex];
               a[minIndex] = t;
            }
            Ouput(i, a);
        }
    }

    public static void main(String[] args) {
        int[] a = {5, 3, 2, 7 ,8, 1, 2};
        selectionSort(a);
    }
}
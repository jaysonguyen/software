public class _intersertion_sort {
    public static void printArray(int[] a){
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }

    public static void insertionSort(int[] a){
        int n = a.length;
        int pos;
        for (int i = 1; i < n; i++) {
            // chèn a[i] vào dãy 0 -> i - 1;
          int ai = a[i];
          for (pos = i - 1; pos >= 0; pos--) {
              if(ai <= a[pos]) {
                  a[pos+1] = a[pos];
              }
              else{
                  break;
              }
          }
          pos = pos + 1;
          a[pos] = ai;
        }
    }

    public static void main(String[] args) {
        int[] a = {5, 3, 2, 7, 8, 1, 2};
        insertionSort(a);
        printArray(a);
    }
}

public class _27_Remvove_Element {
   public static int RemoveElement(int []a, int val) {
       int n = a.length;
       for (int i = 0; i < n;) {
           if(a[i] == val) {
               for (int j = i; j <= (n-1); j++) {
                   a[i] = a[i+1];
               }
               n--;
           }
           else {
               i++;
           }
       }
       return n;
   }
   // kỹ thuạt 2 con trỏ
   public static int RemoveElement2(int[] a, int val) {
       int currentIndex = 0;
     for (int i = 0; i < a.length; i++) {
         if(a[i] != val) {
             a[currentIndex] = a[i];
             currentIndex++;
         }
     }
    return currentIndex;
   }
   public static void main(String[] args) {
       int []a = {2, 2, 3, 3};
       RemoveElement(a, 3);
       System.out.println(RemoveElement(a, 3));
   }
}
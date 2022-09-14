public class _1662_Check_If_Two_Strng {
   public static boolean arrayStringAreEqual(String[] arr1, String[] arr2) {
       StringBuilder sb1 = new StringBuilder();
       StringBuilder sb2 = new StringBuilder();

       for(String s : arr1) {
           sb1.append(s); // nhets vao string; == +=
       }

       for(String s : arr2) {
        sb2.append(s); // nhets vao string;
     }
     return sb1.toString().equals(sb1.toString());

   } 

   public static void main(String[] args) {
       String[] a1 = {"ab", "c"};
       String[] a2 = {"ab", "c"};
       arrayStringAreEqual(a1, a2);
   }
}


public class _88_Merge_sort {

    public static void merge(int[] nums1, int m, int[] nums2, int n) {
       for (int ai : nums2) {
           ChenPhanTu(ai, nums1, m); 
               m++;
           
       }
    }

    private static void ChenPhanTu(int x, int[] a, int m) {
       boolean isChange = false;
       for (int i = 0; i < m; i++) {
           if(a[i] > x) {
               isChange = true;
               for (int j = m-1; j >= i; j--) {
                   a[j+1] = a[j];
               }
               a[i] = x;
               break;
           }
       }
       if(isChange == false) {
           a[m] = x;
       }
    }

    public static void merge2(int[] n1, int m, int[] n2, int n) {
        int i = m - 1;
        int j = n - 1;
        int k = (m+n) - 1;
        while(k>=0) {
            if(i<0) {
                n1[k] = n2[j];
                j--;
            }
            else if (j<0) {
                n1[k] = n1[i];
                i--;
            }
            else if(n1[i] > n2[j]) {
                n1[k] = n1[i];
                i--;
            }
            else {
                n1[k] = n2[j];
                j--;
            }
            k--;
        }
    }

    public static void main(String[] args) {
        int [] nums1 = {1,2,3,4,5,0,0,0};
        int [] nums2 = {1,2,3};
        merge2(nums1, 5, nums2, 3);
       System.out.println("DONE");
        

    }
}
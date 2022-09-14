public class _Find_Pivot_Index {
    
    public static int pivotIndex(int[] a) {

        int n = a.length;
        if(n == 1)
            return 0;

        if(n == 0)
            return -1;

        int[] st = new int[n];
        int[] sp = new int[n];

        for (int i = 0; i < n; i++)
         {
            int j = n - 1 - i;
            st[i] = (i == 0) ? a[i] : (st[i-1] + a[i]);
            sp[j] = (j == n-1) ? a[j] : (sp[j+1] + a[j]);
        }

        for (int i = 0; i < n; i++) {
            if(i == 0){
                if(sp[1] == 0)
                    return i;
            }
            else if( i == n - 1) 
            {
                if(st[n-2] == 0)
                    return i;
            }
            else
             {
                if(st[i-1] == sp[i+1])
                    return i;
            }
        }
        return -1;
    }   

    public static int pivotFind2(int[] a) {
        int total_sum = 0;
        int n = a.length;
        for (int i = 0; i < n; i++) {
            total_sum += a[i];
        }

        int left_sum = 0;
        for (int i = 0; i < a.length; i++) {

            if(i != 0)
                left_sum += a[i - 1];

            if(total_sum - left_sum - a[i] == left_sum)
                return i;
        }

        return -1;
    }

    public static void main(String[] args) {
       int[] a = {1, 7, 3, 6, 6, 5};
       //pivotIndex(a);
       int n = pivotFind2(a);
       System.out.println(n);
       //System.out.println(pivotIndex(a));
    }
}
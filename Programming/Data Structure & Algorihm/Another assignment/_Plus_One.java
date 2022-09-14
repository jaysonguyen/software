public class _Plus_One {

    public static int[] plusOne(int[] a) {

        int n = a.length;
        int i = n - 1;
        int soDu = 1;

        while (i >= 0 && soDu > 0) {

            int tmp = a[i] + soDu;
            a[i] = tmp % 10;
            soDu = tmp / 10;
            i--;
        }

        if (soDu == 0) {
            return a;
        }

        int[] b = new int[n + 1];
        b[0] = soDu;

        for (int j = 0; j < b.length; j++) {
            b[i + 1] = a[i];
        }

        return b;
    }

    public static void main(String[] args) {
        int[] a = { 9, 9, 9, 9 };
        int[] b =  plusOne(a);
        for (int i = 0; i < a.length; i++) {

            System.out.println(a[i]);
        }
    }

}
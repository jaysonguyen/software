public class _1672_Riches_Custumer_Wealth {

    public static int maximumWealth(int[][] a) {

         /*
     * cach 1: public static int maximumWealth(int[][] a) {
     * 
     * int soKhachHang = a.length; int soNganHang = a[0].length; int[] tongTaiSan =
     * new int[soKhachHang];
     * 
     * for (int i = 0; i < soKhachHang; i++) { int tongTienI = 0; for (int j = 0; j
     * < soNganHang; j++) { tongTienI += a[i][j]; } tongTaiSan[i] = tongTienI; }
     * 
     * int max = 0; for (int i = 0; i < soKhachHang; i++) {
     * System.out.println("Tong tai san khach: " + i + " la: " +tongTaiSan[i] +
     * "$"); if(tongTaiSan[i] > max) { max = tongTaiSan[i]; } }
     * 
     * return max;
     */

        int soKhachHang = a.length;
        int soNganHang = a[0].length;
        int max = 0;

        for (int i = 0; i < soKhachHang; i++) {
            int tongTienI = 0;
            for (int j = 0; j < soNganHang; j++) {
                tongTienI += a[i][j];
            }
            if (tongTienI > max) {
                max = tongTienI;
            }
        }

        return max;
    }

    public static void main(String[] args) {
        int[][] a = { { 1, 5, 3 }, { 3, 2, 1 } };
        System.out.println(maximumWealth(a));

    }
}
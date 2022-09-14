public class _string_char {



    public static void xinchaosep(String s) {


        // Nếu sử dụng if(s == "Boss") => Kiểm tra xem có trỏ cùng một bộ nhớ hay không
        if(s.equals("Boss")) {
            System.out.println("Em Chao sep ạ!");
        }
        else {
            System.out.println("Chào!");
        }
    }
    public static void main(String[] args) {
      /*   String s = "Hello World 1 2 3 :";

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if(Character.isDigit(ch) == true) {
                System.out.println(ch + "Ma ascii là: " + (int)ch);
            }

            if(ch >= 'a' && ch <= 'z') {
                System.out.println(ch);
            }
        } */

        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String ("Hello");

        System.out.println("s1 == s2 " + (s1 == s2));
        System.out.println("s1 == s2 " + (s1 == s3));
        System.out.println("s2 == s3 " + (s2 == s3));

        // So sánh 2 nội dung của object
        System.out.println("\ns1 euals(s2) " + (s1.equals(s2)));
        System.out.println("s1 euals(s2) " + (s1.equals(s3)));
        System.out.println("s1 euals(s2) " + (s2.equals(s3)));

        //Bộ nhớ string
        String k1 = "Boss";
        //Tạo ra một bộ nhớ khác
        String k2 = new String("Boss");

        xinchaosep(k1);
        xinchaosep(k2);


    }
}

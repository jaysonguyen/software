using System;

namespace Recursion
{
    class Program
    {
        // Tính giai thưa
        static int tinhGiaithua(int n)
        {
            if (n == 0)
                return 2;
            int t = n * tinhGiaithua(n - 1);
            return t;
        }

        // Số đằng sau bằng tổng 2 số đằng trước nó
        static int Fibonaci (int n){
            Console.WriteLine("Can Tinh F[{0}]", n);
            if (n <= 2)
                return 1;
            int fn = Fibonaci(n - 1) + Fibonaci(n - 2); ;
            return fn;
        }

        static int tinhtongtu1denn(int n)
        {
            if (n == 1)
                return 1;
            return n + tinhtongtu1denn(n - 1);
        }

        static int tinhsomu(int a, int n)
        {
            if (n == 0)
                return 1;
            return tinhsomu(a, n- 1) * a;
        }

        static void prinArray(int[] a, int index)
        {
            // bài toán cơ sở
            if (index < 0 || index >= a.Length)
                return;
            // Công thức quy nạp
            prinArray(a, index + 1);
            Console.Write(a[index] + " ");
        }

        // Tối ưu hóa đệ quy
        // Đệ quy có nhớ
         static int[] F = new int[1000];
        public static int Fibo2(int n)
        {
            if (F[n] != 0)
                return F[n];

            Console.WriteLine("Can Tinh F[{0}]", n);
            if (n <= 2)
            {
                F[1] = 1;
                F[2] = 1;
                return 1;
            }
            F[n] = Fibo2(n - 1) + Fibo2(n - 2);
            return F[n];

        }

        static void swap(char[] arr, int i, int j)
        {
            if(i < j)
            {
                char t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }

        static void reverseString(char[] s) {
            swap(s, 0, s.Length - 1);
        }

        static void Main(string[] args)
        {
            // Console.WriteLine(tinhGiaithua(1));
            //Console.WriteLine(tinhGiaithua(2));
            //Console.WriteLine(tinhGiaithua(3));
            //Console.WriteLine(tinhGiaithua(4));
            //Console.WriteLine(tinhGiaithua(5));
            //Console.WriteLine(tinhtongtu1denn(9));
            //Console.WriteLine(Fibonaci(5));
            //Console.WriteLine(tinhsomu(5, 2));

            //int[] a = { 0, 1, 2, 3, 4, 5, 6, 7, 8 };
            //prinArray(a, 0);
            //Console.ReadKey();

            // Console.Write(Fibo2(10));

            // Khu de quy

            /*int[] Fibo = new int[11];
            Fibo[1] = 1;
            Fibo[2] = 1;
            for (int i = 3 ; i <= 10; i++)
            {
                Fibo[i] = Fibo[i-1] + Fibo[i-2];
            }
            Console.WriteLine(Fibo[10]);*/

            char[] ch = { '0', '1', '2', '3', '4', '5' };
            reverseString(ch);
            foreach(int s in ch)
            {
                Console.Write(" " + s);
            }




        }
    }
}

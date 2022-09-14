using System;

namespace ConsoleApp1
{
    //cho ta khai baso mang ma khong can doi so
    class Params
    {
        public void method_1(params int[] a)
        {
            for(int i = 0; i < a.Length; i++)
            {
                Console.Write(" " + a[i]);
            }
            Console.WriteLine();
        }
        public void method_2(params object[] a) //object la bat ki kieu gi {double,int,float}..
        {
            for (int i = 0; i < a.Length; i++)
            {
                Console.Write(" " + (object)a[i]);
            }
            Console.WriteLine();
        }
        static void Main(string[] args)
        {
            Params array = new Params();
            array.method_1(5, 6, 7,7,4,3);
            array.method_2("n", "n");
            int[] a = new int[5] { 1, 2, 3, 4,-1 };
            for(int i = 0; i < a.Length; i++)
            {
                if (a[i] < 1)
                {
                    Console.Write(a[i]);
                }
            }
            array.method_1(a);
            Console.ReadLine();
        }
    }
}

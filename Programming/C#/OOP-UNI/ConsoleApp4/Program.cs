using System;
using System.Linq;
using System.Collections.Generic;


namespace ConsoleApp4
{
    class Program
    {
        static void input(out int[] a)
        {
            string[] b = Console.ReadLine().Split();
            int n = int.Parse(b[0]);
            string[] token2 = Console.ReadLine().Split();
            a = new int[n];
            for (int i = 0; i < n; i++)
            {
                a[i] = int.Parse(token2[i]);
            }
            static bool isprime(int x)
            {
                if (x < 2)
                    return false;
                if (x > 2)
                {
                    if (x % 2 == 0)
                        return false;
                    for (int i = 3; i < x; i++)
                    {
                        if (x % i != 0)
                            return true;

                    }
                }
                return true;
            }
            static List<int> findallprime(int[] a)
            {
                List<int> list = new List<int>();
                for (int i = 0; i < a.Length; i++)
                {
                    if (isprime(a[i]) == true)
                        list.Add(a[i]);
                }
                return list;


            }
            static void interchangesort(List<int> intList)
            {

                int t = 0;
                int[] a = intList.ToArray();
                for (int i = 0; i <= a.Length; i++)
                {
                    for (int j = i + 1; j < a.Length; j++)
                        if (a[i] > a[j])
                        {
                            t = a[i];
                            a[i] = a[j];
                            a[j] = t;
                        }
                    Console.Write(a[i] + " ");
                }

            }
            static void Main(string[] args)
            {
                Console.Write("Nhap Luong co ban");
                double x = int.Parse(Console.ReadLine());
                nhanvien.SetBaseRate(x);
;









            }
        }
    }
}

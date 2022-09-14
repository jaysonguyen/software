using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;


namespace ConsoleApp2
{
   /* class Program
    {
        static int[] a;
        static int n;
        static void input()
        {
            n = int.Parse(Console.ReadLine());
            a = new int[n];
            for (int i = 0; i < a.Length; i++)
            {
                a[i] = int.Parse(Console.ReadLine());
            }
        }
        static double mean()
        {
            int sum = 0;
            double avg;
            for (int i = 0; i < a.Length; i++)
            {
                sum = sum + a[i];
            }
            avg = (double)sum / a.Length;
            return avg;
        }
        static int count()
        {
            int count = 0;
            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] < mean())
                {
                    count++;
                }
            }
            return count;
        }
        static int largest()
        {
            int check = 0;
            List<int> mylist = new List<int>();

            for (int i = 0; i < a.Length; i++)
            {
                if (check < mean())
                {
                    mylist.Add(a[i]);
                }
            }
            return check;
        }
        static void output()
        {
            for (int i = 0; i < a.Length; i++)
            {
                Console.Write(" " + a[i]);
            }
        }
        static int Largest()
        {
            int max = 0;
            List<int> list1 = new List<int>();
            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] < mean())
                    list1.Add(a[i]);

            }
            int[] c = list1.ToArray();
            for (int i = 0; i < c.Length; i++)
            {
                if (max < c[i])
                    max = c[i];
            }

            return max;


          
        }
        static void Main(string[] args)
        {
            input();
            Console.Write("So Lon nhat va nho hon so trung binh la: "+ Largest());
            

        }
    }*/
}









            /* if (max < mean()) 
                 Console.Write(max);
                 else
                     goto nguyen;  */




            /* input();
             int sum = 0;
             double avg;
             for (int i = 0; i < a.Length; i++)
             {
                 sum = sum + a[i];
             }
             avg = (double)sum / a.Length;
             Console.Write(avg);*/



        
    




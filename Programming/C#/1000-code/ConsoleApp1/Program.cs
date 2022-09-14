using System;

namespace ConsoleApp1
{
    class Program
    {

        public static void getname()
        {
            Console.Write("Nhap ten hoc sinh: ");
            string name = Console.ReadLine();

            Console.Write("Nhap ten hoc sinh: ");
            double math_mark = double.Parse(Console.ReadLine());

            Console.Write("Nhap ten hoc sinh: ");
            double literature_mark = double.Parse(Console.ReadLine());

            double avg = (math_mark + literature_mark)/ 2;
            Console.Write("Diem trung binh: "+avg);

        }
        static void Main(string[] args)
        {
     (19)
                getname();







            /*  (1)     int[] a = new int[5];
                     int sum = 0;
                     for(int i = 0; i < 5; i++)
                     {
                         Random rd = new Random();
                         int c = rd.Next(0, 100);
                         a[i] = c;
                         sum = sum + a[i];

                     }
                     for (int i = 0; i < 5; i++)
                     {
                         Console.WriteLine(a[i]);

                     }
                     Console.WriteLine(sum);

            (2)     // Giai Thua
             Random rd = new Random();
             int c = rd.Next(2,10);
             int d = 1;
             for (int i = 1; i <= 5; i++) 
             {
                 d = d * i;
             }
             Console.WriteLine(d);

         (3)    // kiem tra s nguyen to

             int[] a = new int[10];

              int de = a[0];
              for (int i = 0; i < 10; i++)
              {
                  Random rd = new Random();
                  int c = rd.Next(2, 10);
                  a[i] = c;
                  if (de % a[0] == 0)
                  {
                      Console.WriteLine("Yes" + a[i]);
                  }
                  de++;
              }

        (4)     /*int[] a = new int[10];

            int de = a[0];
            for (int i = 0; i < 10; i++)
            {
                Random rd = new Random();
                int c = rd.Next(2, 10);
                a[i] = c;
                if (a[i] / de == 0)
                {
                    Console.WriteLine("Yes" + a[i]);
                }
                de++;

         (5)    // Tim so hoan hao~

            int n = int.Parse(Console.ReadLine());
             int sum = 0;
             for(int i = 1; i < n; i++)
             {
                 if (n % i == 0)
                 {
                     sum = sum + i;
                 }
             }
             Console.Write("Tong cua cac uoc so " + sum);
             if (sum == n)
                 Console.Write("YES");

             else
                 Console.Write("NO");
     

       (6)     //Tinh s(n) = 1^2+22 +...n^2
            /* int n = int.Parse(Console.ReadLine());
             double sum = 0;
             for(int i=0;i<=n;i++)
             {
                 sum = sum + Math.Pow(i, 2);
             }
             Console.Write(sum);


            // tinh S(n) 1+ 1/2 + 1/3 + 1/n
         (7)   /*  int n = int.Parse(Console.ReadLine());
              double sum = 0;
              for (int i = 1; i <= n; i++) 
              {
                  sum = sum + (1 /(double)i);
              }
              Console.Write(sum);

       (8)      // tinh 1/2 +1/4...+1/2n;
            /* double sum = 0;
             int n = int.Parse(Console.ReadLine());
             for(int i = 1; i <= n; i++)
             {
                 sum = sum + (1 / (2 * (double)i));
             }
             Console.Write(sum);


        (9)    // Tinh 1 + 1/3 +1/5 + ...1/(2n+1)
            /* double sum = 0;
             int n = int.Parse(Console.ReadLine());
             for (int i = 1; i <= n; i++)
             {
                 sum = sum + (1 / (2 * (double)i)+1);
             }
             Console.Write(sum);


         (10)   // tinh s(n) 1/1*2 + 1/2*3...+1/n*(n+1)
            /*  double sum = 0;
              int n = int.Parse(Console.ReadLine());
              for (int i = 1; i <= n; i++)
              {
                  sum = sum + (1 / (i * (double)i + 1));
              }
              Console.Write(sum);

         (11)    //Tinh S(n) = 1/2 +3/4 +5/6 +...2n+1/2n+2
            /* double sum = 0;
             int j = 2;
             int n = int.Parse(Console.ReadLine());
             for (int i = 1; i <= n; i++)
             {
                 sum = sum + ((double)i / (double)j);
                 j++;
            
             Console.Write(sum);


        (12)     // Tinh T(x,n) =x^n;
            /*double sum = 1;
            int n = int.Parse(Console.ReadLine());
            sum = Math.Pow(sum, n);
            Console.Write(sum);
            // Tinh S(n) = 1+1.2 +1.2.3 +1.2.3.N
            int sum = 1;
            int n = int.Parse(Console.ReadLine());
            for(int i = 1; i < n; i++)
            {
                sum = sum + (i * (i + 1));
            }
            Console.Write(sum);


        (13)     // Tinh S(n) = x + x^2 +x^3 ...X^n
            int x = int.Parse(Console.ReadLine());
            int n = int.Parse(Console.ReadLine());
            double sum = 0;
            for(int i = 1; i <= n; i++)
            {
                sum = sum + Math.Pow(x,(double)i);
            }
            Console.Write(sum);

       (14)      // Tinh S(n) = x +  X^3 +X^5 +X^2n+1
            /*int x = int.Parse(Console.ReadLine());
            int n = int.Parse(Console.ReadLine());
            double sum = 0;
            for(int i = 0; i <= n; i++)
            {
                sum = sum + (Math.Pow(x, (double)i + 2));
            }
            Console.Write(sum);

        (15)     // Tinh S(n) = 1 + 1/2 + 2 + 1/2 +2+1/3 +...+1/1 + 2 + 3 +...+N


        (16)    // Tinh S(n) = x + x^2/2! + X^3/3! + x^n/N!
            int x = int.Parse(Console.ReadLine());
            int n = int.Parse(Console.ReadLine());
            int i = 1;
            double sum = 0;
            double ve_a = 1;
            double ve_b = 1;

            while(i <= n)
            {
                ve_a = Math.Pow(x, i);
                ve_b = ve_b * i;
                sum = sum + ve_a / ve_b;
                i++;
            }
            Console.Write(sum);

        }

         (17)   // liet ke tat ca cac uoc so cua so nguyen duong
            int number = int.Parse(Console.ReadLine());
            for (int i = 1; i <= number; i++)
            {
                if (number % i == 0)
                    Console.Write(i+ " ");
            }
       (18)     // viet truong tinh kiem tra 2 so thuc xemno co cung dau hay khong
            double number_1 = int.Parse(Console.ReadLine());
            double number_2 = int.Parse(Console.ReadLine());
            if (number_1 >= 0 && number_2 >= 0 || number_1 < 0 && number_2 < 0)
                Console.Write("YES");
            else
                Console.Write("NO");
            
            int[,] a = new int[3, 3];
            for(int i = 0; i < a.Length; i++)
            {
                for (int j = 0; j < a.Length; j++)
                {
                    if (j == 0 || i==0)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                  
                }
                
            }*/









        }
    }
}





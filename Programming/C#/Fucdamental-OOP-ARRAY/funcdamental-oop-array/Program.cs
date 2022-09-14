using System;

namespace funcdamental_oop_array
{
    class Program
    {
        public void input(int[] a, int n)
        {
            for (int i = 0; i < a.Length; i++)
            {
                Console.Write("a[{0}] :", i);
                a[i] = Convert.ToInt32(Console.ReadLine());
            }
        }
        public void output(int[] a, int n)
        {
            for (int i = 0; i < a.Length; i++)
            {
                Console.Write(" " + a[i]);

            }
        }
        public void sum(int[] a, int[] b, int[] c, int n)
        {
            for (int i = 0; i < n; i++)
            {
                c[i] = a[i] + b[i];
            }
        }
        public void input_2(int[,] a, int rows, int lines)
        {
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < lines; j++)
                {
                    Console.Write("a[{0},{1}]", i, j);
                    a[i, j] = int.Parse(Console.ReadLine());
                }
            }
        }
        public void output_2(int[,] a, int rows, int lines)
        {
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < lines; j++)
                {
                    Console.Write(" " + a[i, j]);
                }
                Console.WriteLine();
            }
        }
        public void sum_2(int[,] a, int[,] b, int[,] c, int lines, int rows)
        {
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < lines; j++)
                {
                    c[i, j] = a[i, j] + b[i, j];
                }
            }
        }
        public void mul_2(int[,] a, int[,] b, int[,] d, int lines, int rows)
        {
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < lines; j++)
                {
                    d[i, j] = 0;
                    for (int k = 0; k < lines; k++)
                    {
                        d[i, j] += (a[i, k] * b[k, j]);
                    }
                }

            }
        }

        static void Main(string[] args)
        {
           Persion[]pr = new Persion[3];
            for(int i=0;i<3;i++)
            {
                pr[i] = new Persion();
                pr[i].input();
                Console.WriteLine();
            }
            for (int i = 0; i < 3; i++)
            {            
                pr[i].show();
                Console.WriteLine();
            }
      


            //ARRAY_2_SUM_MUL
            /* Program array_2 = new Program();
             Console.Write("Nhap so dong : ");
             int line = Convert.ToInt32(Console.ReadLine());
             Console.Write("Nhap so cot: ");
             int row = Convert.ToInt32(Console.ReadLine());
             int[,] a = new int[line,row];
             int[,] b = new int[line, row];
             int[,] c = new int[line, row];
             int[,] d = new int[line, row];

             Console.WriteLine("mang a:");
             array_2.input_2(a, line, row);

             Console.WriteLine("mang b:");
             array_2.input_2(b, line, row);       

             Console.WriteLine("mang a la: ");
             array_2.output_2(a,line,row);

             Console.WriteLine("mang b la :");
             array_2.output_2(b, line, row);
             array_2.sum_2(a, b, c, row, line);
             array_2.mul_2(a, b, d, row, line);

             Console.WriteLine("Mang c = a + b la :");
             array_2.output_2(c, row, line);

             Console.WriteLine("Mang D = a * b la :");
             array_2.output_2(d, row, line);

             ----------------------------------------

           Persion per = new Persion();
              per.input();
              per.show();
              Console.WriteLine();
              Persion per1 = new Persion("Khang", "123", "Taan Mai",13);
              per1.show();
              Console.WriteLine();
             //--PROPERTIES--
              Persion properties = new Persion();
              properties.infor_ID = "123";
              properties.infor_name = "Nguyen Vu THanh Nguyen";
              properties.infor_address = "Taan mai 2";
              properties.infor_age = 18;
              properties.show();
              Console.WriteLine();
             properties.infor_name = Console.ReadLine();

            /* Program arry = new Program();
             Console.Write("Nhap n: ");
             int n = Convert.ToInt32(Console.ReadLine());
             int[] a = new int[n];
             int[] b = new int[n];
             int[] c = new int[n];

             Console.WriteLine("Nhap cac phan tu mang a");
             arry.input(a, n);

             Console.WriteLine("Nhap cac Phan tu mang b");
             arry.input(b, n);

             arry.sum(a, b, c, n);

             Console.WriteLine("mang a: ");
             arry.output(a, n);
             Console.WriteLine();
             Console.Write("mang b: ");
             arry.output(b, n);

             Console.WriteLine("Tong mang c: ");
             arry.output(c,n);

             //--ARRAY-OOP//
             int n = Convert.ToInt32(Console.ReadLine());
             Persion[] per = new Persion[n];
             for(int i = 0; i < n; i++)
             {
                 per[i] = new Persion();
                 per[i].input();
             }
             Console.WriteLine();
             for (int i = 0; i < n; i++)
             {
                 per[i].show();              
             }

             Program array_2 = new Program();
             Console.Write("Nhap so dong : ");
             int line = Convert.ToInt32(Console.ReadLine());
             Console.Write("Nhap so cot: ");
             int row = Convert.ToInt32(Console.ReadLine());

             int[,] a = new int[line, row];
             Console.WriteLine("Nhap cac gia tri : ");
             array_2.input_2(a, line, row);

             Console.WriteLine("Gia tri mang la :");
             array_2.output_2(a, line, row);


            //------------------------------------------------
            //OVERLOADING--METHOD//
            matran_2 matrix = new matran_2();
            matrix.inpit_2();
            matrix.show_2();
            Console.ReadLine(); */


        }
    }
}

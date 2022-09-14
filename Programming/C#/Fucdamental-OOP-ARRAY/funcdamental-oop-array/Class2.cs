using System;
using System.Collections.Generic;
using System.Text;

namespace funcdamental_oop_array
{
    class matran_2
    {
        private int line, row;
        private int[,] a = new int[5, 5];
        private int[,] b = new int[5, 5];
        private int[,] c = new int[5, 5];
        private int[,] d = new int[5, 5];

        public matran_2()
        {
            Console.Write("Nhap kich thuoc ma tran: ");
            line = int.Parse(Console.ReadLine());
            row = int.Parse(Console.ReadLine());        
        }

        public void input_2(int[,] a, int line, int row)
        {
            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < line; j++)
                {
                    Console.Write("a[{0},{1}]", i, j);
                    a[i, j] = int.Parse(Console.ReadLine());
                }
            }
        }

        public void inpit_2()
        {
            Console.WriteLine("Nhap ma tran A");
            input_2(a, line, row);
            Console.WriteLine("Nhap ma tran B");
            input_2(b, line, row);
        }

        public void add_2(int[,] a, int[,] b, int[,] c, int line, int row)
        {
            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < line; j++)
                {
                    c[i, j] = a[i, j] + b[i, j];
                }
            }
        }
        public void mul_2(int[,] a, int[,] b, int[,] d, int line, int row)
        {
            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < line; j++)
                {
                    d[i, j] = 0;
                    for (int k = 0; k < line; k++)
                    {
                        d[i, j] = a[i, k] * b[k, j];
                    }
                }
            }
        }

        public void show_2(int[,] a, int line, int row)
        {
            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < line; j++)
                {
                    Console.Write(" " + a[i, j]);
                }
                Console.WriteLine();
            }

        }

        public void show_2()
        {
            add_2(a, b, c, line, row);
            mul_2(a, b, d, line, row);

            Console.WriteLine(" ma tran A la: ");
            show_2(a, line, row);

            Console.WriteLine(" ma tran B la: ");
            show_2(b, line, row);

            Console.WriteLine(" ma tran C la: ");
            add_2(a, b, c, line, row);
            show_2(c, line, row);

            Console.WriteLine(" ma tran D la: ");
            mul_2(a, b, d, line, row);
            show_2(d, line, row);

        }
    }
}

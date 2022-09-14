using System;
using System.Linq;
using System.Collections.Generic;

namespace ConsoleApp3
{
    class nhanvien
    {
        private string sotk;
        private string name;
 private static double laisuat;
        private double sodu;

        public nhanvien(string sotk, string name, double sodu=0)
        {
            this.sotk = sotk;
            this.name = name;
        this.sodu = sodu;
        }
        public double laisuat1
        {
            get { return laisuat; }
            set
            {
                if (laisuat > 0 && laisuat <= (laisuat * 0.2))
                    laisuat = value;
            }

        }
        public void naptien(double sotien)
        {
            sodu = sodu + sotien;
        }
        public void rut(double sotien)
        {
            sodu = sodu - sotien;
        }
        public void tinhlai()
        {
            double tien = 1;
            tien = sodu * laisuat;
            sodu = tien + sodu;
        }
        public string tostring()
        {
            return $"NhanVien[MANV: {sotk}, HoTen: {name}, HSLUONG: {sodu}]";
        }
        static int[] abc(int[]a)
        {
            int max = a.Max();
            bool[] b = new bool[max + 1];
            int dem = 0;
            int[] c = new int[max + 1];
            for(int i = 0; i < b.Length; i++)
            {
                b[i] = false;
            }
            for (int i = 0; i < a.Length; i++)
            {
                b[a[i]] = true;
            }
            for (int i = 0; i < b.Length; i++)
            {
                if(b[i]=true)
                {
                    c[i] = dem++;
                }
               
            }
            return c;
        }

        
    }
    class Program
    {
        static void Main(string[] args)
        {
            nhanvien nv = new nhanvien("10", "10", 10);
            nv.tinhlai();
            Console.WriteLine(nv.tostring());

            


        }




            /*int i;
            double sum = 0;
            int n = int.Parse(Console.ReadLine());
            for (i = 0; i < n; i++)
            {
                product pro = new product();
                pro.input();
                sum = sum + pro.pay();
                
            }
            Console.Write("Tong gia :"+sum);*/
           


        
    }
}

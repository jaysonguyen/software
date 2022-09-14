using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp4
{
    class nhanvien
    {
        private string staffiD;
        private string name;
        private double payrate; 
       static private double baserate;

        public nhanvien() { }
        public nhanvien(string staffID, string name, double payrate)
        {
            this.staffiD = staffiD;
            this.name = name;
            this.payrate = payrate;
        }
     public static void SetBaseRate(double baseRate)
        { 

            if(baseRate < 0)
            {
                Console.Write("Nhap Luong co ban");
                baseRate = Convert.ToDouble(Console.ReadLine());
            }
        }
       public void input()
        {
            Console.Write("Nhap iD: ");
            staffiD = Console.ReadLine();
            Console.Write("Nhap Name: ");
            name = Console.ReadLine();
            Console.Write("Nhap payrate: ");
            payrate = double.Parse(Console.ReadLine());
        }
      public  string tostring()
        {
            return $"NhanVien[MANV: {staffiD}, HoTen: {name}, HSLUONG: {payrate}]";
        }
       public double pay()
        {
            double luong = 1;
            luong = baserate *payrate;
            return luong;
        }
    }
}

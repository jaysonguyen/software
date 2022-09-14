using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace ConsoleApp3
{


    class product
    {
        private string name;
        private double price;
        private int number;
        public product() { }
        public product(string ne, double pe, int nr) { }
        public string Name
        {
            get { return Name;}
            set { Name = value; }
        }
        public double Price
        {
            get { return Price; }
            set { Price = value; }
        }
        public string Number
        {
            get { return Number; }
            set { Number = value; }
        }

        // moi khach hang dat mua n cai san pham,
        // thong tin san pham khach hang mua gom co : ten san pham : don gia:so luong mua);

        public void getbill()
        {
            Console.WriteLine("Ten san Pham : " + name);
            Console.WriteLine("So Luong : " + number);
            Console.WriteLine("Gia : " + price);
        }
        public void input()
        {
            Console.Write("Nhap Ten san pham : ");
            name = Console.ReadLine();
            Console.Write("Don gia : ");
            price = double.Parse(Console.ReadLine());
            Console.Write("Nhap sl san pham :");
            number = int.Parse(Console.ReadLine());
        }
        public double pay()
        {
           
            if (number >= 4 && number <= 9)
                price = price - (price * 0.05);
            else if (number >= 10)
                price = price - (price * 0.1);
            return price;
        }
    }


    }


using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Employee
    {
        private int iD;
        private string name;

        public Employee()
        {
            iD = 0;
            name = " ";
        }
        public int infor_iD
        {
            get { return iD; }
            set { iD = value; }
        }
        public string infor_name
        {
            get { return name; }
            set { name = value; }
        }
        public void input()
        {
            Console.Write("Nhap iD: ");
            iD = int.Parse(Console.ReadLine());
            Console.Write("Nhap name: ");
            name = Console.ReadLine();
            Console.WriteLine();
        }
        public virtual void show()
        {
            Console.WriteLine($"iD: {iD}");
            Console.WriteLine($"name: {name}");


        }
    }
}

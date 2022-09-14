using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class scientist:Employee
    {
        private int pub;

        public scientist():base()
        {
            pub = 0;
        }
        public int infor_pub
        {
            get { return pub; }
            set { pub = value; }
        }
        public void input()
        {
            base.input();
            Console.Write("Nhap Pub: ");
            pub = int.Parse(Console.ReadLine());
        }
        public override void show()
        {
            base.show();
            Console.WriteLine($"Pub: {pub}");
            Console.WriteLine();
        }
    }

}

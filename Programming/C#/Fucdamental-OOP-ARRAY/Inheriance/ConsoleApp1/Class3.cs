using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
     class manager : Employee
    {
        private string contact;
        public manager() : base()
        {
            contact = " ";
        }
        public string infor_contact
        {
            get { return contact; }
            set { contact = value; }
        }
        public void input()
        {
            Console.WriteLine();
            base.input();
            Console.Write("Contact: ");
            contact = Console.ReadLine();
        }
        public override void show()
        {
            base.show();
            Console.WriteLine("Contact: " + contact);
            Console.WriteLine();
        }

    }
}

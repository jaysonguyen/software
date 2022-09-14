using System;
using System.Collections.Generic;
using System.Text;

namespace funcdamental_oop_array
{
    class Persion
    {
        private string ID;
        private string name;
        private int age;
        private string address;
        public Persion()
        {
            ID = "";
            name = " ";
            age = 0;
            address = "";
        }
        public Persion(string name, string ID, string address, int age)
        {
            this.name = name;
            this.ID = ID;
            this.address = address;
        }
        public string infor_ID
        {
            get { return ID; }
            set { ID = value; }
        }
        public string infor_address
        {
            get { return address; }
            set { ID = value; }

        }
        public int infor_age
        {
            get { return age; }
            set { age = value; }
        }
        public string infor_name
        {
            get { return name; }
            set { name = value; }
        }
        public void input()
        {
            Console.Write("Enter your name :");
            name = Console.ReadLine();
            Console.Write("Enter your age: ");
            age = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter your address: ");
            address = Console.ReadLine();
            Console.Write("Enter your ID : ");
            ID = Console.ReadLine();
        }
        public virtual void show()
        {
            Console.Write("Name: " + name + "\nage: " + age + "\naddress: " + address + "\nID: " + ID);
        }

    }
    }

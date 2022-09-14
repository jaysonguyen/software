using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Person
    {
        private string name;
        private string address;

        public Person() { }
        public Person(string name, string address)
        {
            this.name = name;
            this.address = address;
        }

        public string get_name
        {
            get { return name; }
            set { name = value; }
        }
        public string get_addres
        {
            get { return address; }
            set { address = value; }
        }

        public string getname()
        {
            return name;
        }
        public string getaddress()
        {
            return address;
        }
        public void setaddress(string address)
        {
            this.address = address;
        }
        public virtual string tostring()
        {
            return  "Person[Ten: " + name + " Dia chi: "+address+"]";
        }


    }
}

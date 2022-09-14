using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestMay_1
{
    public class Animal
    {
        string name;
        string age;

        public Animal(string name, string age)
        {
            this.name = name; this.age = age;
        }


        public string Name { get; set; }
        public string Age { get; set; }



        public void getName()
        {
            Console.Write("Name");
        }
    }
}

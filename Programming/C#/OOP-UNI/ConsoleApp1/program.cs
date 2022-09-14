using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class program
    {
        static void Main(string[]args)
        {
            Person person = new Person("Nguyen","Tan Mai 2");
            Console.WriteLine(person.tostring());

            Student student = new Student("Thanh", "Tan mai 2", "CNTT", 2, 100.000);
            Console.WriteLine(student.tostring());

            staff Staff = new staff("Vu", "Tan mai 3", "THPTAMPHOC", 100.000);
            Console.WriteLine(Staff.tostring());

        }
    }
}

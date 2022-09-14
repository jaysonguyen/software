using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee emplo = new Employee();
            emplo.input();
            emplo.show();

            scientist scien = new scientist();
            scien.input();
            scien.show();

            manager mana = new manager();
            mana.input();
            mana.show();

            worker work = new worker();
            work.input();
            work.show();
        }
    }
}

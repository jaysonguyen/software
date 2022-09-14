using System;

namespace ConsoleApp1
{
    class Program
    {

        static void Main(string[] args)
        {
            test_indexer testing = new test_indexer();
            test_indexer test = new test_indexer();
            test[0] = "Nam";
            test[1] = "Nguyet";
            test[2] = "Nga";
            test[3] = "Ngan";
            test[4] = "Ngam";
            test[5] = "Nguyeen";
            for (int i = 0; i < test_indexer.size; i++)
            {
                Console.WriteLine(test[i]);
            }


            /*Indexer1 p = new Indexer1();
            p[0] = 7;
            p[1] = 8;
            p[2] = 9;
           
            Console.WriteLine("Toa do diem P(x,y,z) la: ");
            Console.WriteLine("P({0}, {1} ,{2})",p[0],p[1],p[2]);

            Indexer1 p2 = new Indexer1();
            for (int i = 0; i < 3; i++)
            {
                p2[i] = i * i;
                
            }
            Console.WriteLine(p2.ToString());*/




        }
    }
}

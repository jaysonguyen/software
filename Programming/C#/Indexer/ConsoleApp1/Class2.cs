using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class test_indexer
    {
        private string[] namelist = new string[size];
        public static int size = 6;

        public test_indexer()
        {
            for (int i = 0; i < size; i++)
            {
                namelist[i] = "N/A";
            }
        }

        public string this[int idx]
        {
            get
            {
                return namelist[idx];
            }
            set
            {
                namelist[idx] = value;
            }





        }
    }
}


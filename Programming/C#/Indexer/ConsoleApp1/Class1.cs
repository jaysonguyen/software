using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Indexer1
    {
        private int x, y, z;
        public int this[int idx]
        {
            get
            {
                switch (idx)
                {
                    case 0: return x;

                    case 1: return y;

                    case 2: return z;

                    default:
                        throw new IndexOutOfRangeException();
                }
            }

            set
            {
                switch (idx)
                {
                    case 0: x = value; break;

                    case 1: y = value; break;

                    case 2: z = value; break;
                    
                }
            }
        }
        public override string ToString()
        {
            return "P("+x+","+y+","+z+")";     
        }

    }
}

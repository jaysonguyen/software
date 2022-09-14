using System;

namespace BinarrySearch
{
    class Program
    {
    
        static int binarysearch(int[] a, int key)
        {

            int left = 0;
            int right = a.Length - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;
                Console.WriteLine("[" + left + ", " + right + "] Xet" + mid);
                if (key == a[mid])
                {
                    return mid;
                }

                else if (key < a[mid])
                {
                    right = mid - 1;
                }
                else
                {
                    left = mid + 1;
                }
            }
            return -1;
        }

        static int reBinarySearch(int[] a, int key, int left, int right)
        {
            if(left > right)
                return -1;
            int mid = (left + right) / 2;
            if (key == a[mid])
                return mid;
            else if (key > a[mid])
                return reBinarySearch(a, key, mid + 1, right);
            else
                return reBinarySearch(a, key, left, mid - 1);
        }
        static void Main(string[] args)
        {
            int[] a = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            Console.WriteLine("Vi tri cua {0} la: {1}", 7 , binarysearch(a, 7));
            Console.WriteLine("Vi tri cua {0} la: {1}", 7, reBinarySearch(a, 7, 0, a.Length - 1));
        }
    }
}

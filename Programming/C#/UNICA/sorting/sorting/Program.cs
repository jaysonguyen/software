using System;

namespace sorting
{
    class Program
    {
        static void printArray(int no, int[] a)
        {
            int n = a.Length - 1;
            Console.Write("{0} ", no);
            for (int i = 0; i <= n; i++)
            {
                Console.Write(" " + a[i]);
            }
            Console.WriteLine();
        }

        static void interchangeSort(int[] a)
        {
            for (int i = 0; i < a.Length; i++)
            {
                for (int j = i + 1; j < a.Length; j++)
                {
                    if (a[i] > a[j])
                    {
                        int temp = a[i];
                        a[i] = a[j];
                        a[j] = temp;
                    }
                }
                printArray(i, a);
            }
        }

        static void bubleSort(int[] a)
        {
            int n = a.Length - 1;
            for (int i = 0; i <= n; i++)
            {
                bool isSort = true;
                for (int j = 0; j < n - i; j++)
                {
                    if (a[j] > a[j + 1])
                    {
                        isSort = false;
                        int temp = a[j];
                        a[j] = a[j + 1];
                        a[j + 1] = temp;
                    }
                }
                printArray(i, a);
                if (isSort == true)
                    break;
            }
        }

        static void insertionSort(int[] a)
        {
            int n = a.Length - 1;
            for (int i = 1; i <= n; i++)
            {
                int ai = a[i];
                int pos;
                for (pos = i - 1; pos >= 0; pos--)
                {
                    if (ai < a[pos])
                    {
                        a[pos + 1] = a[pos];
                    }
                    else
                    {
                        break;
                    }
                }
                pos += 1;
                a[pos] = ai;
            }
        }

        static void insertionSort2(int[] a)
        {
            int n = a.Length;
            for (int i = 0; i < n - 1; i++)
            {
                int ai = a[i];
                int pos = i - 1;
                while (pos >= 0 && ai < a[pos])
                {
                    a[pos + 1] = a[pos];
                    pos--;
                }
                a[pos + 1] = ai;
                printArray(i, a);

            }
        }

        static void selectionSort(int[] a)
        {
            for (int i = 0; i <= a.Length - 1; i++)
            {
                int min = i;
                for (int j = i + 1; j <= a.Length - 1; j++)
                {
                    if (a[min] > a[j])
                    {
                        min = j;
                    }
                }
                int temp = a[i];
                a[i] = a[min];
                a[min] = temp;
                printArray(i, a);
            }

        }
        // Tìm số lớn nhất thứ 3
        static void prinThird(long[] a)
        {
            for (int i = 0; i < a.Length; i++)
            {
                Console.Write("{0} ", a[i]);
            }
            Console.WriteLine();
        }
        static void insert(long[] a, int val)
        {
            int i = 0;
            while (i < a.Length)
            {
                if (a[i] == val)
                {
                    return;
                }
                else if (val > a[i])
                {
                    break;
                }
                else
                {
                    i++;
                }
            }
            if (i < a.Length)
            {
                for (int j = a.Length - 2; j >= i; j--)
                {
                    a[j + 1] = a[j];
                }
                a[i] = val;
                prinThird(a);
            }
        }
        static int thirdMax(int[] a)
        {
            long[] maxArr = { long.MinValue, long.MinValue, long.MinValue };
            for (int i = 0; i < a.Length; i++)
                insert(maxArr, a[i]);

            if (maxArr[2] == long.MinValue)
                return (int)maxArr[0];
            return (int)maxArr[2];
        }

        static void insertMin(long[] a, int val)
        {
            int i = 0;
            while (i < a.Length)
            {
                if (a[i] == val)
                    return;
                else if (val < a[i])
                    break;
                else
                    i++;
            }
            if (i < a.Length)
            {
                for (int j = 0; j >= i; j--)
                {
                    a[j + 1] = a[j];
                }
                a[i] = val;
                prinThird(a);
            }

        }
        static int thirdMin(int[] a)
        {
            long[] minArr = { long.MaxValue, long.MaxValue, long.MaxValue };
            for (int i = 0; i < a.Length; i++)
            {
                insertMin(minArr, a[i]);
            }
            if (minArr[2] == long.MaxValue)
                return (int)minArr[0];
            return (int)minArr[3];
        }
        // Find disappeared in an Array
        static void findDisappearNumbers(int[] a)
        {
            bool[] exits = new bool[a.Length + 1];
            for (int i = 0; i < a.Length; i++)
            {
                exits[a[i]] = true;
            }

            for (int i = 1; i <= a.Length; i++)
            {
                if (exits[i] == false)
                {
                    Console.Write(" " + i);
                }
            }
        }

        static void countAppear(int[] a)
        {
            int[] exits = new int[a.Length + 1];
            for (int i = 0; i < a.Length; i++)
            {
                exits[a[i]]++;
            }
            for (int i = 0; i < a.Length; i++)
            {
                if (exits[i] > 0)
                {
                    Console.WriteLine("Gia tri {0} xuat hien {1} lan ", i, exits[i]);
                }
            }
        }
        // Singe Number

        static int[] merge(int[] a1, int[] a2)
        {
            int n = a1.Length + a2.Length;
            int[] result = new int[n];
            int i = 0, i1 = 0, i2 = 0;

            while (i < n)
            {
                if (i1 < a1.Length && i2 < a2.Length) // a1, a2 != rong;
                {
                    if (a1[i1] <= a2[i2])
                    {
                        result[i] = a1[i1];
                        i++; i1++;
                    }
                    else
                    {
                        result[i] = a2[i2];
                        i++; i2++;
                    }
                }
                else //a1 hoac a2 rong
                {
                    if (i1 < a1.Length) //a1 != rong
                    {
                        result[i] = a1[i1];
                        i++; i1++;
                    }
                    else //a2 != rong
                    {
                        result[i] = a2[i2];
                        i++; i2++;
                    }
                }

            }
            return result;
        }

        static int[] mergeSort(int[] a, int L, int R)
        {
            if (L > R)
                return new int[0];
            if (L == R)
            {
                int[] singlelElement = { a[L] };
                return singlelElement;
            }

            //Chia ra
            Console.WriteLine("Chia: " + L + "--" + R);
            int k = (L + R) / 2;
            int[] a1 = mergeSort(a, L, k);
            int[] a2 = mergeSort(a, k + 1, R);

            //Trộn: a1, a2 là các mảng đã được sắp xếp

            int[] result = merge(a1, a2);
            return result;
        }

        static int[] merge2(int[] a1, int[] a2)
        {
            int n = a1.Length + a2.Length;
            int[] result = new int[n];
            int i = 0, i1 = 0, i2 = 0;

            while (i < n)
            {
                // trường hợp 2 mảng đều có phần tử
                if (i1 < a1.Length && i2 < a2.Length)
                {
                    if (a1[i1] <= a2[i2])
                    {
                        result[i] = a1[i1];
                        i++; i1++;
                    }
                    else
                    {
                        result[i] = a2[i2];
                        i++; i2++;
                    }
                }
                else // Truong hop a1 rong hoac a2 rong
                {
                    // truong hop a2 != rong
                    if (i1 < a1.Length)
                    {
                        result[i] = a1[i1];
                        i++; i1++;
                    }
                    else // truong hop a2 != rong
                    {
                        result[i] = a2[i2];
                        i++; i2++;
                    }
                }
            }

            return result;
        }

        static int[] mergeSort2(int[] a, int L, int R)
        {
            if (L > R)
                return new int[0];
            if (L == R)
            {
                int[] singleElement = { a[L] };
                return singleElement;
            }

            int n = a.Length;
            int k = (L + R) / 2;

            int[] a1 = mergeSort2(a, L, k);
            int[] a2 = mergeSort2(a, k + 1, R);

            int[] result = merge2(a1, a2);

            return result;
        }

        static void SortArray(int[] nums)
        {
            printArr(mergeSort2(nums, 0, nums.Length));
        }

        static void printArr(int[] a)
        {
            for (int i = 0; i < a.Length; i++)
            {
                Console.Write(a[i] + " ");
            }
        }

        static void QuickSort(int[] a, int L, int R)
        {
            int iR, iL, key;
            key = a[(L + R) / 2];
            iR = R; iL = L;

            do
            {
                while (a[iR] > key)
                    iR--;
                while (a[iL] < key)
                    iL++;

                if (iL <= iR)
                {
                    int temp = a[iL];
                    a[iL] = a[iR];
                    a[iR] = temp;
                    iR--; iL++;
                }


            } while (iL < iR);

            if (L < iR)
                QuickSort(a, L, iR);
            if (R > iL)
                QuickSort(a, iL, R);
        }

        static void QuickSort(int[] a)
        {
            QuickSort(a, 0, a.Length - 1);
        }
        

        static void QuickSort2(int[] a, int left, int right)
        {
            int n = a.Length;
            int iR, iL, key;
            key = a[(left + right) / 2];
            iR = right; iL = left;
            do
            {
                while (a[iL] < key) iL++;
                while (a[iR] > key) iR--;

                if(iL < iR)
                {
                    int temp = a[iL];
                    a[iL] = a[iR];
                    a[iR] = a[iL];
                    iR--; iL++;
                }

            } while (iL <= iR);
            if (left < iR)
                QuickSort2(a, left, iR);
            if (right > iL)
                QuickSort2(a, iL, right);
        }

        static void QuickSort2(int[] a)
        {
            QuickSort(a, 0, a.Length - 1);
        }

            static void Main(string[] args)
            {
                int[] a1 = { 1, 3, 5, 7, 9 };
                int[] a2 = { 2, 3, 6, 8, 10 };
                int[] c = { 1, 5, 3, 2, 8, 7, 6, 4, 10, 9 };
            //int[] noi = merge2(a1, a2);
            //int[] merge_sort = mergeSort2(c, 0, c.Length - 1);
            QuickSort(c);
                printArr(c);

            }
        }
    }

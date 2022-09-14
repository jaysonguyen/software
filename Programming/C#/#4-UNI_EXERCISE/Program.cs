using System;
using System.Linq;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            // trong mot cuôc thi có quy tắc như sau
            //
            // "thí sinh có số điểm bằng hoặc lớn hơn người ở vị trí thứ k sẽ được vào vòng tiếp theo
            // Tổng cộng có n người tham gia cuộc thi(n>= k) và bạn biết tất cả điểm của họ
            // hãy tính toán có bao nhiêu người sẽ tham gia vòng tiếp theo
           /* string[] token = Console.ReadLine().Split();
            int n = int.Parse(token[0]);
            int k = int.Parse(token[1]);
            int[] point_of_people = new int[n];
            int count = 0;
            string[] token2 = Console.ReadLine().Split();
            for (int i = 0; i < point_of_people.Length; i++) 
            {
                point_of_people[i] = int.Parse(token2[i]);

            }           
            for(int i = 0; i < point_of_people.Length; i++)
            {
               if(i == k)
                {
                    for(int j = 0; j < point_of_people.Length; j++)
                    {
                        if (point_of_people[j] >= point_of_people[i])
                            count = count + 1;
                    }
                }
            }
            Console.Write(count);

            //  quảng trường thủ dô có hình chữ nhật với kích thướng nXm mét.
            // nhân dịp kỹ niệm thành phố, một quyết định đã được đưa ra Quảng trường những viên đá granit vuông
            // mỗi vien đá đó có kích thướng axa
            // Hỏi cần bao nhiêu viên đá để lấp đầy quảng trường đó được phép che phủ lớn hơn bề mặt nhà hát. không 
            // được phép phá vỡ các viên gạch các viên gạch phải song song với cạnh cảu quảng trường
            // INPUT : đầu vào chứa 3 số nguyên tương đương với m,n,a

            int n = int.Parse(Console.ReadLine());
            int m = int.Parse(Console.ReadLine());
            int a = int.Parse(Console.ReadLine());
            int square = m * n;
            int square_a = a * a;
            int sum = 0;
            int count = 0;
            while(sum < square)
            {
                sum = sum + square_a;
                count = count + 1;
               
            }
            Console.Write(count);*/
           





        }
    }
}

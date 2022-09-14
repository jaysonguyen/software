
public class __1295__Find__Numbers__with {
    public static int findNumbers(int [] nums) {
        int count = 0;
        for(int a : nums) {
            //kiem tra so chu so cua a
            // neu la chan => tang bien dem len 1
            int numberOfVar = countNumberofVar(a);
            if(numberOfVar % 2 == 0) {
                count++;
            }
        }
        return count;
    }
     private static int countNumberofVar(int a) {
         int count = 0;
         int result = a;
         while(result != 0){
             result = a / 10;
             a = result;
             count++;
         }
        return count;
    }

    public static void main(String[] args) {
        int [] nums = {1, 2, 444, 1, 123, 423, 12312, 123123};
        System.out.println(findNumbers(nums));
    }
}

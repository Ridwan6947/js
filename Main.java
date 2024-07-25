import java.util.*;

public class Main{
    public static void main(String[] args){
        int[] arr = {2,7,11,15};
        int target = 9;
        int ans[] = new int[2];
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int i = 0 ; i < arr.length ; i++){
            if(!map.containsKey(target - arr[i])){
                map.put(arr[i],i);
            }else{
                ans[0] = map.get(target - arr[i]);
                ans[1] = i;
                break;
            }
        }
        System.out.println(ans[0] + " " + ans[1]);
    }
}
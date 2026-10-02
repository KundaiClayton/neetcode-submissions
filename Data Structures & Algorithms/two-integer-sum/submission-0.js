class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsLength= nums.length;
        for(let i=0;i<numsLength;i++){
            for(let j=i+1;j<numsLength;j++){
                if(nums[i]+nums[j]==target){
                    return [i,j]
                    
                }
            }
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
     const nums_set=new Set(nums)
    //  nums_set.size < nums.length-1 ? true : false
    if(nums_set.size< nums.length){
        return true
    }
    return false
    }
}

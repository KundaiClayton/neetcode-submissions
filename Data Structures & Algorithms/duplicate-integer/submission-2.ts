class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
     const nums_set=new Set(nums)
     return nums_set.size < nums.length ? true : false
    
    }
}

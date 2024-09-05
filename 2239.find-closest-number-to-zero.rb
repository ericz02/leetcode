# https://leetcode.com/problems/find-closest-number-to-zero/

# @param {Integer[]} nums
# @return {Integer}
def find_closest_number(nums)
    # init first element to closest
    closest = nums[0]

    # then i loop through each nums
    nums.each do |number|
        # check if num is less than first element,
        # or if the abs values are equal, it picks the positive number over a negative one in a tie
        if number.abs < closest.abs || (number.abs == closest.abs && number > closest)

            # updates closest to current number if its true
            closest = number
        end
    end

    # return closest number found
    closest
end

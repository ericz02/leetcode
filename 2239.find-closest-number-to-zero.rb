# @param {Integer[]} nums
# @return {Integer}
def find_closest_number(nums)
    closest = nums[0]

    nums.each do |number|
        if number.abs < closest.abs || (number.abs == closest.abs && number > closest)
            closest = number
        end
    end

    closest
end

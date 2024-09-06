# https://leetcode.com/problems/merge-strings-alternately/

# @param {String} word1
# @param {String} word2
# @return {String}
def merge_alternately(word1, word2)
    # create empty string to store result
    result = ""

    # find the max length between the two words
    max_length = [word1.length, word2.length].max

    # loop through from 0 to the max length
    (0..max_length).each do |i|
        # if current index is within the length of word1, add letter to result
        if i < word1.length
            result += word1[i]
        end
        # if current index is within the length of word2, add letter to result
        if i < word2.length
            result += word2[i]
        end
    end
    # return the result
    return result
end 
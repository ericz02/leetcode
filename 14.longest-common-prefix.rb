# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    # if string is empty then return ""
    return "" if strs.empty?

    # initalize empty string ans to store the common prefix
    ans = ""
    first = strs.first
    last = strs.last
    # sort the strings lexicographically
    strs.sort!

    # compare characters of the first and last string
    # we compare characters from both strings until we find a mismatch or reach the end of the shorter string
    (0...[first.length, last.length].min).each do |i|
        if first[i] != last[i]
            return ans
        end
        ans += first[i]
    end
    ans
end
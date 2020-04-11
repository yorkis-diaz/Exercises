def my_bsearch(arr, target)
    middle = (arr.length / 2)

    if (arr[middle] <=> target) == 0
        return middle
    elsif (arr[middle] <=> target) == 1
        left = arr.take(middle)
        left.my_bsearch(target)
    elsif (arr[middle] <=> target) == -1
        right = arr[middle+1..-1]
        sub_num = right.my_bsearch(target)
        sub_num + (arr[0...middle].length + 1) unless sub_num.nil?
    end
end

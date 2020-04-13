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


class Array

    def merge_sort(&prc)
        return self if self.length <= 1

        prc ||= Proc.new {|ele1, ele2| ele1 <=> ele2}
        middle = (self.length / 2)

        left = self.take(middle)
        right = self.drop(middle)

        sorted_left = left.merge_sort(&prc)
        sorted_right = right.merge_sort(&prc)

        Array.merge(sorted_left, sorted_right, &prc)
    end

 #   private
    def self.merge(left, right, &prc)
        merged_array = []

        until left.empty? || right.empty?
            if prc.call(left.first, right.first) == -1
                merged_array << left.shift
            else
                merged_array << right.shift
            end
        end

        merged_array + left + right
    end

    def my_quick_sort(&prc)
        return self if self.length <=1

        prc ||= Proc.new {|ele1, ele2| ele1 <=> ele2}

        pivot = self.first
        rest = self.drop(1)
        less_than = rest.select {|ele| prc.call(ele, pivot) == -1}
        greater = rest.select {|ele| prc.call(ele, pivot) != -1}

        sorted_left = less_than.my_quick_sort(&prc)
        sorted_right = greater.my_quick_sort(&prc)


        sorted_left + [pivot] + sorted_right
    end  
end
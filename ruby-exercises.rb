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

    def bubble_sort(&prc)
        prc ||= Proc.new {|el1, el2| el1 <=> el2}
        unsorted = self.dup

        sorted = false

        until sorted
            sorted = true
            (0...unsorted.length - 1).each do |idx|
                if prc.call(unsorted[idx], unsorted[idx+1]) == 1
                    unsorted[idx], unsorted[idx + 1] = unsorted[idx + 1], unsorted[idx]
                    sorted = false
                end
            end
        end
        unsorted
    end


    def bubble_sort!(&prc)
        prc ||= Proc.new {|el1, el2| el1 <=> el2}
        sorted = false

        until sorted
            sorted = true
            (0...self.length - 1).each do |idx|
                if prc.call(self[idx], self[idx+1]) == 1
                    self[idx], self[idx + 1] = self[idx + 1], self[idx]
                    sorted = false
                end
            end
        end
        self
    end
end

# anagram


def char_hash(str)
    count = Hash.new(0)
    str.each_char { |char| count[char] += 1 }
    count
end

def anagrams(str_1, str_2)
    char_hash(str_1) == char_hash(str_2)
end

# mys
class Array
    def my_each(&prc)
        i = 0
        while i < self.length
            prc.call(self[i])
            i+=1
        end
        self
    end

    # My Select

    # Now extend the Array class to include my_select that 
    # takes a block and returns a new array containing only elements 
    # that satisfy the block. Use your my_each method!

    def my_select(&prc)
        selected = []
        self.my_each {|ele| new_arr << n if prc.call(ele)}
        new_arr
    end

    def my_reject(&prc)
        rejected = []
        self.my_each {|ele| rejected << ele unless prc.call(ele)}
        rejected
    end

    def my_any?(&prc)
        self.my_each {|ele| return true if (prc.call(ele))}
        false
    end

    def my_all?(&prc)
        self.my_each {|ele| return false unless prc.call(ele)}
        true
    end


    # my_flatten should return all elements of the array into a new, one-dimensional 
    # array. Hint: use recursion!

    def my_flatten #[1, 2, 3, [4, [5, 6]], [[[7]], 8]].my_flatten
        # return [self] if self.is_a?(Array)
        # return self if self.length == 1

        flattened = []
        self.my_each do |sub|
            # debugger
            if sub.is_a?(Array)
                # debugger
                flattened += sub.my_flatten
            else #return base case 
                flattened << sub
            end
        end
        flattened
    end

    def my_zip(*args)
        zipped = Array.new(length) {Array.new}

        0.upto(length-1) do |i|
            zipped[i] << self[i]
            args.my_each {|arg| zipped[i] << arg[i]}
        end
        zipped
    end

    def my_rotate(default = 1)
        rotated = []
        p num = (default % self.length)

        self.my_each {|ele| rotated << ele}

        num.times do 
            first = rotated.shift
            rotated << first
        end

        rotated
    end

    def my_join(separator = "")
        joined = ""

        (0).upto(self.length-1) do |i|
            joined += self[i]
            joined += separator unless i == (self.length - 1)
        end
        joined
    end

    def my_reverse
        reversed = []
        (self.length-1).downto(0) do |i|
            reversed << self[i]
        end
        reversed
    end
end


def fibs(n)
  return [0, 1].take(n) if n <= 2

  prev_fibs = fibs(n - 1)
  last_num = (prev_fibs[-1] + prev_fibs[-2])
  prev_fibs << last_num
end


# rage recursive

def range_iterative(start, end_num)
    results = []
    (start...end_num).each {|num|results <<num}
    results
end


# exponent recursive

def exponent_1(base, pow)
    return 1 if pow == 0
    exponent_1(base, pow - 1) * base
end

def exponent_2(base, pow)
    return 1 if pow == 0

    if pow.even?
        exponent_2(base, pow / 2) ** 2
    else
        results = exponent_2(base, (pow - 1) / 2) ** 2
        base * results
    end
end

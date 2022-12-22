
"""
sum of digits of the biggest pair of integers whose sum are equal. for example 25 and 52 are one pair.
pass in an array of numbers

"""

testCase = [25, 25, 75, 57]


def pair(a):
    num = {}
    dPon = 'index'
    length = 0
    large = -1000000000
    group = []
    count = 0

    if any([r<0 for r in a]):
        return -1

    for ini, data in enumerate(a):
        num['index'+ str(ini)] = [data]


    for iod, d in enumerate(a):
        for l in str(d):
            count += int(l)
        num[dPon + str(iod)].append(count)  # append the sum of digits as second index of an array to a dictionary value
        count = 0


    for z, dup in enumerate(num):   # append the number of occurences of duplicate sums as the 3rd index of array of dictionary
        for chk in range(len(num)):
            if num[dup][1] == num[dPon + str(chk)][1]:
                try:
                    num[dup][2].append(True)
                except IndexError:
                    num[dup].append([True])


    if all([len(num[repe][2]) < 2 for repe in num]):
        return -1
    else:

        for two in num:

            if len(num[two][2]) > 1:      # length is the number elements that have duplicates
                length += 1
                if num[two][1] > large:
                    large = num[two][1]


        group = [[] for _ in range(large)]  # sum of digits stored based on sum therefore array is the size of largest
                                            #sum
        print(group)


        for two in num:
            if len(num[two][2]) > 1:
                group[num[two][1] - 1].append(num[two][0])  # Every time you get a match you append the original into the index position that is equal to the length of the sum - 1


        mp = list(filter(lambda a: len(a) != 0, group))   # filtering possible combinations

        return max(list(map(lambda s: sum(sorted(s,reverse=True)[:2]), mp)))  # calculating sum and returning biggest pair


print(pair(testCase))


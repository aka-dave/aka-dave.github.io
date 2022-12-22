import string
"""
Project

For a string S consisting of numbers and/or uppercase and lowercase letters, return the biggest substring
that is valid. A valid substring has to contain 1 uppercase letter and no numbers. If not valid, return -1.
"""
testCase = 'a7a8nQQQ'

def solution(s):



    vn = []
    sng = []
    word = ""
    count = []
    index = 0
    switch = False

    l = list(string.ascii_lowercase)
    u = list(string.ascii_uppercase)
    n = [i for i in range(10)]

    if len(s) > 200 or len(s) < 1:
        return -1
    for ch in s:
        if ch not in l and ch not in u:
            try:
                test = int(ch)
            except ValueError:
                return -1


        if ch in l or ch in u:
            sng.append(ch)
        else:
            sng.append(int(ch))


    end = len(sng)

    if all([type(num) == int for num in sng]):  # takes into account getting all numbers
        return -1
    elif any([type(num) == int for num in sng]):  # if you get at least 1 number
        for i, c in enumerate(sng):
            if type(c) == int and i == 0:  # base condition for integer
                count.append(i)
                index += 1
                continue
            if type(c) != int and i == 0:        # base condition for string
                word = word + c
                switch = True
                continue
            if type(c) != int:
                word = word + c

            if type(c) == int and switch:  # first iteration with a number
                count.append(i)
                index += 1
                vn.append(word)
                word = ""
                switch = False
                if i < end - 1:
                    continue
                else:
                    break


            if type(c) == int:
                count.append(i)
                index += 1

            if type(c) == int and (count[-1] - count[-2]) > 1:   # condition for the wall
                vn.append(word)
                word = ""
            if type(c) != int and i == end -1:   # end conditions
                vn.append(word)
        vl = list(filter(lambda a: any([up.isupper() for up in a]), vn))
        return len(sorted(vl, key=len, reverse=True)[0]) if vl != [] else -1

    else:
        for q in sng:
            if q.isupper():
                return len(sng)
        return -1

print(solution(testCase))
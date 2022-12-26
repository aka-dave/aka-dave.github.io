
"""
For a given string S, return the total amount of times that string can be divided into the word 
banana assuming that for each iteration, the word must contain the correct amount of characters
that make up the word banana
"""
from collections import Counter

testCase = 'BANANAANANAB'   # will return 2
def A(s):


    word = list("BANANA")


    w = []

    for l in s:
        if l in word:
            w.append(l)

    lh = Counter(w)



    sm = min(lh.values())
    ml = ''
    loop = 0


    count = 0
    for j in lh.keys():
        if lh[j] == sm:
            ml = j
    print(ml)


    if lh['B'] < 1 or lh['N'] < 2 or lh['A'] < 3:
        return 0
    else:
        if ml == 'B':
            loop = sm


        n1 = [_ for _ in range(1, lh['B'] + 1)]
        n2 = [_ for _ in range(2, lh['N'] + 1, 2)]
        n3 = [_ for _ in range(3, lh['A'] + 1, 3)]
        length = min(len(n1), len(n2), len(n3))
        print(n3)
        for i in range(length):
            if n1[i] == i + 1 and n2[i] == (i + 1) * 2 and n3[i] == (i + 1) * 3:
               count += 1

        return count

print(A(testCase))

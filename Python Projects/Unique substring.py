
testCase = 'Daavid'

def solution(s):

    subS = []
    word = ''
    count = 0

    for i, p in enumerate(s):
        word = s[i]
        subS.append(word)
        count += 1
        for l in range(i+1, len(s)):
            count += 1
            word += s[l]
            subS.append(word)

    return subS



print(solution(testCase))      # this is total substring count
print('total:', len(solution(testCase)))
y = set(solution(testCase))
print('Unique:',len(y))           # This is unique substring count
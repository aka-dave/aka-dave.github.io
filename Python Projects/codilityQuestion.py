
"""
Write a function that, given an array A of N integers,
returns the smallest positive integer (greater than 0) that does not occur in A.

"""

num = [-6, -6, 1, 7]


def solution(A):
    if len(A) <= 100000 and len(A) >= 1 and all([n >= -1000000 or n <= 1000000 for n in A]):
        pass
    else:
        return -1
    x = sorted(A)
    if all([item < 0 for item in x]):
        return 1

    if len(A) == 1:
        if x[0] < 1:
            return 1
        elif x[0] == 1:
            return x[0] + 1
        else:
            return 1

    if x[0] > 1:
        return 1
    for i in range(len(x) - 1):
        if (x[i + 1] - x[i]) > 1 and (x[i] + 1) > 0:
            if (x[i] + 1) == 1:
                return 1
            elif x[i] + 1 > 0:
                if 1 not in x:
                    return 1

                else:
                    if x[i] + 1 not in x:
                        return x[i] + 1

        if (x[i + 1] - x[i]) > 1 and (x[i] + 1) < 0:
            if 1 not in x:
                return 1

    if all([(x[i + 1] - x[i]) == 1 for i in range(len(x) - 1)]):
        if x[-1] + 1 > 0:
            return x[-1] + 1
        else:
            return 1
    else:
        return -1


print(solution(num))



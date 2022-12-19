
def sorting(x):



    count = 0
    min_index = [0]                       # Assigns the first value of the array as the min index
    for i in range(len(x) - 1):
        for c in range(count, len(x)):
             if x[c] < x[min_index[-1]]:  # checks the entire array to see if anything is smaller
                min_index.append(c)       # every time something is, appends the index to the end

        x[i], x[min_index[-1]] = x[min_index[-1]], x[i]  # peforms the swap
        count += 1                   # the previous index is already sorted so we can omit that and focus on every other element
        min_index[-1] = i + 1    # this points to the next element in the list, assigns it as the min index and repeats the same process



    return x

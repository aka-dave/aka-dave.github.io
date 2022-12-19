def g(arr, acc, j=[]):         #acc is changing in every state
        j = j + [1]                # keeping track of the states
        if len(j) > len(arr):
            print(acc)
            return acc            # exiting recursion state
        val = arr[len(j)-1]       # accessing the next element in the array within the state
        acc = g(arr, acc + val,j)  # cycling through the states.
                                    # the second argument in the call back could be min(acc+val) for a similar effect


        return acc

# Pass in an array as first parameter and initial value as the second


"""

Build a cache system that ensures every entry is unique. It will take multiple inputs such as 'add', 'get', 'has',
'remove', 'reset'. These will be functions. Each line of input will be separated by a pipe symbol in such a way
where it performs that operation to the cache system.

"""


class Cache:
    def __init__(self):

        self.names = {}

    def check(self, word):
        if '|' in word:
            func, string = word.split('|')
            if func == 'Add' or func == 'add':
                return c.Add(string)
            elif func == 'Get' or func == 'get':
                return c.Get(string)
            elif func == 'Has' or func == 'has':
                return c.Has(string)
            elif func == 'Remove' or func == 'remove':
                return c.Remove(string)
            else:
                return - 1
        elif word == 'Reset' or word == 'reset':
            return c.Reset()
        else:
            return - 1

    def Add(self, word1):
        if word1 in self.names:
            return False
        self.names[word1] = True
        return True


    def Get(self, word2):
        if word2 in self.names:
            return word2
        return 'NULL'

    def Has(self, word3):
        if word3 in self.names:
            return True
        return False

    def Remove(self, word4):
        if word4 not in self.names:
            return False
        del self.names[word4]
        return True

    def Reset(self, ln=[]):
        ln.append(len(self.names))
        self.names = {}
        return ln[-1]


c = Cache()
while True:
    try:
        print(c.check(input()))
    except EOFError:
        break









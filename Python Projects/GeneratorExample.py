import random
"""
For each name passed in, it assigns a unique  major to that student.
 Two students cannot have the same major

"""
names2 = []
majors2 = ['Math', 'Engineering', 'CompSci', 'Art', 'History']

x = int(input('how many students from 1 to 5: '))

def addN(nom):

    for s in range(nom):
        names2.append(input('type in a name: ').lower())
    lk = hjk(nom)
    for c in lk:
        print(c)


def hjk(num):
    for h in range(num):
        if names2 != list():
            person = {
                'id': h,
                'name': random.choice(names2),
                'major': random.choice(majors2)
            }
            for i, d in enumerate(person.values()):
                if d in names2:
                    yield person
                    names2.remove(person['name'])
                    majors2.remove(person['major'])
        else:
            break

if __name__ == '__main__':
    addN(x)



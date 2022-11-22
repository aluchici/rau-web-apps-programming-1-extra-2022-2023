a = 10
b = 40
c = 52.4
d = "This is a string"
e = 'This is another string'
f = """This is a multiline
string
"""
# `string ${variabila}`
g = f"This is a string with a variable value {a}"

print(g)

h = g.upper()
print(h)

l1 = [1, 2, 3, 4, "a", "b", [1, 2, 3]]
l1[1] = "c"
print(l1[1])
print(l1[3:6])

l1[1:3] = [1, 2]
print(l1)

l1.append("c")
print(l1)

l1.extend([1, 2, 3, 4])
print(l1)

l1.remove('c')
print(l1)

last_element = l1.pop()
print(last_element, l1)

l2 = [10, 1, 2, 3, 4]
l2.sort()
print(l2)

print(sorted(l2, reverse=True))
print(l2)

t1 = (1, 2, 3, ["1", "2"], "c")
# t1[0] = 10
print(t1[0])

t1[3][0] = 10
print(t1)

l3 = [1, 2, 1, 1, 1, 4]
s1 = set(l3)
l4 = list(s1)
print(l4)

d1 = {
    "name": "RAU",
    "type": "Univ",
    "addr": {
        "street": "Expo",
        "number": "1B",
        "postcode": "011111"
    },
    "students": [
        {
            "name": "Student 1",
            "year": 2022
        },
        {
            "name": "Student 2",
            "year": 2022
        }
    ]
}
d1["name"] = "URA"
print(d1["name"])

d1["students"][0]["year"] = 2021
print(d1["students"][0])
print(d1["students"])
print(d1)

print(list(d1.keys()))
print(list(d1.values()))
print(list(d1.items()))
print(d1.get(1, "Valoarea default"))

# JS
# if (a > 10) {
#   cod
# }

# and, or, not
if a > 10 and b == 20:
    print("A greater than 10")
elif a < 10 or b > 10:
    print("A less than 10")
else:
    print("A is equal to 10")

# for (const el of elements) (JS)
for el in l2:
    print(el)

# for (let i = 0; i < N; i++) (JS)
elements = range(10)
for i in elements:
    if i % 2 == 0:
        print(i, "even")
    else:
        print(i, "odd")

while a > 0:
    print(a)
    a = a - 1


def numele_functiei(param1, param2, param3, param4=10):
    print(param1, param2, param3, param4)
    return "Done"


numele_functiei(1, 2, 3)
numele_functiei(param1=1, param2=2, param3=3, param4=4)
numele_functiei(param4=1, param3=2, param1=10, param2=100)

# for your reference only
k = lambda x: x + 1


def f1(x):
    return x + 1


print(k(10))


# functie pentru a verifica daca un dictionar contine o lista de chei predefinite
def check_keys(d):
    # definesc lista de chei
    expected_keys = ["first_name", "last_name", "email", "password", "second_password"]

    # pentru fiecare cheie din lista, verifica daca se gaseste in dictionar
    existing_keys = list(d.keys())
    for key in expected_keys:
        if key not in existing_keys:
            return False

    return True

# TODO: create a function to validate an email (a&b.c)
# TODO: create a function to validate the strength password
#  (password contains special characters, upper, lower letters, etc)


request1 = {
    "first_name": "andrei",
    "last_name": "luchici",
    "email": "a@b.c"
}

request_ok = check_keys(request1)
print(request_ok)


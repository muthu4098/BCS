no_of_person = 3


if no_of_person <= 2:
    print("We will take 🛵 to the party")
else:
    print("We will take 🏎️ to the party")


if no_of_person <= 2:
    print("We will take 🛵 to the party")
elif no_of_person == 3:
    print("We will take 🛺 to the party")
else:
    print("We will take 🏎️ to the party")


# if, else - 1, elif - multiple


# Task 1.1
# Get two person name and height
# Case 1:
# Ethan, Luvuyo
# 185cm, 175cm
# Ethan is taller than Luvuyo by 10cm

f_person=input("Enter the name first")
f_height=float(input("Enter the height"))
s_person=input("Enter the name second")
s_height=float(input("Enter the height"))


if f_person>s_person:
    print()

# Case 2:
# Ethan, Luvuyo
# 185cm, 194cm
# Luvuyo is taller than Ethan by 9cm


# Task 1.2
# Case 3:
# Ethan, Luvuyo
# 185cm, 185cm
# Ethan and Luvuyo are of the same height


# Task 1.1 (use type conversion)
# Tell me your name?: Latha
# Tell me your birth year?: 2000
# Hi, Latha you are 25 years old

# name = input("Tell me your name?: ")
# birth_year = int(input("Tell me your birth year?: "))
# age  = 2025 - birth_year
# print("Hi, " + name +  " you are " + str(age) +" years old")

# # Task 1.2 (use type conversion & f-string)
# print(f"Hi, {name} you are {age} years old")


# Clue: Type conversions
# Task 1.3
# Output
# Please provide your Fahrenheit: 98.6
# The 98.6°F is 37°C
# (32°F − 32) × 5/9

fahrenheit = float(input("Please provide your Fahrenheit: "))
celsius = (fahrenheit - 32) * 5/9
print(f"The {fahrenheit}°F is {celsius}°C")

# °F to °C


# REPL
# Read
# Evaluate
# Print
# Loop
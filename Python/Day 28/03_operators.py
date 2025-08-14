
# Task 2.1
# Output (Assume PI - 3.14)
# Provide the radius of the circle: 4.2
# Area of circle is 55.3896

# PI = 3.14 # CONSTANT_CASE
# radius = float(input("Provide the radius of the circle: "))
# area = PI * radius ** 2
# print(f"Area of circle is {area}")

# c = 10
# c = 20
# No Error - only overrides 

# Task 2.2
# Task: Build a loader
# Input: 70
# Output: [======= ] 70%

# Input: 23
# Output: [==      ] 23%

percentage = int(input("Input: ")) # 23
loader = percentage // 10 # 2
loader_symbols = "=" * loader
remaining_symbols = " " * (10 - loader)

print(f"Output: [{loader_symbols}{remaining_symbols}] {percentage}%")
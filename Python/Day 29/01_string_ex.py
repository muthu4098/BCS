secret_message = "   Programming in Python is not only powerful but also fun!   "


# Task 1.1
# Expected Output
# "PYTHON-POWERFUL"

# trim_message=secret_message.strip().upper()
# first_word= trim_message.find("PYTHON")
# second_word=trim_message.find("POWERFUL")
# print(f"{first_word}-{second_word}")

# Task 1.2
flipped_message = "!nuf sseldnE dna seitinutroppo lufrewop htiw nohtyP"

smart=flipped_message[-1::-1].lower()
print(smart)
print(smart.find("python"))
print(smart.find("powerful"))

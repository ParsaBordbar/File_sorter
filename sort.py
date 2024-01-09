import os
import re

def rename(old_name, new_name):
    os.rename(old_name, new_name)

def sort_files(files_list, correct_list):
    for i, file in enumerate(files_list):
        if file[:-4] == correct_list[i]:
            new_name = f"{i}_{file}"
            rename(file, new_name)
            print(f"Renamed file: {file} -> {new_name}")

#list of files
files_list = os.listdir()

#list of correct names
correct_list = ["Welcome", "What is Node", "Node Architecture", "How Node Works", "Installing Node", "Your First Node Program", "Course Structure", "Recap", "Follow Me Around", "Learning Paths"]

sort_files(files_list, correct_list)
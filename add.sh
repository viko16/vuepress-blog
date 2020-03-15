# !/bin/bash

# wait for user input
read -p "Enter post title: " title

# variables
filename="./posts/$title.md"

# output
echo "---\ntitle: $title\n---\n" > $filename
echo "created $filename"

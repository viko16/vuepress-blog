# !/bin/bash

# wait for user input
read -p "Enter post title: " title

# variables
now=$(date "+%Y-%m-%d")
filename="./posts/$title.md"

# output
echo "---\ntitle: $title\ndate: $now\n---\n" > $filename
echo "created $filename"

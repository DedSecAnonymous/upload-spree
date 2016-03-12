#!/bin/bash

# [arg 1] is input file, complete path
# [arg 2] is output dir, complete path

echo 'input: ' $1
echo 'out dir: ' $2

var1 = $1
var2 = $2

# process your file here and do anything using linux libraries. Sky is the limit
mv var1 var2 
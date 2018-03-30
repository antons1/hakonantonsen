#!/bin/bash

dirname=app/components/$1s/$2

mkdir $dirname
printf "import React from 'react';\nimport './$2.less';\n\nconst $2 = (props) =>\n\t<div></div>;\n\nexport default $2;" > $dirname/$2.jsx
printf "@import 'app/components/common-style-variables.less';\n" > $dirname/$2.less
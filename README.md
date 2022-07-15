# 50daysChallenge
50 projects in 50 days

Project 1 - Expanding cards

Used:
es6 module
webpack
    - Terser for js minify
    - MiniCssExtractPlugin to extract the css imported in js files and put it in one css file
    - HtmlWebpackPlugin to generate a html file from the outputs(js and css)

Folder structure:
    src 
        app  - app layer
        base - base layer
    demo - for playground

Steps to run expand card:
    go to ExpandingCards folder in terminal
    run - npm install and then npm run build
        After this you will get a output html (index.html) file in demo folder


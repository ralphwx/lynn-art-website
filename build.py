
#First argument should be path to the js file assuming src/ folder is home
# eg "frontend/game.js", second argument should be desired destination path
# within main, eg, "game"

import os
import sys

l = len(sys.argv)
if l > 3 or l < 2:
    print("Usage: python3 build.py [src] [dest]")
    exit()

if "main" not in os.listdir("."): os.mkdir("main")

outdir = ""
if l == 3:
    outdir = sys.argv[2]
    if outdir not in os.listdir("main/"): os.mkdir("main/" + outdir)
    outdir += "/"

#Write the appropriate index.js file, then run build
with open("./src/index.js", "w") as f:
    f.write("import \"./" + sys.argv[1] + "\";")

exit_code = os.system("npm run build")
print("Exit code: ", exit_code)
if exit_code != 0: exit(1)

#Fix js and css path in index.html
with open("./build/index.html") as f:
    original_html = f.read()

new_html = original_html.replace("/static", "./static")
with open("./build/index.html", "w") as f:
    f.write(new_html)

os.system("mv ./build/static/media/* ./docs/static/media/")
os.system("mkdir -p ./docs/" + outdir)
os.system("cp -r ./build/* ./docs/" + outdir)

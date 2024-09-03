
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

##Fix media path in the js file
#js_dir = "./build/static/js/"
#files = os.listdir(js_dir)
#jsfiles = [file for file in files if file[-3:] == ".js"]
#cwd = os.getcwd()
#if cwd[0] == "/": cwd = cwd[1:]
#media_path = cwd + "/main/" + outdir
#if media_path[-1] != "/": media_path += "/"
#media_path += "static/media"
#print(media_path)
#for jsfile in jsfiles:
#    with open(js_dir + jsfile) as f:
#        original_js = f.read()
#    new_js = original_js.replace("static/media", media_path)
#    with open(js_dir + jsfile, "w") as f:
#        f.write(new_js)

#Fix js and css path in index.html
with open("./build/index.html") as f:
    original_html = f.read()

new_html = original_html.replace("/static", "./static")
with open("./build/index.html", "w") as f:
    f.write(new_html)

static_path = "./main/" + outdir
if static_path[-1] != "/": static_path += "/"
static_path += "static"

#os.system("rm -r " + static_path)
os.system("mv ./build/static/media/* ./main/static/media/")
os.system("cp -r ./build/* ./main/" + outdir)

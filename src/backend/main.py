
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

from galleryParser import parse

@app.get("/gallery")
def get_gallery(number: int = 0):
    galleries = parse("./galleries.txt")
    if number < 0 or number >= len(galleries):
        return {"name": "404 Not found", "left": [], "center": [], "right": []}
    return galleries[number]

@app.get("/all_galleries")
def get_all_galleries():
    galleries = parse("./galleries.txt")
    output = []
    for gallery in galleries:
        output.append(gallery["name"])
    return output

app.mount("/", StaticFiles(directory="../../main/", html=True))

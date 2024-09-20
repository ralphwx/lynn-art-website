

def has_prefix(line, prefix):
    return len(line) >= len(prefix) and line[0:len(prefix)] == prefix

#Takes a gallery description file and converts it into a stream of tokens.
# Each token is a 4-tuple (type, line, value1, value2). The valid types are:
#   - "GALLERY": gallery definition, with value1 = gallery title
#   - "LEFT", "CENTER", "RIGHT": descriptors for the gallery columns
#   - "LBRACK", "RBRACK": left and right brackets
#   - "DEFINE": value1 is either "src" or "title", and value2 is the src or
#     title value to be set
#   - "EOF": end of file reached

class GalleryParser:
    def __init__(self, filename):
        self.file = open(filename)
        self.buffer = None
        self.line_number = 0
    def _load_buffer(self):
        if self.buffer is not None: return
        line = self.file.readline()
        self.line_number += 1
        if len(line) == 0:
            self.buffer = ("EOF", self.line_number, None, None)
        line = line.strip()
        if len(line) == 0:
            self._load_buffer()
            return
        if has_prefix(line, "GALLERY"):
            index = line.find(":")
            if index == -1: 
                raise Exception("Missing colon (:) on line " + 
                  str(self.line_number))
            gallery_name = line[index + 1:].strip()
            self.buffer = ("GALLERY", self.line_number, gallery_name, None)
            return
        if has_prefix(line, "LEFT"):
            self.buffer = ("LEFT", self.line_number, None, None)
            return
        if has_prefix(line, "RIGHT"):
            self.buffer = ("RIGHT", self.line_number, None, None)
            return
        if has_prefix(line, "CENTER"):
            self.buffer = ("CENTER", self.line_number, None, None)
            return
        if has_prefix(line, "{"):
            self.buffer = ("LBRACK", self.line_number, None, None)
            return
        if has_prefix(line, "}"):
            self.buffer = ("RBRACK", self.line_number, None, None)
            return
        if has_prefix(line, "src"):
            index = line.find(":")
            if index == -1:
                raise Exception("Missing colon on line " + 
                  str(self.line_number))
            source = line[index + 1:].strip()
            self.buffer = ("DEFINE", self.line_number, "src", source)
            return
        if has_prefix(line, "title"):
            index = line.find(":")
            if index == -1:
                raise Exception("Missing colon on line " + 
                  str(self.line_number))
            title = line[index + 1:].strip()
            self.buffer = ("DEFINE", self.line_number, "title", title)
            return
        raise Exception("Syntax error on line " + str(self.line_number))
    def next(self):
        self._load_buffer()
        output = self.buffer
        if self.buffer[0] != "EOF":
            self.buffer = None
        else: self.close()
        return output
    def peek(self):
        self._load_buffer()
        return self.buffer
    def close(self):
        self.file.close()

#Output is a list of galleries; each gallery has the structure
# {
#     name,
#     left: list of src, title objects
#     center: list of src, title objects
#     right: list of src, title objects
# }
def parse(filename):
    parser = GalleryParser(filename)
    output = []
    while parser.peek()[0] != "EOF":
        output.append(parse_gallery(parser))
    return output

def parse_gallery(parser):
    gallery_definition = parser.next()
    if gallery_definition[0] != "GALLERY":
        raise Exception(f"Line {gallery_definition[1]}: Expected GALLERY definition")
    name = gallery_definition[2]
    left = parse_column(parser, "LEFT")
    center = parse_column(parser, "CENTER")
    right = parse_column(parser, "RIGHT")
    return {
        "name": name,
        "left": left,
        "center": center,
        "right": right,
    }

def parse_column(parser, column):
    start_token = parser.next()
    if start_token[0] != column:
        raise Exception(f"Line {start_token[1]}: Expected {column}")
    output = []
    while parser.peek()[0] == "LBRACK":
        output.append(parse_image(parser))
    return output

def parse_image(parser):
    lbrack_token = parser.next()
    if lbrack_token[0] != "LBRACK":
        raise Exception(f"Line {lbrack_token[1]}: Expected '{{'")
    source_token = parser.next()
    if source_token[0] != "DEFINE" or source_token[2] != "src":
        raise Exception(f"Line {source_token[1]}: Expected src definition")
    title_token = parser.next()
    if title_token[0] != "DEFINE" or title_token[2] != "title":
        raise Exception(f"Line {title_token[1]}: Expected title definition")
    rbrack_token = parser.next()
    if rbrack_token[0] != "RBRACK":
        raise Exception(f"Line {rbrack_token[1]}: Expected '}}'")
    return {
        "src": source_token[3],
        "title": title_token[3],
    }

print(parse("./galleries.txt"))


def parse(eventsFile):
    output = []
    with open(eventsFile) as f:
        while True:
            line = f.readline()
            if len(line) == 0: break
            if line.isspace(): continue
            output.append(line)
    return output

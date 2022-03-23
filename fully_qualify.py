import pathlib
import re

for file in pathlib.Path('core').rglob('*.js'):
  imports = {}
  with open(file, 'r+') as f:
    for line in f:
      # module = re.match(r"goog\.module\('(.+)'\);", line)
      # if module:
      #   imports[module.group(1).split('.')[-1]] = module.group(1)
      match = re.match(r"const {([\w, :]+)} = goog.require(Type)?\('(.+)'\);", line)
      if match:
        names = match.group(1).split(', ')
        for name in names:
          if ':' in name:
            imports[name.split(': ')[1]] = match.group(3)
          else:
            imports[name] = match.group(3)
    if len(imports):
      f.seek(0)
      contents = f.read()
      all_imports = list(imports.items())
      all_imports.sort(key = lambda i: len(i[0])) 
      for find, replace in all_imports:
        contents = re.sub('^(.*@.*{{.*){}([\.=,>|)}}].*)$'.format(find), r'\1{}\2'.format(replace), contents, flags=re.MULTILINE)
      f.seek(0)
      f.truncate()
      f.write(contents)
      f.flush()

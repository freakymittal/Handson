import re
url = "hrefdata.php"
file_object  = open("./hrefdata.php", 'r')
data = ""
p = re.compile('.*prods.php\?categ=(.*)\&subcateg=(.*)\"')
for line in file_object:
	m = p.match(line)
	if m:
		data = data + "array(\"" + m.group(1) + "\", \"" + m.group(2) + "\")" + "\n" 
print(data)
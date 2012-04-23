#!/local/usr/bin/python

import os, cgi, tempfile

print "Content-Type: text/plain"
print

form = cgi.FieldStorage()

instruction_set = None
assembler = None
source = None
assembly = None

try:
	instruction_set = form["instructions"].value
	source = form["source"].value

	if instruction_set == "68HC11":
		assembler = "asm11"

except KeyError:
	pass	

if assembler and source:
	source_file = tempfile.NamedTemporaryFile(suffix=".asm")
	source_file.write(source)
	source_file.seek(0)

	x = os.popen("./%s %s" % (assembler, source_file.name))
	
	# Yes, this is needed
	x.read()
	
	assembly_file = os.path.splitext(source_file.name)[0] + ".s19"
	assembly = open(assembly_file)	

if source and False:
	print source
	print

if assembly:
	print assembly.read()

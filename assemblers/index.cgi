#!/local/usr/bin/python

import os, cgi, tempfile

print "Content-Type: spplication/json"
print

form = cgi.FieldStorage()

instruction_set = None
assembler = None
source = None

assembly = None
listing = None
error = None

try:
	instruction_set = form["instructions"].value
	source = form["source"].value

	if instruction_set == "68HC11":
		assembler = "asm11 -E"

except KeyError:
	pass


if assembler and source:
	source_file = tempfile.NamedTemporaryFile(suffix=".asm")
	source_name = os.path.split(source_file.name)[-1]
	source_name = source_name[:source_name.index('.')]

	source_file.write(source)
	source_file.seek(0)

	x = os.popen("./%s %s" % (assembler, source_file.name))
	
	error = x.read()
	
	try:
		error_file = os.path.splitext(source_file.name)[0] + ".err"
		error = open(error_file).read().replace('"', "'").replace(source_name, 'source')
	except IOError:
		error = None

	try:
		assembly_file = os.path.splitext(source_file.name)[0] + ".s19"
		assembly = open(assembly_file).read()
	except IOError:
		assembly = None
		
	try:
		listing_file = os.path.splitext(source_file.name)[0] + ".lst"
		listing = open(listing_file)
		listing = "".join(listing.readlines()[2:-1])
	except IOError:
		listing = None
	
	
results = {}

if source and False:
	print source
	print

if assembly:
	results["assembly"] = assembly
	
if listing:
	results["listing"] = listing

if error:
	results["error"] = error

# Dictionary should be converted to json then printed
# we should use an actual json library for this
print "{",
print ','.join(['"'+r+'": '+'"'+repr(results[r])[1:-1]+'"' for r in results]),
print "}"

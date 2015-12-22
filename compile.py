# WARNING :
# install handlebars first (same version as used in js file)
# sudo npm install handlebars@2.0.0 -g
# (you will need nmp (node) to be installed first
#
# use this script like this :
# python compile.py
#
# it will build every files ending with .handlebars in the templates directory.
# if a directory is found, templates inside this directory will be compiled and concatened into a file with the folder's name
#

import os
from os.path import basename

destPath = os.path.join(os.path.normpath(os.path.abspath(os.path.dirname(__file__))),"tpl","comp")
templates_folder = os.path.join(os.path.normpath(os.path.abspath(os.path.dirname(__file__))),"tpl","src")
os.chdir(templates_folder)

print "starting"

for file in os.listdir(templates_folder):

    if os.path.isdir(file):
        folder = file
        print "\ncompiling folder %s templates" % folder
        print "---creating new file."
        os.system('echo "" > {destPath}/{folder}.js'.format(folder=folder, destPath=destPath))

        os.chdir(folder)
        for subfile in os.listdir(os.path.join(templates_folder,folder)):
            if subfile.endswith(".handlebars"):
                print "---Compiling file %s and adding it into created file" % subfile
                os.system('handlebars {file} >> ../{destPath}/{folder}.js'.format(file=subfile, folder=folder, destPath=destPath))

        os.chdir(os.pardir)
        print "---All folder templates compiled."
    else :
        if file.endswith(".handlebars"):
            print "--compiling file %s" % file
            os.system('handlebars {file} > {destPath}/{destfile}.js'.format(file=file, destfile=file.replace(".handlebars",""), destPath=destPath))



print "end of script."
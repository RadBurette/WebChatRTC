#MakeFile to build and deploy the Sample US CENSUS Name Data using ajax
# For CSC3004 Software Development

user = team1

all:  PutHTML PutCGI

PutCGI:
	chmod 757 webchat.py
	cp webchat.py /usr/lib/cgi-bin/$(user)_webchat.py

	echo "Current contents of your cgi-bin directory: "
	ls -l /usr/lib/cgi-bin/

PutHTML:
	cp webchat.html /var/www/html/class/softdev/$(user)
	cp webchat.css /var/www/html/class/softdev/$(user)
	cp webchat.js /var/www/html/class/softdev/$(user)
	ls -l /var/www/html/class/softdev/$(user)
clean:
	rm -f *.o  webchat

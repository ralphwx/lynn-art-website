build: 
	python3 build.py frontend/homePage.js
	python3 build.py frontend/contactPage.js contact
	python3 build.py frontend/aboutPage.js about

.PHONY: build

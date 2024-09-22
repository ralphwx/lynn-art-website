build: 
	python3 build.py frontend/homePage.js
	python3 build.py frontend/contactPage.js contact
	python3 build.py frontend/aboutPage.js about
	python3 build.py frontend/artPage.js gallery
	python3 build.py frontend/galleriesListPage.js galleries

.PHONY: build

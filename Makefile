build: 
	mkdir -p docs
	mkdir -p docs/static
	mkdir -p docs/static/media
	python3 build.py frontend/homePage.js
	python3 build.py frontend/contactPage.js contact
	python3 build.py frontend/aboutPage.js about
	python3 build.py frontend/artPage.js gallery
	python3 build.py frontend/galleriesListPage.js galleries
	mkdir -p docs/images/
	cp -r src/backend/images/* docs/images/

.PHONY: build

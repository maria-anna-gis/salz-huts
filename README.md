# Alpenverein Huts in Salzburg State

## Overview
**Alpenverein Huts in Salzburg State** is an interactive Leaflet map. The map provides an overview of mountain huts and their categories. It is designed for English-speaking locals and tourists who are looking to explore hiking options and create rough plans of their routes.

## Target Audience
- **English speakers in Salzburg, locals and tourists alike** who are seeking refuge options on their hiking trips.

## Features
- **Interactive Map**: Displays all huts in Salzburg State which are under the management of the Alpenverein (OAV). Includes options to measure distances, go full screen, and an informative pop-up. Also includes a scale.
- **Filter Options**: Users can filter by categories of huts and change the base map to allow for more informed decision-making.
- **Map Markers**: Each location is represented by a marker that provides additional information such as the name, elevation, category and coordinates.

## Folder Structure
The map is organized with one main file and three folders for the web application as follows:

### 1. **index.html**
The HTML file provides the main content for the web application. It contains details of the layout and references all the necessary resources to allow for the successful loading of the map.

### 2. **data**
This folder contains the GeoJSON and Javascript files detailing the huts and their associated attributes.

### 3. **icons**
This folder contains the icons which are used as markers for the huts, alongside the favicon.

### 4. **plugins**
This folder contains the necessary files to load the introduction/information button and the measuring tool.

## Creation
Hut data for this map was kindly obtained from the OAV as a CSV which was subsequently cleaned and converted to a GEOJSON file. Icons were modified from those used on the OAV website.


Click [**here](https://maria-anna-gis.github.io/salz-huts/) to open the map in a new window.

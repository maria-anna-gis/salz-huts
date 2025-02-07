L.Control.InfoButton = L.Control.extend({
    options: {
        position: 'topleft',
        title:'<h1></h1>',
        linkTitle:'Info',
        html: '<p> Explore the locations of huts and roughly plan routes. Utilise the layers in the top right corner of the screen to customise the data which is visible. Huts are grouped according to the following categories.</p><p> <b>Category 1:</b> Typically have simple furnishings and, in the case of staffed huts, simple food. They are found in areas of importance for mountaineering and are typically over one hours walk from the nearest base.</p><p> <b>Category 2:</b> In frequently visited areas with better facilities and food compared to Category 1. These are suitable for stays of several days and holidays, typically open all year round.</p><p> <b>Category 3: </b> Accessible mechanically, mainly intended for day visits with typically only a small number of overnight stays.</p><p> <b>Bivouac:</b> A basic prefabricated shelter. They are usually located in remote locations.</p><p><b>Shelter:</b> Basic structure, not intended for overnight stays.</p><p><b>Youth hostel: </b> A base for young people for outdoor activities.</p><p>To learn more about the Alpenverein, visit their website <b><a href="https://www.alpenverein.at">here!</a> Click outside this box to explore the map. </b></p>',
        show: true
    },

    onAdd: function (map) {
        this.container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

        this.link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-info-button', this.container);
        this.link.href = '#';
        this.link.title = this.options.linkTitle;
        this.link.innerHTML = "?";
        L.DomEvent.on(this.link, 'click', this._click, this);


        this.infoWindowContainer = L.DomUtil.create('div', 'leaflet-infoWindow-container', this._map._container);
        this.infoWindowBlack = L.DomUtil.create('div', 'leaflet-infoWindow-black', this.infoWindowContainer);
        this.infoWindow = L.DomUtil.create('div', 'leaflet-infoWindow', this.infoWindowContainer);

        L.DomEvent.on(this.infoWindowContainer, 'click', this._click, this);
        L.DomEvent.on(this.infoWindow, 'click', this._stopClick, this);
        this.title = L.DomUtil.create('div', 'leaflet-title', this.infoWindow);
        this.title.innerHTML = this.options.title;
        this.content = L.DomUtil.create('div', 'leaflet-content', this.infoWindow);
        this.content.innerHTML = this.options.html;
        L.DomEvent.disableClickPropagation(this.infoWindow);
        L.DomEvent.disableClickPropagation(this.infoWindow);
        if (this.options.show) this._showInfo();
        return this.container;
    },
    _stopClick: function(e) {
        L.DomEvent.stopPropagation(e);
    },

    _click: function (e) {
        if (this.options.show == true) {
            this._hideInfo();
        } else {
            this._showInfo();
        }
    },
    _showInfo: function () {
        this.infoWindowContainer.style.display ="block";

        this.infoWindowBlack.style.animation ="showInfoContainer 0.2s";
        this.infoWindowBlack.style.webkitAnimationName ="showInfoContainer 0.2s";
        this.infoWindowBlack.style.opacity ="1";

        this.infoWindow.style.animation ="showInfo 0.5s";
        this.infoWindow.style.webkitAnimationName ="showInfo 0.5s";
        this.infoWindow.style.top ="10%";
        this.options.show = true;
        this._map.dragging.disable();
        this._map.touchZoom.disable();
        this._map.doubleClickZoom.disable();
        this._map.scrollWheelZoom.disable();
    },
    _hideInfo: function () {
        this.infoWindowBlack.style.animation ="hideInfoContainer 0.2s";
        this.infoWindowBlack.style.webkitAnimationName ="hideInfoContainer 0.2s";
        this.infoWindowBlack.style.opacity ="0";

        this.infoWindow.style.animation ="hideInfo 0.5s";
        this.infoWindow.style.webkitAnimationName ="hideInfo 0.5s";
        this.infoWindow.style.top ="-100%";
        
        var _this =this;
        setTimeout(function (){_this.infoWindowContainer.style.display ="none";},500);
        this.options.show = false;
        this._map.dragging.enable();
        this._map.touchZoom.enable();
        this._map.doubleClickZoom.enable();
        this._map.scrollWheelZoom.enable();
    }
});

L.control.infoButton = function(options) {
  var newControl = new L.Control.InfoButton(options);
  return newControl;
};
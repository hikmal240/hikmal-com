ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-469.769628, -441.080072, 274.325633, 483.261868]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);
var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                popuplayertitle: "ne_10m_airports",
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> Major And Military Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> Mid Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_3.png" /> Mid And Military Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_4.png" /> Military Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_5.png" /> Military Major Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_6.png" /> Military Mid Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_7.png" /> Small Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_8.png" /> Spaceport Airport<br />\
    <img src="styles/legend/ne_10m_airports_1_9.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'CLASS': 'CLASS', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'TextEdit', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'TextEdit', 'location': 'TextEdit', 'gps_code': 'TextEdit', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'TextEdit', 'CLASS': 'TextEdit', });
lyr_ne_10m_airports_1.set('fieldLabels', {'featurecla': 'no label', 'name': 'no label', 'abbrev': 'no label', 'location': 'no label', 'gps_code': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'natlscale': 'no label', 'CLASS': 'no label', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
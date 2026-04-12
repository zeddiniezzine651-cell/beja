ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1004932.432233, 4394445.737900, 1032860.708531, 4408168.017685]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_rue_2 = new ol.format.GeoJSON();
var features_rue_2 = format_rue_2.readFeatures(json_rue_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rue_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rue_2.addFeatures(features_rue_2);
var lyr_rue_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rue_2, 
                style: style_rue_2,
                popuplayertitle: 'rue',
                interactive: true,
                title: '<img src="styles/legend/rue_2.png" /> rue'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(false);lyr_rue_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleHybrid_1,lyr_rue_2];
lyr_rue_2.set('fieldAliases', {'id': 'id', 'rue': 'rue', });
lyr_rue_2.set('fieldImages', {'id': 'TextEdit', 'rue': 'TextEdit', });
lyr_rue_2.set('fieldLabels', {'id': 'no label', 'rue': 'inline label - always visible', });
lyr_rue_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
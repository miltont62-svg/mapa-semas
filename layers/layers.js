var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Unidades_Sociais_1 = new ol.format.GeoJSON();
var features_Unidades_Sociais_1 = format_Unidades_Sociais_1.readFeatures(json_Unidades_Sociais_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unidades_Sociais_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidades_Sociais_1.addFeatures(features_Unidades_Sociais_1);
var lyr_Unidades_Sociais_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unidades_Sociais_1, 
                style: style_Unidades_Sociais_1,
                popuplayertitle: 'Unidades_Sociais',
                interactive: true,
                title: '<img src="styles/legend/Unidades_Sociais_1.png" /> Unidades_Sociais'
            });
var format_Rio_das_OstrasLimites_2 = new ol.format.GeoJSON();
var features_Rio_das_OstrasLimites_2 = format_Rio_das_OstrasLimites_2.readFeatures(json_Rio_das_OstrasLimites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_das_OstrasLimites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_das_OstrasLimites_2.addFeatures(features_Rio_das_OstrasLimites_2);
var lyr_Rio_das_OstrasLimites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rio_das_OstrasLimites_2, 
                style: style_Rio_das_OstrasLimites_2,
                popuplayertitle: 'Rio_das_Ostras-Limites',
                interactive: true,
                title: '<img src="styles/legend/Rio_das_OstrasLimites_2.png" /> Rio_das_Ostras-Limites'
            });
var format_Todas_Localidades_3 = new ol.format.GeoJSON();
var features_Todas_Localidades_3 = format_Todas_Localidades_3.readFeatures(json_Todas_Localidades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Todas_Localidades_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Todas_Localidades_3.addFeatures(features_Todas_Localidades_3);
var lyr_Todas_Localidades_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Todas_Localidades_3, 
                style: style_Todas_Localidades_3,
                popuplayertitle: 'Todas_Localidades',
                interactive: true,
                title: '<img src="styles/legend/Todas_Localidades_3.png" /> Todas_Localidades'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Unidades_Sociais_1.setVisible(true);lyr_Rio_das_OstrasLimites_2.setVisible(true);lyr_Todas_Localidades_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Unidades_Sociais_1,lyr_Rio_das_OstrasLimites_2,lyr_Todas_Localidades_3];
lyr_Unidades_Sociais_1.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'Localidade': 'Localidade', 'Long': 'Long', 'Lat': 'Lat', 'Foto': 'Foto', });
lyr_Rio_das_OstrasLimites_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Todas_Localidades_3.set('fieldAliases', {'id': 'id', 'Localidade': 'Localidade', 'Popula��o': 'Popula��o', 'Domic�lios': 'Domic�lios', 'Unid.Saude': 'Unid.Saude', 'Esc.Munic.': 'Esc.Munic.', 'Esc.Estad.': 'Esc.Estad.', 'Esc.Part.': 'Esc.Part.', 'Un.Desp.': 'Un.Desp.', 'Pra�a': 'Pra�a', 'Perimetro': 'Perimetro', 'Area_m�': 'Area_m�', 'Densi_Pop1': 'Densi_Pop1', 'Area_km�': 'Area_km�', 'Eleitores': 'Eleitores', 'Set. Censi': 'Set. Censi', });
lyr_Unidades_Sociais_1.set('fieldImages', {'id': '', 'Nome': '', 'Localidade': '', 'Long': '', 'Lat': '', 'Foto': '', });
lyr_Rio_das_OstrasLimites_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Todas_Localidades_3.set('fieldImages', {'id': 'TextEdit', 'Localidade': 'TextEdit', 'Popula��o': 'TextEdit', 'Domic�lios': 'TextEdit', 'Unid.Saude': 'TextEdit', 'Esc.Munic.': 'TextEdit', 'Esc.Estad.': 'TextEdit', 'Esc.Part.': 'TextEdit', 'Un.Desp.': 'TextEdit', 'Pra�a': 'TextEdit', 'Perimetro': 'TextEdit', 'Area_m�': 'TextEdit', 'Densi_Pop1': 'TextEdit', 'Area_km�': 'TextEdit', 'Eleitores': 'TextEdit', 'Set. Censi': 'TextEdit', });
lyr_Unidades_Sociais_1.set('fieldLabels', {'id': 'no label', 'Nome': 'inline label - visible with data', 'Localidade': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_Rio_das_OstrasLimites_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'inline label - visible with data', });
lyr_Todas_Localidades_3.set('fieldLabels', {'id': 'no label', 'Localidade': 'inline label - visible with data', 'Popula��o': 'inline label - visible with data', 'Domic�lios': 'no label', 'Unid.Saude': 'no label', 'Esc.Munic.': 'no label', 'Esc.Estad.': 'no label', 'Esc.Part.': 'no label', 'Un.Desp.': 'no label', 'Pra�a': 'no label', 'Perimetro': 'no label', 'Area_m�': 'no label', 'Densi_Pop1': 'no label', 'Area_km�': 'inline label - visible with data', 'Eleitores': 'no label', 'Set. Censi': 'no label', });
lyr_Todas_Localidades_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
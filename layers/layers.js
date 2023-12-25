var wms_layers = [];

var format_GRSM_BOUNDARY_POLYGON_0 = new ol.format.GeoJSON();
var features_GRSM_BOUNDARY_POLYGON_0 = format_GRSM_BOUNDARY_POLYGON_0.readFeatures(json_GRSM_BOUNDARY_POLYGON_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRSM_BOUNDARY_POLYGON_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRSM_BOUNDARY_POLYGON_0.addFeatures(features_GRSM_BOUNDARY_POLYGON_0);
var lyr_GRSM_BOUNDARY_POLYGON_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRSM_BOUNDARY_POLYGON_0, 
                style: style_GRSM_BOUNDARY_POLYGON_0,
                interactive: true,
                title: '<img src="styles/legend/GRSM_BOUNDARY_POLYGON_0.png" /> GRSM_BOUNDARY_POLYGON'
            });
var format_output_with_order_1 = new ol.format.GeoJSON();
var features_output_with_order_1 = format_output_with_order_1.readFeatures(json_output_with_order_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_output_with_order_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_output_with_order_1.addFeatures(features_output_with_order_1);
var lyr_output_with_order_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_output_with_order_1, 
                style: style_output_with_order_1,
                interactive: true,
                title: '<img src="styles/legend/output_with_order_1.png" /> output_with_order'
            });

lyr_GRSM_BOUNDARY_POLYGON_0.setVisible(true);lyr_output_with_order_1.setVisible(true);
var layersList = [lyr_GRSM_BOUNDARY_POLYGON_0,lyr_output_with_order_1];
lyr_GRSM_BOUNDARY_POLYGON_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PUBLICDISP': 'PUBLICDISP', 'DATAACCESS': 'DATAACCESS', 'UNITCODE': 'UNITCODE', 'UNITNAME': 'UNITNAME', 'GROUPCODE': 'GROUPCODE', 'GROUPNAME': 'GROUPNAME', 'REGIONCODE': 'REGIONCODE', 'CREATEDATE': 'CREATEDATE', 'CREATEUSER': 'CREATEUSER', 'EDITDATE': 'EDITDATE', 'EDITUSER': 'EDITUSER', 'MAPMETHOD': 'MAPMETHOD', 'MAPSOURCE': 'MAPSOURCE', 'SOURCEDATE': 'SOURCEDATE', 'XYACCURACY': 'XYACCURACY', 'GEOMETRYID': 'GEOMETRYID', 'NOTES': 'NOTES', 'GlobalID': 'GlobalID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_output_with_order_1.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_GRSM_BOUNDARY_POLYGON_0.set('fieldImages', {'OBJECTID': '', 'PUBLICDISP': '', 'DATAACCESS': '', 'UNITCODE': '', 'UNITNAME': '', 'GROUPCODE': '', 'GROUPNAME': '', 'REGIONCODE': '', 'CREATEDATE': '', 'CREATEUSER': '', 'EDITDATE': '', 'EDITUSER': '', 'MAPMETHOD': '', 'MAPSOURCE': '', 'SOURCEDATE': '', 'XYACCURACY': '', 'GEOMETRYID': '', 'NOTES': '', 'GlobalID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_output_with_order_1.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'Range', });
lyr_GRSM_BOUNDARY_POLYGON_0.set('fieldLabels', {'OBJECTID': 'no label', 'PUBLICDISP': 'no label', 'DATAACCESS': 'no label', 'UNITCODE': 'no label', 'UNITNAME': 'no label', 'GROUPCODE': 'no label', 'GROUPNAME': 'no label', 'REGIONCODE': 'no label', 'CREATEDATE': 'no label', 'CREATEUSER': 'no label', 'EDITDATE': 'no label', 'EDITUSER': 'no label', 'MAPMETHOD': 'no label', 'MAPSOURCE': 'no label', 'SOURCEDATE': 'no label', 'XYACCURACY': 'no label', 'GEOMETRYID': 'no label', 'NOTES': 'no label', 'GlobalID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_output_with_order_1.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_output_with_order_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
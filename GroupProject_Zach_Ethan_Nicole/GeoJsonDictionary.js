
var Thunderbird = {
		"type" : "FeatureCollection",
        "features" : [
            {"type":"Feature", 
            "properties":{
                "name":"Thunderbird",
                "popupContent":"<b>Supernatural being",
				"img": "<img src=data:image/jpeg;base64,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 "},
                "geometry":{
                    "type":"Point",
                    "coordinates":[-, 51.0427140]}},
            
            {"type": "Feature",
            "properties": {
                "name": "Sidewalk",
                "popupContent":"<b>Sidewalk Citizen</b><br> Rustic bakery and cafe. $.",
				"img": "<img src= https://cdn.canada247.info/assets/uploads/b96c91b17e4da30f7613b9514362dbca_-alberta-division-no-6-calgary-downtown-sidewalk-citizen-bakeryhtml.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-114.0466905,51.0481298]}},
			
			{"type": "Feature", 
			"properties": { 
				"name": "17th", 
				"popupContent": "<b>17th Avenue </b><br> 17th Avenue is home to some of the best food in Calgary, A trip to 17th is a guarentee for some good food.If none of the eateries on this map suit you I recommend checking out more of 17th Ave",
				"img": "<img src= https://images.squarespace-cdn.com/content/v1/529fc0c0e4b088b079c3fb6d/1550196096061-XONE56DCRSX8H2XG88R6/ke17ZwdGBToddI8pDm48kNO2SymwcR0CNt03aX8zdCd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmyh-8_5GJNvrfz4o4yOfLS6zQbzUiTKHw9oGJVKerm66NTpMeMsHjVpXC93GFBavO/image-asset.jpeg>"},
				"geometry": {
					"type": "Polygon", 
					"coordinates": [[
					[-114.1121458,51.0369496],
					[-114.1122195,51.0386217],
					[-114.0595547,51.0385515],
					[-114.0594340,51.0368303],
				]]},
					"style": {
						"color":"blue",
						"fillColour": 'blue',
						"fillOpacity": 0.5
				}},
					
            {"type": "Feature",
            "properties": {
                "name": "clive",
                "popupContent":"<b>Clive burger</b><br> Locally sourced hamburgers and shakes with a retro vibe.$.",
				"img": "<img src= https://images.squarespace-cdn.com/content/v1/5af9b3025ffd202a11b88dd3/1537394588780-NK24205ZSWB1SSG8MRPJ/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg>"},
                "geometry": {
                    "type": "Point",
		"coordinates": [-114.0789122,51.0379097]}}]}; 
		
			
					
var EateriesMedium = {
		"type" : "FeatureCollection",
        "features" : [
            {"type":"Feature", 
            "properties":{
                "name":"Ten Foot ",
                "popupContent":"<b>Ten Foot Henry</b><br> Hip atmosphere with modern vegtable-anchored plates for sharing. $$.",
				"img":"<img src=https://cdn.where.ca/wp-content/uploads/2018/01/ten-foot-henry-web.jpg>"},
                "geometry":{
                    "type":"Point",
                    "coordinates":[-114.0659303,51.0410501]}},

            {"type":"Feature", 
            "properties":{
                "name":"UNA",
                "popupContent":"<b>UNA Pizza and Wine</b><br> Hip local elevated pizzeria. $$.",
				"img": "<img src=https://www.narcity.com/u/2020/01/20/a4c5a2a265191e631a204d956a8ddb37.jpg_1200x630.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-114.0754840, 51.0379030]}},
          

            {"type": "Feature",
            "properties": {
                "name": "Anejo",
                "popupContent":"<b>Anejo</b><br> Contemperary mexican and famous margaritas. $$.",
				"img":"<img src=https://anejo.ca/4thstreet/wp-content/uploads/sites/4/2018/03/mexican-food-calgary.jpg>"}, 
                "geometry": {
                    "type": "Point",
                    "coordinates": [-114.0714570, 51.0337300]}},
            
            
            {"type": "Feature",
            "properties": {
                "name": "OEB",
                "popupContent":"<b>OEB</b><br> Very funky Brunch spot. $$.",
				"img": "<img src= https://eatoeb.com/wp-content/uploads/2018/10/Menu-Page-Header-e1574096414372.jpg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-114.0660517,51.0487096]}}, 
				
			
			{"type": "Feature",
            "properties": {
                "name": "Trolley5",
                "popupContent": "<b>Trolley 5</b><br> Brews their own beer on site as well as featuring other local Micro-breweries, plus amazing wings. $$.",
				"img": "<img src= https://live.staticflickr.com/866/40348386494_60c4d9c146_b.jpg>"}, 
                "geometry": {
                    "type": "Point",
                    "coordinates": [-114.0784720,51.0379095]}}, 
			
            {"type": "Feature",
            "properties": {
                "name": "Sushi",
                "popupContent": "<b>Point Sushi</b><br> Infamous bullet train sushi bar.$$.",
				"img": "<img src= https://eatwithshar0n.files.wordpress.com/2018/07/img-20180704-wa0000.jpg?w=750>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-114.0635280,51.0513535]}}]};

var EateriesHigh = {
		"type" : "FeatureCollection",
        "features" : [
            
            {"type":"Feature", 
            "properties":{
                "name":"bridgetterBar",
                "popupContent":"<b>Bridgette Bar</b><br> Chef-driven food with a unique lounge atmosphere. $$$.",
				"img": "<img src= https://www.visitcalgary.com/sites/default/files/2020-09/visit_during_covid19_header_2020.jpg>"},
                "geometry":{
                    "type":"Point",
				"coordinates":[-114.0786483, 51.0437007]}},
            
    
            {"type": "Feature",
            "properties": {
                "name": "Calcutta",
                "popupContent": "<b>Calcutta Cricket Club</b><br> Modern Indian Cuisine. $$$.",
				"img": "<img src= https://www.avenuecalgary.com/wp-content/uploads/2017/08/CCC-8198562d.jpeg>"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-114.0708578,51.0379171]}},
           
            
            {"type": "Feature",
            "properties": {
                "name": "Nash",
                "popupContent": "<b>The Nash</b><br> Inventive dishes served in an old 1900s hotel.$$$ .",
				"img":"<img src= https://i1.wp.com/fortwoplz.com/wp-content/uploads/2016/03/the-nash-calgary-3.jpg?resize=640%2C427&ssl=1>"}, 
                "geometry": {
                    "type": "Point",
			"coordinates": [-114.0369155,51.0415189]}}]};
            
           
			

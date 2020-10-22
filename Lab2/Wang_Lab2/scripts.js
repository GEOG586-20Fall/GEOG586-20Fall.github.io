
var restaurants = {
				"type" : "FeatureCollection",
					"features" : [
						{"type":"Feature",
						"properties":{
							"name":"Wendys",
							"popupContent":"<b>It's Wendys store, drive through available.</b><a href='https://www.yelp.com/biz/wendys-brentwood'>Check out on yelp</a>",
							"img":"<img src= 'https://dynl.mktgcdn.com/p/IqIuwfyfi12qOxK54MtSfQYHxfpxRFtNL8AMbSeNACk/1900x1068.jpg' height='280px' width='310px'/>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.129916, 51.08719]}
						},
						{"type":"Feature",
						"properties":{
							"name":"Chatime",
							"popupContent":"<b>It's Chatime, bubble tea and fried chicken are icons.</b><a href='https://www.yelp.ca/biz/chatime-calgary-2'>Check out on yelp</a>",
							"img":"<img src= 'https://i.pinimg.com/originals/e9/5e/1a/e95e1a190005d04dba1c7b6eb116f178.jpg' height='280px' width='310px'/>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.128511, 51.087019]}
						},
						{"type":"Feature",
						"properties":{
							"name":"Wami",
							"popupContent":"<b>It's Wami Ootoya Japanese Cuisine.</b><a href='https://www.yelp.ca/biz/wami-ootoya-calgary'>Check out on yelp</a>",
							"img":"<img src= 'https://b.zmtcdn.com/data/reviews_photos/d06/bbb5b8783e0ceaed488f6006364e8d06_1542448309.jpg?fit=around|300:273&crop=300:273;*,*' height='280px' width='310px'/>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.128167, 51.086635]}
						},
						{"type":"Feature",
						"properties":{
							"name":"JamesonsPub",
							"popupContent":"<b>It's Jamesons Pub, you know where to have fun.</b><a href='https://www.yelp.ca/biz/jamesons-pub-calgary'>Check out on yelp</a>",
							"img":"<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh3CfMkPS7NUMHIJ8Y5sX9eR1r3gVGGac69A&usqp=CAU' height='280px' width='310px'/>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.128468, 51.086244]}
						},
            {"type":"Feature",
						"properties":{
							"name":"Safeway",
							"popupContent":"<b>It's Brentwood Safeway, grocery and Starbucks.</b><a href='https://www.safeway.ca/'>Check out on their website</a>",
							"img":"<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlZMr88bEjiaoqgIRoPO6iUvN_G2wr0dR9FQ&usqp=CAU' height='280px' width='310px'/>"},
						"geometry":{
							"type":"Point",
							"coordinates":[-114.124179, 51.085516]}
						},
            {"type":"Feature",
            "properties":{
              "name":"Steakhouse",
              "popupContent":"<b>It's Nick's Steakhouse & Pizza.</b></b><a href='https://www.yelp.ca/biz/nicks-steak-house-and-pizza-calgary-2'>Check out on yelp</a>",
              "img":"<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0-9ZR1Y_zPGEIbUlGhM049Qrgf2VdmolVkg&usqp=CAU' height='280px' width='310px'/>"},
            "geometry":{
              "type":"Point",
              "coordinates":[-114.117119, 51.072534]}
            },
            {"type":"Feature",
            "properties":{
              "name":"EEEL",
              "popupContent":"<b>It's Energy Environment Experiential Learning Building (EEEL).</b>",
              "img":"<img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5y2MqnmkVhlUat8pwIbvwxv81hAuaGkK_Sw&usqp=CAU' height='280px' width='310px'/>"},
            "geometry":{
              "type":"Point",
              "coordinates":[-114.128692, 51.081144]}
            }

					]
			}

      var campus = {
          "type": "Feature",
          "properties": {
              "name": "UofC",
              "img":"<img src= 'https://smartcdn.prod.postmedia.digital/calgaryherald/wp-content/uploads/2020/02/1024-university-of-calgary-e1592605314930.jpg' height='280px' width='310px'/>",
              "popupContent": "<b>This is the University of Calgary Main Campus</b><a href='https://www.ucalgary.ca/'>Visit official website</a>",
              "style": {
                  weight: 1,
                  color: "#999",
                  opacity: 1,
                  fillColor: "#00FFFF",
                  fillOpacity: 0.2
              }
          },
          "geometry": {
              "type": "Polygon",
              "coordinates": [[
                          [ -114.118779, 51.067396],
                          [-114.118167, 51.068562],
                          [-114.118227, 51.072187],
                          [-114.124164, 51.080842],
                          [-114.126492, 51.081543],
                          [-114.127286, 51.081920],
                          [-114.129346, 51.081414],
                          [-114.144980, 51.081310],
                          [-114.144798, 51.078493],
                          [-114.141180, 51.078416],
                          [-114.141051, 51.074471],
                          [-114.128179, 51.074376],
                          [-114.123398, 51.068866],
                          [-114.122003, 51.068650],
                          [-114.121145, 51.068360],
                          [-114.120437, 51.067484],
                          [-114.119300, 51.067160]

                      ]]
          }
      };


      var redMarker = {
  radius: 8,
  fillColor: "#ff0000"
}

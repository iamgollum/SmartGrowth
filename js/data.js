/*
http://107.170.106.235/json/converted_RDF_JSON/
INTEGRATE REST OF DATA ... make sub category for housing?
*/


var ChoroplethHughes = {
 "Population": ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'],
 "Housing": ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32'],
 "Information": ['#fcfbfd','#efedf5','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#4a1486'],
 "Health": ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#99000d'],
 "Educational": ['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#8c2d04'],
 "RetailTrade": ['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525'],
}


var Population = {
  "head": {
    "vars": [ "county" , "population" ]
  } ,
  "results": {
    "bindings": [
      {
        "county": { "type": "literal" , "value": "Jefferson" } ,
        "population": { "type": "literal" , "value": "111,790" }
      } ,
      {
        "county": { "type": "literal" , "value": "St. Lawrence" } ,
        "population": { "type": "literal" , "value": "111,864" }
      } ,
      {
        "county": { "type": "literal" , "value": "Greene" } ,
        "population": { "type": "literal" , "value": "47,986" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ontario" } ,
        "population": { "type": "literal" , "value": "100,106" }
      } ,
      {
        "county": { "type": "literal" , "value": "Franklin" } ,
        "population": { "type": "literal" , "value": "51,044" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tioga" } ,
        "population": { "type": "literal" , "value": "51,838" }
      } ,
      {
        "county": { "type": "literal" , "value": "New York" } ,
        "population": { "type": "literal" , "value": "1,540,547" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tompkins" } ,
        "population": { "type": "literal" , "value": "96,608" }
      } ,
      {
        "county": { "type": "literal" , "value": "Erie" } ,
        "population": { "type": "literal" , "value": "949,440" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wyoming" } ,
        "population": { "type": "literal" , "value": "43,399" }
      } ,
      {
        "county": { "type": "literal" , "value": "Niagara" } ,
        "population": { "type": "literal" , "value": "219,620" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oswego" } ,
        "population": { "type": "literal" , "value": "122,477" }
      } ,
      {
        "county": { "type": "literal" , "value": "Yates" } ,
        "population": { "type": "literal" , "value": "24,723" }
      } ,
      {
        "county": { "type": "literal" , "value": "Livingston" } ,
        "population": { "type": "literal" , "value": "64,705" }
      } ,
      {
        "county": { "type": "literal" , "value": "Seneca" } ,
        "population": { "type": "literal" , "value": "33,343" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cattaraugus" } ,
        "population": { "type": "literal" , "value": "83,927" }
      } ,
      {
        "county": { "type": "literal" , "value": "Columbia" } ,
        "population": { "type": "literal" , "value": "63,046" }
      } ,
      {
        "county": { "type": "literal" , "value": "Herkimer" } ,
        "population": { "type": "literal" , "value": "64,451" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oneida" } ,
        "population": { "type": "literal" , "value": "235,146" }
      } ,
      {
        "county": { "type": "literal" , "value": "Bronx" } ,
        "population": { "type": "literal" , "value": "1,334,319" }
      } ,
      {
        "county": { "type": "literal" , "value": "Albany" } ,
        "population": { "type": "literal" , "value": "295,106" }
      } ,
      {
        "county": { "type": "literal" , "value": "Kings" } ,
        "population": { "type": "literal" , "value": "2,467,006" }
      } ,
      {
        "county": { "type": "literal" , "value": "Nassau" } ,
        "population": { "type": "literal" , "value": "1,336,713" }
      } ,
      {
        "county": { "type": "literal" , "value": "Essex" } ,
        "population": { "type": "literal" , "value": "38,911" }
      } ,
      {
        "county": { "type": "literal" , "value": "Otsego" } ,
        "population": { "type": "literal" , "value": "61,860" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schenectady" } ,
        "population": { "type": "literal" , "value": "146,581" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ulster" } ,
        "population": { "type": "literal" , "value": "177,810" }
      } ,
      {
        "county": { "type": "literal" , "value": "Washington" } ,
        "population": { "type": "literal" , "value": "60,977" }
      } ,
      {
        "county": { "type": "literal" , "value": "Broome" } ,
        "population": { "type": "literal" , "value": "200,351" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wayne" } ,
        "population": { "type": "literal" , "value": "93,791" }
      } ,
      {
        "county": { "type": "literal" , "value": "Madison" } ,
        "population": { "type": "literal" , "value": "69,450" }
      } ,
      {
        "county": { "type": "literal" , "value": "Dutchess" } ,
        "population": { "type": "literal" , "value": "280,914" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rensselaer" } ,
        "population": { "type": "literal" , "value": "152,684" }
      } ,
      {
        "county": { "type": "literal" , "value": "Westchester" } ,
        "population": { "type": "literal" , "value": "925,511" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cortland" } ,
        "population": { "type": "literal" , "value": "48,693" }
      } ,
      {
        "county": { "type": "literal" , "value": "Richmond" } ,
        "population": { "type": "literal" , "value": "445,235" }
      } ,
      {
        "county": { "type": "literal" , "value": "Saratoga" } ,
        "population": { "type": "literal" , "value": "201,514" }
      } ,
      {
        "county": { "type": "literal" , "value": "Delaware" } ,
        "population": { "type": "literal" , "value": "47,864" }
      } ,
      {
        "county": { "type": "literal" , "value": "Steuben" } ,
        "population": { "type": "literal" , "value": "98,764" }
      } ,
      {
        "county": { "type": "literal" , "value": "Queens" } ,
        "population": { "type": "literal" , "value": "2,230,501" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schoharie" } ,
        "population": { "type": "literal" , "value": "31,514" }
      } ,
      {
        "county": { "type": "literal" , "value": "Clinton" } ,
        "population": { "type": "literal" , "value": "79,891" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schuyler" } ,
        "population": { "type": "literal" , "value": "19,232" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chenango" } ,
        "population": { "type": "literal" , "value": "51,325" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rockland" } ,
        "population": { "type": "literal" , "value": "287,720" }
      } ,
      {
        "county": { "type": "literal" , "value": "Onondaga" } ,
        "population": { "type": "literal" , "value": "458,034" }
      } ,
      {
        "county": { "type": "literal" , "value": "Sullivan" } ,
        "population": { "type": "literal" , "value": "74,134" }
      } ,
      {
        "county": { "type": "literal" , "value": "Lewis" } ,
        "population": { "type": "literal" , "value": "26,989" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chautauqua" } ,
        "population": { "type": "literal" , "value": "139,593" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chemung" } ,
        "population": { "type": "literal" , "value": "91,094" }
      } ,
      {
        "county": { "type": "literal" , "value": "Fulton" } ,
        "population": { "type": "literal" , "value": "54,976" }
      } ,
      {
        "county": { "type": "literal" , "value": "Montgomery" } ,
        "population": { "type": "literal" , "value": "49,605" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orleans" } ,
        "population": { "type": "literal" , "value": "44,178" }
      } ,
      {
        "county": { "type": "literal" , "value": "Genesee" } ,
        "population": { "type": "literal" , "value": "60,539" }
      } ,
      {
        "county": { "type": "literal" , "value": "Suffolk" } ,
        "population": { "type": "literal" , "value": "1,424,081" }
      } ,
      {
        "county": { "type": "literal" , "value": "Putnam" } ,
        "population": { "type": "literal" , "value": "96,049" }
      } ,
      {
        "county": { "type": "literal" , "value": "Monroe" } ,
        "population": { "type": "literal" , "value": "738,979" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cayuga" } ,
        "population": { "type": "literal" , "value": "81,871" }
      } ,
      {
        "county": { "type": "literal" , "value": "Allegany" } ,
        "population": { "type": "literal" , "value": "49,819" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orange" } ,
        "population": { "type": "literal" , "value": "342,892" }
      } ,
      {
        "county": { "type": "literal" , "value": "Hamilton" } ,
        "population": { "type": "literal" , "value": "5,377" }
      } ,
      {
        "county": { "type": "literal" , "value": "Warren" } ,
        "population": { "type": "literal" , "value": "63,273" }
      }
    ]
  }
}

var Educational = {
  "head": {
    "vars": [ "county" , "establishment" ]
  } ,
  "results": {
    "bindings": [
      {
        "county": { "type": "literal" , "value": "Richmond" } ,
        "establishment": { "type": "literal" , "value": "174" }
      } ,
      {
        "county": { "type": "literal" , "value": "Sullivan" } ,
        "establishment": { "type": "literal" , "value": "17" }
      } ,
      {
        "county": { "type": "literal" , "value": "Essex" } ,
        "establishment": { "type": "literal" , "value": "23" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tioga" } ,
        "establishment": { "type": "literal" , "value": "6" }
      } ,
      {
        "county": { "type": "literal" , "value": "Seneca" } ,
        "establishment": { "type": "literal" , "value": "7" }
      } ,
      {
        "county": { "type": "literal" , "value": "Yates" } ,
        "establishment": { "type": "literal" , "value": "3" }
      } ,
      {
        "county": { "type": "literal" , "value": "Madison" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "New York" } ,
        "establishment": { "type": "literal" , "value": "1542" }
      } ,
      {
        "county": { "type": "literal" , "value": "Genesee" } ,
        "establishment": { "type": "literal" , "value": "13" }
      } ,
      {
        "county": { "type": "literal" , "value": "Otsego" } ,
        "establishment": { "type": "literal" , "value": "18" }
      } ,
      {
        "county": { "type": "literal" , "value": "Montgomery" } ,
        "establishment": { "type": "literal" , "value": "6" }
      } ,
      {
        "county": { "type": "literal" , "value": "Jefferson" } ,
        "establishment": { "type": "literal" , "value": "23" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schenectady" } ,
        "establishment": { "type": "literal" , "value": "38" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orange" } ,
        "establishment": { "type": "literal" , "value": "113" }
      } ,
      {
        "county": { "type": "literal" , "value": "St. Lawrence" } ,
        "establishment": { "type": "literal" , "value": "13" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rensselaer" } ,
        "establishment": { "type": "literal" , "value": "39" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chautauqua" } ,
        "establishment": { "type": "literal" , "value": "21" }
      } ,
      {
        "county": { "type": "literal" , "value": "Kings" } ,
        "establishment": { "type": "literal" , "value": "862" }
      } ,
      {
        "county": { "type": "literal" , "value": "Warren" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "Clinton" } ,
        "establishment": { "type": "literal" , "value": "13" }
      } ,
      {
        "county": { "type": "literal" , "value": "Onondaga" } ,
        "establishment": { "type": "literal" , "value": "141" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oneida" } ,
        "establishment": { "type": "literal" , "value": "36" }
      } ,
      {
        "county": { "type": "literal" , "value": "Hamilton" } ,
        "establishment": { "type": "literal" , "value": "1" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ulster" } ,
        "establishment": { "type": "literal" , "value": "65" }
      } ,
      {
        "county": { "type": "literal" , "value": "Albany" } ,
        "establishment": { "type": "literal" , "value": "148" }
      } ,
      {
        "county": { "type": "literal" , "value": "Suffolk" } ,
        "establishment": { "type": "literal" , "value": "572" }
      } ,
      {
        "county": { "type": "literal" , "value": "Herkimer" } ,
        "establishment": { "type": "literal" , "value": "6" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wyoming" } ,
        "establishment": { "type": "literal" , "value": "5" }
      } ,
      {
        "county": { "type": "literal" , "value": "Delaware" } ,
        "establishment": { "type": "literal" , "value": "5" }
      } ,
      {
        "county": { "type": "literal" , "value": "Steuben" } ,
        "establishment": { "type": "literal" , "value": "9" }
      } ,
      {
        "county": { "type": "literal" , "value": "Niagara" } ,
        "establishment": { "type": "literal" , "value": "47" }
      } ,
      {
        "county": { "type": "literal" , "value": "Queens" } ,
        "establishment": { "type": "literal" , "value": "633" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schoharie" } ,
        "establishment": { "type": "literal" , "value": "5" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cattaraugus" } ,
        "establishment": { "type": "literal" , "value": "11" }
      } ,
      {
        "county": { "type": "literal" , "value": "Bronx" } ,
        "establishment": { "type": "literal" , "value": "268" }
      } ,
      {
        "county": { "type": "literal" , "value": "Lewis" } ,
        "establishment": { "type": "literal" , "value": "2" }
      } ,
      {
        "county": { "type": "literal" , "value": "Allegany" } ,
        "establishment": { "type": "literal" , "value": "8" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chemung" } ,
        "establishment": { "type": "literal" , "value": "14" }
      } ,
      {
        "county": { "type": "literal" , "value": "Washington" } ,
        "establishment": { "type": "literal" , "value": "5" }
      } ,
      {
        "county": { "type": "literal" , "value": "Greene" } ,
        "establishment": { "type": "literal" , "value": "7" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tompkins" } ,
        "establishment": { "type": "literal" , "value": "37" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cortland" } ,
        "establishment": { "type": "literal" , "value": "2" }
      } ,
      {
        "county": { "type": "literal" , "value": "Columbia" } ,
        "establishment": { "type": "literal" , "value": "22" }
      } ,
      {
        "county": { "type": "literal" , "value": "Putnam" } ,
        "establishment": { "type": "literal" , "value": "40" }
      } ,
      {
        "county": { "type": "literal" , "value": "Monroe" } ,
        "establishment": { "type": "literal" , "value": "290" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orleans" } ,
        "establishment": { "type": "literal" , "value": "3" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chenango" } ,
        "establishment": { "type": "literal" , "value": "7" }
      } ,
      {
        "county": { "type": "literal" , "value": "Fulton" } ,
        "establishment": { "type": "literal" , "value": "4" }
      } ,
      {
        "county": { "type": "literal" , "value": "Livingston" } ,
        "establishment": { "type": "literal" , "value": "7" }
      } ,
      {
        "county": { "type": "literal" , "value": "Erie" } ,
        "establishment": { "type": "literal" , "value": "297" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rockland" } ,
        "establishment": { "type": "literal" , "value": "171" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wayne" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "Dutchess" } ,
        "establishment": { "type": "literal" , "value": "126" }
      } ,
      {
        "county": { "type": "literal" , "value": "Saratoga" } ,
        "establishment": { "type": "literal" , "value": "64" }
      } ,
      {
        "county": { "type": "literal" , "value": "Broome" } ,
        "establishment": { "type": "literal" , "value": "36" }
      } ,
      {
        "county": { "type": "literal" , "value": "Nassau" } ,
        "establishment": { "type": "literal" , "value": "632" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cayuga" } ,
        "establishment": { "type": "literal" , "value": "14" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oswego" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "Franklin" } ,
        "establishment": { "type": "literal" , "value": "6" }
      } ,
      {
        "county": { "type": "literal" , "value": "Westchester" } ,
        "establishment": { "type": "literal" , "value": "579" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ontario" } ,
        "establishment": { "type": "literal" , "value": "22" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schuyler" } ,
        "establishment": { "type": "literal" , "value": "1" }
      }
    ]
  }
}

var RetailTrade = {
  "head": {
    "vars": [ "county" , "establishment" ]
  } ,
  "results": {
    "bindings": [
      {
        "county": { "type": "literal" , "value": "Tompkins" } ,
        "establishment": { "type": "literal" , "value": "362" }
      } ,
      {
        "county": { "type": "literal" , "value": "Putnam" } ,
        "establishment": { "type": "literal" , "value": "338" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ontario" } ,
        "establishment": { "type": "literal" , "value": "526" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chenango" } ,
        "establishment": { "type": "literal" , "value": "193" }
      } ,
      {
        "county": { "type": "literal" , "value": "Dutchess" } ,
        "establishment": { "type": "literal" , "value": "1036" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schenectady" } ,
        "establishment": { "type": "literal" , "value": "517" }
      } ,
      {
        "county": { "type": "literal" , "value": "Richmond" } ,
        "establishment": { "type": "literal" , "value": "1233" }
      } ,
      {
        "county": { "type": "literal" , "value": "Yates" } ,
        "establishment": { "type": "literal" , "value": "105" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oneida" } ,
        "establishment": { "type": "literal" , "value": "932" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schuyler" } ,
        "establishment": { "type": "literal" , "value": "73" }
      } ,
      {
        "county": { "type": "literal" , "value": "Columbia" } ,
        "establishment": { "type": "literal" , "value": "274" }
      } ,
      {
        "county": { "type": "literal" , "value": "Bronx" } ,
        "establishment": { "type": "literal" , "value": "3143" }
      } ,
      {
        "county": { "type": "literal" , "value": "Livingston" } ,
        "establishment": { "type": "literal" , "value": "233" }
      } ,
      {
        "county": { "type": "literal" , "value": "Nassau" } ,
        "establishment": { "type": "literal" , "value": "6818" }
      } ,
      {
        "county": { "type": "literal" , "value": "Warren" } ,
        "establishment": { "type": "literal" , "value": "470" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oswego" } ,
        "establishment": { "type": "literal" , "value": "383" }
      } ,
      {
        "county": { "type": "literal" , "value": "New York" } ,
        "establishment": { "type": "literal" , "value": "11616" }
      } ,
      {
        "county": { "type": "literal" , "value": "St. Lawrence" } ,
        "establishment": { "type": "literal" , "value": "487" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wayne" } ,
        "establishment": { "type": "literal" , "value": "292" }
      } ,
      {
        "county": { "type": "literal" , "value": "Delaware" } ,
        "establishment": { "type": "literal" , "value": "230" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ulster" } ,
        "establishment": { "type": "literal" , "value": "787" }
      } ,
      {
        "county": { "type": "literal" , "value": "Herkimer" } ,
        "establishment": { "type": "literal" , "value": "234" }
      } ,
      {
        "county": { "type": "literal" , "value": "Montgomery" } ,
        "establishment": { "type": "literal" , "value": "212" }
      } ,
      {
        "county": { "type": "literal" , "value": "Clinton" } ,
        "establishment": { "type": "literal" , "value": "382" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tioga" } ,
        "establishment": { "type": "literal" , "value": "154" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rensselaer" } ,
        "establishment": { "type": "literal" , "value": "452" }
      } ,
      {
        "county": { "type": "literal" , "value": "Lewis" } ,
        "establishment": { "type": "literal" , "value": "96" }
      } ,
      {
        "county": { "type": "literal" , "value": "Erie" } ,
        "establishment": { "type": "literal" , "value": "3488" }
      } ,
      {
        "county": { "type": "literal" , "value": "Broome" } ,
        "establishment": { "type": "literal" , "value": "797" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wyoming" } ,
        "establishment": { "type": "literal" , "value": "163" }
      } ,
      {
        "county": { "type": "literal" , "value": "Seneca" } ,
        "establishment": { "type": "literal" , "value": "191" }
      } ,
      {
        "county": { "type": "literal" , "value": "Monroe" } ,
        "establishment": { "type": "literal" , "value": "2484" }
      } ,
      {
        "county": { "type": "literal" , "value": "Madison" } ,
        "establishment": { "type": "literal" , "value": "242" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chemung" } ,
        "establishment": { "type": "literal" , "value": "406" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orange" } ,
        "establishment": { "type": "literal" , "value": "1484" }
      } ,
      {
        "county": { "type": "literal" , "value": "Westchester" } ,
        "establishment": { "type": "literal" , "value": "4164" }
      } ,
      {
        "county": { "type": "literal" , "value": "Otsego" } ,
        "establishment": { "type": "literal" , "value": "285" }
      } ,
      {
        "county": { "type": "literal" , "value": "Niagara" } ,
        "establishment": { "type": "literal" , "value": "802" }
      } ,
      {
        "county": { "type": "literal" , "value": "Washington" } ,
        "establishment": { "type": "literal" , "value": "210" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cattaraugus" } ,
        "establishment": { "type": "literal" , "value": "399" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chautauqua" } ,
        "establishment": { "type": "literal" , "value": "585" }
      } ,
      {
        "county": { "type": "literal" , "value": "Hamilton" } ,
        "establishment": { "type": "literal" , "value": "39" }
      } ,
      {
        "county": { "type": "literal" , "value": "Saratoga" } ,
        "establishment": { "type": "literal" , "value": "712" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cayuga" } ,
        "establishment": { "type": "literal" , "value": "250" }
      } ,
      {
        "county": { "type": "literal" , "value": "Kings" } ,
        "establishment": { "type": "literal" , "value": "7079" }
      } ,
      {
        "county": { "type": "literal" , "value": "Queens" } ,
        "establishment": { "type": "literal" , "value": "6104" }
      } ,
      {
        "county": { "type": "literal" , "value": "Greene" } ,
        "establishment": { "type": "literal" , "value": "222" }
      } ,
      {
        "county": { "type": "literal" , "value": "Fulton" } ,
        "establishment": { "type": "literal" , "value": "188" }
      } ,
      {
        "county": { "type": "literal" , "value": "Franklin" } ,
        "establishment": { "type": "literal" , "value": "212" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orleans" } ,
        "establishment": { "type": "literal" , "value": "138" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rockland" } ,
        "establishment": { "type": "literal" , "value": "1236" }
      } ,
      {
        "county": { "type": "literal" , "value": "Steuben" } ,
        "establishment": { "type": "literal" , "value": "363" }
      } ,
      {
        "county": { "type": "literal" , "value": "Albany" } ,
        "establishment": { "type": "literal" , "value": "1396" }
      } ,
      {
        "county": { "type": "literal" , "value": "Genesee" } ,
        "establishment": { "type": "literal" , "value": "229" }
      } ,
      {
        "county": { "type": "literal" , "value": "Sullivan" } ,
        "establishment": { "type": "literal" , "value": "320" }
      } ,
      {
        "county": { "type": "literal" , "value": "Jefferson" } ,
        "establishment": { "type": "literal" , "value": "498" }
      } ,
      {
        "county": { "type": "literal" , "value": "Essex" } ,
        "establishment": { "type": "literal" , "value": "239" }
      } ,
      {
        "county": { "type": "literal" , "value": "Onondaga" } ,
        "establishment": { "type": "literal" , "value": "1865" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cortland" } ,
        "establishment": { "type": "literal" , "value": "204" }
      } ,
      {
        "county": { "type": "literal" , "value": "Suffolk" } ,
        "establishment": { "type": "literal" , "value": "6641" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schoharie" } ,
        "establishment": { "type": "literal" , "value": "113" }
      } ,
      {
        "county": { "type": "literal" , "value": "Allegany" } ,
        "establishment": { "type": "literal" , "value": "173" }
      }
    ]
  }
}


var Housing = {
  "head": {
    "vars": [ "subject" , "occupied" ]
  } ,
  "results": {
    "bindings": [
      {
        "subject": { "type": "literal" , "value": "Onondaga" } ,
        "occupied": { "type": "literal" , "value": "181,153" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Putnam" } ,
        "occupied": { "type": "literal" , "value": "32,703" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Orange" } ,
        "occupied": { "type": "literal" , "value": "114,788" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Genesee" } ,
        "occupied": { "type": "literal" , "value": "22,770" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Montgomery" } ,
        "occupied": { "type": "literal" , "value": "20,038" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Delaware" } ,
        "occupied": { "type": "literal" , "value": "19,270" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Erie" } ,
        "occupied": { "type": "literal" , "value": "380,873" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Broome" } ,
        "occupied": { "type": "literal" , "value": "80,749" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Schenectady" } ,
        "occupied": { "type": "literal" , "value": "59,684" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Schuyler" } ,
        "occupied": { "type": "literal" , "value": "7,374" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Rockland" } ,
        "occupied": { "type": "literal" , "value": "92,675" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Clinton" } ,
        "occupied": { "type": "literal" , "value": "29,423" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Washington" } ,
        "occupied": { "type": "literal" , "value": "22,458" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Franklin" } ,
        "occupied": { "type": "literal" , "value": "17,931" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Ontario" } ,
        "occupied": { "type": "literal" , "value": "38,370" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Monroe" } ,
        "occupied": { "type": "literal" , "value": "286,512" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Wayne" } ,
        "occupied": { "type": "literal" , "value": "34,908" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Allegany" } ,
        "occupied": { "type": "literal" , "value": "18,009" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Greene" } ,
        "occupied": { "type": "literal" , "value": "18,256" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Schoharie" } ,
        "occupied": { "type": "literal" , "value": "11,991" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Hamilton" } ,
        "occupied": { "type": "literal" , "value": "2,362" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Tioga" } ,
        "occupied": { "type": "literal" , "value": "19,725" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Essex" } ,
        "occupied": { "type": "literal" , "value": "15,028" }
      } ,
      {
        "subject": { "type": "literal" , "value": "New York" } ,
        "occupied": { "type": "literal" , "value": "738,644" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Queens" } ,
        "occupied": { "type": "literal" , "value": "782,664" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Cortland" } ,
        "occupied": { "type": "literal" , "value": "18,210" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Yates" } ,
        "occupied": { "type": "literal" , "value": "9,029" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Columbia" } ,
        "occupied": { "type": "literal" , "value": "24,796" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Dutchess" } ,
        "occupied": { "type": "literal" , "value": "99,536" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Jefferson" } ,
        "occupied": { "type": "literal" , "value": "40,068" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Saratoga" } ,
        "occupied": { "type": "literal" , "value": "78,165" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Rensselaer" } ,
        "occupied": { "type": "literal" , "value": "59,894" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Lewis" } ,
        "occupied": { "type": "literal" , "value": "10,040" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Seneca" } ,
        "occupied": { "type": "literal" , "value": "12,630" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Wyoming" } ,
        "occupied": { "type": "literal" , "value": "14,906" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Chautauqua" } ,
        "occupied": { "type": "literal" , "value": "54,515" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Livingston" } ,
        "occupied": { "type": "literal" , "value": "22,150" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Fulton" } ,
        "occupied": { "type": "literal" , "value": "21,884" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Madison" } ,
        "occupied": { "type": "literal" , "value": "25,368" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Richmond" } ,
        "occupied": { "type": "literal" , "value": "156,341" }
      } ,
      {
        "subject": { "type": "literal" , "value": "St. Lawrence" } ,
        "occupied": { "type": "literal" , "value": "40,506" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Cattaraugus" } ,
        "occupied": { "type": "literal" , "value": "32,023" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Herkimer" } ,
        "occupied": { "type": "literal" , "value": "25,734" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Otsego" } ,
        "occupied": { "type": "literal" , "value": "23,291" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Niagara" } ,
        "occupied": { "type": "literal" , "value": "87,846" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Tompkins" } ,
        "occupied": { "type": "literal" , "value": "36,420" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Orleans" } ,
        "occupied": { "type": "literal" , "value": "15,363" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Albany" } ,
        "occupied": { "type": "literal" , "value": "120,512" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Steuben" } ,
        "occupied": { "type": "literal" , "value": "39,071" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Cayuga" } ,
        "occupied": { "type": "literal" , "value": "30,558" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Ulster" } ,
        "occupied": { "type": "literal" , "value": "67,499" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Chenango" } ,
        "occupied": { "type": "literal" , "value": "19,926" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Westchester" } ,
        "occupied": { "type": "literal" , "value": "337,142" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Sullivan" } ,
        "occupied": { "type": "literal" , "value": "27,661" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Warren" } ,
        "occupied": { "type": "literal" , "value": "25,726" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Chemung" } ,
        "occupied": { "type": "literal" , "value": "35,049" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Oneida" } ,
        "occupied": { "type": "literal" , "value": "90,496" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Oswego" } ,
        "occupied": { "type": "literal" , "value": "45,522" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Nassau" } ,
        "occupied": { "type": "literal" , "value": "447,387" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Kings" } ,
        "occupied": { "type": "literal" , "value": "880,727" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Suffolk" } ,
        "occupied": { "type": "literal" , "value": "469,299" }
      } ,
      {
        "subject": { "type": "literal" , "value": "Bronx" } ,
        "occupied": { "type": "literal" , "value": "463,212" }
      }
    ]
  }
}



var Information = {
  "head": {
    "vars": [ "county" , "establishment" ]
  } ,
  "results": {
    "bindings": [
      {
        "county": { "type": "literal" , "value": "Chemung" } ,
        "establishment": { "type": "literal" , "value": "23" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wayne" } ,
        "establishment": { "type": "literal" , "value": "21" }
      } ,
      {
        "county": { "type": "literal" , "value": "Fulton" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "Kings" } ,
        "establishment": { "type": "literal" , "value": "445" }
      } ,
      {
        "county": { "type": "literal" , "value": "Queens" } ,
        "establishment": { "type": "literal" , "value": "430" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chautauqua" } ,
        "establishment": { "type": "literal" , "value": "57" }
      } ,
      {
        "county": { "type": "literal" , "value": "Franklin" } ,
        "establishment": { "type": "literal" , "value": "17" }
      } ,
      {
        "county": { "type": "literal" , "value": "Sullivan" } ,
        "establishment": { "type": "literal" , "value": "36" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rockland" } ,
        "establishment": { "type": "literal" , "value": "174" }
      } ,
      {
        "county": { "type": "literal" , "value": "Livingston" } ,
        "establishment": { "type": "literal" , "value": "29" }
      } ,
      {
        "county": { "type": "literal" , "value": "Onondaga" } ,
        "establishment": { "type": "literal" , "value": "236" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oswego" } ,
        "establishment": { "type": "literal" , "value": "24" }
      } ,
      {
        "county": { "type": "literal" , "value": "St. Lawrence" } ,
        "establishment": { "type": "literal" , "value": "46" }
      } ,
      {
        "county": { "type": "literal" , "value": "Nassau" } ,
        "establishment": { "type": "literal" , "value": "782" }
      } ,
      {
        "county": { "type": "literal" , "value": "Clinton" } ,
        "establishment": { "type": "literal" , "value": "33" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orleans" } ,
        "establishment": { "type": "literal" , "value": "8" }
      } ,
      {
        "county": { "type": "literal" , "value": "Otsego" } ,
        "establishment": { "type": "literal" , "value": "26" }
      } ,
      {
        "county": { "type": "literal" , "value": "Delaware" } ,
        "establishment": { "type": "literal" , "value": "36" }
      } ,
      {
        "county": { "type": "literal" , "value": "Steuben" } ,
        "establishment": { "type": "literal" , "value": "51" }
      } ,
      {
        "county": { "type": "literal" , "value": "Suffolk" } ,
        "establishment": { "type": "literal" , "value": "668" }
      } ,
      {
        "county": { "type": "literal" , "value": "Dutchess" } ,
        "establishment": { "type": "literal" , "value": "133" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rensselaer" } ,
        "establishment": { "type": "literal" , "value": "63" }
      } ,
      {
        "county": { "type": "literal" , "value": "Saratoga" } ,
        "establishment": { "type": "literal" , "value": "66" }
      } ,
      {
        "county": { "type": "literal" , "value": "Greene" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "Yates" } ,
        "establishment": { "type": "literal" , "value": "10" }
      } ,
      {
        "county": { "type": "literal" , "value": "Allegany" } ,
        "establishment": { "type": "literal" , "value": "32" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schoharie" } ,
        "establishment": { "type": "literal" , "value": "12" }
      } ,
      {
        "county": { "type": "literal" , "value": "Madison" } ,
        "establishment": { "type": "literal" , "value": "18" }
      } ,
      {
        "county": { "type": "literal" , "value": "New York" } ,
        "establishment": { "type": "literal" , "value": "4558" }
      } ,
      {
        "county": { "type": "literal" , "value": "Westchester" } ,
        "establishment": { "type": "literal" , "value": "704" }
      } ,
      {
        "county": { "type": "literal" , "value": "Bronx" } ,
        "establishment": { "type": "literal" , "value": "129" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tompkins" } ,
        "establishment": { "type": "literal" , "value": "64" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oneida" } ,
        "establishment": { "type": "literal" , "value": "87" }
      } ,
      {
        "county": { "type": "literal" , "value": "Seneca" } ,
        "establishment": { "type": "literal" , "value": "10" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schuyler" } ,
        "establishment": { "type": "literal" , "value": "7" }
      } ,
      {
        "county": { "type": "literal" , "value": "Monroe" } ,
        "establishment": { "type": "literal" , "value": "413" }
      } ,
      {
        "county": { "type": "literal" , "value": "Hamilton" } ,
        "establishment": { "type": "literal" , "value": "5" }
      } ,
      {
        "county": { "type": "literal" , "value": "Essex" } ,
        "establishment": { "type": "literal" , "value": "27" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wyoming" } ,
        "establishment": { "type": "literal" , "value": "13" }
      } ,
      {
        "county": { "type": "literal" , "value": "Washington" } ,
        "establishment": { "type": "literal" , "value": "17" }
      } ,
      {
        "county": { "type": "literal" , "value": "Putnam" } ,
        "establishment": { "type": "literal" , "value": "54" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cortland" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ontario" } ,
        "establishment": { "type": "literal" , "value": "51" }
      } ,
      {
        "county": { "type": "literal" , "value": "Richmond" } ,
        "establishment": { "type": "literal" , "value": "104" }
      } ,
      {
        "county": { "type": "literal" , "value": "Genesee" } ,
        "establishment": { "type": "literal" , "value": "21" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cattaraugus" } ,
        "establishment": { "type": "literal" , "value": "31" }
      } ,
      {
        "county": { "type": "literal" , "value": "Montgomery" } ,
        "establishment": { "type": "literal" , "value": "16" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chenango" } ,
        "establishment": { "type": "literal" , "value": "20" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ulster" } ,
        "establishment": { "type": "literal" , "value": "90" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schenectady" } ,
        "establishment": { "type": "literal" , "value": "47" }
      } ,
      {
        "county": { "type": "literal" , "value": "Lewis" } ,
        "establishment": { "type": "literal" , "value": "14" }
      } ,
      {
        "county": { "type": "literal" , "value": "Broome" } ,
        "establishment": { "type": "literal" , "value": "86" }
      } ,
      {
        "county": { "type": "literal" , "value": "Herkimer" } ,
        "establishment": { "type": "literal" , "value": "21" }
      } ,
      {
        "county": { "type": "literal" , "value": "Jefferson" } ,
        "establishment": { "type": "literal" , "value": "53" }
      } ,
      {
        "county": { "type": "literal" , "value": "Columbia" } ,
        "establishment": { "type": "literal" , "value": "47" }
      } ,
      {
        "county": { "type": "literal" , "value": "Albany" } ,
        "establishment": { "type": "literal" , "value": "213" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orange" } ,
        "establishment": { "type": "literal" , "value": "117" }
      } ,
      {
        "county": { "type": "literal" , "value": "Niagara" } ,
        "establishment": { "type": "literal" , "value": "45" }
      } ,
      {
        "county": { "type": "literal" , "value": "Warren" } ,
        "establishment": { "type": "literal" , "value": "42" }
      } ,
      {
        "county": { "type": "literal" , "value": "Erie" } ,
        "establishment": { "type": "literal" , "value": "330" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cayuga" } ,
        "establishment": { "type": "literal" , "value": "29" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tioga" } ,
        "establishment": { "type": "literal" , "value": "13" }
      }
    ]
  }
}



var Health = {
  "head": {
    "vars": [ "county" , "establishment" ]
  } ,
  "results": {
    "bindings": [
      {
        "county": { "type": "literal" , "value": "Ontario" } ,
        "establishment": { "type": "literal" , "value": "194" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chenango" } ,
        "establishment": { "type": "literal" , "value": "113" }
      } ,
      {
        "county": { "type": "literal" , "value": "Saratoga" } ,
        "establishment": { "type": "literal" , "value": "399" }
      } ,
      {
        "county": { "type": "literal" , "value": "St. Lawrence" } ,
        "establishment": { "type": "literal" , "value": "262" }
      } ,
      {
        "county": { "type": "literal" , "value": "Lewis" } ,
        "establishment": { "type": "literal" , "value": "51" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rockland" } ,
        "establishment": { "type": "literal" , "value": "969" }
      } ,
      {
        "county": { "type": "literal" , "value": "Sullivan" } ,
        "establishment": { "type": "literal" , "value": "224" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oswego" } ,
        "establishment": { "type": "literal" , "value": "176" }
      } ,
      {
        "county": { "type": "literal" , "value": "Albany" } ,
        "establishment": { "type": "literal" , "value": "896" }
      } ,
      {
        "county": { "type": "literal" , "value": "Madison" } ,
        "establishment": { "type": "literal" , "value": "135" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wayne" } ,
        "establishment": { "type": "literal" , "value": "156" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tompkins" } ,
        "establishment": { "type": "literal" , "value": "229" }
      } ,
      {
        "county": { "type": "literal" , "value": "Essex" } ,
        "establishment": { "type": "literal" , "value": "117" }
      } ,
      {
        "county": { "type": "literal" , "value": "Richmond" } ,
        "establishment": { "type": "literal" , "value": "941" }
      } ,
      {
        "county": { "type": "literal" , "value": "Dutchess" } ,
        "establishment": { "type": "literal" , "value": "810" }
      } ,
      {
        "county": { "type": "literal" , "value": "Bronx" } ,
        "establishment": { "type": "literal" , "value": "1670" }
      } ,
      {
        "county": { "type": "literal" , "value": "Steuben" } ,
        "establishment": { "type": "literal" , "value": "227" }
      } ,
      {
        "county": { "type": "literal" , "value": "Suffolk" } ,
        "establishment": { "type": "literal" , "value": "3819" }
      } ,
      {
        "county": { "type": "literal" , "value": "Putnam" } ,
        "establishment": { "type": "literal" , "value": "215" }
      } ,
      {
        "county": { "type": "literal" , "value": "Westchester" } ,
        "establishment": { "type": "literal" , "value": "3152" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cattaraugus" } ,
        "establishment": { "type": "literal" , "value": "146" }
      } ,
      {
        "county": { "type": "literal" , "value": "Hamilton" } ,
        "establishment": { "type": "literal" , "value": "7" }
      } ,
      {
        "county": { "type": "literal" , "value": "Nassau" } ,
        "establishment": { "type": "literal" , "value": "5094" }
      } ,
      {
        "county": { "type": "literal" , "value": "Clinton" } ,
        "establishment": { "type": "literal" , "value": "218" }
      } ,
      {
        "county": { "type": "literal" , "value": "Otsego" } ,
        "establishment": { "type": "literal" , "value": "127" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schuyler" } ,
        "establishment": { "type": "literal" , "value": "33" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chautauqua" } ,
        "establishment": { "type": "literal" , "value": "279" }
      } ,
      {
        "county": { "type": "literal" , "value": "Franklin" } ,
        "establishment": { "type": "literal" , "value": "169" }
      } ,
      {
        "county": { "type": "literal" , "value": "Herkimer" } ,
        "establishment": { "type": "literal" , "value": "110" }
      } ,
      {
        "county": { "type": "literal" , "value": "Rensselaer" } ,
        "establishment": { "type": "literal" , "value": "311" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schenectady" } ,
        "establishment": { "type": "literal" , "value": "445" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orleans" } ,
        "establishment": { "type": "literal" , "value": "79" }
      } ,
      {
        "county": { "type": "literal" , "value": "Allegany" } ,
        "establishment": { "type": "literal" , "value": "94" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cayuga" } ,
        "establishment": { "type": "literal" , "value": "194" }
      } ,
      {
        "county": { "type": "literal" , "value": "Jefferson" } ,
        "establishment": { "type": "literal" , "value": "217" }
      } ,
      {
        "county": { "type": "literal" , "value": "Montgomery" } ,
        "establishment": { "type": "literal" , "value": "164" }
      } ,
      {
        "county": { "type": "literal" , "value": "Livingston" } ,
        "establishment": { "type": "literal" , "value": "113" }
      } ,
      {
        "county": { "type": "literal" , "value": "Kings" } ,
        "establishment": { "type": "literal" , "value": "4466" }
      } ,
      {
        "county": { "type": "literal" , "value": "Niagara" } ,
        "establishment": { "type": "literal" , "value": "465" }
      } ,
      {
        "county": { "type": "literal" , "value": "Onondaga" } ,
        "establishment": { "type": "literal" , "value": "1095" }
      } ,
      {
        "county": { "type": "literal" , "value": "Seneca" } ,
        "establishment": { "type": "literal" , "value": "68" }
      } ,
      {
        "county": { "type": "literal" , "value": "Genesee" } ,
        "establishment": { "type": "literal" , "value": "125" }
      } ,
      {
        "county": { "type": "literal" , "value": "Fulton" } ,
        "establishment": { "type": "literal" , "value": "126" }
      } ,
      {
        "county": { "type": "literal" , "value": "Broome" } ,
        "establishment": { "type": "literal" , "value": "416" }
      } ,
      {
        "county": { "type": "literal" , "value": "Erie" } ,
        "establishment": { "type": "literal" , "value": "2590" }
      } ,
      {
        "county": { "type": "literal" , "value": "Columbia" } ,
        "establishment": { "type": "literal" , "value": "150" }
      } ,
      {
        "county": { "type": "literal" , "value": "Tioga" } ,
        "establishment": { "type": "literal" , "value": "69" }
      } ,
      {
        "county": { "type": "literal" , "value": "Greene" } ,
        "establishment": { "type": "literal" , "value": "87" }
      } ,
      {
        "county": { "type": "literal" , "value": "Oneida" } ,
        "establishment": { "type": "literal" , "value": "571" }
      } ,
      {
        "county": { "type": "literal" , "value": "Warren" } ,
        "establishment": { "type": "literal" , "value": "217" }
      } ,
      {
        "county": { "type": "literal" , "value": "Wyoming" } ,
        "establishment": { "type": "literal" , "value": "68" }
      } ,
      {
        "county": { "type": "literal" , "value": "Orange" } ,
        "establishment": { "type": "literal" , "value": "870" }
      } ,
      {
        "county": { "type": "literal" , "value": "Queens" } ,
        "establishment": { "type": "literal" , "value": "3676" }
      } ,
      {
        "county": { "type": "literal" , "value": "Monroe" } ,
        "establishment": { "type": "literal" , "value": "1745" }
      } ,
      {
        "county": { "type": "literal" , "value": "Yates" } ,
        "establishment": { "type": "literal" , "value": "42" }
      } ,
      {
        "county": { "type": "literal" , "value": "Cortland" } ,
        "establishment": { "type": "literal" , "value": "119" }
      } ,
      {
        "county": { "type": "literal" , "value": "Washington" } ,
        "establishment": { "type": "literal" , "value": "84" }
      } ,
      {
        "county": { "type": "literal" , "value": "New York" } ,
        "establishment": { "type": "literal" , "value": "6617" }
      } ,
      {
        "county": { "type": "literal" , "value": "Delaware" } ,
        "establishment": { "type": "literal" , "value": "110" }
      } ,
      {
        "county": { "type": "literal" , "value": "Chemung" } ,
        "establishment": { "type": "literal" , "value": "225" }
      } ,
      {
        "county": { "type": "literal" , "value": "Schoharie" } ,
        "establishment": { "type": "literal" , "value": "51" }
      } ,
      {
        "county": { "type": "literal" , "value": "Ulster" } ,
        "establishment": { "type": "literal" , "value": "494" }
      }
    ]
  }
}



var nycounties = {
	"type": "FeatureCollection",
	"properties": {
		"kind": "state",
		"state": "ny"
	},
	"features": [
		{"type":"Feature","bbox":[-74.2530,42.4060,-73.6779,42.8223],"properties":{"kind":"county","name":"Albany","state":"ny","center":[-73.9654,42.6145],"centroid":[-73.9770,42.6018]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.8093,42.7784],[-73.7272,42.8223],[-73.6779,42.7839],[-73.7601,42.6086],[-73.7820,42.4662],[-74.2530,42.4060],[-74.2365,42.5758],[-74.1708,42.6689],[-74.1818,42.7291]]]]}},
		{"type":"Feature","bbox":[-78.3114,42.0007,-77.7254,42.5210],"properties":{"kind":"county","name":"Allegany","state":"ny","center":[-78.0184,42.2614],"centroid":[-78.0265,42.2583]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-78.2238,42.5210],[-78.0375,42.5210],[-77.8404,42.5155],[-77.8404,42.4772],[-77.7254,42.4717],[-77.7473,42.0007],[-78.2073,42.0007],[-78.3059,42.0007],[-78.3114,42.5210]]]]}},
		{"type":"Feature","bbox":[-73.9353,40.7958,-73.7820,40.9163],"properties":{"kind":"county","name":"Bronx","state":"ny","center":[-73.8586,40.8561],"centroid":[-73.8603,40.8540]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.9189,40.9108],[-73.9189,40.9163],[-73.7820,40.8834],[-73.7820,40.8396],[-73.8148,40.8341],[-73.7874,40.8013],[-73.8148,40.8067],[-73.9134,40.7958],[-73.9244,40.8779],[-73.9353,40.8834]]]]}},
		{"type":"Feature","bbox":[-76.1316,42.0007,-75.3593,42.4170],"properties":{"kind":"county","name":"Broome","state":"ny","center":[-75.7454,42.2092],"centroid":[-75.8189,42.1613]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.8632,42.4170],[-75.8358,42.2417],[-75.6386,42.2472],[-75.6386,42.1979],[-75.4196,42.1924],[-75.4196,42.0390],[-75.3593,42.0007],[-75.4798,42.0007],[-75.4853,42.0007],[-75.8906,42.0007],[-76.1042,42.0007],[-76.1151,42.1869],[-76.0878,42.1869],[-76.0823,42.2581],[-76.1316,42.4115]]]]}},
		{"type":"Feature","bbox":[-79.0617,42.0007,-78.3059,42.5374],"properties":{"kind":"county","name":"Cattaraugus","state":"ny","center":[-78.6838,42.2697],"centroid":[-78.6790,42.2510]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-79.0015,42.5320],[-78.8865,42.4389],[-78.4647,42.5374],[-78.3114,42.5210],[-78.3059,42.0007],[-78.9193,42.0007],[-79.0617,42.0007],[-79.0617,42.5374]]]]}},
		{"type":"Feature","bbox":[-76.7395,42.6251,-76.2630,43.4192],"properties":{"kind":"county","name":"Cayuga","state":"ny","center":[-76.5013,43.0234],"centroid":[-76.5565,42.9230]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.6190,43.4192],[-76.6026,43.2549],[-76.4821,43.2549],[-76.4766,43.2275],[-76.4711,43.1071],[-76.4985,43.0961],[-76.4492,42.8442],[-76.3561,42.8496],[-76.2740,42.7730],[-76.2630,42.6251],[-76.4602,42.6251],[-76.6683,42.6251],[-76.7395,42.7565],[-76.7121,43.0249],[-76.7231,43.3426]]]]}},
		{"type":"Feature","bbox":[-79.7628,42.0007,-79.0617,42.5703],"properties":{"kind":"county","name":"Chautauqua","state":"ny","center":[-79.4123,42.2862],"centroid":[-79.3696,42.2273]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-79.1384,42.5703],[-79.0617,42.5374],[-79.0617,42.0007],[-79.6094,42.0007],[-79.7628,42.0007],[-79.7628,42.2526],[-79.7628,42.2691],[-79.1384,42.5703]]]]}},
		{"type":"Feature","bbox":[-76.9641,42.0007,-76.5369,42.2965],"properties":{"kind":"county","name":"Chemung","state":"ny","center":[-76.7505,42.1488],"centroid":[-76.7593,42.1403]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.7669,42.2965],[-76.7340,42.2910],[-76.7340,42.2472],[-76.6409,42.2362],[-76.6190,42.2855],[-76.5369,42.2800],[-76.5588,42.0007],[-76.9202,42.0007],[-76.9257,42.0007],[-76.9641,42.0007],[-76.9641,42.2800]]]]}},
		{"type":"Feature","bbox":[-75.8906,42.1924,-75.2936,42.7456],"properties":{"kind":"county","name":"Chenango","state":"ny","center":[-75.5921,42.4696],"centroid":[-75.6089,42.4929]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.3100,42.7456],[-75.2936,42.7456],[-75.3319,42.5648],[-75.4031,42.5101],[-75.3758,42.4115],[-75.4141,42.3129],[-75.4196,42.1924],[-75.6386,42.1979],[-75.6386,42.2472],[-75.8358,42.2417],[-75.8632,42.4170],[-75.8906,42.7237]]]]}},
		{"type":"Feature","bbox":[-74.0284,44.4270,-73.3329,45.0130],"properties":{"kind":"county","name":"Clinton","state":"ny","center":[-73.6806,44.7208],"centroid":[-73.6746,44.7456]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.3438,45.0130],[-73.3383,44.9199],[-73.3821,44.8487],[-73.3329,44.7885],[-73.3876,44.6187],[-73.3602,44.5639],[-73.3383,44.5475],[-73.4643,44.5365],[-73.4972,44.4872],[-73.6724,44.4434],[-73.9079,44.4270],[-74.0284,44.9966]]]]}},
		{"type":"Feature","bbox":[-73.9298,41.9788,-73.3548,42.5101],"properties":{"kind":"county","name":"Columbia","state":"ny","center":[-73.6423,42.2450],"centroid":[-73.6307,42.2538]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.3986,42.5046],[-73.3548,42.5101],[-73.5081,42.0883],[-73.4972,42.0500],[-73.5191,42.0500],[-73.5245,41.9788],[-73.9298,42.0774],[-73.9134,42.1267],[-73.7820,42.2800],[-73.7820,42.4662]]]]}},
		{"type":"Feature","bbox":[-76.2740,42.4060,-75.8632,42.7894],"properties":{"kind":"county","name":"Cortland","state":"ny","center":[-76.0686,42.5980],"centroid":[-76.0702,42.5962]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.9180,42.7894],[-75.8961,42.7894],[-75.8906,42.7237],[-75.8632,42.4170],[-76.1316,42.4115],[-76.2521,42.4060],[-76.2630,42.6251],[-76.2740,42.7730]]]]}},
		{"type":"Feature","bbox":[-75.4196,41.8528,-74.4447,42.5155],"properties":{"kind":"county","name":"Delaware","state":"ny","center":[-74.9321,42.1851],"centroid":[-74.9663,42.1963]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.8445,42.5101],[-74.7130,42.5155],[-74.6199,42.4224],[-74.4447,42.3567],[-74.5378,42.2034],[-74.4501,42.1705],[-74.7788,42.0171],[-74.7897,42.0117],[-75.1457,41.8528],[-75.2607,41.8638],[-75.2772,41.9405],[-75.3593,42.0007],[-75.4196,42.0390],[-75.4196,42.1924],[-75.4141,42.3129],[-75.3100,42.3238],[-75.1895,42.3786],[-75.1950,42.3567]]]]}},
		{"type":"Feature","bbox":[-73.9956,41.4366,-73.4862,42.0774],"properties":{"kind":"county","name":"Dutchess","state":"ny","center":[-73.7409,41.7578],"centroid":[-73.7419,41.7684]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.9298,42.0774],[-73.5245,41.9788],[-73.5191,42.0500],[-73.4972,42.0500],[-73.4862,42.0500],[-73.5191,41.6666],[-73.5300,41.5297],[-73.9353,41.4859],[-73.9791,41.4366],[-73.9956,41.5187],[-73.9517,41.5899],[-73.9408,41.8693],[-73.9627,41.9131]]]]}},
		{"type":"Feature","bbox":[-79.1384,42.4389,-78.4647,43.0961],"properties":{"kind":"county","name":"Erie","state":"ny","center":[-78.8016,42.7684],"centroid":[-78.7338,42.7652]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-78.5524,43.0961],[-78.4647,43.0906],[-78.4647,42.8661],[-78.4867,42.8661],[-78.4867,42.7784],[-78.4647,42.7784],[-78.4647,42.5374],[-78.8865,42.4389],[-79.0015,42.5320],[-79.0617,42.5374],[-79.1384,42.5703],[-79.1384,42.5703],[-79.0508,42.6908],[-78.8536,42.7894],[-78.9193,42.9482],[-79.0179,42.9920],[-79.0234,43.0687],[-78.8427,43.0194],[-78.8317,43.0523],[-78.7276,43.0851],[-78.6400,43.0961],[-78.5962,43.0687]]]]}},
		{"type":"Feature","bbox":[-74.3351,43.7424,-73.2945,44.5475],"properties":{"kind":"county","name":"Essex","state":"ny","center":[-73.8148,44.1463],"centroid":[-73.7728,44.1154]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.3383,44.5475],[-73.2945,44.4379],[-73.3329,44.3667],[-73.3109,44.2627],[-73.3931,44.1915],[-73.4369,44.0436],[-73.4041,44.0162],[-73.3767,43.8081],[-73.4369,43.8026],[-73.8532,43.7643],[-74.0558,43.7424],[-74.0449,43.7971],[-74.1489,43.8300],[-74.2146,43.8081],[-74.3351,43.9231],[-74.2585,43.9724],[-74.2804,44.1203],[-74.0941,44.1367],[-74.1434,44.4051],[-73.9079,44.4270],[-73.6724,44.4434],[-73.4972,44.4872],[-73.4643,44.5365]]]]}},
		{"type":"Feature","bbox":[-74.7240,44.0984,-73.9079,44.9966],"properties":{"kind":"county","name":"Franklin","state":"ny","center":[-74.3160,44.5492],"centroid":[-74.3055,44.5914]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.0284,44.9966],[-73.9079,44.4270],[-74.1434,44.4051],[-74.0941,44.1367],[-74.2804,44.1203],[-74.5378,44.0984],[-74.6418,44.9528],[-74.7185,44.9528],[-74.7240,44.9966]]]]}},
		{"type":"Feature","bbox":[-74.7678,42.9811,-74.0996,43.2878],"properties":{"kind":"county","name":"Fulton","state":"ny","center":[-74.4337,43.1346],"centroid":[-74.4217,43.1162]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.7130,43.2878],[-74.5323,43.2275],[-74.3242,43.2440],[-74.3242,43.2166],[-74.1380,43.2549],[-74.0996,42.9811],[-74.5816,42.9975],[-74.7623,43.0468],[-74.7678,43.1125],[-74.6966,43.1728]]]]}},
		{"type":"Feature","bbox":[-78.4647,42.8606,-77.9061,43.1344],"properties":{"kind":"county","name":"Genesee","state":"ny","center":[-78.1854,42.9977],"centroid":[-78.1943,43.0008]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77.9061,43.1290],[-77.9499,43.0413],[-77.9061,43.0359],[-77.9116,42.9866],[-77.9554,42.8606],[-78.0978,42.8715],[-78.4647,42.8661],[-78.4647,43.0906],[-78.4647,43.1290],[-77.9992,43.1344]]]]}},
		{"type":"Feature","bbox":[-74.5378,42.0993,-73.7820,42.4662],"properties":{"kind":"county","name":"Greene","state":"ny","center":[-74.1599,42.2830],"centroid":[-74.1210,42.2762]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.7820,42.4662],[-73.7820,42.2800],[-73.9134,42.1267],[-74.0175,42.1595],[-74.0449,42.1705],[-74.0722,42.0993],[-74.3077,42.1157],[-74.4501,42.1705],[-74.5378,42.2034],[-74.4447,42.3567],[-74.2749,42.3622],[-74.2420,42.3786],[-74.2530,42.4060]]]]}},
		{"type":"Feature","bbox":[-74.8664,43.2166,-74.0449,44.1203],"properties":{"kind":"county","name":"Hamilton","state":"ny","center":[-74.4556,43.6701],"centroid":[-74.4970,43.6621]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.2804,44.1203],[-74.2585,43.9724],[-74.3351,43.9231],[-74.2146,43.8081],[-74.1489,43.8300],[-74.0449,43.7971],[-74.0558,43.7424],[-74.2146,43.7314],[-74.1599,43.3699],[-74.1380,43.2549],[-74.3242,43.2166],[-74.3242,43.2440],[-74.5323,43.2275],[-74.7130,43.2878],[-74.8664,43.3426],[-74.7733,43.4850],[-74.8554,44.0710],[-74.5378,44.0984]]]]}},
		{"type":"Feature","bbox":[-75.2169,42.8223,-74.6966,44.0984],"properties":{"kind":"county","name":"Herkimer","state":"ny","center":[-74.9568,43.4637],"centroid":[-74.9631,43.4181]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.1676,44.0984],[-75.0636,44.0491],[-74.8554,44.0710],[-74.7733,43.4850],[-74.8664,43.3426],[-74.7130,43.2878],[-74.6966,43.1728],[-74.7678,43.1125],[-74.7623,43.0468],[-74.7404,42.9975],[-74.7623,42.8606],[-74.8773,42.8989],[-74.9047,42.8223],[-75.0964,42.9044],[-75.1402,42.8606],[-75.2114,42.8551],[-75.2114,42.8825],[-75.2169,43.0523],[-75.0690,43.2275],[-75.1622,43.2604],[-75.1457,43.3042],[-75.0745,43.3316],[-75.1129,43.6164]]]]}},
		{"type":"Feature","bbox":[-76.3616,43.6657,-75.4470,44.4051],"properties":{"kind":"county","name":"Jefferson","state":"ny","center":[-75.9043,44.0365],"centroid":[-75.9230,44.0522]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.8577,44.4051],[-75.4470,44.2189],[-75.5455,44.1039],[-75.4853,44.0765],[-75.5017,44.0107],[-75.5510,44.0107],[-75.5455,43.9669],[-75.6058,43.9724],[-75.7591,43.8793],[-75.8413,43.8848],[-75.8522,43.7917],[-75.7865,43.7862],[-75.7756,43.6876],[-76.0275,43.7095],[-76.0220,43.6657],[-76.0878,43.6712],[-76.2028,43.6821],[-76.2302,43.8026],[-76.2849,43.8574],[-76.1316,43.8903],[-76.1316,43.9560],[-76.2685,43.9834],[-76.3014,44.0546],[-76.3616,44.0710],[-76.3561,44.1312],[-76.3123,44.1970],[-76.1918,44.2189],[-76.1644,44.2791]]]]}},
		{"type":"Feature","bbox":[-74.0449,40.5658,-73.8313,40.7410],"properties":{"kind":"county","name":"Kings","state":"ny","center":[-73.9381,40.6534],"centroid":[-73.9410,40.6404]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.9517,40.7410],[-73.8970,40.6808],[-73.8696,40.6972],[-73.8313,40.6315],[-73.8477,40.5877],[-73.9408,40.5658],[-74.0120,40.5767],[-74.0449,40.6260],[-74.0229,40.6808],[-73.9627,40.7355]]]]}},
		{"type":"Feature","bbox":[-75.8522,43.4192,-75.1129,44.2189],"properties":{"kind":"county","name":"Lewis","state":"ny","center":[-75.4826,43.8204],"centroid":[-75.4497,43.7856]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.4470,44.2189],[-75.1676,44.0984],[-75.1129,43.6164],[-75.5346,43.4192],[-75.7537,43.4685],[-75.7756,43.6876],[-75.7865,43.7862],[-75.8522,43.7917],[-75.8413,43.8848],[-75.7591,43.8793],[-75.6058,43.9724],[-75.5455,43.9669],[-75.5510,44.0107],[-75.5017,44.0107],[-75.4853,44.0765],[-75.5455,44.1039]]]]}},
		{"type":"Feature","bbox":[-78.0595,42.4717,-77.4844,42.9866],"properties":{"kind":"county","name":"Livingston","state":"ny","center":[-77.7719,42.7297],"centroid":[-77.7752,42.7270]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77.8239,42.9866],[-77.7308,42.9866],[-77.7308,42.9482],[-77.7582,42.9427],[-77.5830,42.9427],[-77.5446,42.8661],[-77.5884,42.8551],[-77.5994,42.6744],[-77.4844,42.6689],[-77.4898,42.5758],[-77.6487,42.5813],[-77.6596,42.5374],[-77.7199,42.5374],[-77.7254,42.4717],[-77.8404,42.4772],[-77.8404,42.5155],[-78.0375,42.5210],[-78.0595,42.5374],[-78.0266,42.5703],[-78.0485,42.5758],[-77.9554,42.6689],[-77.9554,42.8606],[-77.9116,42.9866]]]]}},
		{"type":"Feature","bbox":[-75.9946,42.7237,-75.2498,43.1837],"properties":{"kind":"county","name":"Madison","state":"ny","center":[-75.6222,42.9541],"centroid":[-75.6698,42.9099]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.9782,43.1673],[-75.9946,43.1837],[-75.8851,43.1563],[-75.7044,43.1509],[-75.5948,43.0359],[-75.5510,43.0359],[-75.5455,42.9318],[-75.4415,42.9318],[-75.4360,42.8606],[-75.2498,42.8715],[-75.2498,42.7894],[-75.2936,42.7456],[-75.3100,42.7456],[-75.8906,42.7237],[-75.8961,42.7894],[-75.9180,43.0851],[-75.9727,43.0906],[-75.9508,43.1344]]]]}},
		{"type":"Feature","bbox":[-77.9992,42.9427,-77.3694,43.3645],"properties":{"kind":"county","name":"Monroe","state":"ny","center":[-77.6843,43.1540],"centroid":[-77.6955,43.1475]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77.3748,43.2768],[-77.3694,43.0359],[-77.4844,43.0359],[-77.4844,42.9427],[-77.5830,42.9427],[-77.7582,42.9427],[-77.7308,42.9482],[-77.7308,42.9866],[-77.8239,42.9866],[-77.9116,42.9866],[-77.9061,43.0359],[-77.9499,43.0413],[-77.9061,43.1290],[-77.9992,43.1344],[-77.9937,43.3645],[-77.7582,43.3426],[-77.5501,43.2385]]]]}},
		{"type":"Feature","bbox":[-74.7623,42.7730,-74.0832,43.0468],"properties":{"kind":"county","name":"Montgomery","state":"ny","center":[-74.4228,42.9100],"centroid":[-74.4405,42.9031]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.5816,42.9975],[-74.0996,42.9811],[-74.0941,42.9537],[-74.0832,42.8989],[-74.2639,42.7949],[-74.4556,42.7730],[-74.6473,42.8277],[-74.7623,42.8606],[-74.7404,42.9975],[-74.7623,43.0468]]]]}},
		{"type":"Feature","bbox":[-73.7655,40.5877,-73.4260,40.9218],"properties":{"kind":"county","name":"Nassau","state":"ny","center":[-73.5957,40.7549],"centroid":[-73.5889,40.7427]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.4972,40.9218],[-73.4533,40.8396],[-73.4260,40.6096],[-73.7546,40.5877],[-73.7655,40.6260],[-73.7272,40.6534],[-73.7272,40.7191],[-73.6998,40.7410],[-73.7655,40.8013],[-73.7272,40.8670],[-73.6779,40.8560],[-73.6341,40.8998]]]]}},
		{"type":"Feature","bbox":[-74.0229,40.6808,-73.9134,40.8834],"properties":{"kind":"county","name":"New York","state":"ny","center":[-73.9682,40.7822],"centroid":[-73.9625,40.7836]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.9244,40.8779],[-73.9134,40.7958],[-73.9627,40.7355],[-74.0229,40.6808],[-74.0229,40.7082],[-73.9846,40.7958],[-73.9353,40.8834]]]]}},
		{"type":"Feature","bbox":[-79.0727,43.0194,-78.4647,43.3699],"properties":{"kind":"county","name":"Niagara","state":"ny","center":[-78.7687,43.1949],"centroid":[-78.7500,43.1943]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-78.4647,43.3699],[-78.4647,43.1290],[-78.4647,43.0906],[-78.5524,43.0961],[-78.5962,43.0687],[-78.6400,43.0961],[-78.7276,43.0851],[-78.8317,43.0523],[-78.8427,43.0194],[-79.0234,43.0687],[-79.0727,43.0797],[-79.0398,43.1454],[-79.0727,43.2604]]]]}},
		{"type":"Feature","bbox":[-75.8851,42.8606,-75.0690,43.6164],"properties":{"kind":"county","name":"Oneida","state":"ny","center":[-75.4771,43.2397],"centroid":[-75.4371,43.2417]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.1129,43.6164],[-75.0745,43.3316],[-75.1457,43.3042],[-75.1622,43.2604],[-75.0690,43.2275],[-75.2169,43.0523],[-75.2114,42.8825],[-75.2498,42.8715],[-75.4360,42.8606],[-75.4415,42.9318],[-75.5455,42.9318],[-75.5510,43.0359],[-75.5948,43.0359],[-75.7044,43.1509],[-75.8851,43.1563],[-75.8632,43.3207],[-75.8851,43.3261],[-75.8139,43.4850],[-75.7537,43.4685],[-75.5346,43.4192]]]]}},
		{"type":"Feature","bbox":[-76.4985,42.7730,-75.8961,43.2659],"properties":{"kind":"county","name":"Onondaga","state":"ny","center":[-76.1973,43.0199],"centroid":[-76.1947,43.0054]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.1699,43.2495],[-75.9946,43.1837],[-75.9782,43.1673],[-75.9508,43.1344],[-75.9727,43.0906],[-75.9180,43.0851],[-75.8961,42.7894],[-75.9180,42.7894],[-76.2740,42.7730],[-76.3561,42.8496],[-76.4492,42.8442],[-76.4985,43.0961],[-76.4711,43.1071],[-76.4766,43.2275],[-76.3068,43.2330],[-76.2794,43.2002],[-76.2685,43.2385],[-76.2192,43.2056],[-76.1918,43.2166],[-76.2082,43.2659]]]]}},
		{"type":"Feature","bbox":[-77.5994,42.5758,-76.9641,43.0413],"properties":{"kind":"county","name":"Ontario","state":"ny","center":[-77.2817,42.8090],"centroid":[-77.2990,42.8540]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77.1229,43.0139],[-76.9641,43.0139],[-76.9750,42.7620],[-77.3146,42.7620],[-77.3694,42.6689],[-77.3639,42.5758],[-77.4898,42.5758],[-77.4844,42.6689],[-77.5994,42.6744],[-77.5884,42.8551],[-77.5446,42.8661],[-77.5830,42.9427],[-77.4844,42.9427],[-77.4844,43.0359],[-77.3694,43.0359],[-77.1338,43.0413]]]]}},
		{"type":"Feature","bbox":[-74.7623,41.1408,-73.9463,41.6338],"properties":{"kind":"county","name":"Orange","state":"ny","center":[-74.3543,41.3878],"centroid":[-74.3053,41.4010]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.2639,41.6338],[-74.1873,41.5899],[-74.1270,41.5845],[-74.1325,41.6173],[-74.0558,41.5790],[-73.9517,41.5899],[-73.9956,41.5187],[-73.9791,41.4366],[-73.9463,41.3928],[-73.9791,41.3270],[-74.2365,41.1408],[-74.3680,41.2011],[-74.6966,41.3599],[-74.7569,41.4256],[-74.7623,41.4914],[-74.4775,41.5023],[-74.3680,41.5899]]]]}},
		{"type":"Feature","bbox":[-78.4647,43.1290,-77.9937,43.3699],"properties":{"kind":"county","name":"Orleans","state":"ny","center":[-78.2292,43.2496],"centroid":[-78.2324,43.2497]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77.9937,43.3645],[-77.9992,43.1344],[-78.4647,43.1290],[-78.4647,43.3699]]]]}},
		{"type":"Feature","bbox":[-76.6190,43.1563,-75.7537,43.7095],"properties":{"kind":"county","name":"Oswego","state":"ny","center":[-76.1863,43.4336],"centroid":[-76.1440,43.4290]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.0878,43.6712],[-76.0220,43.6657],[-76.0275,43.7095],[-75.7756,43.6876],[-75.7537,43.4685],[-75.8139,43.4850],[-75.8851,43.3261],[-75.8632,43.3207],[-75.8851,43.1563],[-75.9946,43.1837],[-76.1699,43.2495],[-76.2082,43.2659],[-76.1918,43.2166],[-76.2192,43.2056],[-76.2685,43.2385],[-76.2794,43.2002],[-76.3068,43.2330],[-76.4766,43.2275],[-76.4821,43.2549],[-76.6026,43.2549],[-76.6190,43.4192],[-76.4164,43.5233],[-76.2302,43.5343],[-76.2028,43.6821]]]]}},
		{"type":"Feature","bbox":[-75.4141,42.3129,-74.6309,42.9044],"properties":{"kind":"county","name":"Otsego","state":"ny","center":[-75.0225,42.6094],"centroid":[-75.0315,42.6317]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-75.0964,42.9044],[-74.9047,42.8223],[-74.8773,42.8989],[-74.7623,42.8606],[-74.6473,42.8277],[-74.6692,42.7511],[-74.6309,42.6251],[-74.7130,42.5155],[-74.8445,42.5101],[-75.1950,42.3567],[-75.1895,42.3786],[-75.3100,42.3238],[-75.4141,42.3129],[-75.3758,42.4115],[-75.4031,42.5101],[-75.3319,42.5648],[-75.2936,42.7456],[-75.2498,42.7894],[-75.2498,42.8715],[-75.2114,42.8825],[-75.2114,42.8551],[-75.1402,42.8606]]]]}},
		{"type":"Feature","bbox":[-73.9846,41.3216,-73.5300,41.5297],"properties":{"kind":"county","name":"Putnam","state":"ny","center":[-73.7573,41.4257],"centroid":[-73.7494,41.4257]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.5300,41.5297],[-73.5465,41.3654],[-73.6615,41.3544],[-73.9846,41.3216],[-73.9791,41.3270],[-73.9463,41.3928],[-73.9791,41.4366],[-73.9353,41.4859]]]]}},
		{"type":"Feature","bbox":[-73.9627,40.5438,-73.6998,40.8067],"properties":{"kind":"county","name":"Queens","state":"ny","center":[-73.8313,40.6754],"centroid":[-73.8224,40.7012]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.8148,40.8067],[-73.7874,40.8013],[-73.7655,40.8013],[-73.6998,40.7410],[-73.7272,40.7191],[-73.7272,40.6534],[-73.7655,40.6260],[-73.7546,40.5877],[-73.9353,40.5438],[-73.9408,40.5658],[-73.8477,40.5877],[-73.8313,40.6315],[-73.8696,40.6972],[-73.8970,40.6808],[-73.9517,40.7410],[-73.9627,40.7355],[-73.9134,40.7958]]]]}},
		{"type":"Feature","bbox":[-73.7820,42.4662,-73.2671,42.9482],"properties":{"kind":"county","name":"Rensselaer","state":"ny","center":[-73.5245,42.7077],"centroid":[-73.5124,42.7113]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.3876,42.9482],[-73.2726,42.9427],[-73.2890,42.8003],[-73.2671,42.7456],[-73.3548,42.5101],[-73.3986,42.5046],[-73.7820,42.4662],[-73.7601,42.6086],[-73.6779,42.7839],[-73.6834,42.8989],[-73.6341,42.9427]]]]}},
		{"type":"Feature","bbox":[-74.2475,40.4946,-74.0668,40.6479],"properties":{"kind":"county","name":"Richmond","state":"ny","center":[-74.1571,40.5713],"centroid":[-74.1547,40.5851]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.0887,40.6479],[-74.0668,40.5822],[-74.2475,40.4946],[-74.1873,40.6424]]]]}},
		{"type":"Feature","bbox":[-74.2365,40.9984,-73.8860,41.3270],"properties":{"kind":"county","name":"Rockland","state":"ny","center":[-74.0613,41.1629],"centroid":[-74.0229,41.1542]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.9846,41.3216],[-73.9463,41.2887],[-73.9682,41.2504],[-73.8860,41.1408],[-73.8915,40.9984],[-74.2146,41.1354],[-74.2365,41.1408],[-73.9791,41.3270]]]]}},
		{"type":"Feature","bbox":[-74.1599,42.7784,-73.5793,43.3973],"properties":{"kind":"county","name":"Saratoga","state":"ny","center":[-73.8696,43.0887],"centroid":[-73.8668,43.1080]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.8860,43.3973],[-73.8258,43.3042],[-73.8367,43.2495],[-73.7710,43.2221],[-73.7327,43.2714],[-73.6669,43.2659],[-73.6724,43.2933],[-73.5957,43.3042],[-73.5793,43.0578],[-73.6341,42.9427],[-73.6834,42.8989],[-73.6779,42.7839],[-73.7272,42.8223],[-73.8093,42.7784],[-73.8970,42.8496],[-73.9025,42.9099],[-73.9572,42.8989],[-74.0941,42.9537],[-74.0996,42.9811],[-74.1380,43.2549],[-74.1599,43.3699]]]]}},
		{"type":"Feature","bbox":[-74.3077,42.7127,-73.8093,42.9537],"properties":{"kind":"county","name":"Schenectady","state":"ny","center":[-74.0585,42.8333],"centroid":[-74.0574,42.8157]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.0941,42.9537],[-73.9572,42.8989],[-73.9025,42.9099],[-73.8970,42.8496],[-73.8093,42.7784],[-74.1818,42.7291],[-74.2749,42.7127],[-74.3077,42.7511],[-74.2530,42.7620],[-74.2639,42.7949],[-74.0832,42.8989]]]]}},
		{"type":"Feature","bbox":[-74.7130,42.3567,-74.1708,42.8277],"properties":{"kind":"county","name":"Schoharie","state":"ny","center":[-74.4419,42.5927],"centroid":[-74.4432,42.5859]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.6473,42.8277],[-74.4556,42.7730],[-74.2639,42.7949],[-74.2530,42.7620],[-74.3077,42.7511],[-74.2749,42.7127],[-74.1818,42.7291],[-74.1708,42.6689],[-74.2365,42.5758],[-74.2530,42.4060],[-74.2420,42.3786],[-74.2749,42.3622],[-74.4447,42.3567],[-74.6199,42.4224],[-74.7130,42.5155],[-74.6309,42.6251],[-74.6692,42.7511]]]]}},
		{"type":"Feature","bbox":[-77.1065,42.2362,-76.6190,42.5484],"properties":{"kind":"county","name":"Schuyler","state":"ny","center":[-76.8627,42.3925],"centroid":[-76.8751,42.3924]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.7012,42.5484],[-76.6957,42.5484],[-76.6902,42.2855],[-76.6190,42.2855],[-76.6409,42.2362],[-76.7340,42.2472],[-76.7340,42.2910],[-76.7669,42.2965],[-76.9641,42.2800],[-77.1010,42.2746],[-77.1065,42.4827],[-76.8874,42.4608],[-76.8929,42.5429]]]]}},
		{"type":"Feature","bbox":[-76.9750,42.5429,-76.5862,43.0249],"properties":{"kind":"county","name":"Seneca","state":"ny","center":[-76.7806,42.7844],"centroid":[-76.8228,42.7827]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.7121,43.0249],[-76.7395,42.7565],[-76.6683,42.6251],[-76.5862,42.5484],[-76.6957,42.5484],[-76.7012,42.5484],[-76.8929,42.5429],[-76.8983,42.6634],[-76.9750,42.7620],[-76.9641,43.0139]]]]}},
		{"type":"Feature","bbox":[-75.8577,44.0491,-74.5378,45.0185],"properties":{"kind":"county","name":"St. Lawrence","state":"ny","center":[-75.1978,44.5358],"centroid":[-75.0722,44.5000]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.7240,44.9966],[-74.7185,44.9528],[-74.6418,44.9528],[-74.5378,44.0984],[-74.8554,44.0710],[-75.0636,44.0491],[-75.1676,44.0984],[-75.4470,44.2189],[-75.8577,44.4051],[-75.7646,44.5146],[-75.3100,44.8378],[-74.9705,44.9856],[-74.8281,45.0185]]]]}},
		{"type":"Feature","bbox":[-77.7473,42.0007,-76.9641,42.5813],"properties":{"kind":"county","name":"Steuben","state":"ny","center":[-77.3557,42.2917],"centroid":[-77.3821,42.2682]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-77.6487,42.5813],[-77.4898,42.5758],[-77.3639,42.5758],[-77.1448,42.5758],[-77.1503,42.4991],[-77.1065,42.5046],[-77.1065,42.4827],[-77.1010,42.2746],[-76.9641,42.2800],[-76.9641,42.0007],[-77.6103,42.0007],[-77.7473,42.0007],[-77.7254,42.4717],[-77.7199,42.5374],[-77.6596,42.5374]]]]}},
		{"type":"Feature","bbox":[-73.4972,40.6096,-71.8541,41.1573],"properties":{"kind":"county","name":"Suffolk","state":"ny","center":[-72.6756,40.8840],"centroid":[-72.8608,40.8642]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.4260,40.6096],[-73.4533,40.8396],[-73.4972,40.9218],[-73.4862,40.9437],[-73.4041,40.9218],[-73.3931,40.9546],[-73.2288,40.9053],[-73.1083,40.9710],[-72.7742,40.9656],[-72.5880,40.9984],[-72.2813,41.1573],[-72.2375,41.1573],[-72.2977,41.1134],[-72.3251,41.1299],[-72.3196,41.0861],[-72.2594,41.0422],[-72.1553,41.0532],[-72.1005,40.9930],[-71.9581,41.0696],[-71.8541,41.0696],[-72.3963,40.8670],[-73.0535,40.6643]]],[[[-72.0786,41.0915],[-72.0951,41.0532],[-72.1444,41.0970]]]]}},
		{"type":"Feature","bbox":[-75.1457,41.4256,-74.3680,42.0171],"properties":{"kind":"county","name":"Sullivan","state":"ny","center":[-74.7569,41.7221],"centroid":[-74.7668,41.7154]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.7897,42.0117],[-74.7788,42.0171],[-74.4556,41.8747],[-74.5761,41.7433],[-74.3954,41.6447],[-74.3680,41.5899],[-74.4775,41.5023],[-74.7623,41.4914],[-74.7569,41.4256],[-74.9814,41.4804],[-75.0690,41.6009],[-75.0417,41.6228],[-75.0526,41.7542],[-75.1019,41.7762],[-75.0745,41.8145],[-75.1457,41.8528]]]]}},
		{"type":"Feature","bbox":[-76.5588,42.0007,-76.0823,42.4115],"properties":{"kind":"county","name":"Tioga","state":"ny","center":[-76.3205,42.2064],"centroid":[-76.3062,42.1705]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.1316,42.4115],[-76.0823,42.2581],[-76.0878,42.1869],[-76.1151,42.1869],[-76.1042,42.0007],[-76.1480,42.0007],[-76.5588,42.0007],[-76.5369,42.2800],[-76.4164,42.2636],[-76.4164,42.3184],[-76.2521,42.2965],[-76.2411,42.3622],[-76.3014,42.3841],[-76.2521,42.4060]]]]}},
		{"type":"Feature","bbox":[-76.6957,42.2636,-76.2411,42.6251],"properties":{"kind":"county","name":"Tompkins","state":"ny","center":[-76.4684,42.4446],"centroid":[-76.4719,42.4521]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.4602,42.6251],[-76.2630,42.6251],[-76.2521,42.4060],[-76.3014,42.3841],[-76.2411,42.3622],[-76.2521,42.2965],[-76.4164,42.3184],[-76.4164,42.2636],[-76.5369,42.2800],[-76.6190,42.2855],[-76.6902,42.2855],[-76.6957,42.5484],[-76.5862,42.5484],[-76.6683,42.6251]]]]}},
		{"type":"Feature","bbox":[-74.7788,41.5790,-73.9134,42.1705],"properties":{"kind":"county","name":"Ulster","state":"ny","center":[-74.3461,41.8754],"centroid":[-74.2594,41.8876]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-74.0175,42.1595],[-73.9134,42.1267],[-73.9298,42.0774],[-73.9627,41.9131],[-73.9408,41.8693],[-73.9517,41.5899],[-74.0558,41.5790],[-74.1325,41.6173],[-74.1270,41.5845],[-74.1873,41.5899],[-74.2639,41.6338],[-74.3680,41.5899],[-74.3954,41.6447],[-74.5761,41.7433],[-74.4556,41.8747],[-74.7788,42.0171],[-74.4501,42.1705],[-74.3077,42.1157],[-74.0722,42.0993],[-74.0449,42.1705]]]]}},
		{"type":"Feature","bbox":[-74.2146,43.2221,-73.4369,43.8026],"properties":{"kind":"county","name":"Warren","state":"ny","center":[-73.8258,43.5130],"centroid":[-73.8477,43.5595]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.8532,43.7643],[-73.4369,43.8026],[-73.4698,43.7752],[-73.4917,43.6547],[-73.6122,43.5616],[-73.6341,43.5123],[-73.5957,43.3042],[-73.6724,43.2933],[-73.6669,43.2659],[-73.7327,43.2714],[-73.7710,43.2221],[-73.8367,43.2495],[-73.8258,43.3042],[-73.8860,43.3973],[-74.1599,43.3699],[-74.2146,43.7314],[-74.0558,43.7424]]]]}},
		{"type":"Feature","bbox":[-73.6341,42.9427,-73.2507,43.8081],"properties":{"kind":"county","name":"Washington","state":"ny","center":[-73.4424,43.3770],"centroid":[-73.4324,43.3142]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.3767,43.8081],[-73.3657,43.7533],[-73.4314,43.5890],[-73.3931,43.5671],[-73.3712,43.6219],[-73.3055,43.6274],[-73.2945,43.5781],[-73.2507,43.5562],[-73.2562,43.3152],[-73.2726,42.9427],[-73.3876,42.9482],[-73.6341,42.9427],[-73.5793,43.0578],[-73.5957,43.3042],[-73.6341,43.5123],[-73.6122,43.5616],[-73.4917,43.6547],[-73.4698,43.7752],[-73.4369,43.8026]]]]}},
		{"type":"Feature","bbox":[-77.3748,43.0139,-76.7121,43.3426],"properties":{"kind":"county","name":"Wayne","state":"ny","center":[-77.0435,43.1785],"centroid":[-77.0283,43.1560]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.7231,43.3426],[-76.7121,43.0249],[-76.9641,43.0139],[-77.1229,43.0139],[-77.1338,43.0413],[-77.3694,43.0359],[-77.3748,43.2768],[-76.9586,43.2714]]]]}},
		{"type":"Feature","bbox":[-73.9846,40.8834,-73.4807,41.3654],"properties":{"kind":"county","name":"Westchester","state":"ny","center":[-73.7327,41.1248],"centroid":[-73.7559,41.1633]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-73.6615,41.3544],[-73.5465,41.3654],[-73.5519,41.2942],[-73.4807,41.2120],[-73.7272,41.1025],[-73.6560,40.9875],[-73.7820,40.8834],[-73.9189,40.9163],[-73.8915,40.9984],[-73.8860,41.1408],[-73.9682,41.2504],[-73.9463,41.2887],[-73.9846,41.3216]]]]}},
		{"type":"Feature","bbox":[-78.4867,42.5210,-77.9554,42.8715],"properties":{"kind":"county","name":"Wyoming","state":"ny","center":[-78.2210,42.6965],"centroid":[-78.2236,42.7038]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-78.0978,42.8715],[-77.9554,42.8606],[-77.9554,42.6689],[-78.0485,42.5758],[-78.0266,42.5703],[-78.0595,42.5374],[-78.0375,42.5210],[-78.2238,42.5210],[-78.3114,42.5210],[-78.4647,42.5374],[-78.4647,42.7784],[-78.4867,42.7784],[-78.4867,42.8661],[-78.4647,42.8661]]]]}},
		{"type":"Feature","bbox":[-77.3694,42.4608,-76.8874,42.7620],"properties":{"kind":"county","name":"Yates","state":"ny","center":[-77.1284,42.6116],"centroid":[-77.1059,42.6311]},"geometry":{"type":"MultiPolygon","coordinates":[[[[-76.9750,42.7620],[-76.8983,42.6634],[-76.8929,42.5429],[-76.8874,42.4608],[-77.1065,42.4827],[-77.1065,42.5046],[-77.1503,42.4991],[-77.1448,42.5758],[-77.3639,42.5758],[-77.3694,42.6689],[-77.3146,42.7620]]]]}}
	]
}


import form from "./form";

let nuts = {
  "@context": {
    "@base": "http://dd.eionet.europa.eu/vocabulary/common/nuts/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "concepts": "skos:Concept",
    "prefLabel": "skos:prefLabel",
    "broader": "skos:broader",
    "narrower": "skos:narrower",
    "@language": "en"
  },
  "concepts": [
    {
      "@id": "AT",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ÖSTERREICH",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "AT1"
        },
        {
          "@id": "AT2"
        },
        {
          "@id": "AT3"
        },
        {
          "@id": "ATZ"
        }
      ]
    },
    {
      "@id": "AT1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "OSTÖSTERREICH",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT"
        }
      ],
      "narrower": [
        {
          "@id": "AT11"
        },
        {
          "@id": "AT12"
        },
        {
          "@id": "AT13"
        }
      ]
    },
    {
      "@id": "AT11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Burgenland (AT)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT1"
        }
      ],
      "narrower": [
        {
          "@id": "AT111"
        },
        {
          "@id": "AT112"
        },
        {
          "@id": "AT113"
        }
      ]
    },
    {
      "@id": "AT111",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mittelburgenland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT11"
        }
      ]
    },
    {
      "@id": "AT112",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordburgenland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT11"
        }
      ]
    },
    {
      "@id": "AT113",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Südburgenland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT11"
        }
      ]
    },
    {
      "@id": "AT12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Niederösterreich",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT1"
        }
      ],
      "narrower": [
        {
          "@id": "AT121"
        },
        {
          "@id": "AT122"
        },
        {
          "@id": "AT123"
        },
        {
          "@id": "AT124"
        },
        {
          "@id": "AT125"
        },
        {
          "@id": "AT126"
        },
        {
          "@id": "AT127"
        }
      ]
    },
    {
      "@id": "AT121",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mostviertel-Eisenwurzen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT12"
        }
      ]
    },
    {
      "@id": "AT122",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Niederösterreich-Süd",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT12"
        }
      ]
    },
    {
      "@id": "AT123",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sankt Pölten",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT12"
        }
      ]
    },
    {
      "@id": "AT124",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Waldviertel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT12"
        }
      ]
    },
    {
      "@id": "AT125",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Weinviertel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT12"
        }
      ]
    },
    {
      "@id": "AT126",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wiener Umland/Nordteil",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT12"
        }
      ]
    },
    {
      "@id": "AT127",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wiener Umland/Südteil",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT12"
        }
      ]
    },
    {
      "@id": "AT13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wien",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT1"
        }
      ],
      "narrower": [
        {
          "@id": "AT130"
        }
      ]
    },
    {
      "@id": "AT130",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wien",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT13"
        }
      ]
    },
    {
      "@id": "AT2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SÜDÖSTERREICH",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT"
        }
      ],
      "narrower": [
        {
          "@id": "AT21"
        },
        {
          "@id": "AT22"
        }
      ]
    },
    {
      "@id": "AT21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kärnten",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT2"
        }
      ],
      "narrower": [
        {
          "@id": "AT211"
        },
        {
          "@id": "AT212"
        },
        {
          "@id": "AT213"
        }
      ]
    },
    {
      "@id": "AT211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Klagenfurt-Villach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT21"
        }
      ]
    },
    {
      "@id": "AT212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberkärnten",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT21"
        }
      ]
    },
    {
      "@id": "AT213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Unterkärnten",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT21"
        }
      ]
    },
    {
      "@id": "AT22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Steiermark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT2"
        }
      ],
      "narrower": [
        {
          "@id": "AT221"
        },
        {
          "@id": "AT222"
        },
        {
          "@id": "AT223"
        },
        {
          "@id": "AT224"
        },
        {
          "@id": "AT225"
        },
        {
          "@id": "AT226"
        }
      ]
    },
    {
      "@id": "AT221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Graz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT22"
        }
      ]
    },
    {
      "@id": "AT222",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liezen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT22"
        }
      ]
    },
    {
      "@id": "AT223",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Östliche Obersteiermark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT22"
        }
      ]
    },
    {
      "@id": "AT224",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oststeiermark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT22"
        }
      ]
    },
    {
      "@id": "AT225",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West- und Südsteiermark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT22"
        }
      ]
    },
    {
      "@id": "AT226",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Westliche Obersteiermark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT22"
        }
      ]
    },
    {
      "@id": "AT3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "WESTÖSTERREICH",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT"
        }
      ],
      "narrower": [
        {
          "@id": "AT31"
        },
        {
          "@id": "AT32"
        },
        {
          "@id": "AT33"
        },
        {
          "@id": "AT34"
        }
      ]
    },
    {
      "@id": "AT31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberösterreich",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT3"
        }
      ],
      "narrower": [
        {
          "@id": "AT311"
        },
        {
          "@id": "AT312"
        },
        {
          "@id": "AT313"
        },
        {
          "@id": "AT314"
        },
        {
          "@id": "AT315"
        }
      ]
    },
    {
      "@id": "AT311",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Innviertel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT31"
        }
      ]
    },
    {
      "@id": "AT312",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Linz-Wels",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT31"
        }
      ]
    },
    {
      "@id": "AT313",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mühlviertel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT31"
        }
      ]
    },
    {
      "@id": "AT314",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Steyr-Kirchdorf",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT31"
        }
      ]
    },
    {
      "@id": "AT315",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Traunviertel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT31"
        }
      ]
    },
    {
      "@id": "AT32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Salzburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT3"
        }
      ],
      "narrower": [
        {
          "@id": "AT321"
        },
        {
          "@id": "AT322"
        },
        {
          "@id": "AT323"
        }
      ]
    },
    {
      "@id": "AT321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lungau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT32"
        }
      ]
    },
    {
      "@id": "AT322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pinzgau-Pongau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT32"
        }
      ]
    },
    {
      "@id": "AT323",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Salzburg und Umgebung",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT32"
        }
      ]
    },
    {
      "@id": "AT33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tirol",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT3"
        }
      ],
      "narrower": [
        {
          "@id": "AT331"
        },
        {
          "@id": "AT332"
        },
        {
          "@id": "AT333"
        },
        {
          "@id": "AT334"
        },
        {
          "@id": "AT335"
        }
      ]
    },
    {
      "@id": "AT331",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Außerfern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT33"
        }
      ]
    },
    {
      "@id": "AT332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Innsbruck",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT33"
        }
      ]
    },
    {
      "@id": "AT333",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osttirol",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT33"
        }
      ]
    },
    {
      "@id": "AT334",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tiroler Oberland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT33"
        }
      ]
    },
    {
      "@id": "AT335",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tiroler Unterland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT33"
        }
      ]
    },
    {
      "@id": "AT34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vorarlberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT3"
        }
      ],
      "narrower": [
        {
          "@id": "AT341"
        },
        {
          "@id": "AT342"
        }
      ]
    },
    {
      "@id": "AT341",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bludenz-Bregenzer Wald",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT34"
        }
      ]
    },
    {
      "@id": "AT342",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rheintal-Bodenseegebiet",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT34"
        }
      ]
    },
    {
      "@id": "ATZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "AT"
        }
      ],
      "narrower": [
        {
          "@id": "ATZZ"
        }
      ]
    },
    {
      "@id": "ATZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ATZ"
        }
      ],
      "narrower": [
        {
          "@id": "ATZZZ"
        }
      ]
    },
    {
      "@id": "ATZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ATZZ"
        }
      ]
    },
    {
      "@id": "BE",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "BELGIQUE-BELGIË",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "BE1"
        },
        {
          "@id": "BE2"
        },
        {
          "@id": "BE3"
        },
        {
          "@id": "BEZ"
        }
      ]
    },
    {
      "@id": "BE1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "RÉGION DE BRUXELLES-CAPITALE / BRUSSELS HOOFDSTEDELIJK GEWEST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE"
        }
      ],
      "narrower": [
        {
          "@id": "BE10"
        }
      ]
    },
    {
      "@id": "BE10",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Région de Bruxelles-Capitale / Brussels Hoofdstedelijk Gewest",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE1"
        }
      ],
      "narrower": [
        {
          "@id": "BE100"
        }
      ]
    },
    {
      "@id": "BE100",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. de Bruxelles-Capitale / Arr. van Brussel-Hoofdstad",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE10"
        }
      ]
    },
    {
      "@id": "BE2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "VLAAMS GEWEST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE"
        }
      ],
      "narrower": [
        {
          "@id": "BE21"
        },
        {
          "@id": "BE22"
        },
        {
          "@id": "BE23"
        },
        {
          "@id": "BE24"
        },
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Antwerpen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE2"
        }
      ],
      "narrower": [
        {
          "@id": "BE211"
        },
        {
          "@id": "BE212"
        },
        {
          "@id": "BE213"
        }
      ]
    },
    {
      "@id": "BE211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Antwerpen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE21"
        }
      ]
    },
    {
      "@id": "BE212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Mechelen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE21"
        }
      ]
    },
    {
      "@id": "BE213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Turnhout",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE21"
        }
      ]
    },
    {
      "@id": "BE22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Limburg (BE)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE2"
        }
      ],
      "narrower": [
        {
          "@id": "BE221"
        },
        {
          "@id": "BE222"
        },
        {
          "@id": "BE223"
        }
      ]
    },
    {
      "@id": "BE221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Hasselt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE22"
        }
      ]
    },
    {
      "@id": "BE222",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Maaseik",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE22"
        }
      ]
    },
    {
      "@id": "BE223",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Tongeren",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE22"
        }
      ]
    },
    {
      "@id": "BE23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Oost-Vlaanderen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE2"
        }
      ],
      "narrower": [
        {
          "@id": "BE231"
        },
        {
          "@id": "BE232"
        },
        {
          "@id": "BE233"
        },
        {
          "@id": "BE234"
        },
        {
          "@id": "BE235"
        },
        {
          "@id": "BE236"
        }
      ]
    },
    {
      "@id": "BE231",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Aalst",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE23"
        }
      ]
    },
    {
      "@id": "BE232",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Dendermonde",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE23"
        }
      ]
    },
    {
      "@id": "BE233",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Eeklo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE23"
        }
      ]
    },
    {
      "@id": "BE234",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Gent",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE23"
        }
      ]
    },
    {
      "@id": "BE235",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Oudenaarde",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE23"
        }
      ]
    },
    {
      "@id": "BE236",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Sint-Niklaas",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE23"
        }
      ]
    },
    {
      "@id": "BE24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Vlaams-Brabant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE2"
        }
      ],
      "narrower": [
        {
          "@id": "BE241"
        },
        {
          "@id": "BE242"
        }
      ]
    },
    {
      "@id": "BE241",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Halle-Vilvoorde",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE24"
        }
      ]
    },
    {
      "@id": "BE242",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Leuven",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE24"
        }
      ]
    },
    {
      "@id": "BE25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. West-Vlaanderen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE2"
        }
      ],
      "narrower": [
        {
          "@id": "BE251"
        },
        {
          "@id": "BE252"
        },
        {
          "@id": "BE253"
        },
        {
          "@id": "BE254"
        },
        {
          "@id": "BE255"
        },
        {
          "@id": "BE256"
        },
        {
          "@id": "BE257"
        },
        {
          "@id": "BE258"
        }
      ]
    },
    {
      "@id": "BE251",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Brugge",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE252",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Diksmuide",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE253",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Ieper",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE254",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Kortrijk",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE255",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Oostende",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE256",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Roeselare",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE257",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Tielt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE258",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Veurne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE25"
        }
      ]
    },
    {
      "@id": "BE3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "RÉGION WALLONNE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE"
        }
      ],
      "narrower": [
        {
          "@id": "BE31"
        },
        {
          "@id": "BE32"
        },
        {
          "@id": "BE33"
        },
        {
          "@id": "BE34"
        },
        {
          "@id": "BE35"
        }
      ]
    },
    {
      "@id": "BE31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Brabant Wallon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE3"
        }
      ],
      "narrower": [
        {
          "@id": "BE310"
        }
      ]
    },
    {
      "@id": "BE310",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Nivelles",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE31"
        }
      ]
    },
    {
      "@id": "BE32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Hainaut",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE3"
        }
      ],
      "narrower": [
        {
          "@id": "BE321"
        },
        {
          "@id": "BE322"
        },
        {
          "@id": "BE323"
        },
        {
          "@id": "BE324"
        },
        {
          "@id": "BE325"
        },
        {
          "@id": "BE326"
        },
        {
          "@id": "BE327"
        }
      ]
    },
    {
      "@id": "BE321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Ath",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE32"
        }
      ]
    },
    {
      "@id": "BE322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Charleroi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE32"
        }
      ]
    },
    {
      "@id": "BE323",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Mons",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE32"
        }
      ]
    },
    {
      "@id": "BE324",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Mouscron",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE32"
        }
      ]
    },
    {
      "@id": "BE325",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Soignies",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE32"
        }
      ]
    },
    {
      "@id": "BE326",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Thuin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE32"
        }
      ]
    },
    {
      "@id": "BE327",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Tournai",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE32"
        }
      ]
    },
    {
      "@id": "BE33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Liège",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE3"
        }
      ],
      "narrower": [
        {
          "@id": "BE331"
        },
        {
          "@id": "BE332"
        },
        {
          "@id": "BE333"
        },
        {
          "@id": "BE334"
        },
        {
          "@id": "BE335"
        },
        {
          "@id": "BE336"
        }
      ]
    },
    {
      "@id": "BE331",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Huy",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE33"
        }
      ]
    },
    {
      "@id": "BE332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Liège",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE33"
        }
      ]
    },
    {
      "@id": "BE334",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Waremme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE33"
        }
      ]
    },
    {
      "@id": "BE335",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Verviers - communes francophones",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE33"
        }
      ]
    },
    {
      "@id": "BE336",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bezirk Verviers - Deutschsprachige Gemeinschaft",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE33"
        }
      ]
    },
    {
      "@id": "BE34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Luxembourg (BE)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE3"
        }
      ],
      "narrower": [
        {
          "@id": "BE341"
        },
        {
          "@id": "BE342"
        },
        {
          "@id": "BE343"
        },
        {
          "@id": "BE344"
        },
        {
          "@id": "BE345"
        }
      ]
    },
    {
      "@id": "BE341",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Arlon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE34"
        }
      ]
    },
    {
      "@id": "BE342",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Bastogne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE34"
        }
      ]
    },
    {
      "@id": "BE343",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Marche-en-Famenne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE34"
        }
      ]
    },
    {
      "@id": "BE344",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Neufchâteau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE34"
        }
      ]
    },
    {
      "@id": "BE345",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Virton",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE34"
        }
      ]
    },
    {
      "@id": "BE35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prov. Namur",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE3"
        }
      ],
      "narrower": [
        {
          "@id": "BE351"
        },
        {
          "@id": "BE352"
        },
        {
          "@id": "BE353"
        }
      ]
    },
    {
      "@id": "BE351",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Dinant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE35"
        }
      ]
    },
    {
      "@id": "BE352",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Namur",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE35"
        }
      ]
    },
    {
      "@id": "BE353",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arr. Philippeville",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE35"
        }
      ]
    },
    {
      "@id": "BEZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BE"
        }
      ],
      "narrower": [
        {
          "@id": "BEZZ"
        }
      ]
    },
    {
      "@id": "BEZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BEZ"
        }
      ],
      "narrower": [
        {
          "@id": "BEZZZ"
        }
      ]
    },
    {
      "@id": "BEZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BEZZ"
        }
      ]
    },
    {
      "@id": "BG",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "БЪЛГАРИЯ (BULGARIA)",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "BG3"
        },
        {
          "@id": "BG4"
        },
        {
          "@id": "BGZ"
        }
      ]
    },
    {
      "@id": "BG3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "СЕВЕРНА И ЮГОИЗТОЧНА БЪЛГАРИЯ (SEVERNA I YUGOIZTOCHNA BULGARIA)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG"
        }
      ],
      "narrower": [
        {
          "@id": "BG31"
        },
        {
          "@id": "BG32"
        },
        {
          "@id": "BG33"
        },
        {
          "@id": "BG34"
        }
      ]
    },
    {
      "@id": "BG31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Северозападен (Severozapaden)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG3"
        }
      ],
      "narrower": [
        {
          "@id": "BG311"
        },
        {
          "@id": "BG312"
        },
        {
          "@id": "BG313"
        },
        {
          "@id": "BG314"
        },
        {
          "@id": "BG315"
        }
      ]
    },
    {
      "@id": "BG311",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Видин (Vidin)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG31"
        }
      ]
    },
    {
      "@id": "BG312",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Монтана (Montana)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG31"
        }
      ]
    },
    {
      "@id": "BG313",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Враца (Vratsa)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG31"
        }
      ]
    },
    {
      "@id": "BG314",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Плевен (Pleven)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG31"
        }
      ]
    },
    {
      "@id": "BG315",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ловеч (Lovech)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG31"
        }
      ]
    },
    {
      "@id": "BG32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Северен централен (Severen tsentralen)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG3"
        }
      ],
      "narrower": [
        {
          "@id": "BG321"
        },
        {
          "@id": "BG322"
        },
        {
          "@id": "BG323"
        },
        {
          "@id": "BG324"
        },
        {
          "@id": "BG325"
        }
      ]
    },
    {
      "@id": "BG321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Велико Търново (Veliko Tarnovo)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG32"
        }
      ]
    },
    {
      "@id": "BG322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Габрово (Gabrovo)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG32"
        }
      ]
    },
    {
      "@id": "BG323",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Русе (Ruse)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG32"
        }
      ]
    },
    {
      "@id": "BG324",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Разград (Razgrad)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG32"
        }
      ]
    },
    {
      "@id": "BG325",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Силистра (Silistra)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG32"
        }
      ]
    },
    {
      "@id": "BG33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Североизточен (Severoiztochen)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG3"
        }
      ],
      "narrower": [
        {
          "@id": "BG331"
        },
        {
          "@id": "BG332"
        },
        {
          "@id": "BG333"
        },
        {
          "@id": "BG334"
        }
      ]
    },
    {
      "@id": "BG331",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Варна (Varna)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG33"
        }
      ]
    },
    {
      "@id": "BG332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Добрич (Dobrich)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG33"
        }
      ]
    },
    {
      "@id": "BG333",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Шумен (Shumen)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG33"
        }
      ]
    },
    {
      "@id": "BG334",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Търговище (Targovishte)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG33"
        }
      ]
    },
    {
      "@id": "BG34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Югоизточен (Yugoiztochen)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG3"
        }
      ],
      "narrower": [
        {
          "@id": "BG341"
        },
        {
          "@id": "BG342"
        },
        {
          "@id": "BG343"
        },
        {
          "@id": "BG344"
        }
      ]
    },
    {
      "@id": "BG341",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Бургас (Burgas)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG34"
        }
      ]
    },
    {
      "@id": "BG342",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Сливен (Sliven)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG34"
        }
      ]
    },
    {
      "@id": "BG343",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ямбол (Yambol)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG34"
        }
      ]
    },
    {
      "@id": "BG344",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Стара Загора (Stara Zagora)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG34"
        }
      ]
    },
    {
      "@id": "BG4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ЮГОЗАПАДНА И ЮЖНА ЦЕНТРАЛНА БЪЛГАРИЯ (YUGOZAPADNA I YUZHNA TSENTRALNA BULGARIA)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG"
        }
      ],
      "narrower": [
        {
          "@id": "BG41"
        },
        {
          "@id": "BG42"
        }
      ]
    },
    {
      "@id": "BG41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Югозападен (Yugozapaden)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG4"
        }
      ],
      "narrower": [
        {
          "@id": "BG411"
        },
        {
          "@id": "BG412"
        },
        {
          "@id": "BG413"
        },
        {
          "@id": "BG414"
        },
        {
          "@id": "BG415"
        }
      ]
    },
    {
      "@id": "BG411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "София (столица) (Sofia (stolitsa))",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG41"
        }
      ]
    },
    {
      "@id": "BG412",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "София (Sofia)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG41"
        }
      ]
    },
    {
      "@id": "BG413",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Благоевград (Blagoevgrad)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG41"
        }
      ]
    },
    {
      "@id": "BG414",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Перник (Pernik)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG41"
        }
      ]
    },
    {
      "@id": "BG415",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Кюстендил (Kyustendil)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG41"
        }
      ]
    },
    {
      "@id": "BG42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Южен централен (Yuzhen tsentralen)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG4"
        }
      ],
      "narrower": [
        {
          "@id": "BG421"
        },
        {
          "@id": "BG422"
        },
        {
          "@id": "BG423"
        },
        {
          "@id": "BG424"
        },
        {
          "@id": "BG425"
        }
      ]
    },
    {
      "@id": "BG421",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Пловдив (Plovdiv)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG42"
        }
      ]
    },
    {
      "@id": "BG422",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Хасково (Haskovo)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG42"
        }
      ]
    },
    {
      "@id": "BG423",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Пазарджик (Pazardzhik)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG42"
        }
      ]
    },
    {
      "@id": "BG424",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Смолян (Smolyan)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG42"
        }
      ]
    },
    {
      "@id": "BG425",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Кърджали (Kardzhali)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG42"
        }
      ]
    },
    {
      "@id": "BGZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BG"
        }
      ],
      "narrower": [
        {
          "@id": "BGZZ"
        }
      ]
    },
    {
      "@id": "BGZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BGZ"
        }
      ],
      "narrower": [
        {
          "@id": "BGZZZ"
        }
      ]
    },
    {
      "@id": "BGZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "BGZZ"
        }
      ]
    },
    {
      "@id": "CH",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schweiz/Suisse/Svizzera",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "CH0"
        }
      ]
    },
    {
      "@id": "CH0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schweiz/Suisse/Svizzera",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH"
        }
      ],
      "narrower": [
        {
          "@id": "CH01"
        },
        {
          "@id": "CH02"
        },
        {
          "@id": "CH03"
        },
        {
          "@id": "CH04"
        },
        {
          "@id": "CH05"
        },
        {
          "@id": "CH06"
        },
        {
          "@id": "CH07"
        }
      ]
    },
    {
      "@id": "CH01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Région lémanique",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH0"
        }
      ],
      "narrower": [
        {
          "@id": "CH011"
        },
        {
          "@id": "CH012"
        },
        {
          "@id": "CH013"
        }
      ]
    },
    {
      "@id": "CH011",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vaud",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH01"
        }
      ]
    },
    {
      "@id": "CH012",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Valais",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH01"
        }
      ]
    },
    {
      "@id": "CH013",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Genève",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH01"
        }
      ]
    },
    {
      "@id": "CH02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Espace Mittelland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH0"
        }
      ],
      "narrower": [
        {
          "@id": "CH021"
        },
        {
          "@id": "CH022"
        },
        {
          "@id": "CH023"
        },
        {
          "@id": "CH024"
        },
        {
          "@id": "CH025"
        }
      ]
    },
    {
      "@id": "CH021",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH02"
        }
      ]
    },
    {
      "@id": "CH022",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Freiburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH02"
        }
      ]
    },
    {
      "@id": "CH023",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Solothurn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH02"
        }
      ]
    },
    {
      "@id": "CH024",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neuchâtel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH02"
        }
      ]
    },
    {
      "@id": "CH025",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jura",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH02"
        }
      ]
    },
    {
      "@id": "CH03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordwestschweiz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH0"
        }
      ],
      "narrower": [
        {
          "@id": "CH031"
        },
        {
          "@id": "CH032"
        },
        {
          "@id": "CH033"
        }
      ]
    },
    {
      "@id": "CH031",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Basel-Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH03"
        }
      ]
    },
    {
      "@id": "CH032",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Basel-Landschaft",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH03"
        }
      ]
    },
    {
      "@id": "CH033",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aargau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH03"
        }
      ]
    },
    {
      "@id": "CH04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zürich",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH0"
        }
      ],
      "narrower": [
        {
          "@id": "CH040"
        }
      ]
    },
    {
      "@id": "CH040",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zürich",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH04"
        }
      ]
    },
    {
      "@id": "CH05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ostschweiz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH0"
        }
      ],
      "narrower": [
        {
          "@id": "CH051"
        },
        {
          "@id": "CH052"
        },
        {
          "@id": "CH053"
        },
        {
          "@id": "CH054"
        },
        {
          "@id": "CH055"
        },
        {
          "@id": "CH056"
        },
        {
          "@id": "CH057"
        }
      ]
    },
    {
      "@id": "CH051",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Glarus",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH05"
        }
      ]
    },
    {
      "@id": "CH052",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schaffhausen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH05"
        }
      ]
    },
    {
      "@id": "CH053",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Appenzell Ausserrhoden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH05"
        }
      ]
    },
    {
      "@id": "CH054",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Appenzell Innerrhoden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH05"
        }
      ]
    },
    {
      "@id": "CH055",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "St. Gallen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH05"
        }
      ]
    },
    {
      "@id": "CH056",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Graubünden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH05"
        }
      ]
    },
    {
      "@id": "CH057",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Thurgau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH05"
        }
      ]
    },
    {
      "@id": "CH06",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zentralschweiz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH0"
        }
      ],
      "narrower": [
        {
          "@id": "CH061"
        },
        {
          "@id": "CH062"
        },
        {
          "@id": "CH063"
        },
        {
          "@id": "CH064"
        },
        {
          "@id": "CH065"
        },
        {
          "@id": "CH066"
        }
      ]
    },
    {
      "@id": "CH061",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Luzern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH06"
        }
      ]
    },
    {
      "@id": "CH062",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Uri",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH06"
        }
      ]
    },
    {
      "@id": "CH063",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwyz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH06"
        }
      ]
    },
    {
      "@id": "CH064",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Obwalden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH06"
        }
      ]
    },
    {
      "@id": "CH065",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nidwalden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH06"
        }
      ]
    },
    {
      "@id": "CH066",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zug",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH06"
        }
      ]
    },
    {
      "@id": "CH07",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ticino",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH0"
        }
      ],
      "narrower": [
        {
          "@id": "CH070"
        }
      ]
    },
    {
      "@id": "CH070",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ticino",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CH07"
        }
      ]
    },
    {
      "@id": "CY",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ΚΥΠΡΟΣ (KÝPROS)",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "CY0"
        },
        {
          "@id": "CYZ"
        }
      ]
    },
    {
      "@id": "CY0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ΚΥΠΡΟΣ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CY"
        }
      ],
      "narrower": [
        {
          "@id": "CY00"
        }
      ]
    },
    {
      "@id": "CY00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κύπρος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CY0"
        }
      ],
      "narrower": [
        {
          "@id": "CY000"
        }
      ]
    },
    {
      "@id": "CY000",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κύπρος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CY00"
        }
      ]
    },
    {
      "@id": "CYZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CY"
        }
      ],
      "narrower": [
        {
          "@id": "CYZZ"
        }
      ]
    },
    {
      "@id": "CYZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CYZ"
        }
      ],
      "narrower": [
        {
          "@id": "CYZZZ"
        }
      ]
    },
    {
      "@id": "CYZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CYZZ"
        }
      ]
    },
    {
      "@id": "CZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ČESKÁ REPUBLIKA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "CZ0"
        },
        {
          "@id": "CZZ"
        }
      ]
    },
    {
      "@id": "CZ0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ČESKÁ REPUBLIKA",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ"
        }
      ],
      "narrower": [
        {
          "@id": "CZ01"
        },
        {
          "@id": "CZ02"
        },
        {
          "@id": "CZ03"
        },
        {
          "@id": "CZ04"
        },
        {
          "@id": "CZ05"
        },
        {
          "@id": "CZ06"
        },
        {
          "@id": "CZ07"
        },
        {
          "@id": "CZ08"
        }
      ]
    },
    {
      "@id": "CZ01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Praha",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ010"
        }
      ]
    },
    {
      "@id": "CZ010",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hlavní město Praha",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ01"
        }
      ]
    },
    {
      "@id": "CZ02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Střední Čechy",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ020"
        }
      ]
    },
    {
      "@id": "CZ020",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Středočeský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ02"
        }
      ]
    },
    {
      "@id": "CZ03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jihozápad",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ031"
        },
        {
          "@id": "CZ032"
        }
      ]
    },
    {
      "@id": "CZ031",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jihočeský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ03"
        }
      ]
    },
    {
      "@id": "CZ032",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Plzeňský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ03"
        }
      ]
    },
    {
      "@id": "CZ04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Severozápad",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ041"
        },
        {
          "@id": "CZ042"
        }
      ]
    },
    {
      "@id": "CZ041",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Karlovarský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ04"
        }
      ]
    },
    {
      "@id": "CZ042",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ústecký kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ04"
        }
      ]
    },
    {
      "@id": "CZ05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Severovýchod",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ051"
        },
        {
          "@id": "CZ052"
        },
        {
          "@id": "CZ053"
        }
      ]
    },
    {
      "@id": "CZ051",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liberecký kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ05"
        }
      ]
    },
    {
      "@id": "CZ052",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Královéhradecký kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ05"
        }
      ]
    },
    {
      "@id": "CZ053",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pardubický kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ05"
        }
      ]
    },
    {
      "@id": "CZ06",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jihovýchod",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ063"
        },
        {
          "@id": "CZ064"
        }
      ]
    },
    {
      "@id": "CZ063",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kraj Vysočina",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ06"
        }
      ]
    },
    {
      "@id": "CZ064",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jihomoravský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ06"
        }
      ]
    },
    {
      "@id": "CZ07",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Střední Morava",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ071"
        },
        {
          "@id": "CZ072"
        }
      ]
    },
    {
      "@id": "CZ071",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Olomoucký kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ07"
        }
      ]
    },
    {
      "@id": "CZ072",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zlínský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ07"
        }
      ]
    },
    {
      "@id": "CZ08",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Moravskoslezsko",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ0"
        }
      ],
      "narrower": [
        {
          "@id": "CZ080"
        }
      ]
    },
    {
      "@id": "CZ080",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Moravskoslezský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ08"
        }
      ]
    },
    {
      "@id": "CZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZ"
        }
      ],
      "narrower": [
        {
          "@id": "CZZZ"
        }
      ]
    },
    {
      "@id": "CZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZZ"
        }
      ],
      "narrower": [
        {
          "@id": "CZZZZ"
        }
      ]
    },
    {
      "@id": "CZZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "CZZZ"
        }
      ]
    },
    {
      "@id": "DE",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "DEUTSCHLAND",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "DE1"
        },
        {
          "@id": "DE2"
        },
        {
          "@id": "DE3"
        },
        {
          "@id": "DE4"
        },
        {
          "@id": "DE5"
        },
        {
          "@id": "DE6"
        },
        {
          "@id": "DE7"
        },
        {
          "@id": "DE8"
        },
        {
          "@id": "DE9"
        },
        {
          "@id": "DEA"
        },
        {
          "@id": "DEB"
        },
        {
          "@id": "DEC"
        },
        {
          "@id": "DED"
        },
        {
          "@id": "DEE"
        },
        {
          "@id": "DEF"
        },
        {
          "@id": "DEG"
        },
        {
          "@id": "DEZ"
        }
      ]
    },
    {
      "@id": "DE1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "BADEN-WÜRTTEMBERG",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE11"
        },
        {
          "@id": "DE12"
        },
        {
          "@id": "DE13"
        },
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stuttgart",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE1"
        }
      ],
      "narrower": [
        {
          "@id": "DE111"
        },
        {
          "@id": "DE112"
        },
        {
          "@id": "DE113"
        },
        {
          "@id": "DE114"
        },
        {
          "@id": "DE115"
        },
        {
          "@id": "DE116"
        },
        {
          "@id": "DE117"
        },
        {
          "@id": "DE118"
        },
        {
          "@id": "DE119"
        },
        {
          "@id": "DE11A"
        },
        {
          "@id": "DE11B"
        },
        {
          "@id": "DE11C"
        },
        {
          "@id": "DE11D"
        }
      ]
    },
    {
      "@id": "DE111",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stuttgart, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE112",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Böblingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE113",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Esslingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE114",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Göppingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE115",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ludwigsburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE116",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rems-Murr-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE117",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heilbronn, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE118",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heilbronn, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE119",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hohenlohekreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE11A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwäbisch Hall",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE11B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Main-Tauber-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE11C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heidenheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE11D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ostalbkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE11"
        }
      ]
    },
    {
      "@id": "DE12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Karlsruhe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE1"
        }
      ],
      "narrower": [
        {
          "@id": "DE121"
        },
        {
          "@id": "DE122"
        },
        {
          "@id": "DE123"
        },
        {
          "@id": "DE124"
        },
        {
          "@id": "DE125"
        },
        {
          "@id": "DE126"
        },
        {
          "@id": "DE127"
        },
        {
          "@id": "DE128"
        },
        {
          "@id": "DE129"
        },
        {
          "@id": "DE12A"
        },
        {
          "@id": "DE12B"
        },
        {
          "@id": "DE12C"
        }
      ]
    },
    {
      "@id": "DE121",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Baden-Baden, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE122",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Karlsruhe, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE123",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Karlsruhe, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE124",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rastatt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE125",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heidelberg, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE126",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mannheim, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE127",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neckar-Odenwald-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE128",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhein-Neckar-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE129",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pforzheim, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE12A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Calw",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE12B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Enzkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE12C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Freudenstadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE12"
        }
      ]
    },
    {
      "@id": "DE13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Freiburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE1"
        }
      ],
      "narrower": [
        {
          "@id": "DE131"
        },
        {
          "@id": "DE132"
        },
        {
          "@id": "DE133"
        },
        {
          "@id": "DE134"
        },
        {
          "@id": "DE135"
        },
        {
          "@id": "DE136"
        },
        {
          "@id": "DE137"
        },
        {
          "@id": "DE138"
        },
        {
          "@id": "DE139"
        },
        {
          "@id": "DE13A"
        }
      ]
    },
    {
      "@id": "DE131",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Freiburg im Breisgau, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE132",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Breisgau-Hochschwarzwald",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE133",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Emmendingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE134",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ortenaukreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE135",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rottweil",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE136",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwarzwald-Baar-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE137",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tuttlingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE138",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Konstanz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE139",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lörrach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE13A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Waldshut",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE13"
        }
      ]
    },
    {
      "@id": "DE14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tübingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE1"
        }
      ],
      "narrower": [
        {
          "@id": "DE141"
        },
        {
          "@id": "DE142"
        },
        {
          "@id": "DE143"
        },
        {
          "@id": "DE144"
        },
        {
          "@id": "DE145"
        },
        {
          "@id": "DE146"
        },
        {
          "@id": "DE147"
        },
        {
          "@id": "DE148"
        },
        {
          "@id": "DE149"
        }
      ]
    },
    {
      "@id": "DE141",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Reutlingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE142",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tübingen, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE143",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zollernalbkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE144",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ulm, Stadtkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE145",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alb-Donau-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE146",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Biberach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE147",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bodenseekreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE148",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ravensburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE149",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sigmaringen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE14"
        }
      ]
    },
    {
      "@id": "DE2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "BAYERN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE21"
        },
        {
          "@id": "DE22"
        },
        {
          "@id": "DE23"
        },
        {
          "@id": "DE24"
        },
        {
          "@id": "DE25"
        },
        {
          "@id": "DE26"
        },
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberbayern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE2"
        }
      ],
      "narrower": [
        {
          "@id": "DE211"
        },
        {
          "@id": "DE212"
        },
        {
          "@id": "DE213"
        },
        {
          "@id": "DE214"
        },
        {
          "@id": "DE215"
        },
        {
          "@id": "DE216"
        },
        {
          "@id": "DE217"
        },
        {
          "@id": "DE218"
        },
        {
          "@id": "DE219"
        },
        {
          "@id": "DE21A"
        },
        {
          "@id": "DE21B"
        },
        {
          "@id": "DE21C"
        },
        {
          "@id": "DE21D"
        },
        {
          "@id": "DE21E"
        },
        {
          "@id": "DE21F"
        },
        {
          "@id": "DE21G"
        },
        {
          "@id": "DE21H"
        },
        {
          "@id": "DE21I"
        },
        {
          "@id": "DE21J"
        },
        {
          "@id": "DE21K"
        },
        {
          "@id": "DE21L"
        },
        {
          "@id": "DE21M"
        },
        {
          "@id": "DE21N"
        }
      ]
    },
    {
      "@id": "DE211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ingolstadt, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "München, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rosenheim, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE214",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Altötting",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE215",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Berchtesgadener Land",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE216",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bad Tölz-Wolfratshausen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE217",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dachau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE218",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ebersberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE219",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eichstätt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erding",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Freising",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fürstenfeldbruck",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Garmisch-Partenkirchen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Landsberg am Lech",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miesbach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21G",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mühldorf a. Inn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21H",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "München, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21I",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neuburg-Schrobenhausen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21J",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pfaffenhofen a. d. Ilm",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21K",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rosenheim, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21L",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Starnberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21M",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Traunstein",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE21N",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Weilheim-Schongau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE21"
        }
      ]
    },
    {
      "@id": "DE22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Niederbayern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE2"
        }
      ],
      "narrower": [
        {
          "@id": "DE221"
        },
        {
          "@id": "DE222"
        },
        {
          "@id": "DE223"
        },
        {
          "@id": "DE224"
        },
        {
          "@id": "DE225"
        },
        {
          "@id": "DE226"
        },
        {
          "@id": "DE227"
        },
        {
          "@id": "DE228"
        },
        {
          "@id": "DE229"
        },
        {
          "@id": "DE22A"
        },
        {
          "@id": "DE22B"
        },
        {
          "@id": "DE22C"
        }
      ]
    },
    {
      "@id": "DE221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Landshut, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE222",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Passau, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE223",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Straubing, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE224",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Deggendorf",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE225",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Freyung-Grafenau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE226",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kelheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE227",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Landshut, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE228",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Passau, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE229",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Regen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE22A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rottal-Inn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE22B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Straubing-Bogen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE22C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dingolfing-Landau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE22"
        }
      ]
    },
    {
      "@id": "DE23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberpfalz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE2"
        }
      ],
      "narrower": [
        {
          "@id": "DE231"
        },
        {
          "@id": "DE232"
        },
        {
          "@id": "DE233"
        },
        {
          "@id": "DE234"
        },
        {
          "@id": "DE235"
        },
        {
          "@id": "DE236"
        },
        {
          "@id": "DE237"
        },
        {
          "@id": "DE238"
        },
        {
          "@id": "DE239"
        },
        {
          "@id": "DE23A"
        }
      ]
    },
    {
      "@id": "DE231",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Amberg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE232",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Regensburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE233",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Weiden i. d. Opf, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE234",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Amberg-Sulzbach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE235",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE236",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neumarkt i. d. OPf.",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE237",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neustadt a. d. Waldnaab",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE238",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Regensburg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE239",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwandorf",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE23A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tirschenreuth",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE23"
        }
      ]
    },
    {
      "@id": "DE24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberfranken",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE2"
        }
      ],
      "narrower": [
        {
          "@id": "DE241"
        },
        {
          "@id": "DE242"
        },
        {
          "@id": "DE243"
        },
        {
          "@id": "DE244"
        },
        {
          "@id": "DE245"
        },
        {
          "@id": "DE246"
        },
        {
          "@id": "DE247"
        },
        {
          "@id": "DE248"
        },
        {
          "@id": "DE249"
        },
        {
          "@id": "DE24A"
        },
        {
          "@id": "DE24B"
        },
        {
          "@id": "DE24C"
        },
        {
          "@id": "DE24D"
        }
      ]
    },
    {
      "@id": "DE241",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bamberg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE242",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bayreuth, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE243",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Coburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE244",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hof, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE245",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bamberg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE246",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bayreuth, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE247",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Coburg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE248",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Forchheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE249",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hof, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE24A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kronach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE24B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kulmbach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE24C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lichtenfels",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE24D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wunsiedel i. Fichtelgebirge",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE24"
        }
      ]
    },
    {
      "@id": "DE25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mittelfranken",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE2"
        }
      ],
      "narrower": [
        {
          "@id": "DE251"
        },
        {
          "@id": "DE252"
        },
        {
          "@id": "DE253"
        },
        {
          "@id": "DE254"
        },
        {
          "@id": "DE255"
        },
        {
          "@id": "DE256"
        },
        {
          "@id": "DE257"
        },
        {
          "@id": "DE258"
        },
        {
          "@id": "DE259"
        },
        {
          "@id": "DE25A"
        },
        {
          "@id": "DE25B"
        },
        {
          "@id": "DE25C"
        }
      ]
    },
    {
      "@id": "DE251",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ansbach, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE252",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erlangen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE253",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fürth, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE254",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nürnberg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE255",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwabach, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE256",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ansbach, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE257",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erlangen-Höchstadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE258",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fürth, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE259",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nürnberger Land",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE25A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neustadt a. d. Aisch-Bad Windsheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE25B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Roth",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE25C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Weißenburg-Gunzenhausen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE25"
        }
      ]
    },
    {
      "@id": "DE26",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Unterfranken",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE2"
        }
      ],
      "narrower": [
        {
          "@id": "DE261"
        },
        {
          "@id": "DE262"
        },
        {
          "@id": "DE263"
        },
        {
          "@id": "DE264"
        },
        {
          "@id": "DE265"
        },
        {
          "@id": "DE266"
        },
        {
          "@id": "DE267"
        },
        {
          "@id": "DE268"
        },
        {
          "@id": "DE269"
        },
        {
          "@id": "DE26A"
        },
        {
          "@id": "DE26B"
        },
        {
          "@id": "DE26C"
        }
      ]
    },
    {
      "@id": "DE261",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aschaffenburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE262",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schweinfurt, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE263",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Würzburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE264",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aschaffenburg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE265",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bad Kissingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE266",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhön-Grabfeld",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE267",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haßberge",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE268",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kitzingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE269",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miltenberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE26A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Main-Spessart",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE26B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schweinfurt, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE26C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Würzburg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE26"
        }
      ]
    },
    {
      "@id": "DE27",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwaben",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE2"
        }
      ],
      "narrower": [
        {
          "@id": "DE271"
        },
        {
          "@id": "DE272"
        },
        {
          "@id": "DE273"
        },
        {
          "@id": "DE274"
        },
        {
          "@id": "DE275"
        },
        {
          "@id": "DE276"
        },
        {
          "@id": "DE277"
        },
        {
          "@id": "DE278"
        },
        {
          "@id": "DE279"
        },
        {
          "@id": "DE27A"
        },
        {
          "@id": "DE27B"
        },
        {
          "@id": "DE27C"
        },
        {
          "@id": "DE27D"
        },
        {
          "@id": "DE27E"
        }
      ]
    },
    {
      "@id": "DE271",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Augsburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE272",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kaufbeuren, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE273",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kempten (Allgäu), Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE274",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Memmingen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE275",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aichach-Friedberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE276",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Augsburg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE277",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dillingen a.d. Donau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE278",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Günzburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE279",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neu-Ulm",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE27A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lindau (Bodensee)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE27B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ostallgäu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE27C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Unterallgäu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE27D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Donau-Ries",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE27E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberallgäu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE27"
        }
      ]
    },
    {
      "@id": "DE3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "BERLIN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE30"
        }
      ]
    },
    {
      "@id": "DE30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Berlin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE3"
        }
      ],
      "narrower": [
        {
          "@id": "DE300"
        },
        {
          "@id": "DE301"
        },
        {
          "@id": "DE302"
        }
      ]
    },
    {
      "@id": "DE300",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Berlin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE30"
        }
      ]
    },
    {
      "@id": "DE4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "BRANDENBURG",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE40"
        },
        {
          "@id": "DE41"
        },
        {
          "@id": "DE42"
        }
      ]
    },
    {
      "@id": "DE40",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brandenburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE4"
        }
      ],
      "narrower": [
        {
          "@id": "DE401"
        },
        {
          "@id": "DE402"
        },
        {
          "@id": "DE403"
        },
        {
          "@id": "DE404"
        },
        {
          "@id": "DE405"
        },
        {
          "@id": "DE406"
        },
        {
          "@id": "DE407"
        },
        {
          "@id": "DE408"
        },
        {
          "@id": "DE409"
        },
        {
          "@id": "DE40A"
        },
        {
          "@id": "DE40B"
        },
        {
          "@id": "DE40C"
        },
        {
          "@id": "DE40D"
        },
        {
          "@id": "DE40E"
        },
        {
          "@id": "DE40F"
        },
        {
          "@id": "DE40G"
        },
        {
          "@id": "DE40H"
        },
        {
          "@id": "DE40I"
        }
      ]
    },
    {
      "@id": "DE401",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brandenburg an der Havel, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE402",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cottbus, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE403",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Frankfurt (Oder), Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE404",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Potsdam, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE405",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Barnim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE406",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dahme-Spreewald",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE407",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Elbe-Elster",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE408",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Havelland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE409",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Märkisch-Oderland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberhavel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberspreewald-Lausitz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oder-Spree",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ostprignitz-Ruppin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Potsdam-Mittelmark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prignitz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40G",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Spree-Neiße",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40H",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Teltow-Fläming",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE40I",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Uckermark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE40"
        }
      ]
    },
    {
      "@id": "DE5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "BREMEN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE50"
        }
      ]
    },
    {
      "@id": "DE50",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bremen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE5"
        }
      ],
      "narrower": [
        {
          "@id": "DE501"
        },
        {
          "@id": "DE502"
        }
      ]
    },
    {
      "@id": "DE501",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bremen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE50"
        }
      ]
    },
    {
      "@id": "DE502",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bremerhaven, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE50"
        }
      ]
    },
    {
      "@id": "DE6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "HAMBURG",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE60"
        }
      ]
    },
    {
      "@id": "DE60",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hamburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE6"
        }
      ],
      "narrower": [
        {
          "@id": "DE600"
        },
        {
          "@id": "DE601"
        }
      ]
    },
    {
      "@id": "DE600",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hamburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE60"
        }
      ]
    },
    {
      "@id": "DE7",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "HESSEN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE71"
        },
        {
          "@id": "DE72"
        },
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE71",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Darmstadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE7"
        }
      ],
      "narrower": [
        {
          "@id": "DE711"
        },
        {
          "@id": "DE712"
        },
        {
          "@id": "DE713"
        },
        {
          "@id": "DE714"
        },
        {
          "@id": "DE715"
        },
        {
          "@id": "DE716"
        },
        {
          "@id": "DE717"
        },
        {
          "@id": "DE718"
        },
        {
          "@id": "DE719"
        },
        {
          "@id": "DE71A"
        },
        {
          "@id": "DE71B"
        },
        {
          "@id": "DE71C"
        },
        {
          "@id": "DE71D"
        },
        {
          "@id": "DE71E"
        }
      ]
    },
    {
      "@id": "DE711",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Darmstadt, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE712",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Frankfurt am Main, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE713",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Offenbach am Main, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE714",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wiesbaden, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE715",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bergstraße",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE716",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Darmstadt-Dieburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE717",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Groß-Gerau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE718",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hochtaunuskreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE719",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Main-Kinzig-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE71A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Main-Taunus-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE71B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Odenwaldkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE71C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Offenbach, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE71D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rheingau-Taunus-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE71E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wetteraukreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE71"
        }
      ]
    },
    {
      "@id": "DE72",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gießen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE7"
        }
      ],
      "narrower": [
        {
          "@id": "DE721"
        },
        {
          "@id": "DE722"
        },
        {
          "@id": "DE723"
        },
        {
          "@id": "DE724"
        },
        {
          "@id": "DE725"
        }
      ]
    },
    {
      "@id": "DE721",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gießen, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE72"
        }
      ]
    },
    {
      "@id": "DE722",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lahn-Dill-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE72"
        }
      ]
    },
    {
      "@id": "DE723",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Limburg-Weilburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE72"
        }
      ]
    },
    {
      "@id": "DE724",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Marburg-Biedenkopf",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE72"
        }
      ]
    },
    {
      "@id": "DE725",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vogelsbergkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE72"
        }
      ]
    },
    {
      "@id": "DE73",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kassel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE7"
        }
      ],
      "narrower": [
        {
          "@id": "DE731"
        },
        {
          "@id": "DE732"
        },
        {
          "@id": "DE733"
        },
        {
          "@id": "DE734"
        },
        {
          "@id": "DE735"
        },
        {
          "@id": "DE736"
        },
        {
          "@id": "DE737"
        }
      ]
    },
    {
      "@id": "DE731",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kassel, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE732",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fulda",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE733",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hersfeld-Rotenburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE734",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kassel, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE735",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwalm-Eder-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE736",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Waldeck-Frankenberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE737",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Werra-Meißner-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE73"
        }
      ]
    },
    {
      "@id": "DE8",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MECKLENBURG-VORPOMMERN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE80",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mecklenburg-Vorpommern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE8"
        }
      ],
      "narrower": [
        {
          "@id": "DE801"
        },
        {
          "@id": "DE802"
        },
        {
          "@id": "DE803"
        },
        {
          "@id": "DE804"
        },
        {
          "@id": "DE805"
        },
        {
          "@id": "DE806"
        },
        {
          "@id": "DE807"
        },
        {
          "@id": "DE808"
        },
        {
          "@id": "DE809"
        },
        {
          "@id": "DE80A"
        },
        {
          "@id": "DE80B"
        },
        {
          "@id": "DE80C"
        },
        {
          "@id": "DE80D"
        },
        {
          "@id": "DE80E"
        },
        {
          "@id": "DE80F"
        },
        {
          "@id": "DE80G"
        },
        {
          "@id": "DE80H"
        },
        {
          "@id": "DE80I"
        },
        {
          "@id": "DE80J"
        },
        {
          "@id": "DE80K"
        },
        {
          "@id": "DE80L"
        },
        {
          "@id": "DE80M"
        },
        {
          "@id": "DE80N"
        },
        {
          "@id": "DE80O"
        }
      ]
    },
    {
      "@id": "DE803",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rostock, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE804",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schwerin, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE80J",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mecklenburgische Seenplatte",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE80K",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Landkreis Rostock",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE80L",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vorpommern-Rügen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE80M",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordwestmecklenburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE80N",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vorpommern-Greifswald",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE80O",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ludwigslust-Parchim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE80"
        }
      ]
    },
    {
      "@id": "DE9",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NIEDERSACHSEN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DE91"
        },
        {
          "@id": "DE92"
        },
        {
          "@id": "DE93"
        },
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE91",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Braunschweig",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE9"
        }
      ],
      "narrower": [
        {
          "@id": "DE911"
        },
        {
          "@id": "DE912"
        },
        {
          "@id": "DE913"
        },
        {
          "@id": "DE914"
        },
        {
          "@id": "DE915"
        },
        {
          "@id": "DE916"
        },
        {
          "@id": "DE917"
        },
        {
          "@id": "DE918"
        },
        {
          "@id": "DE919"
        },
        {
          "@id": "DE91A"
        },
        {
          "@id": "DE91B"
        }
      ]
    },
    {
      "@id": "DE911",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Braunschweig, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE912",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Salzgitter, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE913",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wolfsburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE914",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gifhorn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE915",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Göttingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE916",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Goslar",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE917",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Helmstedt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE918",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Northeim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE919",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osterode am Harz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE91A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Peine",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE91B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wolfenbüttel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE91"
        }
      ]
    },
    {
      "@id": "DE92",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hannover",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE9"
        }
      ],
      "narrower": [
        {
          "@id": "DE921"
        },
        {
          "@id": "DE922"
        },
        {
          "@id": "DE923"
        },
        {
          "@id": "DE924"
        },
        {
          "@id": "DE925"
        },
        {
          "@id": "DE926"
        },
        {
          "@id": "DE927"
        },
        {
          "@id": "DE928"
        },
        {
          "@id": "DE929"
        }
      ]
    },
    {
      "@id": "DE922",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Diepholz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE92"
        }
      ]
    },
    {
      "@id": "DE923",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hameln-Pyrmont",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE92"
        }
      ]
    },
    {
      "@id": "DE925",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hildesheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE92"
        }
      ]
    },
    {
      "@id": "DE926",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Holzminden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE92"
        }
      ]
    },
    {
      "@id": "DE927",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nienburg (Weser)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE92"
        }
      ]
    },
    {
      "@id": "DE928",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schaumburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE92"
        }
      ]
    },
    {
      "@id": "DE929",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Region Hannover",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE92"
        }
      ]
    },
    {
      "@id": "DE93",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lüneburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE9"
        }
      ],
      "narrower": [
        {
          "@id": "DE931"
        },
        {
          "@id": "DE932"
        },
        {
          "@id": "DE933"
        },
        {
          "@id": "DE934"
        },
        {
          "@id": "DE935"
        },
        {
          "@id": "DE936"
        },
        {
          "@id": "DE937"
        },
        {
          "@id": "DE938"
        },
        {
          "@id": "DE939"
        },
        {
          "@id": "DE93A"
        },
        {
          "@id": "DE93B"
        }
      ]
    },
    {
      "@id": "DE931",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Celle",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE932",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cuxhaven",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE933",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Harburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE934",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lüchow-Dannenberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE935",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lüneburg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE936",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osterholz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE937",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rotenburg (Wümme)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE938",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heidekreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE939",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stade",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE93A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Uelzen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE93B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Verden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE93"
        }
      ]
    },
    {
      "@id": "DE94",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Weser-Ems",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE9"
        }
      ],
      "narrower": [
        {
          "@id": "DE941"
        },
        {
          "@id": "DE942"
        },
        {
          "@id": "DE943"
        },
        {
          "@id": "DE944"
        },
        {
          "@id": "DE945"
        },
        {
          "@id": "DE946"
        },
        {
          "@id": "DE947"
        },
        {
          "@id": "DE948"
        },
        {
          "@id": "DE949"
        },
        {
          "@id": "DE94A"
        },
        {
          "@id": "DE94B"
        },
        {
          "@id": "DE94C"
        },
        {
          "@id": "DE94D"
        },
        {
          "@id": "DE94E"
        },
        {
          "@id": "DE94F"
        },
        {
          "@id": "DE94G"
        },
        {
          "@id": "DE94H"
        }
      ]
    },
    {
      "@id": "DE941",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Delmenhorst, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE942",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Emden, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE943",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oldenburg (Oldenburg), Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE944",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osnabrück, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE945",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wilhelmshaven, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE946",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ammerland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE947",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aurich",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE948",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cloppenburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE949",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Emsland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Friesland (DE)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Grafschaft Bentheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leer",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oldenburg, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osnabrück, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vechta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94G",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wesermarsch",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DE94H",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wittmund",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE94"
        }
      ]
    },
    {
      "@id": "DEA",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORDRHEIN-WESTFALEN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DEA1"
        },
        {
          "@id": "DEA2"
        },
        {
          "@id": "DEA3"
        },
        {
          "@id": "DEA4"
        },
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Düsseldorf",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA"
        }
      ],
      "narrower": [
        {
          "@id": "DEA11"
        },
        {
          "@id": "DEA12"
        },
        {
          "@id": "DEA13"
        },
        {
          "@id": "DEA14"
        },
        {
          "@id": "DEA15"
        },
        {
          "@id": "DEA16"
        },
        {
          "@id": "DEA17"
        },
        {
          "@id": "DEA18"
        },
        {
          "@id": "DEA19"
        },
        {
          "@id": "DEA1A"
        },
        {
          "@id": "DEA1B"
        },
        {
          "@id": "DEA1C"
        },
        {
          "@id": "DEA1D"
        },
        {
          "@id": "DEA1E"
        },
        {
          "@id": "DEA1F"
        }
      ]
    },
    {
      "@id": "DEA11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Düsseldorf, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Duisburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Essen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Krefeld, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mönchengladbach, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mülheim an der Ruhr,Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberhausen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA18",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Remscheid, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA19",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Solingen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA1A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wuppertal, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA1B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kleve",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA1C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mettmann",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA1D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhein-Kreis Neuss",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA1E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Viersen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA1F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wesel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA1"
        }
      ]
    },
    {
      "@id": "DEA2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Köln",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA"
        }
      ],
      "narrower": [
        {
          "@id": "DEA21"
        },
        {
          "@id": "DEA22"
        },
        {
          "@id": "DEA23"
        },
        {
          "@id": "DEA24"
        },
        {
          "@id": "DEA25"
        },
        {
          "@id": "DEA26"
        },
        {
          "@id": "DEA27"
        },
        {
          "@id": "DEA28"
        },
        {
          "@id": "DEA29"
        },
        {
          "@id": "DEA2A"
        },
        {
          "@id": "DEA2B"
        },
        {
          "@id": "DEA2C"
        },
        {
          "@id": "DEA2D"
        }
      ]
    },
    {
      "@id": "DEA22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bonn, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Köln, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leverkusen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA26",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Düren",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA27",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhein-Erft-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA28",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Euskirchen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA29",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heinsberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA2A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oberbergischer Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA2B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rheinisch-Bergischer Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA2C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhein-Sieg-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA2D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Städteregion Aachen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA2"
        }
      ]
    },
    {
      "@id": "DEA3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Münster",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA"
        }
      ],
      "narrower": [
        {
          "@id": "DEA31"
        },
        {
          "@id": "DEA32"
        },
        {
          "@id": "DEA33"
        },
        {
          "@id": "DEA34"
        },
        {
          "@id": "DEA35"
        },
        {
          "@id": "DEA36"
        },
        {
          "@id": "DEA37"
        },
        {
          "@id": "DEA38"
        }
      ]
    },
    {
      "@id": "DEA31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bottrop, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gelsenkirchen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Münster, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Borken",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Coesfeld",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Recklinghausen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Steinfurt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA38",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Warendorf",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA3"
        }
      ]
    },
    {
      "@id": "DEA4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Detmold",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA"
        }
      ],
      "narrower": [
        {
          "@id": "DEA41"
        },
        {
          "@id": "DEA42"
        },
        {
          "@id": "DEA43"
        },
        {
          "@id": "DEA44"
        },
        {
          "@id": "DEA45"
        },
        {
          "@id": "DEA46"
        },
        {
          "@id": "DEA47"
        }
      ]
    },
    {
      "@id": "DEA41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bielefeld, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA4"
        }
      ]
    },
    {
      "@id": "DEA42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gütersloh",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA4"
        }
      ]
    },
    {
      "@id": "DEA43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Herford",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA4"
        }
      ]
    },
    {
      "@id": "DEA44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Höxter",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA4"
        }
      ]
    },
    {
      "@id": "DEA45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lippe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA4"
        }
      ]
    },
    {
      "@id": "DEA46",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Minden-Lübbecke",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA4"
        }
      ]
    },
    {
      "@id": "DEA47",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Paderborn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA4"
        }
      ]
    },
    {
      "@id": "DEA5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arnsberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA"
        }
      ],
      "narrower": [
        {
          "@id": "DEA51"
        },
        {
          "@id": "DEA52"
        },
        {
          "@id": "DEA53"
        },
        {
          "@id": "DEA54"
        },
        {
          "@id": "DEA55"
        },
        {
          "@id": "DEA56"
        },
        {
          "@id": "DEA57"
        },
        {
          "@id": "DEA58"
        },
        {
          "@id": "DEA59"
        },
        {
          "@id": "DEA5A"
        },
        {
          "@id": "DEA5B"
        },
        {
          "@id": "DEA5C"
        }
      ]
    },
    {
      "@id": "DEA51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bochum, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dortmund, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA53",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hagen, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA54",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hamm, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA55",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Herne, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA56",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ennepe-Ruhr-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA57",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hochsauerlandkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA58",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Märkischer Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA59",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Olpe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA5A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Siegen-Wittgenstein",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA5B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Soest",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEA5C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Unna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEA5"
        }
      ]
    },
    {
      "@id": "DEB",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "RHEINLAND-PFALZ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DEB1"
        },
        {
          "@id": "DEB2"
        },
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Koblenz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB"
        }
      ],
      "narrower": [
        {
          "@id": "DEB11"
        },
        {
          "@id": "DEB12"
        },
        {
          "@id": "DEB13"
        },
        {
          "@id": "DEB14"
        },
        {
          "@id": "DEB15"
        },
        {
          "@id": "DEB16"
        },
        {
          "@id": "DEB17"
        },
        {
          "@id": "DEB18"
        },
        {
          "@id": "DEB19"
        },
        {
          "@id": "DEB1A"
        },
        {
          "@id": "DEB1B"
        }
      ]
    },
    {
      "@id": "DEB11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Koblenz, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ahrweiler",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Altenkirchen (Westerwald)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bad Kreuznach",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Birkenfeld",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cochem-Zell",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mayen-Koblenz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB18",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neuwied",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB19",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhein-Hunsrück-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB1A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhein-Lahn-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB1B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Westerwaldkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB1"
        }
      ]
    },
    {
      "@id": "DEB2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trier",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB"
        }
      ],
      "narrower": [
        {
          "@id": "DEB21"
        },
        {
          "@id": "DEB22"
        },
        {
          "@id": "DEB23"
        },
        {
          "@id": "DEB24"
        },
        {
          "@id": "DEB25"
        }
      ]
    },
    {
      "@id": "DEB21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trier, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB2"
        }
      ]
    },
    {
      "@id": "DEB22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bernkastel-Wittlich",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB2"
        }
      ]
    },
    {
      "@id": "DEB23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eifelkreis Bitburg-Prüm",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB2"
        }
      ]
    },
    {
      "@id": "DEB24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vulkaneifel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB2"
        }
      ]
    },
    {
      "@id": "DEB25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trier-Saarburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB2"
        }
      ]
    },
    {
      "@id": "DEB3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rheinhessen-Pfalz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB"
        }
      ],
      "narrower": [
        {
          "@id": "DEB31"
        },
        {
          "@id": "DEB32"
        },
        {
          "@id": "DEB33"
        },
        {
          "@id": "DEB34"
        },
        {
          "@id": "DEB35"
        },
        {
          "@id": "DEB36"
        },
        {
          "@id": "DEB37"
        },
        {
          "@id": "DEB38"
        },
        {
          "@id": "DEB39"
        },
        {
          "@id": "DEB3A"
        },
        {
          "@id": "DEB3B"
        },
        {
          "@id": "DEB3C"
        },
        {
          "@id": "DEB3D"
        },
        {
          "@id": "DEB3E"
        },
        {
          "@id": "DEB3F"
        },
        {
          "@id": "DEB3G"
        },
        {
          "@id": "DEB3H"
        },
        {
          "@id": "DEB3I"
        },
        {
          "@id": "DEB3J"
        },
        {
          "@id": "DEB3K"
        }
      ]
    },
    {
      "@id": "DEB31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Frankenthal (Pfalz), Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kaiserslautern, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Landau in der Pfalz, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ludwigshafen am Rhein, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mainz, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neustadt an der Weinstraße, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pirmasens, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB38",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Speyer, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB39",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Worms, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zweibrücken, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alzey-Worms",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bad Dürkheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Donnersbergkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Germersheim",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kaiserslautern, Landkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3G",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kusel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3H",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Südliche Weinstraße",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3I",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhein-Pfalz-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3J",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mainz-Bingen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEB3K",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Südwestpfalz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEB3"
        }
      ]
    },
    {
      "@id": "DEC",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SAARLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DEC0"
        }
      ]
    },
    {
      "@id": "DEC0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saarland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEC"
        }
      ],
      "narrower": [
        {
          "@id": "DEC01"
        },
        {
          "@id": "DEC02"
        },
        {
          "@id": "DEC03"
        },
        {
          "@id": "DEC04"
        },
        {
          "@id": "DEC05"
        },
        {
          "@id": "DEC06"
        }
      ]
    },
    {
      "@id": "DEC01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Regionalverband Saarbrücken",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEC0"
        }
      ]
    },
    {
      "@id": "DEC02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Merzig-Wadern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEC0"
        }
      ]
    },
    {
      "@id": "DEC03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neunkirchen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEC0"
        }
      ]
    },
    {
      "@id": "DEC04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saarlouis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEC0"
        }
      ]
    },
    {
      "@id": "DEC05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saarpfalz-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEC0"
        }
      ]
    },
    {
      "@id": "DEC06",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "St. Wendel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEC0"
        }
      ]
    },
    {
      "@id": "DED",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SACHSEN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DED01"
        },
        {
          "@id": "DED02"
        },
        {
          "@id": "DED03"
        },
        {
          "@id": "DED04"
        },
        {
          "@id": "DED05"
        },
        {
          "@id": "DED06"
        },
        {
          "@id": "DED07"
        },
        {
          "@id": "DED08"
        },
        {
          "@id": "DED09"
        },
        {
          "@id": "DED0A"
        },
        {
          "@id": "DED0B"
        },
        {
          "@id": "DED0C"
        },
        {
          "@id": "DED0D"
        },
        {
          "@id": "DED0E"
        },
        {
          "@id": "DED0F"
        },
        {
          "@id": "DED0G"
        },
        {
          "@id": "DED0H"
        },
        {
          "@id": "DED0I"
        },
        {
          "@id": "DED0J"
        },
        {
          "@id": "DED0K"
        },
        {
          "@id": "DED0L"
        },
        {
          "@id": "DED0M"
        },
        {
          "@id": "DED0N"
        },
        {
          "@id": "DED0P"
        },
        {
          "@id": "DED0Q"
        },
        {
          "@id": "DED0R"
        },
        {
          "@id": "DED0S"
        },
        {
          "@id": "DED0T"
        },
        {
          "@id": "DED0U"
        },
        {
          "@id": "DED0V"
        },
        {
          "@id": "DED0W"
        },
        {
          "@id": "DED0X"
        },
        {
          "@id": "DED0Y"
        },
        {
          "@id": "DED0Z"
        },
        {
          "@id": "DED1"
        },
        {
          "@id": "DED2"
        },
        {
          "@id": "DED3"
        },
        {
          "@id": "DED4"
        },
        {
          "@id": "DED5"
        }
      ]
    },
    {
      "@id": "DED2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dresden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED"
        }
      ],
      "narrower": [
        {
          "@id": "DED21"
        },
        {
          "@id": "DED22"
        },
        {
          "@id": "DED23"
        },
        {
          "@id": "DED24"
        },
        {
          "@id": "DED25"
        },
        {
          "@id": "DED26"
        },
        {
          "@id": "DED27"
        },
        {
          "@id": "DED28"
        },
        {
          "@id": "DED29"
        },
        {
          "@id": "DED2A"
        },
        {
          "@id": "DED2B"
        },
        {
          "@id": "DED2C"
        },
        {
          "@id": "DED2D"
        },
        {
          "@id": "DED2E"
        },
        {
          "@id": "DED2F"
        }
      ]
    },
    {
      "@id": "DED21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dresden, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED2"
        }
      ]
    },
    {
      "@id": "DED2C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bautzen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED2"
        }
      ]
    },
    {
      "@id": "DED2D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Görlitz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED2"
        }
      ]
    },
    {
      "@id": "DED2E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Meißen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED2"
        }
      ]
    },
    {
      "@id": "DED2F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sächsische Schweiz-Osterzgebirge",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED2"
        }
      ]
    },
    {
      "@id": "DED4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Chemnitz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED"
        }
      ],
      "narrower": [
        {
          "@id": "DED41"
        },
        {
          "@id": "DED42"
        },
        {
          "@id": "DED43"
        },
        {
          "@id": "DED44"
        },
        {
          "@id": "DED45"
        }
      ]
    },
    {
      "@id": "DED41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Chemnitz, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED4"
        }
      ]
    },
    {
      "@id": "DED42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erzgebirgskreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED4"
        }
      ]
    },
    {
      "@id": "DED43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mittelsachsen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED4"
        }
      ]
    },
    {
      "@id": "DED44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vogtlandkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED4"
        }
      ]
    },
    {
      "@id": "DED45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zwickau",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED4"
        }
      ]
    },
    {
      "@id": "DED5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leipzig",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED"
        }
      ],
      "narrower": [
        {
          "@id": "DED51"
        },
        {
          "@id": "DED52"
        },
        {
          "@id": "DED53"
        }
      ]
    },
    {
      "@id": "DED51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leipzig, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED5"
        }
      ]
    },
    {
      "@id": "DED52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leipzig",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED5"
        }
      ]
    },
    {
      "@id": "DED53",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordsachsen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DED5"
        }
      ]
    },
    {
      "@id": "DEE",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SACHSEN-ANHALT",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DEE0"
        },
        {
          "@id": "DEE1"
        },
        {
          "@id": "DEE2"
        },
        {
          "@id": "DEE3"
        }
      ]
    },
    {
      "@id": "DEE0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sachsen-Anhalt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE"
        }
      ],
      "narrower": [
        {
          "@id": "DEE01"
        },
        {
          "@id": "DEE02"
        },
        {
          "@id": "DEE03"
        },
        {
          "@id": "DEE04"
        },
        {
          "@id": "DEE05"
        },
        {
          "@id": "DEE06"
        },
        {
          "@id": "DEE07"
        },
        {
          "@id": "DEE08"
        },
        {
          "@id": "DEE09"
        },
        {
          "@id": "DEE0A"
        },
        {
          "@id": "DEE0B"
        },
        {
          "@id": "DEE0C"
        },
        {
          "@id": "DEE0D"
        },
        {
          "@id": "DEE0E"
        }
      ]
    },
    {
      "@id": "DEE01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dessau-Roßlau, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Halle (Saale), Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Magdeburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Altmarkkreis Salzwedel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Anhalt-Bitterfeld",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE06",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jerichower Land",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE07",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Börde",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE08",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Burgenland (DE)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE09",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Harz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE0A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mansfeld-Südharz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE0B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saalekreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE0C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Salzlandkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE0D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stendal",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEE0E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wittenberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEE0"
        }
      ]
    },
    {
      "@id": "DEF",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SCHLESWIG-HOLSTEIN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schleswig-Holstein",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF"
        }
      ],
      "narrower": [
        {
          "@id": "DEF01"
        },
        {
          "@id": "DEF02"
        },
        {
          "@id": "DEF03"
        },
        {
          "@id": "DEF04"
        },
        {
          "@id": "DEF05"
        },
        {
          "@id": "DEF06"
        },
        {
          "@id": "DEF07"
        },
        {
          "@id": "DEF08"
        },
        {
          "@id": "DEF09"
        },
        {
          "@id": "DEF0A"
        },
        {
          "@id": "DEF0B"
        },
        {
          "@id": "DEF0C"
        },
        {
          "@id": "DEF0D"
        },
        {
          "@id": "DEF0E"
        },
        {
          "@id": "DEF0F"
        }
      ]
    },
    {
      "@id": "DEF01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Flensburg, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kiel, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lübeck, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neumünster, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dithmarschen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF06",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Herzogtum Lauenburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF07",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordfriesland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF08",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ostholstein",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF09",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pinneberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF0A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Plön",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF0B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rendsburg-Eckernförde",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF0C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schleswig-Flensburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF0D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Segeberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF0E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Steinburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEF0F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stormarn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEF0"
        }
      ]
    },
    {
      "@id": "DEG",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "THÜRINGEN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Thüringen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG"
        }
      ],
      "narrower": [
        {
          "@id": "DEG01"
        },
        {
          "@id": "DEG02"
        },
        {
          "@id": "DEG03"
        },
        {
          "@id": "DEG04"
        },
        {
          "@id": "DEG05"
        },
        {
          "@id": "DEG06"
        },
        {
          "@id": "DEG07"
        },
        {
          "@id": "DEG08"
        },
        {
          "@id": "DEG09"
        },
        {
          "@id": "DEG0A"
        },
        {
          "@id": "DEG0B"
        },
        {
          "@id": "DEG0C"
        },
        {
          "@id": "DEG0D"
        },
        {
          "@id": "DEG0E"
        },
        {
          "@id": "DEG0F"
        },
        {
          "@id": "DEG0G"
        },
        {
          "@id": "DEG0H"
        },
        {
          "@id": "DEG0I"
        },
        {
          "@id": "DEG0J"
        },
        {
          "@id": "DEG0K"
        },
        {
          "@id": "DEG0L"
        },
        {
          "@id": "DEG0M"
        },
        {
          "@id": "DEG0N"
        },
        {
          "@id": "DEG0P"
        }
      ]
    },
    {
      "@id": "DEG01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erfurt, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gera, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jena, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Suhl, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Weimar, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG06",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eichsfeld",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG07",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordhausen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG09",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Unstrut-Hainich-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kyffhäuserkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Schmalkalden-Meiningen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gotha",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sömmerda",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hildburghausen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ilm-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0G",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Weimarer Land",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0H",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sonneberg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0I",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saalfeld-Rudolstadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0J",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saale-Holzland-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0K",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saale-Orla-Kreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0L",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Greiz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0M",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Altenburger Land",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0N",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eisenach, Kreisfreie Stadt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEG0P",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wartburgkreis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEG0"
        }
      ]
    },
    {
      "@id": "DEZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DE"
        }
      ],
      "narrower": [
        {
          "@id": "DEZZ"
        }
      ]
    },
    {
      "@id": "DEZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEZ"
        }
      ],
      "narrower": [
        {
          "@id": "DEZZZ"
        }
      ]
    },
    {
      "@id": "DEZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DEZZ"
        }
      ]
    },
    {
      "@id": "DK",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "DANMARK",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "DK0"
        },
        {
          "@id": "DKZ"
        }
      ]
    },
    {
      "@id": "DK0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "DANMARK",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK"
        }
      ],
      "narrower": [
        {
          "@id": "DK00"
        },
        {
          "@id": "DK01"
        },
        {
          "@id": "DK02"
        },
        {
          "@id": "DK03"
        },
        {
          "@id": "DK04"
        },
        {
          "@id": "DK05"
        }
      ]
    },
    {
      "@id": "DK01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hovedstaden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK0"
        }
      ],
      "narrower": [
        {
          "@id": "DK011"
        },
        {
          "@id": "DK012"
        },
        {
          "@id": "DK013"
        },
        {
          "@id": "DK014"
        }
      ]
    },
    {
      "@id": "DK011",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Byen København",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK01"
        }
      ]
    },
    {
      "@id": "DK012",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Københavns omegn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK01"
        }
      ]
    },
    {
      "@id": "DK013",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordsjælland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK01"
        }
      ]
    },
    {
      "@id": "DK014",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bornholm",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK01"
        }
      ]
    },
    {
      "@id": "DK02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sjælland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK0"
        }
      ],
      "narrower": [
        {
          "@id": "DK021"
        },
        {
          "@id": "DK022"
        }
      ]
    },
    {
      "@id": "DK021",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Østsjælland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK02"
        }
      ]
    },
    {
      "@id": "DK022",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vest- og Sydsjælland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK02"
        }
      ]
    },
    {
      "@id": "DK03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Syddanmark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK0"
        }
      ],
      "narrower": [
        {
          "@id": "DK031"
        },
        {
          "@id": "DK032"
        }
      ]
    },
    {
      "@id": "DK031",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fyn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK03"
        }
      ]
    },
    {
      "@id": "DK032",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sydjylland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK03"
        }
      ]
    },
    {
      "@id": "DK04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Midtjylland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK0"
        }
      ],
      "narrower": [
        {
          "@id": "DK041"
        },
        {
          "@id": "DK042"
        }
      ]
    },
    {
      "@id": "DK041",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vestjylland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK04"
        }
      ]
    },
    {
      "@id": "DK042",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Østjylland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK04"
        }
      ]
    },
    {
      "@id": "DK05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordjylland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK0"
        }
      ],
      "narrower": [
        {
          "@id": "DK050"
        }
      ]
    },
    {
      "@id": "DK050",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordjylland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK05"
        }
      ]
    },
    {
      "@id": "DKZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DK"
        }
      ],
      "narrower": [
        {
          "@id": "DKZZ"
        }
      ]
    },
    {
      "@id": "DKZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DKZ"
        }
      ],
      "narrower": [
        {
          "@id": "DKZZZ"
        }
      ]
    },
    {
      "@id": "DKZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "DKZZ"
        }
      ]
    },
    {
      "@id": "EE",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EESTI",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "EE0"
        },
        {
          "@id": "EEZ"
        }
      ]
    },
    {
      "@id": "EE0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EESTI",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE"
        }
      ],
      "narrower": [
        {
          "@id": "EE00"
        }
      ]
    },
    {
      "@id": "EE00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eesti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE0"
        }
      ],
      "narrower": [
        {
          "@id": "EE001"
        },
        {
          "@id": "EE004"
        },
        {
          "@id": "EE006"
        },
        {
          "@id": "EE007"
        },
        {
          "@id": "EE008"
        }
      ]
    },
    {
      "@id": "EE001",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Põhja-Eesti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE00"
        }
      ]
    },
    {
      "@id": "EE004",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lääne-Eesti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE00"
        }
      ]
    },
    {
      "@id": "EE006",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kesk-Eesti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE00"
        }
      ]
    },
    {
      "@id": "EE007",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kirde-Eesti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE00"
        }
      ]
    },
    {
      "@id": "EE008",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lõuna-Eesti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE00"
        }
      ]
    },
    {
      "@id": "EEZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EE"
        }
      ],
      "narrower": [
        {
          "@id": "EEZZ"
        }
      ]
    },
    {
      "@id": "EEZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EEZ"
        }
      ],
      "narrower": [
        {
          "@id": "EEZZZ"
        }
      ]
    },
    {
      "@id": "EEZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EEZZ"
        }
      ]
    },
    {
      "@id": "EL",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ΕΛΛΑΔΑ (ELLADA)",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "EL1"
        },
        {
          "@id": "EL2"
        },
        {
          "@id": "EL3"
        },
        {
          "@id": "EL4"
        },
        {
          "@id": "ELZ"
        },
        {
          "@id": "EL5"
        },
        {
          "@id": "EL6"
        }
      ]
    },
    {
      "@id": "EL3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ATTIKΗ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL"
        }
      ],
      "narrower": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aττική",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL3"
        }
      ],
      "narrower": [
        {
          "@id": "EL300"
        },
        {
          "@id": "EL301"
        },
        {
          "@id": "EL302"
        },
        {
          "@id": "EL303"
        },
        {
          "@id": "EL304"
        },
        {
          "@id": "EL305"
        },
        {
          "@id": "EL306"
        },
        {
          "@id": "EL307"
        }
      ]
    },
    {
      "@id": "EL301",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Βόρειος Τομέας Αθηνών",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL302",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Δυτικός Τομέας Αθηνών",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL303",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κεντρικός Τομέας Αθηνών",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL304",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Νότιος Τομέας Αθηνών",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL305",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ανατολική Αττική",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL306",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Δυτική Αττική",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL307",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Πειραιάς, Νήσοι",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL30"
        }
      ]
    },
    {
      "@id": "EL4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NΗΣΙΑ ΑΙΓΑΙΟΥ, KΡΗΤΗ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL"
        }
      ],
      "narrower": [
        {
          "@id": "EL41"
        },
        {
          "@id": "EL42"
        },
        {
          "@id": "EL43"
        }
      ]
    },
    {
      "@id": "EL41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Βόρειο Αιγαίο",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL4"
        }
      ],
      "narrower": [
        {
          "@id": "EL411"
        },
        {
          "@id": "EL412"
        },
        {
          "@id": "EL413"
        }
      ]
    },
    {
      "@id": "EL411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Λέσβος, Λήμνος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL41"
        }
      ]
    },
    {
      "@id": "EL412",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ικαρία, Σάμος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL41"
        }
      ]
    },
    {
      "@id": "EL413",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Χίος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL41"
        }
      ]
    },
    {
      "@id": "EL42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Νότιο Αιγαίο",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL4"
        }
      ],
      "narrower": [
        {
          "@id": "EL421"
        },
        {
          "@id": "EL422"
        }
      ]
    },
    {
      "@id": "EL421",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κάλυμνος, Κάρπαθος, Κως, Ρόδος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL42"
        }
      ]
    },
    {
      "@id": "EL422",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Άνδρος, Θήρα, Κέα, Μήλος, Μύκονος, Νάξος, Πάρος, Σύρος, Τήνος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL42"
        }
      ]
    },
    {
      "@id": "EL43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κρήτη",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL4"
        }
      ],
      "narrower": [
        {
          "@id": "EL431"
        },
        {
          "@id": "EL432"
        },
        {
          "@id": "EL433"
        },
        {
          "@id": "EL434"
        }
      ]
    },
    {
      "@id": "EL431",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ηράκλειο",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL43"
        }
      ]
    },
    {
      "@id": "EL432",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Λασίθι",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL43"
        }
      ]
    },
    {
      "@id": "EL433",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ρεθύμνη",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL43"
        }
      ]
    },
    {
      "@id": "EL434",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Χανιά",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL43"
        }
      ]
    },
    {
      "@id": "EL5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ΒΟΡΕΙΑ ΕΛΛΑΔΑ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL"
        }
      ],
      "narrower": [
        {
          "@id": "EL51"
        },
        {
          "@id": "EL52"
        },
        {
          "@id": "EL53"
        },
        {
          "@id": "EL54"
        }
      ]
    },
    {
      "@id": "EL51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aνατολική Μακεδονία, Θράκη",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL5"
        }
      ],
      "narrower": [
        {
          "@id": "EL511"
        },
        {
          "@id": "EL512"
        },
        {
          "@id": "EL513"
        },
        {
          "@id": "EL514"
        },
        {
          "@id": "EL515"
        }
      ]
    },
    {
      "@id": "EL511",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Έβρος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL51"
        }
      ]
    },
    {
      "@id": "EL512",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ξάνθη",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL51"
        }
      ]
    },
    {
      "@id": "EL513",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ροδόπη",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL51"
        }
      ]
    },
    {
      "@id": "EL514",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Δράμα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL51"
        }
      ]
    },
    {
      "@id": "EL515",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Θάσος, Καβάλα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL51"
        }
      ]
    },
    {
      "@id": "EL52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κεντρική Μακεδονία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL5"
        }
      ],
      "narrower": [
        {
          "@id": "EL521"
        },
        {
          "@id": "EL522"
        },
        {
          "@id": "EL523"
        },
        {
          "@id": "EL524"
        },
        {
          "@id": "EL525"
        },
        {
          "@id": "EL526"
        },
        {
          "@id": "EL527"
        }
      ]
    },
    {
      "@id": "EL521",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ημαθία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL52"
        }
      ]
    },
    {
      "@id": "EL522",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Θεσσαλονίκη",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL52"
        }
      ]
    },
    {
      "@id": "EL523",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κιλκίς",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL52"
        }
      ]
    },
    {
      "@id": "EL524",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Πέλλα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL52"
        }
      ]
    },
    {
      "@id": "EL525",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Πιερία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL52"
        }
      ]
    },
    {
      "@id": "EL526",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Σέρρες",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL52"
        }
      ]
    },
    {
      "@id": "EL527",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Χαλκιδική",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL52"
        }
      ]
    },
    {
      "@id": "EL53",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Δυτική Μακεδονία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL5"
        }
      ],
      "narrower": [
        {
          "@id": "EL531"
        },
        {
          "@id": "EL532"
        },
        {
          "@id": "EL533"
        }
      ]
    },
    {
      "@id": "EL531",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Γρεβενά, Κοζάνη",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL53"
        }
      ]
    },
    {
      "@id": "EL532",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Καστοριά",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL53"
        }
      ]
    },
    {
      "@id": "EL533",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Φλώρινα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL53"
        }
      ]
    },
    {
      "@id": "EL54",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ήπειρος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL5"
        }
      ],
      "narrower": [
        {
          "@id": "EL541"
        },
        {
          "@id": "EL542"
        },
        {
          "@id": "EL543"
        }
      ]
    },
    {
      "@id": "EL541",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Άρτα, Πρέβεζα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL54"
        }
      ]
    },
    {
      "@id": "EL542",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Θεσπρωτία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL54"
        }
      ]
    },
    {
      "@id": "EL543",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ιωάννινα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL54"
        }
      ]
    },
    {
      "@id": "EL6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ΚΕΝΤΡΙΚΗ ΕΛΛΑΔΑ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL"
        }
      ],
      "narrower": [
        {
          "@id": "EL61"
        },
        {
          "@id": "EL62"
        },
        {
          "@id": "EL63"
        },
        {
          "@id": "EL64"
        },
        {
          "@id": "EL65"
        }
      ]
    },
    {
      "@id": "EL61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Θεσσαλία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL6"
        }
      ],
      "narrower": [
        {
          "@id": "EL611"
        },
        {
          "@id": "EL612"
        },
        {
          "@id": "EL613"
        }
      ]
    },
    {
      "@id": "EL611",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Καρδίτσα, Τρίκαλα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL61"
        }
      ]
    },
    {
      "@id": "EL612",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Λάρισα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL61"
        }
      ]
    },
    {
      "@id": "EL613",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Μαγνησία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL61"
        }
      ]
    },
    {
      "@id": "EL62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ιόνια Νησιά",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL6"
        }
      ],
      "narrower": [
        {
          "@id": "EL621"
        },
        {
          "@id": "EL622"
        },
        {
          "@id": "EL623"
        },
        {
          "@id": "EL624"
        }
      ]
    },
    {
      "@id": "EL621",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ζάκυνθος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL62"
        }
      ]
    },
    {
      "@id": "EL622",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κέρκυρα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL62"
        }
      ]
    },
    {
      "@id": "EL623",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ιθάκη, Κεφαλληνία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL62"
        }
      ]
    },
    {
      "@id": "EL624",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Λευκάδα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL62"
        }
      ]
    },
    {
      "@id": "EL63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Δυτική Ελλάδα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL6"
        }
      ],
      "narrower": [
        {
          "@id": "EL631"
        },
        {
          "@id": "EL632"
        },
        {
          "@id": "EL633"
        }
      ]
    },
    {
      "@id": "EL631",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Αιτωλοακαρνανία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL63"
        }
      ]
    },
    {
      "@id": "EL632",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Αχαΐα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL63"
        }
      ]
    },
    {
      "@id": "EL633",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ηλεία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL63"
        }
      ]
    },
    {
      "@id": "EL64",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Στερεά Ελλάδα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL6"
        }
      ],
      "narrower": [
        {
          "@id": "EL641"
        },
        {
          "@id": "EL642"
        },
        {
          "@id": "EL643"
        },
        {
          "@id": "EL644"
        },
        {
          "@id": "EL645"
        }
      ]
    },
    {
      "@id": "EL641",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Βοιωτία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL64"
        }
      ]
    },
    {
      "@id": "EL642",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Εύβοια",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL64"
        }
      ]
    },
    {
      "@id": "EL643",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ευρυτανία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL64"
        }
      ]
    },
    {
      "@id": "EL644",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Φθιώτιδα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL64"
        }
      ]
    },
    {
      "@id": "EL645",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Φωκίδα",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL64"
        }
      ]
    },
    {
      "@id": "EL65",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Πελοπόννησος",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL6"
        }
      ],
      "narrower": [
        {
          "@id": "EL651"
        },
        {
          "@id": "EL652"
        },
        {
          "@id": "EL653"
        }
      ]
    },
    {
      "@id": "EL651",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Αργολίδα, Αρκαδία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL65"
        }
      ]
    },
    {
      "@id": "EL652",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Κορινθία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL65"
        }
      ]
    },
    {
      "@id": "EL653",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Λακωνία, Μεσσηνία",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL65"
        }
      ]
    },
    {
      "@id": "ELZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "EL"
        }
      ],
      "narrower": [
        {
          "@id": "ELZZ"
        }
      ]
    },
    {
      "@id": "ELZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ELZ"
        }
      ],
      "narrower": [
        {
          "@id": "ELZZZ"
        }
      ]
    },
    {
      "@id": "ELZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ELZZ"
        }
      ]
    },
    {
      "@id": "ES",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ESPAÑA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "ES1"
        },
        {
          "@id": "ES2"
        },
        {
          "@id": "ES3"
        },
        {
          "@id": "ES4"
        },
        {
          "@id": "ES5"
        },
        {
          "@id": "ES6"
        },
        {
          "@id": "ES7"
        },
        {
          "@id": "ESZ"
        }
      ]
    },
    {
      "@id": "ES1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NOROESTE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ES11"
        },
        {
          "@id": "ES12"
        },
        {
          "@id": "ES13"
        }
      ]
    },
    {
      "@id": "ES11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Galicia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES1"
        }
      ],
      "narrower": [
        {
          "@id": "ES111"
        },
        {
          "@id": "ES112"
        },
        {
          "@id": "ES113"
        },
        {
          "@id": "ES114"
        }
      ]
    },
    {
      "@id": "ES111",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "A Coruña",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES11"
        }
      ]
    },
    {
      "@id": "ES112",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lugo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES11"
        }
      ]
    },
    {
      "@id": "ES113",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ourense",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES11"
        }
      ]
    },
    {
      "@id": "ES114",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pontevedra",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES11"
        }
      ]
    },
    {
      "@id": "ES12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Principado de Asturias",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES1"
        }
      ],
      "narrower": [
        {
          "@id": "ES120"
        }
      ]
    },
    {
      "@id": "ES120",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Asturias",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES12"
        }
      ]
    },
    {
      "@id": "ES13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cantabria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES1"
        }
      ],
      "narrower": [
        {
          "@id": "ES130"
        }
      ]
    },
    {
      "@id": "ES130",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cantabria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES13"
        }
      ]
    },
    {
      "@id": "ES2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORESTE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ES21"
        },
        {
          "@id": "ES22"
        },
        {
          "@id": "ES23"
        },
        {
          "@id": "ES24"
        }
      ]
    },
    {
      "@id": "ES21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "País Vasco",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES2"
        }
      ],
      "narrower": [
        {
          "@id": "ES211"
        },
        {
          "@id": "ES212"
        },
        {
          "@id": "ES213"
        }
      ]
    },
    {
      "@id": "ES211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Araba/Álava",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES21"
        }
      ]
    },
    {
      "@id": "ES212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gipuzkoa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES21"
        }
      ]
    },
    {
      "@id": "ES213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bizkaia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES21"
        }
      ]
    },
    {
      "@id": "ES22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Comunidad Foral de Navarra",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES2"
        }
      ],
      "narrower": [
        {
          "@id": "ES220"
        }
      ]
    },
    {
      "@id": "ES220",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Navarra",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES22"
        }
      ]
    },
    {
      "@id": "ES23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "La Rioja",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES2"
        }
      ],
      "narrower": [
        {
          "@id": "ES230"
        }
      ]
    },
    {
      "@id": "ES230",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "La Rioja",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES23"
        }
      ]
    },
    {
      "@id": "ES24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aragón",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES2"
        }
      ],
      "narrower": [
        {
          "@id": "ES241"
        },
        {
          "@id": "ES242"
        },
        {
          "@id": "ES243"
        }
      ]
    },
    {
      "@id": "ES241",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Huesca",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES24"
        }
      ]
    },
    {
      "@id": "ES242",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Teruel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES24"
        }
      ]
    },
    {
      "@id": "ES243",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zaragoza",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES24"
        }
      ]
    },
    {
      "@id": "ES3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "COMUNIDAD DE MADRID",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ES30"
        }
      ]
    },
    {
      "@id": "ES30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Comunidad de Madrid",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES3"
        }
      ],
      "narrower": [
        {
          "@id": "ES300"
        }
      ]
    },
    {
      "@id": "ES300",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Madrid",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES30"
        }
      ]
    },
    {
      "@id": "ES4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "CENTRO (ES)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ES41"
        },
        {
          "@id": "ES42"
        },
        {
          "@id": "ES43"
        }
      ]
    },
    {
      "@id": "ES41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Castilla y León",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES4"
        }
      ],
      "narrower": [
        {
          "@id": "ES411"
        },
        {
          "@id": "ES412"
        },
        {
          "@id": "ES413"
        },
        {
          "@id": "ES414"
        },
        {
          "@id": "ES415"
        },
        {
          "@id": "ES416"
        },
        {
          "@id": "ES417"
        },
        {
          "@id": "ES418"
        },
        {
          "@id": "ES419"
        }
      ]
    },
    {
      "@id": "ES411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ávila",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES412",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Burgos",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES413",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "León",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES414",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Palencia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES415",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Salamanca",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES416",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Segovia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES417",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Soria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES418",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Valladolid",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES419",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zamora",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES41"
        }
      ]
    },
    {
      "@id": "ES42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Castilla-La Mancha",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES4"
        }
      ],
      "narrower": [
        {
          "@id": "ES421"
        },
        {
          "@id": "ES422"
        },
        {
          "@id": "ES423"
        },
        {
          "@id": "ES424"
        },
        {
          "@id": "ES425"
        }
      ]
    },
    {
      "@id": "ES421",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Albacete",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES42"
        }
      ]
    },
    {
      "@id": "ES422",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ciudad Real",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES42"
        }
      ]
    },
    {
      "@id": "ES423",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cuenca",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES42"
        }
      ]
    },
    {
      "@id": "ES424",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Guadalajara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES42"
        }
      ]
    },
    {
      "@id": "ES425",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Toledo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES42"
        }
      ]
    },
    {
      "@id": "ES43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extremadura",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES4"
        }
      ],
      "narrower": [
        {
          "@id": "ES431"
        },
        {
          "@id": "ES432"
        }
      ]
    },
    {
      "@id": "ES431",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Badajoz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES43"
        }
      ]
    },
    {
      "@id": "ES432",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cáceres",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES43"
        }
      ]
    },
    {
      "@id": "ES5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ESTE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ES51"
        },
        {
          "@id": "ES52"
        },
        {
          "@id": "ES53"
        }
      ]
    },
    {
      "@id": "ES51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cataluña",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES5"
        }
      ],
      "narrower": [
        {
          "@id": "ES511"
        },
        {
          "@id": "ES512"
        },
        {
          "@id": "ES513"
        },
        {
          "@id": "ES514"
        }
      ]
    },
    {
      "@id": "ES511",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Barcelona",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES51"
        }
      ]
    },
    {
      "@id": "ES512",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Girona",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES51"
        }
      ]
    },
    {
      "@id": "ES513",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lleida",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES51"
        }
      ]
    },
    {
      "@id": "ES514",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tarragona",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES51"
        }
      ]
    },
    {
      "@id": "ES52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Comunidad Valenciana",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES5"
        }
      ],
      "narrower": [
        {
          "@id": "ES521"
        },
        {
          "@id": "ES522"
        },
        {
          "@id": "ES523"
        }
      ]
    },
    {
      "@id": "ES521",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alicante / Alacant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES52"
        }
      ]
    },
    {
      "@id": "ES522",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Castellón / Castelló",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES52"
        }
      ]
    },
    {
      "@id": "ES523",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Valencia / València",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES52"
        }
      ]
    },
    {
      "@id": "ES53",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Illes Balears",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES5"
        }
      ],
      "narrower": [
        {
          "@id": "ES530"
        },
        {
          "@id": "ES531"
        },
        {
          "@id": "ES532"
        },
        {
          "@id": "ES533"
        }
      ]
    },
    {
      "@id": "ES531",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eivissa y Formentera",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES53"
        }
      ]
    },
    {
      "@id": "ES532",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mallorca",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES53"
        }
      ]
    },
    {
      "@id": "ES533",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Menorca",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES53"
        }
      ]
    },
    {
      "@id": "ES6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SUR",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ES61"
        },
        {
          "@id": "ES62"
        },
        {
          "@id": "ES63"
        },
        {
          "@id": "ES64"
        }
      ]
    },
    {
      "@id": "ES61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Andalucía",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES6"
        }
      ],
      "narrower": [
        {
          "@id": "ES611"
        },
        {
          "@id": "ES612"
        },
        {
          "@id": "ES613"
        },
        {
          "@id": "ES614"
        },
        {
          "@id": "ES615"
        },
        {
          "@id": "ES616"
        },
        {
          "@id": "ES617"
        },
        {
          "@id": "ES618"
        }
      ]
    },
    {
      "@id": "ES611",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Almería",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES612",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cádiz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES613",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Córdoba",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES614",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Granada",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES615",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Huelva",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES616",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jaén",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES617",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Málaga",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES618",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sevilla",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES61"
        }
      ]
    },
    {
      "@id": "ES62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Región de Murcia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES6"
        }
      ],
      "narrower": [
        {
          "@id": "ES620"
        }
      ]
    },
    {
      "@id": "ES620",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Murcia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES62"
        }
      ]
    },
    {
      "@id": "ES63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ciudad Autónoma de Ceuta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES6"
        }
      ],
      "narrower": [
        {
          "@id": "ES630"
        },
        {
          "@id": "ES631"
        },
        {
          "@id": "ES632"
        }
      ]
    },
    {
      "@id": "ES630",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ceuta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES63"
        }
      ]
    },
    {
      "@id": "ES64",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ciudad Autónoma de Melilla",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES6"
        }
      ],
      "narrower": [
        {
          "@id": "ES640"
        }
      ]
    },
    {
      "@id": "ES640",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Melilla",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES64"
        }
      ]
    },
    {
      "@id": "ES7",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "CANARIAS",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ES70",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Canarias",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES7"
        }
      ],
      "narrower": [
        {
          "@id": "ES701"
        },
        {
          "@id": "ES702"
        },
        {
          "@id": "ES703"
        },
        {
          "@id": "ES704"
        },
        {
          "@id": "ES705"
        },
        {
          "@id": "ES706"
        },
        {
          "@id": "ES707"
        },
        {
          "@id": "ES708"
        },
        {
          "@id": "ES709"
        }
      ]
    },
    {
      "@id": "ES703",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "El Hierro",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ES704",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fuerteventura",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ES705",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gran Canaria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ES706",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "La Gomera",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ES707",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "La Palma",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ES708",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lanzarote",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ES709",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tenerife",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES70"
        }
      ]
    },
    {
      "@id": "ESZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ES"
        }
      ],
      "narrower": [
        {
          "@id": "ESZZ"
        }
      ]
    },
    {
      "@id": "ESZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ESZ"
        }
      ],
      "narrower": [
        {
          "@id": "ESZZZ"
        }
      ]
    },
    {
      "@id": "ESZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ESZZ"
        }
      ]
    },
    {
      "@id": "FI",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SUOMI / FINLAND",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "FI1"
        },
        {
          "@id": "FI2"
        },
        {
          "@id": "FIZ"
        }
      ]
    },
    {
      "@id": "FI1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MANNER-SUOMI",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI"
        }
      ],
      "narrower": [
        {
          "@id": "FI11"
        },
        {
          "@id": "FI12"
        },
        {
          "@id": "FI13"
        },
        {
          "@id": "FI14"
        },
        {
          "@id": "FI15"
        },
        {
          "@id": "FI16"
        },
        {
          "@id": "FI17"
        },
        {
          "@id": "FI18"
        },
        {
          "@id": "FI19"
        },
        {
          "@id": "FI1A"
        },
        {
          "@id": "FI1B"
        },
        {
          "@id": "FI1C"
        },
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI19",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Länsi-Suomi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1"
        }
      ],
      "narrower": [
        {
          "@id": "FI191"
        },
        {
          "@id": "FI192"
        },
        {
          "@id": "FI193"
        },
        {
          "@id": "FI194"
        },
        {
          "@id": "FI195"
        },
        {
          "@id": "FI196"
        },
        {
          "@id": "FI197"
        }
      ]
    },
    {
      "@id": "FI193",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Keski-Suomi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI19"
        }
      ]
    },
    {
      "@id": "FI194",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Etelä-Pohjanmaa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI19"
        }
      ]
    },
    {
      "@id": "FI195",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pohjanmaa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI19"
        }
      ]
    },
    {
      "@id": "FI196",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Satakunta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI19"
        }
      ]
    },
    {
      "@id": "FI197",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pirkanmaa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI19"
        }
      ]
    },
    {
      "@id": "FI1B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Helsinki-Uusimaa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1"
        }
      ],
      "narrower": [
        {
          "@id": "FI1B1"
        }
      ]
    },
    {
      "@id": "FI1B1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Helsinki-Uusimaa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1B"
        }
      ]
    },
    {
      "@id": "FI1C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Etelä-Suomi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1"
        }
      ],
      "narrower": [
        {
          "@id": "FI1C1"
        },
        {
          "@id": "FI1C2"
        },
        {
          "@id": "FI1C3"
        },
        {
          "@id": "FI1C4"
        },
        {
          "@id": "FI1C5"
        }
      ]
    },
    {
      "@id": "FI1C1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Varsinais-Suomi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1C"
        }
      ]
    },
    {
      "@id": "FI1C2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kanta-Häme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1C"
        }
      ]
    },
    {
      "@id": "FI1C3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Päijät-Häme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1C"
        }
      ]
    },
    {
      "@id": "FI1C4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kymenlaakso",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1C"
        }
      ]
    },
    {
      "@id": "FI1C5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Etelä-Karjala",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1C"
        }
      ]
    },
    {
      "@id": "FI1D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pohjois- ja Itä-Suomi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1"
        }
      ],
      "narrower": [
        {
          "@id": "FI1D1"
        },
        {
          "@id": "FI1D2"
        },
        {
          "@id": "FI1D3"
        },
        {
          "@id": "FI1D4"
        },
        {
          "@id": "FI1D5"
        },
        {
          "@id": "FI1D6"
        },
        {
          "@id": "FI1D7"
        }
      ]
    },
    {
      "@id": "FI1D1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Etelä-Savo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI1D2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pohjois-Savo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI1D3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pohjois-Karjala",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI1D4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kainuu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI1D5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Keski-Pohjanmaa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI1D6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pohjois-Pohjanmaa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI1D7",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lappi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI1D"
        }
      ]
    },
    {
      "@id": "FI2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ÅLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI"
        }
      ],
      "narrower": [
        {
          "@id": "FI20"
        }
      ]
    },
    {
      "@id": "FI20",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Åland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI2"
        }
      ],
      "narrower": [
        {
          "@id": "FI200"
        }
      ]
    },
    {
      "@id": "FI200",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Åland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI20"
        }
      ]
    },
    {
      "@id": "FIZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FI"
        }
      ],
      "narrower": [
        {
          "@id": "FIZZ"
        }
      ]
    },
    {
      "@id": "FIZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FIZ"
        }
      ],
      "narrower": [
        {
          "@id": "FIZZZ"
        }
      ]
    },
    {
      "@id": "FIZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FIZZ"
        }
      ]
    },
    {
      "@id": "FR",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "FRANCE",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "FR1"
        },
        {
          "@id": "FR2"
        },
        {
          "@id": "FR3"
        },
        {
          "@id": "FR4"
        },
        {
          "@id": "FR5"
        },
        {
          "@id": "FR6"
        },
        {
          "@id": "FR7"
        },
        {
          "@id": "FR8"
        },
        {
          "@id": "FR9"
        },
        {
          "@id": "FRZ"
        },
        {
          "@id": "FRA"
        }
      ]
    },
    {
      "@id": "FR1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ÎLE DE FRANCE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR10",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Île de France",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR1"
        }
      ],
      "narrower": [
        {
          "@id": "FR101"
        },
        {
          "@id": "FR102"
        },
        {
          "@id": "FR103"
        },
        {
          "@id": "FR104"
        },
        {
          "@id": "FR105"
        },
        {
          "@id": "FR106"
        },
        {
          "@id": "FR107"
        },
        {
          "@id": "FR108"
        }
      ]
    },
    {
      "@id": "FR101",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Paris",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR102",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Seine-et-Marne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR103",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Yvelines",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR104",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Essonne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR105",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hauts-de-Seine",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR106",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Seine-Saint-Denis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR107",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Val-de-Marne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR108",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Val-d'Oise",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR10"
        }
      ]
    },
    {
      "@id": "FR2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "BASSIN PARISIEN",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR21"
        },
        {
          "@id": "FR22"
        },
        {
          "@id": "FR23"
        },
        {
          "@id": "FR24"
        },
        {
          "@id": "FR25"
        },
        {
          "@id": "FR26"
        }
      ]
    },
    {
      "@id": "FR21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Champagne-Ardenne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR2"
        }
      ],
      "narrower": [
        {
          "@id": "FR211"
        },
        {
          "@id": "FR212"
        },
        {
          "@id": "FR213"
        },
        {
          "@id": "FR214"
        }
      ]
    },
    {
      "@id": "FR211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ardennes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR21"
        }
      ]
    },
    {
      "@id": "FR212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aube",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR21"
        }
      ]
    },
    {
      "@id": "FR213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Marne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR21"
        }
      ]
    },
    {
      "@id": "FR214",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Marne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR21"
        }
      ]
    },
    {
      "@id": "FR22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Picardie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR2"
        }
      ],
      "narrower": [
        {
          "@id": "FR221"
        },
        {
          "@id": "FR222"
        },
        {
          "@id": "FR223"
        }
      ]
    },
    {
      "@id": "FR221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aisne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR22"
        }
      ]
    },
    {
      "@id": "FR222",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oise",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR22"
        }
      ]
    },
    {
      "@id": "FR223",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Somme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR22"
        }
      ]
    },
    {
      "@id": "FR23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Normandie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR2"
        }
      ],
      "narrower": [
        {
          "@id": "FR231"
        },
        {
          "@id": "FR232"
        }
      ]
    },
    {
      "@id": "FR231",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eure",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR23"
        }
      ]
    },
    {
      "@id": "FR232",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Seine-Maritime",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR23"
        }
      ]
    },
    {
      "@id": "FR24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Centre",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR2"
        }
      ],
      "narrower": [
        {
          "@id": "FR241"
        },
        {
          "@id": "FR242"
        },
        {
          "@id": "FR243"
        },
        {
          "@id": "FR244"
        },
        {
          "@id": "FR245"
        },
        {
          "@id": "FR246"
        }
      ]
    },
    {
      "@id": "FR241",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cher",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR24"
        }
      ]
    },
    {
      "@id": "FR242",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eure-et-Loir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR24"
        }
      ]
    },
    {
      "@id": "FR243",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Indre",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR24"
        }
      ]
    },
    {
      "@id": "FR244",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Indre-et-Loire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR24"
        }
      ]
    },
    {
      "@id": "FR245",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Loir-et-Cher",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR24"
        }
      ]
    },
    {
      "@id": "FR246",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Loiret",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR24"
        }
      ]
    },
    {
      "@id": "FR25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Basse-Normandie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR2"
        }
      ],
      "narrower": [
        {
          "@id": "FR251"
        },
        {
          "@id": "FR252"
        },
        {
          "@id": "FR253"
        }
      ]
    },
    {
      "@id": "FR251",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Calvados",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR25"
        }
      ]
    },
    {
      "@id": "FR252",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Manche",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR25"
        }
      ]
    },
    {
      "@id": "FR253",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Orne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR25"
        }
      ]
    },
    {
      "@id": "FR26",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bourgogne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR2"
        }
      ],
      "narrower": [
        {
          "@id": "FR261"
        },
        {
          "@id": "FR262"
        },
        {
          "@id": "FR263"
        },
        {
          "@id": "FR264"
        }
      ]
    },
    {
      "@id": "FR261",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Côte-d'Or",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR26"
        }
      ]
    },
    {
      "@id": "FR262",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nièvre",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR26"
        }
      ]
    },
    {
      "@id": "FR263",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Saône-et-Loire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR26"
        }
      ]
    },
    {
      "@id": "FR264",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Yonne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR26"
        }
      ]
    },
    {
      "@id": "FR3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORD - PAS-DE-CALAIS",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR30"
        }
      ]
    },
    {
      "@id": "FR30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nord - Pas-de-Calais",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR3"
        }
      ],
      "narrower": [
        {
          "@id": "FR301"
        },
        {
          "@id": "FR302"
        }
      ]
    },
    {
      "@id": "FR301",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nord",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR30"
        }
      ]
    },
    {
      "@id": "FR302",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pas-de-Calais",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR30"
        }
      ]
    },
    {
      "@id": "FR4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR41"
        },
        {
          "@id": "FR42"
        },
        {
          "@id": "FR43"
        }
      ]
    },
    {
      "@id": "FR41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lorraine",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR4"
        }
      ],
      "narrower": [
        {
          "@id": "FR411"
        },
        {
          "@id": "FR412"
        },
        {
          "@id": "FR413"
        },
        {
          "@id": "FR414"
        }
      ]
    },
    {
      "@id": "FR411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Meurthe-et-Moselle",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR41"
        }
      ]
    },
    {
      "@id": "FR412",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Meuse",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR41"
        }
      ]
    },
    {
      "@id": "FR413",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Moselle",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR41"
        }
      ]
    },
    {
      "@id": "FR414",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vosges",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR41"
        }
      ]
    },
    {
      "@id": "FR42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alsace",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR4"
        }
      ],
      "narrower": [
        {
          "@id": "FR421"
        },
        {
          "@id": "FR422"
        }
      ]
    },
    {
      "@id": "FR421",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bas-Rhin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR42"
        }
      ]
    },
    {
      "@id": "FR422",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haut-Rhin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR42"
        }
      ]
    },
    {
      "@id": "FR43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Franche-Comté",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR4"
        }
      ],
      "narrower": [
        {
          "@id": "FR431"
        },
        {
          "@id": "FR432"
        },
        {
          "@id": "FR433"
        },
        {
          "@id": "FR434"
        }
      ]
    },
    {
      "@id": "FR431",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Doubs",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR43"
        }
      ]
    },
    {
      "@id": "FR432",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jura",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR43"
        }
      ]
    },
    {
      "@id": "FR433",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Saône",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR43"
        }
      ]
    },
    {
      "@id": "FR434",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Territoire de Belfort",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR43"
        }
      ]
    },
    {
      "@id": "FR5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "OUEST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR51"
        },
        {
          "@id": "FR52"
        },
        {
          "@id": "FR53"
        }
      ]
    },
    {
      "@id": "FR51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pays de la Loire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR5"
        }
      ],
      "narrower": [
        {
          "@id": "FR511"
        },
        {
          "@id": "FR512"
        },
        {
          "@id": "FR513"
        },
        {
          "@id": "FR514"
        },
        {
          "@id": "FR515"
        }
      ]
    },
    {
      "@id": "FR511",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Loire-Atlantique",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR51"
        }
      ]
    },
    {
      "@id": "FR512",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Maine-et-Loire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR51"
        }
      ]
    },
    {
      "@id": "FR513",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mayenne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR51"
        }
      ]
    },
    {
      "@id": "FR514",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sarthe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR51"
        }
      ]
    },
    {
      "@id": "FR515",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vendée",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR51"
        }
      ]
    },
    {
      "@id": "FR52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bretagne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR5"
        }
      ],
      "narrower": [
        {
          "@id": "FR521"
        },
        {
          "@id": "FR522"
        },
        {
          "@id": "FR523"
        },
        {
          "@id": "FR524"
        }
      ]
    },
    {
      "@id": "FR521",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Côtes-d'Armor",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR52"
        }
      ]
    },
    {
      "@id": "FR522",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Finistère",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR52"
        }
      ]
    },
    {
      "@id": "FR523",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ille-et-Vilaine",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR52"
        }
      ]
    },
    {
      "@id": "FR524",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Morbihan",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR52"
        }
      ]
    },
    {
      "@id": "FR53",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Poitou-Charentes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR5"
        }
      ],
      "narrower": [
        {
          "@id": "FR531"
        },
        {
          "@id": "FR532"
        },
        {
          "@id": "FR533"
        },
        {
          "@id": "FR534"
        }
      ]
    },
    {
      "@id": "FR531",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Charente",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR53"
        }
      ]
    },
    {
      "@id": "FR532",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Charente-Maritime",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR53"
        }
      ]
    },
    {
      "@id": "FR533",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Deux-Sèvres",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR53"
        }
      ]
    },
    {
      "@id": "FR534",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vienne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR53"
        }
      ]
    },
    {
      "@id": "FR6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SUD-OUEST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR61"
        },
        {
          "@id": "FR62"
        },
        {
          "@id": "FR63"
        }
      ]
    },
    {
      "@id": "FR61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aquitaine",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR6"
        }
      ],
      "narrower": [
        {
          "@id": "FR611"
        },
        {
          "@id": "FR612"
        },
        {
          "@id": "FR613"
        },
        {
          "@id": "FR614"
        },
        {
          "@id": "FR615"
        }
      ]
    },
    {
      "@id": "FR611",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dordogne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR61"
        }
      ]
    },
    {
      "@id": "FR612",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gironde",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR61"
        }
      ]
    },
    {
      "@id": "FR613",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Landes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR61"
        }
      ]
    },
    {
      "@id": "FR614",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lot-et-Garonne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR61"
        }
      ]
    },
    {
      "@id": "FR615",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pyrénées-Atlantiques",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR61"
        }
      ]
    },
    {
      "@id": "FR62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Midi-Pyrénées",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR6"
        }
      ],
      "narrower": [
        {
          "@id": "FR621"
        },
        {
          "@id": "FR622"
        },
        {
          "@id": "FR623"
        },
        {
          "@id": "FR624"
        },
        {
          "@id": "FR625"
        },
        {
          "@id": "FR626"
        },
        {
          "@id": "FR627"
        },
        {
          "@id": "FR628"
        }
      ]
    },
    {
      "@id": "FR621",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ariège",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR622",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aveyron",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR623",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Garonne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR624",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gers",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR625",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lot",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR626",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hautes-Pyrénées",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR627",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tarn",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR628",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tarn-et-Garonne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR62"
        }
      ]
    },
    {
      "@id": "FR63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Limousin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR6"
        }
      ],
      "narrower": [
        {
          "@id": "FR631"
        },
        {
          "@id": "FR632"
        },
        {
          "@id": "FR633"
        }
      ]
    },
    {
      "@id": "FR631",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Corrèze",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR63"
        }
      ]
    },
    {
      "@id": "FR632",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Creuse",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR63"
        }
      ]
    },
    {
      "@id": "FR633",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Vienne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR63"
        }
      ]
    },
    {
      "@id": "FR7",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "CENTRE-EST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR71"
        },
        {
          "@id": "FR72"
        }
      ]
    },
    {
      "@id": "FR71",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhône-Alpes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR7"
        }
      ],
      "narrower": [
        {
          "@id": "FR711"
        },
        {
          "@id": "FR712"
        },
        {
          "@id": "FR713"
        },
        {
          "@id": "FR714"
        },
        {
          "@id": "FR715"
        },
        {
          "@id": "FR716"
        },
        {
          "@id": "FR717"
        },
        {
          "@id": "FR718"
        }
      ]
    },
    {
      "@id": "FR711",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ain",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR712",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ardèche",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR713",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Drôme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR714",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Isère",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR715",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Loire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR716",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rhône",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR717",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Savoie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR718",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Savoie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR71"
        }
      ]
    },
    {
      "@id": "FR72",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Auvergne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR7"
        }
      ],
      "narrower": [
        {
          "@id": "FR721"
        },
        {
          "@id": "FR722"
        },
        {
          "@id": "FR723"
        },
        {
          "@id": "FR724"
        }
      ]
    },
    {
      "@id": "FR721",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Allier",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR72"
        }
      ]
    },
    {
      "@id": "FR722",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cantal",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR72"
        }
      ]
    },
    {
      "@id": "FR723",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Loire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR72"
        }
      ]
    },
    {
      "@id": "FR724",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Puy-de-Dôme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR72"
        }
      ]
    },
    {
      "@id": "FR8",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MÉDITERRANÉE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FR81"
        },
        {
          "@id": "FR82"
        },
        {
          "@id": "FR83"
        }
      ]
    },
    {
      "@id": "FR81",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Languedoc-Roussillon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR8"
        }
      ],
      "narrower": [
        {
          "@id": "FR811"
        },
        {
          "@id": "FR812"
        },
        {
          "@id": "FR813"
        },
        {
          "@id": "FR814"
        },
        {
          "@id": "FR815"
        }
      ]
    },
    {
      "@id": "FR811",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aude",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR81"
        }
      ]
    },
    {
      "@id": "FR812",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gard",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR81"
        }
      ]
    },
    {
      "@id": "FR813",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hérault",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR81"
        }
      ]
    },
    {
      "@id": "FR814",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lozère",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR81"
        }
      ]
    },
    {
      "@id": "FR815",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pyrénées-Orientales",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR81"
        }
      ]
    },
    {
      "@id": "FR82",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Provence-Alpes-Côte d'Azur",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR8"
        }
      ],
      "narrower": [
        {
          "@id": "FR821"
        },
        {
          "@id": "FR822"
        },
        {
          "@id": "FR823"
        },
        {
          "@id": "FR824"
        },
        {
          "@id": "FR825"
        },
        {
          "@id": "FR826"
        }
      ]
    },
    {
      "@id": "FR821",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alpes-de-Haute-Provence",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR82"
        }
      ]
    },
    {
      "@id": "FR822",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hautes-Alpes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR82"
        }
      ]
    },
    {
      "@id": "FR823",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alpes-Maritimes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR82"
        }
      ]
    },
    {
      "@id": "FR824",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bouches-du-Rhône",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR82"
        }
      ]
    },
    {
      "@id": "FR825",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Var",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR82"
        }
      ]
    },
    {
      "@id": "FR826",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vaucluse",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR82"
        }
      ]
    },
    {
      "@id": "FR83",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Corse",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR8"
        }
      ],
      "narrower": [
        {
          "@id": "FR831"
        },
        {
          "@id": "FR832"
        }
      ]
    },
    {
      "@id": "FR831",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Corse-du-Sud",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR83"
        }
      ]
    },
    {
      "@id": "FR832",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haute-Corse",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR83"
        }
      ]
    },
    {
      "@id": "FRA",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "DÉPARTEMENTS D'OUTRE-MER",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FRA1"
        },
        {
          "@id": "FRA2"
        },
        {
          "@id": "FRA3"
        },
        {
          "@id": "FRA4"
        },
        {
          "@id": "FRA5"
        }
      ]
    },
    {
      "@id": "FRA1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Guadeloupe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA"
        }
      ],
      "narrower": [
        {
          "@id": "FRA10"
        }
      ]
    },
    {
      "@id": "FRA10",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Guadeloupe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA1"
        }
      ]
    },
    {
      "@id": "FRA2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Martinique",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA"
        }
      ],
      "narrower": [
        {
          "@id": "FRA20"
        }
      ]
    },
    {
      "@id": "FRA20",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Martinique",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA2"
        }
      ]
    },
    {
      "@id": "FRA3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Guyane",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA"
        }
      ],
      "narrower": [
        {
          "@id": "FRA30"
        }
      ]
    },
    {
      "@id": "FRA30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Guyane",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA3"
        }
      ]
    },
    {
      "@id": "FRA4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "La Réunion",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA"
        }
      ],
      "narrower": [
        {
          "@id": "FRA40"
        }
      ]
    },
    {
      "@id": "FRA40",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "La Réunion",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA4"
        }
      ]
    },
    {
      "@id": "FRA5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mayotte",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA"
        }
      ],
      "narrower": [
        {
          "@id": "FRA50"
        }
      ]
    },
    {
      "@id": "FRA50",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mayotte",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRA5"
        }
      ]
    },
    {
      "@id": "FRZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FR"
        }
      ],
      "narrower": [
        {
          "@id": "FRZZ"
        }
      ]
    },
    {
      "@id": "FRZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRZ"
        }
      ],
      "narrower": [
        {
          "@id": "FRZZZ"
        }
      ]
    },
    {
      "@id": "FRZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "FRZZ"
        }
      ]
    },
    {
      "@id": "HR",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "HRVATSKA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "HR0"
        },
        {
          "@id": "HRZ"
        }
      ]
    },
    {
      "@id": "HR0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "HRVATSKA",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR"
        }
      ],
      "narrower": [
        {
          "@id": "HR01"
        },
        {
          "@id": "HR02"
        },
        {
          "@id": "HR03"
        },
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jadranska Hrvatska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR0"
        }
      ],
      "narrower": [
        {
          "@id": "HR031"
        },
        {
          "@id": "HR032"
        },
        {
          "@id": "HR033"
        },
        {
          "@id": "HR034"
        },
        {
          "@id": "HR035"
        },
        {
          "@id": "HR036"
        },
        {
          "@id": "HR037"
        }
      ]
    },
    {
      "@id": "HR031",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Primorsko-goranska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR03"
        }
      ]
    },
    {
      "@id": "HR032",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ličko-senjska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR03"
        }
      ]
    },
    {
      "@id": "HR033",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zadarska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR03"
        }
      ]
    },
    {
      "@id": "HR034",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Šibensko-kninska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR03"
        }
      ]
    },
    {
      "@id": "HR035",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Splitsko-dalmatinska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR03"
        }
      ]
    },
    {
      "@id": "HR036",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Istarska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR03"
        }
      ]
    },
    {
      "@id": "HR037",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dubrovačko-neretvanska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR03"
        }
      ]
    },
    {
      "@id": "HR04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kontinentalna Hrvatska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR0"
        }
      ],
      "narrower": [
        {
          "@id": "HR041"
        },
        {
          "@id": "HR042"
        },
        {
          "@id": "HR043"
        },
        {
          "@id": "HR044"
        },
        {
          "@id": "HR045"
        },
        {
          "@id": "HR046"
        },
        {
          "@id": "HR047"
        },
        {
          "@id": "HR048"
        },
        {
          "@id": "HR049"
        },
        {
          "@id": "HR04A"
        },
        {
          "@id": "HR04B"
        },
        {
          "@id": "HR04C"
        },
        {
          "@id": "HR04D"
        },
        {
          "@id": "HR04E"
        }
      ]
    },
    {
      "@id": "HR041",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Grad Zagreb",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR042",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zagrebačka županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR043",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Krapinsko-zagorska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR044",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Varaždinska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR045",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Koprivničko-križevačka županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR046",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Međimurska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR047",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bjelovarsko-bilogorska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR048",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Virovitičko-podravska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR049",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Požeško-slavonska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR04A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brodsko-posavska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR04B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osječko-baranjska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR04C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vukovarsko-srijemska županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR04D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Karlovačka županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HR04E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sisačko-moslavačka županija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR04"
        }
      ]
    },
    {
      "@id": "HRZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HR"
        }
      ],
      "narrower": [
        {
          "@id": "HRZZ"
        }
      ]
    },
    {
      "@id": "HRZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HRZ"
        }
      ],
      "narrower": [
        {
          "@id": "HRZZZ"
        }
      ]
    },
    {
      "@id": "HRZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HRZZ"
        }
      ]
    },
    {
      "@id": "HU",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MAGYARORSZÁG",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "HU1"
        },
        {
          "@id": "HU2"
        },
        {
          "@id": "HU3"
        },
        {
          "@id": "HUZ"
        }
      ]
    },
    {
      "@id": "HU1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "KÖZÉP-MAGYARORSZÁG",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU"
        }
      ],
      "narrower": [
        {
          "@id": "HU10"
        }
      ]
    },
    {
      "@id": "HU10",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Közép-Magyarország",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU1"
        }
      ],
      "narrower": [
        {
          "@id": "HU101"
        },
        {
          "@id": "HU102"
        }
      ]
    },
    {
      "@id": "HU101",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Budapest",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU10"
        }
      ]
    },
    {
      "@id": "HU102",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pest",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU10"
        }
      ]
    },
    {
      "@id": "HU2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "DUNÁNTÚL",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU"
        }
      ],
      "narrower": [
        {
          "@id": "HU21"
        },
        {
          "@id": "HU22"
        },
        {
          "@id": "HU23"
        }
      ]
    },
    {
      "@id": "HU21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Közép-Dunántúl",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU2"
        }
      ],
      "narrower": [
        {
          "@id": "HU211"
        },
        {
          "@id": "HU212"
        },
        {
          "@id": "HU213"
        }
      ]
    },
    {
      "@id": "HU211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fejér",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU21"
        }
      ]
    },
    {
      "@id": "HU212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Komárom-Esztergom",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU21"
        }
      ]
    },
    {
      "@id": "HU213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Veszprém",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU21"
        }
      ]
    },
    {
      "@id": "HU22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nyugat-Dunántúl",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU2"
        }
      ],
      "narrower": [
        {
          "@id": "HU221"
        },
        {
          "@id": "HU222"
        },
        {
          "@id": "HU223"
        }
      ]
    },
    {
      "@id": "HU221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Győr-Moson-Sopron",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU22"
        }
      ]
    },
    {
      "@id": "HU222",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vas",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU22"
        }
      ]
    },
    {
      "@id": "HU223",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zala",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU22"
        }
      ]
    },
    {
      "@id": "HU23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dél-Dunántúl",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU2"
        }
      ],
      "narrower": [
        {
          "@id": "HU231"
        },
        {
          "@id": "HU232"
        },
        {
          "@id": "HU233"
        }
      ]
    },
    {
      "@id": "HU231",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Baranya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU23"
        }
      ]
    },
    {
      "@id": "HU232",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Somogy",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU23"
        }
      ]
    },
    {
      "@id": "HU233",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tolna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU23"
        }
      ]
    },
    {
      "@id": "HU3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ALFÖLD ÉS ÉSZAK",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU"
        }
      ],
      "narrower": [
        {
          "@id": "HU31"
        },
        {
          "@id": "HU32"
        },
        {
          "@id": "HU33"
        }
      ]
    },
    {
      "@id": "HU31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Észak-Magyarország",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU3"
        }
      ],
      "narrower": [
        {
          "@id": "HU311"
        },
        {
          "@id": "HU312"
        },
        {
          "@id": "HU313"
        }
      ]
    },
    {
      "@id": "HU311",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Borsod-Abaúj-Zemplén",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU31"
        }
      ]
    },
    {
      "@id": "HU312",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heves",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU31"
        }
      ]
    },
    {
      "@id": "HU313",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nógrád",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU31"
        }
      ]
    },
    {
      "@id": "HU32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Észak-Alföld",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU3"
        }
      ],
      "narrower": [
        {
          "@id": "HU321"
        },
        {
          "@id": "HU322"
        },
        {
          "@id": "HU323"
        }
      ]
    },
    {
      "@id": "HU321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hajdú-Bihar",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU32"
        }
      ]
    },
    {
      "@id": "HU322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jász-Nagykun-Szolnok",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU32"
        }
      ]
    },
    {
      "@id": "HU323",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Szabolcs-Szatmár-Bereg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU32"
        }
      ]
    },
    {
      "@id": "HU33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dél-Alföld",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU3"
        }
      ],
      "narrower": [
        {
          "@id": "HU331"
        },
        {
          "@id": "HU332"
        },
        {
          "@id": "HU333"
        }
      ]
    },
    {
      "@id": "HU331",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bács-Kiskun",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU33"
        }
      ]
    },
    {
      "@id": "HU332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Békés",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU33"
        }
      ]
    },
    {
      "@id": "HU333",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Csongrád",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU33"
        }
      ]
    },
    {
      "@id": "HUZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HU"
        }
      ],
      "narrower": [
        {
          "@id": "HUZZ"
        }
      ]
    },
    {
      "@id": "HUZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HUZ"
        }
      ],
      "narrower": [
        {
          "@id": "HUZZZ"
        }
      ]
    },
    {
      "@id": "HUZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "HUZZ"
        }
      ]
    },
    {
      "@id": "IE",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "IRELAND",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "IE0"
        },
        {
          "@id": "IEZ"
        }
      ]
    },
    {
      "@id": "IE0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "IRELAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE"
        }
      ],
      "narrower": [
        {
          "@id": "IE001"
        },
        {
          "@id": "IE002"
        },
        {
          "@id": "IE003"
        },
        {
          "@id": "IE004"
        },
        {
          "@id": "IE005"
        },
        {
          "@id": "IE006"
        },
        {
          "@id": "IE007"
        },
        {
          "@id": "IE008"
        },
        {
          "@id": "IE01"
        },
        {
          "@id": "IE02"
        }
      ]
    },
    {
      "@id": "IE01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Border, Midland and Western",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE0"
        }
      ],
      "narrower": [
        {
          "@id": "IE011"
        },
        {
          "@id": "IE012"
        },
        {
          "@id": "IE013"
        }
      ]
    },
    {
      "@id": "IE011",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Border",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE01"
        }
      ]
    },
    {
      "@id": "IE012",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Midland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE01"
        }
      ]
    },
    {
      "@id": "IE013",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE01"
        }
      ]
    },
    {
      "@id": "IE02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Southern and Eastern",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE0"
        }
      ],
      "narrower": [
        {
          "@id": "IE021"
        },
        {
          "@id": "IE022"
        },
        {
          "@id": "IE023"
        },
        {
          "@id": "IE024"
        },
        {
          "@id": "IE025"
        }
      ]
    },
    {
      "@id": "IE021",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dublin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE02"
        }
      ]
    },
    {
      "@id": "IE022",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mid-East",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE02"
        }
      ]
    },
    {
      "@id": "IE023",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mid-West",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE02"
        }
      ]
    },
    {
      "@id": "IE024",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South-East (IE)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE02"
        }
      ]
    },
    {
      "@id": "IE025",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South-West (IE)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE02"
        }
      ]
    },
    {
      "@id": "IEZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IE"
        }
      ],
      "narrower": [
        {
          "@id": "IEZZ"
        }
      ]
    },
    {
      "@id": "IEZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IEZ"
        }
      ],
      "narrower": [
        {
          "@id": "IEZZZ"
        }
      ]
    },
    {
      "@id": "IEZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IEZZ"
        }
      ]
    },
    {
      "@id": "IS",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ísland",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "IS0"
        }
      ]
    },
    {
      "@id": "IS0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ísland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IS"
        }
      ],
      "narrower": [
        {
          "@id": "IS00"
        }
      ]
    },
    {
      "@id": "IS00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ísland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IS0"
        }
      ],
      "narrower": [
        {
          "@id": "IS001"
        },
        {
          "@id": "IS002"
        }
      ]
    },
    {
      "@id": "IS001",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Höfuðborgarsvæði",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IS00"
        }
      ]
    },
    {
      "@id": "IS002",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Landsbyggð",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IS00"
        }
      ]
    },
    {
      "@id": "IT",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ITALIA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "IT1"
        },
        {
          "@id": "IT2"
        },
        {
          "@id": "IT3"
        },
        {
          "@id": "IT4"
        },
        {
          "@id": "IT5"
        },
        {
          "@id": "IT6"
        },
        {
          "@id": "IT7"
        },
        {
          "@id": "IT8"
        },
        {
          "@id": "IT9"
        },
        {
          "@id": "ITA"
        },
        {
          "@id": "ITB"
        },
        {
          "@id": "ITC"
        },
        {
          "@id": "ITD"
        },
        {
          "@id": "ITE"
        },
        {
          "@id": "ITF"
        },
        {
          "@id": "ITG"
        },
        {
          "@id": "ITH"
        },
        {
          "@id": "ITI"
        },
        {
          "@id": "ITZ"
        }
      ]
    },
    {
      "@id": "ITC",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORD-OVEST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IT"
        }
      ],
      "narrower": [
        {
          "@id": "ITC1"
        },
        {
          "@id": "ITC2"
        },
        {
          "@id": "ITC3"
        },
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Piemonte",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC"
        }
      ],
      "narrower": [
        {
          "@id": "ITC11"
        },
        {
          "@id": "ITC12"
        },
        {
          "@id": "ITC13"
        },
        {
          "@id": "ITC14"
        },
        {
          "@id": "ITC15"
        },
        {
          "@id": "ITC16"
        },
        {
          "@id": "ITC17"
        },
        {
          "@id": "ITC18"
        }
      ]
    },
    {
      "@id": "ITC11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Torino",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vercelli",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Biella",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Verbano-Cusio-Ossola",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Novara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cuneo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Asti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC18",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alessandria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC1"
        }
      ]
    },
    {
      "@id": "ITC2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Valle d'Aosta/Vallée d'Aoste",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC"
        }
      ],
      "narrower": [
        {
          "@id": "ITC20"
        }
      ]
    },
    {
      "@id": "ITC20",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Valle d'Aosta/Vallée d'Aoste",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC2"
        }
      ]
    },
    {
      "@id": "ITC3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liguria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC"
        }
      ],
      "narrower": [
        {
          "@id": "ITC31"
        },
        {
          "@id": "ITC32"
        },
        {
          "@id": "ITC33"
        },
        {
          "@id": "ITC34"
        }
      ]
    },
    {
      "@id": "ITC31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Imperia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC3"
        }
      ]
    },
    {
      "@id": "ITC32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Savona",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC3"
        }
      ]
    },
    {
      "@id": "ITC33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Genova",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC3"
        }
      ]
    },
    {
      "@id": "ITC34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "La Spezia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC3"
        }
      ]
    },
    {
      "@id": "ITC4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lombardia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC"
        }
      ],
      "narrower": [
        {
          "@id": "ITC41"
        },
        {
          "@id": "ITC42"
        },
        {
          "@id": "ITC43"
        },
        {
          "@id": "ITC44"
        },
        {
          "@id": "ITC45"
        },
        {
          "@id": "ITC46"
        },
        {
          "@id": "ITC47"
        },
        {
          "@id": "ITC48"
        },
        {
          "@id": "ITC49"
        },
        {
          "@id": "ITC4A"
        },
        {
          "@id": "ITC4B"
        },
        {
          "@id": "ITC4C"
        },
        {
          "@id": "ITC4D"
        }
      ]
    },
    {
      "@id": "ITC41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Varese",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Como",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lecco",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sondrio",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC46",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bergamo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC47",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brescia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC48",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pavia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC49",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lodi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC4A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cremona",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC4B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mantova",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC4C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Milano",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITC4D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Monza e della Brianza",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITC4"
        }
      ]
    },
    {
      "@id": "ITF",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SUD",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IT"
        }
      ],
      "narrower": [
        {
          "@id": "ITF1"
        },
        {
          "@id": "ITF2"
        },
        {
          "@id": "ITF3"
        },
        {
          "@id": "ITF4"
        },
        {
          "@id": "ITF5"
        },
        {
          "@id": "ITF6"
        }
      ]
    },
    {
      "@id": "ITF1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Abruzzo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF"
        }
      ],
      "narrower": [
        {
          "@id": "ITF11"
        },
        {
          "@id": "ITF12"
        },
        {
          "@id": "ITF13"
        },
        {
          "@id": "ITF14"
        }
      ]
    },
    {
      "@id": "ITF11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "L'Aquila",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF1"
        }
      ]
    },
    {
      "@id": "ITF12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Teramo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF1"
        }
      ]
    },
    {
      "@id": "ITF13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pescara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF1"
        }
      ]
    },
    {
      "@id": "ITF14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Chieti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF1"
        }
      ]
    },
    {
      "@id": "ITF2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Molise",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF"
        }
      ],
      "narrower": [
        {
          "@id": "ITF21"
        },
        {
          "@id": "ITF22"
        }
      ]
    },
    {
      "@id": "ITF21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Isernia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF2"
        }
      ]
    },
    {
      "@id": "ITF22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Campobasso",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF2"
        }
      ]
    },
    {
      "@id": "ITF3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Campania",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF"
        }
      ],
      "narrower": [
        {
          "@id": "ITF31"
        },
        {
          "@id": "ITF32"
        },
        {
          "@id": "ITF33"
        },
        {
          "@id": "ITF34"
        },
        {
          "@id": "ITF35"
        }
      ]
    },
    {
      "@id": "ITF31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Caserta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF3"
        }
      ]
    },
    {
      "@id": "ITF32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Benevento",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF3"
        }
      ]
    },
    {
      "@id": "ITF33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Napoli",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF3"
        }
      ]
    },
    {
      "@id": "ITF34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Avellino",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF3"
        }
      ]
    },
    {
      "@id": "ITF35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Salerno",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF3"
        }
      ]
    },
    {
      "@id": "ITF4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Puglia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF"
        }
      ],
      "narrower": [
        {
          "@id": "ITF41"
        },
        {
          "@id": "ITF42"
        },
        {
          "@id": "ITF43"
        },
        {
          "@id": "ITF44"
        },
        {
          "@id": "ITF45"
        },
        {
          "@id": "ITF46"
        },
        {
          "@id": "ITF47"
        },
        {
          "@id": "ITF48"
        }
      ]
    },
    {
      "@id": "ITF43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Taranto",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF4"
        }
      ]
    },
    {
      "@id": "ITF44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brindisi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF4"
        }
      ]
    },
    {
      "@id": "ITF45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lecce",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF4"
        }
      ]
    },
    {
      "@id": "ITF46",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Foggia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF4"
        }
      ]
    },
    {
      "@id": "ITF47",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bari",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF4"
        }
      ]
    },
    {
      "@id": "ITF48",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Barletta-Andria-Trani",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF4"
        }
      ]
    },
    {
      "@id": "ITF5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Basilicata",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF"
        }
      ],
      "narrower": [
        {
          "@id": "ITF51"
        },
        {
          "@id": "ITF52"
        }
      ]
    },
    {
      "@id": "ITF51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Potenza",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF5"
        }
      ]
    },
    {
      "@id": "ITF52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Matera",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF5"
        }
      ]
    },
    {
      "@id": "ITF6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Calabria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF"
        }
      ],
      "narrower": [
        {
          "@id": "ITF61"
        },
        {
          "@id": "ITF62"
        },
        {
          "@id": "ITF63"
        },
        {
          "@id": "ITF64"
        },
        {
          "@id": "ITF65"
        }
      ]
    },
    {
      "@id": "ITF61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cosenza",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF6"
        }
      ]
    },
    {
      "@id": "ITF62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Crotone",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF6"
        }
      ]
    },
    {
      "@id": "ITF63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Catanzaro",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF6"
        }
      ]
    },
    {
      "@id": "ITF64",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vibo Valentia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF6"
        }
      ]
    },
    {
      "@id": "ITF65",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Reggio di Calabria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITF6"
        }
      ]
    },
    {
      "@id": "ITG",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ISOLE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IT"
        }
      ],
      "narrower": [
        {
          "@id": "ITG1"
        },
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sicilia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG"
        }
      ],
      "narrower": [
        {
          "@id": "ITG11"
        },
        {
          "@id": "ITG12"
        },
        {
          "@id": "ITG13"
        },
        {
          "@id": "ITG14"
        },
        {
          "@id": "ITG15"
        },
        {
          "@id": "ITG16"
        },
        {
          "@id": "ITG17"
        },
        {
          "@id": "ITG18"
        },
        {
          "@id": "ITG19"
        }
      ]
    },
    {
      "@id": "ITG11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trapani",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Palermo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Messina",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Agrigento",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Caltanissetta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Enna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Catania",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG18",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ragusa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG19",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Siracusa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG1"
        }
      ]
    },
    {
      "@id": "ITG2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sardegna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG"
        }
      ],
      "narrower": [
        {
          "@id": "ITG21"
        },
        {
          "@id": "ITG22"
        },
        {
          "@id": "ITG23"
        },
        {
          "@id": "ITG24"
        },
        {
          "@id": "ITG25"
        },
        {
          "@id": "ITG26"
        },
        {
          "@id": "ITG27"
        },
        {
          "@id": "ITG28"
        },
        {
          "@id": "ITG29"
        },
        {
          "@id": "ITG2A"
        },
        {
          "@id": "ITG2B"
        },
        {
          "@id": "ITG2C"
        }
      ]
    },
    {
      "@id": "ITG25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sassari",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG26",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nuoro",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG27",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cagliari",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG28",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oristano",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG29",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Olbia-Tempio",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG2A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ogliastra",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG2B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Medio Campidano",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITG2C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Carbonia-Iglesias",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITG2"
        }
      ]
    },
    {
      "@id": "ITH",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORD-EST",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IT"
        }
      ],
      "narrower": [
        {
          "@id": "ITH1"
        },
        {
          "@id": "ITH2"
        },
        {
          "@id": "ITH3"
        },
        {
          "@id": "ITH4"
        },
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Provincia Autonoma di Bolzano/Bozen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH"
        }
      ],
      "narrower": [
        {
          "@id": "ITH10"
        }
      ]
    },
    {
      "@id": "ITH10",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bolzano-Bozen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH1"
        }
      ]
    },
    {
      "@id": "ITH2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Provincia Autonoma di Trento",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH"
        }
      ],
      "narrower": [
        {
          "@id": "ITH20"
        }
      ]
    },
    {
      "@id": "ITH20",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trento",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH2"
        }
      ]
    },
    {
      "@id": "ITH3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Veneto",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH"
        }
      ],
      "narrower": [
        {
          "@id": "ITH31"
        },
        {
          "@id": "ITH32"
        },
        {
          "@id": "ITH33"
        },
        {
          "@id": "ITH34"
        },
        {
          "@id": "ITH35"
        },
        {
          "@id": "ITH36"
        },
        {
          "@id": "ITH37"
        }
      ]
    },
    {
      "@id": "ITH31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Verona",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH3"
        }
      ]
    },
    {
      "@id": "ITH32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vicenza",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH3"
        }
      ]
    },
    {
      "@id": "ITH33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Belluno",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH3"
        }
      ]
    },
    {
      "@id": "ITH34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Treviso",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH3"
        }
      ]
    },
    {
      "@id": "ITH35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Venezia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH3"
        }
      ]
    },
    {
      "@id": "ITH36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Padova",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH3"
        }
      ]
    },
    {
      "@id": "ITH37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rovigo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH3"
        }
      ]
    },
    {
      "@id": "ITH4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Friuli-Venezia Giulia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH"
        }
      ],
      "narrower": [
        {
          "@id": "ITH41"
        },
        {
          "@id": "ITH42"
        },
        {
          "@id": "ITH43"
        },
        {
          "@id": "ITH44"
        }
      ]
    },
    {
      "@id": "ITH41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pordenone",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH4"
        }
      ]
    },
    {
      "@id": "ITH42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Udine",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH4"
        }
      ]
    },
    {
      "@id": "ITH43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gorizia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH4"
        }
      ]
    },
    {
      "@id": "ITH44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trieste",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH4"
        }
      ]
    },
    {
      "@id": "ITH5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Emilia-Romagna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH"
        }
      ],
      "narrower": [
        {
          "@id": "ITH51"
        },
        {
          "@id": "ITH52"
        },
        {
          "@id": "ITH53"
        },
        {
          "@id": "ITH54"
        },
        {
          "@id": "ITH55"
        },
        {
          "@id": "ITH56"
        },
        {
          "@id": "ITH57"
        },
        {
          "@id": "ITH58"
        },
        {
          "@id": "ITH59"
        }
      ]
    },
    {
      "@id": "ITH51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Piacenza",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Parma",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH53",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Reggio nell'Emilia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH54",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Modena",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH55",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bologna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH56",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ferrara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH57",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ravenna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH58",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Forlì-Cesena",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITH59",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rimini",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITH5"
        }
      ]
    },
    {
      "@id": "ITI",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "CENTRO (IT)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IT"
        }
      ],
      "narrower": [
        {
          "@id": "ITI1"
        },
        {
          "@id": "ITI2"
        },
        {
          "@id": "ITI3"
        },
        {
          "@id": "ITI4"
        }
      ]
    },
    {
      "@id": "ITI1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Toscana",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI"
        }
      ],
      "narrower": [
        {
          "@id": "ITI11"
        },
        {
          "@id": "ITI12"
        },
        {
          "@id": "ITI13"
        },
        {
          "@id": "ITI14"
        },
        {
          "@id": "ITI15"
        },
        {
          "@id": "ITI16"
        },
        {
          "@id": "ITI17"
        },
        {
          "@id": "ITI18"
        },
        {
          "@id": "ITI19"
        },
        {
          "@id": "ITI1A"
        }
      ]
    },
    {
      "@id": "ITI11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Massa-Carrara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lucca",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pistoia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Firenze",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prato",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Livorno",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pisa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI18",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arezzo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI19",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Siena",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI1A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Grosseto",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI1"
        }
      ]
    },
    {
      "@id": "ITI2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Umbria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI"
        }
      ],
      "narrower": [
        {
          "@id": "ITI21"
        },
        {
          "@id": "ITI22"
        }
      ]
    },
    {
      "@id": "ITI21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Perugia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI2"
        }
      ]
    },
    {
      "@id": "ITI22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Terni",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI2"
        }
      ]
    },
    {
      "@id": "ITI3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Marche",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI"
        }
      ],
      "narrower": [
        {
          "@id": "ITI31"
        },
        {
          "@id": "ITI32"
        },
        {
          "@id": "ITI33"
        },
        {
          "@id": "ITI34"
        },
        {
          "@id": "ITI35"
        }
      ]
    },
    {
      "@id": "ITI31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pesaro e Urbino",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI3"
        }
      ]
    },
    {
      "@id": "ITI32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ancona",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI3"
        }
      ]
    },
    {
      "@id": "ITI33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Macerata",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI3"
        }
      ]
    },
    {
      "@id": "ITI34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ascoli Piceno",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI3"
        }
      ]
    },
    {
      "@id": "ITI35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Fermo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI3"
        }
      ]
    },
    {
      "@id": "ITI4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lazio",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI"
        }
      ],
      "narrower": [
        {
          "@id": "ITI41"
        },
        {
          "@id": "ITI42"
        },
        {
          "@id": "ITI43"
        },
        {
          "@id": "ITI44"
        },
        {
          "@id": "ITI45"
        }
      ]
    },
    {
      "@id": "ITI41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Viterbo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI4"
        }
      ]
    },
    {
      "@id": "ITI42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rieti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI4"
        }
      ]
    },
    {
      "@id": "ITI43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Roma",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI4"
        }
      ]
    },
    {
      "@id": "ITI44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Latina",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI4"
        }
      ]
    },
    {
      "@id": "ITI45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Frosinone",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITI4"
        }
      ]
    },
    {
      "@id": "ITZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "IT"
        }
      ],
      "narrower": [
        {
          "@id": "ITZZ"
        }
      ]
    },
    {
      "@id": "ITZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITZ"
        }
      ],
      "narrower": [
        {
          "@id": "ITZZZ"
        }
      ]
    },
    {
      "@id": "ITZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ITZZ"
        }
      ]
    },
    {
      "@id": "LI",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liechtenstein",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "LI0"
        }
      ]
    },
    {
      "@id": "LI0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liechtenstein",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LI"
        }
      ],
      "narrower": [
        {
          "@id": "LI00"
        }
      ]
    },
    {
      "@id": "LI00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liechtenstein",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LI0"
        }
      ],
      "narrower": [
        {
          "@id": "LI000"
        }
      ]
    },
    {
      "@id": "LI000",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liechtenstein",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LI00"
        }
      ]
    },
    {
      "@id": "LT",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "LIETUVA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "LT0"
        },
        {
          "@id": "LTZ"
        }
      ]
    },
    {
      "@id": "LT0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "LIETUVA",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT"
        }
      ],
      "narrower": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lietuva",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT0"
        }
      ],
      "narrower": [
        {
          "@id": "LT001"
        },
        {
          "@id": "LT002"
        },
        {
          "@id": "LT003"
        },
        {
          "@id": "LT004"
        },
        {
          "@id": "LT005"
        },
        {
          "@id": "LT006"
        },
        {
          "@id": "LT007"
        },
        {
          "@id": "LT008"
        },
        {
          "@id": "LT009"
        },
        {
          "@id": "LT00A"
        }
      ]
    },
    {
      "@id": "LT001",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alytaus apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT002",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kauno apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT003",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Klaipėdos apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT004",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Marijampolės apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT005",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Panevėžio apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT006",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Šiaulių apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT007",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tauragės apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT008",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Telšių apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT009",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Utenos apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LT00A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vilniaus apskritis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT00"
        }
      ]
    },
    {
      "@id": "LTZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LT"
        }
      ],
      "narrower": [
        {
          "@id": "LTZZ"
        }
      ]
    },
    {
      "@id": "LTZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LTZ"
        }
      ],
      "narrower": [
        {
          "@id": "LTZZZ"
        }
      ]
    },
    {
      "@id": "LTZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LTZZ"
        }
      ]
    },
    {
      "@id": "LU",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "LUXEMBOURG",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "LU0"
        },
        {
          "@id": "LUZ"
        }
      ]
    },
    {
      "@id": "LU0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "LUXEMBOURG",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LU"
        }
      ],
      "narrower": [
        {
          "@id": "LU00"
        }
      ]
    },
    {
      "@id": "LU00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Luxembourg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LU0"
        }
      ],
      "narrower": [
        {
          "@id": "LU000"
        }
      ]
    },
    {
      "@id": "LU000",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Luxembourg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LU00"
        }
      ]
    },
    {
      "@id": "LUZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LU"
        }
      ],
      "narrower": [
        {
          "@id": "LUZZ"
        }
      ]
    },
    {
      "@id": "LUZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LUZ"
        }
      ],
      "narrower": [
        {
          "@id": "LUZZZ"
        }
      ]
    },
    {
      "@id": "LUZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LUZZ"
        }
      ]
    },
    {
      "@id": "LV",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "LATVIJA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "LV0"
        },
        {
          "@id": "LVZ"
        }
      ]
    },
    {
      "@id": "LV0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "LATVIJA",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV"
        }
      ],
      "narrower": [
        {
          "@id": "LV00"
        }
      ]
    },
    {
      "@id": "LV00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Latvija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV0"
        }
      ],
      "narrower": [
        {
          "@id": "LV003"
        },
        {
          "@id": "LV005"
        },
        {
          "@id": "LV006"
        },
        {
          "@id": "LV007"
        },
        {
          "@id": "LV008"
        },
        {
          "@id": "LV009"
        }
      ]
    },
    {
      "@id": "LV003",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kurzeme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV00"
        }
      ]
    },
    {
      "@id": "LV005",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Latgale",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV00"
        }
      ]
    },
    {
      "@id": "LV006",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rīga",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV00"
        }
      ]
    },
    {
      "@id": "LV007",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pierīga",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV00"
        }
      ]
    },
    {
      "@id": "LV008",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vidzeme",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV00"
        }
      ]
    },
    {
      "@id": "LV009",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zemgale",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV00"
        }
      ]
    },
    {
      "@id": "LVZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LV"
        }
      ],
      "narrower": [
        {
          "@id": "LVZZ"
        }
      ]
    },
    {
      "@id": "LVZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LVZ"
        }
      ],
      "narrower": [
        {
          "@id": "LVZZZ"
        }
      ]
    },
    {
      "@id": "LVZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "LVZZ"
        }
      ]
    },
    {
      "@id": "ME",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Crna Gora",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "ME0"
        }
      ]
    },
    {
      "@id": "ME0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Crna Gora",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ME"
        }
      ],
      "narrower": [
        {
          "@id": "ME00"
        }
      ]
    },
    {
      "@id": "ME00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Crna Gora",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ME0"
        }
      ],
      "narrower": [
        {
          "@id": "ME000"
        }
      ]
    },
    {
      "@id": "ME000",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Crna Gora",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ME00"
        }
      ]
    },
    {
      "@id": "MK",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Poranešna Jugoslovenska Republika Makedonija",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "MK0"
        }
      ]
    },
    {
      "@id": "MK0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Poranešna Jugoslovenska Republika Makedonija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK"
        }
      ],
      "narrower": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Poranešna Jugoslovenska Republika Makedonija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK0"
        }
      ],
      "narrower": [
        {
          "@id": "MK001"
        },
        {
          "@id": "MK002"
        },
        {
          "@id": "MK003"
        },
        {
          "@id": "MK004"
        },
        {
          "@id": "MK005"
        },
        {
          "@id": "MK006"
        },
        {
          "@id": "MK007"
        },
        {
          "@id": "MK008"
        }
      ]
    },
    {
      "@id": "MK001",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vardarski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK002",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Istočen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK003",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jugozapaden",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK004",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jugoistočen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK005",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pelagoniski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK006",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pološki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK007",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Severoistočen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MK008",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Skopski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MK00"
        }
      ]
    },
    {
      "@id": "MT",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MALTA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "MT0"
        },
        {
          "@id": "MTZ"
        }
      ]
    },
    {
      "@id": "MT0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MALTA",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MT"
        }
      ],
      "narrower": [
        {
          "@id": "MT00"
        }
      ]
    },
    {
      "@id": "MT00",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Malta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MT0"
        }
      ],
      "narrower": [
        {
          "@id": "MT001"
        },
        {
          "@id": "MT002"
        }
      ]
    },
    {
      "@id": "MT001",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Malta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MT00"
        }
      ]
    },
    {
      "@id": "MT002",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gozo and Comino / Għawdex u Kemmuna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MT00"
        }
      ]
    },
    {
      "@id": "MTZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MT"
        }
      ],
      "narrower": [
        {
          "@id": "MTZZ"
        }
      ]
    },
    {
      "@id": "MTZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MTZ"
        }
      ],
      "narrower": [
        {
          "@id": "MTZZZ"
        }
      ]
    },
    {
      "@id": "MTZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "MTZZ"
        }
      ]
    },
    {
      "@id": "NL",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NEDERLAND",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "NL1"
        },
        {
          "@id": "NL2"
        },
        {
          "@id": "NL3"
        },
        {
          "@id": "NL4"
        },
        {
          "@id": "NLZ"
        }
      ]
    },
    {
      "@id": "NL1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NOORD-NEDERLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL"
        }
      ],
      "narrower": [
        {
          "@id": "NL11"
        },
        {
          "@id": "NL12"
        },
        {
          "@id": "NL13"
        }
      ]
    },
    {
      "@id": "NL11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Groningen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL1"
        }
      ],
      "narrower": [
        {
          "@id": "NL111"
        },
        {
          "@id": "NL112"
        },
        {
          "@id": "NL113"
        }
      ]
    },
    {
      "@id": "NL111",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oost-Groningen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL11"
        }
      ]
    },
    {
      "@id": "NL112",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Delfzijl en omgeving",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL11"
        }
      ]
    },
    {
      "@id": "NL113",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Overig Groningen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL11"
        }
      ]
    },
    {
      "@id": "NL12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Friesland (NL)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL1"
        }
      ],
      "narrower": [
        {
          "@id": "NL121"
        },
        {
          "@id": "NL122"
        },
        {
          "@id": "NL123"
        }
      ]
    },
    {
      "@id": "NL121",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Noord-Friesland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL12"
        }
      ]
    },
    {
      "@id": "NL122",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidwest-Friesland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL12"
        }
      ]
    },
    {
      "@id": "NL123",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidoost-Friesland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL12"
        }
      ]
    },
    {
      "@id": "NL13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Drenthe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL1"
        }
      ],
      "narrower": [
        {
          "@id": "NL131"
        },
        {
          "@id": "NL132"
        },
        {
          "@id": "NL133"
        }
      ]
    },
    {
      "@id": "NL131",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Noord-Drenthe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL13"
        }
      ]
    },
    {
      "@id": "NL132",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidoost-Drenthe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL13"
        }
      ]
    },
    {
      "@id": "NL133",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidwest-Drenthe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL13"
        }
      ]
    },
    {
      "@id": "NL2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "OOST-NEDERLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL"
        }
      ],
      "narrower": [
        {
          "@id": "NL21"
        },
        {
          "@id": "NL22"
        },
        {
          "@id": "NL23"
        }
      ]
    },
    {
      "@id": "NL21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Overijssel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL2"
        }
      ],
      "narrower": [
        {
          "@id": "NL211"
        },
        {
          "@id": "NL212"
        },
        {
          "@id": "NL213"
        }
      ]
    },
    {
      "@id": "NL211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Noord-Overijssel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL21"
        }
      ]
    },
    {
      "@id": "NL212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidwest-Overijssel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL21"
        }
      ]
    },
    {
      "@id": "NL213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Twente",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL21"
        }
      ]
    },
    {
      "@id": "NL22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gelderland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL2"
        }
      ],
      "narrower": [
        {
          "@id": "NL221"
        },
        {
          "@id": "NL222"
        },
        {
          "@id": "NL223"
        },
        {
          "@id": "NL224"
        },
        {
          "@id": "NL225"
        },
        {
          "@id": "NL226"
        }
      ]
    },
    {
      "@id": "NL221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Veluwe",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL22"
        }
      ]
    },
    {
      "@id": "NL224",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidwest-Gelderland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL22"
        }
      ]
    },
    {
      "@id": "NL225",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Achterhoek",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL22"
        }
      ]
    },
    {
      "@id": "NL226",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arnhem/Nijmegen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL22"
        }
      ]
    },
    {
      "@id": "NL23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Flevoland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL2"
        }
      ],
      "narrower": [
        {
          "@id": "NL230"
        }
      ]
    },
    {
      "@id": "NL230",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Flevoland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL23"
        }
      ]
    },
    {
      "@id": "NL3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "WEST-NEDERLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL"
        }
      ],
      "narrower": [
        {
          "@id": "NL31"
        },
        {
          "@id": "NL32"
        },
        {
          "@id": "NL33"
        },
        {
          "@id": "NL34"
        }
      ]
    },
    {
      "@id": "NL31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Utrecht",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL3"
        }
      ],
      "narrower": [
        {
          "@id": "NL310"
        }
      ]
    },
    {
      "@id": "NL310",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Utrecht",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL31"
        }
      ]
    },
    {
      "@id": "NL32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Noord-Holland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL3"
        }
      ],
      "narrower": [
        {
          "@id": "NL321"
        },
        {
          "@id": "NL322"
        },
        {
          "@id": "NL323"
        },
        {
          "@id": "NL324"
        },
        {
          "@id": "NL325"
        },
        {
          "@id": "NL326"
        },
        {
          "@id": "NL327"
        }
      ]
    },
    {
      "@id": "NL321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kop van Noord-Holland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL32"
        }
      ]
    },
    {
      "@id": "NL322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alkmaar en omgeving",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL32"
        }
      ]
    },
    {
      "@id": "NL323",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "IJmond",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL32"
        }
      ]
    },
    {
      "@id": "NL324",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Agglomeratie Haarlem",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL32"
        }
      ]
    },
    {
      "@id": "NL325",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zaanstreek",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL32"
        }
      ]
    },
    {
      "@id": "NL326",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Groot-Amsterdam",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL32"
        }
      ]
    },
    {
      "@id": "NL327",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Het Gooi en Vechtstreek",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL32"
        }
      ]
    },
    {
      "@id": "NL33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuid-Holland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL3"
        }
      ],
      "narrower": [
        {
          "@id": "NL331"
        },
        {
          "@id": "NL332"
        },
        {
          "@id": "NL333"
        },
        {
          "@id": "NL334"
        },
        {
          "@id": "NL335"
        },
        {
          "@id": "NL336"
        },
        {
          "@id": "NL337"
        },
        {
          "@id": "NL338"
        },
        {
          "@id": "NL339"
        },
        {
          "@id": "NL33A"
        }
      ]
    },
    {
      "@id": "NL332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Agglomeratie 's-Gravenhage",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL33"
        }
      ]
    },
    {
      "@id": "NL333",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Delft en Westland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL33"
        }
      ]
    },
    {
      "@id": "NL337",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Agglomeratie Leiden en Bollenstreek",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL33"
        }
      ]
    },
    {
      "@id": "NL338",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oost-Zuid-Holland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL33"
        }
      ]
    },
    {
      "@id": "NL339",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Groot-Rijnmond",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL33"
        }
      ]
    },
    {
      "@id": "NL33A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidoost-Zuid-Holland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL33"
        }
      ]
    },
    {
      "@id": "NL34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zeeland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL3"
        }
      ],
      "narrower": [
        {
          "@id": "NL341"
        },
        {
          "@id": "NL342"
        }
      ]
    },
    {
      "@id": "NL341",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zeeuwsch-Vlaanderen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL34"
        }
      ]
    },
    {
      "@id": "NL342",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Overig Zeeland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL34"
        }
      ]
    },
    {
      "@id": "NL4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ZUID-NEDERLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL"
        }
      ],
      "narrower": [
        {
          "@id": "NL41"
        },
        {
          "@id": "NL42"
        }
      ]
    },
    {
      "@id": "NL41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Noord-Brabant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL4"
        }
      ],
      "narrower": [
        {
          "@id": "NL411"
        },
        {
          "@id": "NL412"
        },
        {
          "@id": "NL413"
        },
        {
          "@id": "NL414"
        }
      ]
    },
    {
      "@id": "NL411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West-Noord-Brabant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL41"
        }
      ]
    },
    {
      "@id": "NL412",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Midden-Noord-Brabant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL41"
        }
      ]
    },
    {
      "@id": "NL413",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Noordoost-Noord-Brabant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL41"
        }
      ]
    },
    {
      "@id": "NL414",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuidoost-Noord-Brabant",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL41"
        }
      ]
    },
    {
      "@id": "NL42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Limburg (NL)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL4"
        }
      ],
      "narrower": [
        {
          "@id": "NL421"
        },
        {
          "@id": "NL422"
        },
        {
          "@id": "NL423"
        }
      ]
    },
    {
      "@id": "NL421",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Noord-Limburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL42"
        }
      ]
    },
    {
      "@id": "NL422",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Midden-Limburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL42"
        }
      ]
    },
    {
      "@id": "NL423",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zuid-Limburg",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL42"
        }
      ]
    },
    {
      "@id": "NLZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NL"
        }
      ],
      "narrower": [
        {
          "@id": "NLZZ"
        }
      ]
    },
    {
      "@id": "NLZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NLZ"
        }
      ],
      "narrower": [
        {
          "@id": "NLZZZ"
        }
      ]
    },
    {
      "@id": "NLZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NLZZ"
        }
      ]
    },
    {
      "@id": "NO",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Norge",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "NO0"
        }
      ]
    },
    {
      "@id": "NO0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Norge",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO"
        }
      ],
      "narrower": [
        {
          "@id": "NO01"
        },
        {
          "@id": "NO02"
        },
        {
          "@id": "NO03"
        },
        {
          "@id": "NO04"
        },
        {
          "@id": "NO05"
        },
        {
          "@id": "NO06"
        },
        {
          "@id": "NO07"
        }
      ]
    },
    {
      "@id": "NO01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oslo og Akershus",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO0"
        }
      ],
      "narrower": [
        {
          "@id": "NO011"
        },
        {
          "@id": "NO012"
        }
      ]
    },
    {
      "@id": "NO011",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oslo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO01"
        }
      ]
    },
    {
      "@id": "NO012",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Akershus",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO01"
        }
      ]
    },
    {
      "@id": "NO02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hedmark og Oppland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO0"
        }
      ],
      "narrower": [
        {
          "@id": "NO021"
        },
        {
          "@id": "NO022"
        }
      ]
    },
    {
      "@id": "NO021",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hedmark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO02"
        }
      ]
    },
    {
      "@id": "NO022",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oppland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO02"
        }
      ]
    },
    {
      "@id": "NO03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sør-Østlandet",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO0"
        }
      ],
      "narrower": [
        {
          "@id": "NO031"
        },
        {
          "@id": "NO032"
        },
        {
          "@id": "NO033"
        },
        {
          "@id": "NO034"
        }
      ]
    },
    {
      "@id": "NO031",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Østfold",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO03"
        }
      ]
    },
    {
      "@id": "NO032",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Buskerud",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO03"
        }
      ]
    },
    {
      "@id": "NO033",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vestfold",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO03"
        }
      ]
    },
    {
      "@id": "NO034",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Telemark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO03"
        }
      ]
    },
    {
      "@id": "NO04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Agder og Rogaland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO0"
        }
      ],
      "narrower": [
        {
          "@id": "NO041"
        },
        {
          "@id": "NO042"
        },
        {
          "@id": "NO043"
        }
      ]
    },
    {
      "@id": "NO041",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aust-Agder",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO04"
        }
      ]
    },
    {
      "@id": "NO042",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vest-Agder",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO04"
        }
      ]
    },
    {
      "@id": "NO043",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rogaland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO04"
        }
      ]
    },
    {
      "@id": "NO05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vestlandet",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO0"
        }
      ],
      "narrower": [
        {
          "@id": "NO051"
        },
        {
          "@id": "NO052"
        },
        {
          "@id": "NO053"
        }
      ]
    },
    {
      "@id": "NO051",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hordaland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO05"
        }
      ]
    },
    {
      "@id": "NO052",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sogn og Fjordane",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO05"
        }
      ]
    },
    {
      "@id": "NO053",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Møre og Romsdal",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO05"
        }
      ]
    },
    {
      "@id": "NO06",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trøndelag",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO0"
        }
      ],
      "narrower": [
        {
          "@id": "NO061"
        },
        {
          "@id": "NO062"
        }
      ]
    },
    {
      "@id": "NO061",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sør-Trøndelag",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO06"
        }
      ]
    },
    {
      "@id": "NO062",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nord-Trøndelag",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO06"
        }
      ]
    },
    {
      "@id": "NO07",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nord-Norge",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO0"
        }
      ],
      "narrower": [
        {
          "@id": "NO071"
        },
        {
          "@id": "NO072"
        },
        {
          "@id": "NO073"
        }
      ]
    },
    {
      "@id": "NO071",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nordland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO07"
        }
      ]
    },
    {
      "@id": "NO072",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Troms",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO07"
        }
      ]
    },
    {
      "@id": "NO073",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Finnmark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "NO07"
        }
      ]
    },
    {
      "@id": "PL",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "POLSKA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "PL1"
        },
        {
          "@id": "PL2"
        },
        {
          "@id": "PL3"
        },
        {
          "@id": "PL4"
        },
        {
          "@id": "PL5"
        },
        {
          "@id": "PL6"
        },
        {
          "@id": "PLZ"
        }
      ]
    },
    {
      "@id": "PL1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGION CENTRALNY",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL"
        }
      ],
      "narrower": [
        {
          "@id": "PL11"
        },
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Łódzkie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL1"
        }
      ],
      "narrower": [
        {
          "@id": "PL113"
        },
        {
          "@id": "PL114"
        },
        {
          "@id": "PL115"
        },
        {
          "@id": "PL116"
        },
        {
          "@id": "PL117"
        }
      ]
    },
    {
      "@id": "PL113",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miasto Łódź",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL11"
        }
      ]
    },
    {
      "@id": "PL114",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Łódzki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL11"
        }
      ]
    },
    {
      "@id": "PL115",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Piotrkowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL11"
        }
      ]
    },
    {
      "@id": "PL116",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sieradzki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL11"
        }
      ]
    },
    {
      "@id": "PL117",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Skierniewicki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL11"
        }
      ]
    },
    {
      "@id": "PL12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mazowieckie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL1"
        }
      ],
      "narrower": [
        {
          "@id": "PL121"
        },
        {
          "@id": "PL122"
        },
        {
          "@id": "PL127"
        },
        {
          "@id": "PL128"
        },
        {
          "@id": "PL129"
        },
        {
          "@id": "PL12A"
        },
        {
          "@id": "PL12B"
        },
        {
          "@id": "PL12C"
        },
        {
          "@id": "PL12D"
        },
        {
          "@id": "PL12E"
        }
      ]
    },
    {
      "@id": "PL127",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miasto Warszawa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL128",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Radomski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL129",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Warszawski wschodni",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL12A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Warszawski zachodni",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL12B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ciechanowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL12C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Płocki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL12D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ostrołęcki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL12E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Siedlecki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL12"
        }
      ]
    },
    {
      "@id": "PL2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGION POŁUDNIOWY",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL"
        }
      ],
      "narrower": [
        {
          "@id": "PL21"
        },
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Małopolskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL2"
        }
      ],
      "narrower": [
        {
          "@id": "PL213"
        },
        {
          "@id": "PL214"
        },
        {
          "@id": "PL215"
        },
        {
          "@id": "PL216"
        },
        {
          "@id": "PL217"
        },
        {
          "@id": "PL218"
        },
        {
          "@id": "PL219"
        },
        {
          "@id": "PL21A"
        }
      ]
    },
    {
      "@id": "PL213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miasto Kraków",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL21"
        }
      ]
    },
    {
      "@id": "PL214",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Krakowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL21"
        }
      ]
    },
    {
      "@id": "PL217",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tarnowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL21"
        }
      ]
    },
    {
      "@id": "PL218",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nowosądecki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL21"
        }
      ]
    },
    {
      "@id": "PL219",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nowotarski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL21"
        }
      ]
    },
    {
      "@id": "PL21A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oświęcimski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL21"
        }
      ]
    },
    {
      "@id": "PL22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Śląskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL2"
        }
      ],
      "narrower": [
        {
          "@id": "PL224"
        },
        {
          "@id": "PL225"
        },
        {
          "@id": "PL227"
        },
        {
          "@id": "PL228"
        },
        {
          "@id": "PL229"
        },
        {
          "@id": "PL22A"
        },
        {
          "@id": "PL22B"
        },
        {
          "@id": "PL22C"
        }
      ]
    },
    {
      "@id": "PL224",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Częstochowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL225",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bielski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL227",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rybnicki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL228",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bytomski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL229",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gliwicki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL22A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Katowicki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL22B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sosnowiecki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL22C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tyski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL22"
        }
      ]
    },
    {
      "@id": "PL3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGION WSCHODNI",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL"
        }
      ],
      "narrower": [
        {
          "@id": "PL31"
        },
        {
          "@id": "PL32"
        },
        {
          "@id": "PL33"
        },
        {
          "@id": "PL34"
        }
      ]
    },
    {
      "@id": "PL31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lubelskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL3"
        }
      ],
      "narrower": [
        {
          "@id": "PL311"
        },
        {
          "@id": "PL312"
        },
        {
          "@id": "PL314"
        },
        {
          "@id": "PL315"
        }
      ]
    },
    {
      "@id": "PL311",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bialski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL31"
        }
      ]
    },
    {
      "@id": "PL312",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Chełmsko-zamojski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL31"
        }
      ]
    },
    {
      "@id": "PL314",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lubelski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL31"
        }
      ]
    },
    {
      "@id": "PL315",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Puławski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL31"
        }
      ]
    },
    {
      "@id": "PL32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Podkarpackie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL3"
        }
      ],
      "narrower": [
        {
          "@id": "PL323"
        },
        {
          "@id": "PL324"
        },
        {
          "@id": "PL325"
        },
        {
          "@id": "PL326"
        }
      ]
    },
    {
      "@id": "PL323",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Krośnieński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL32"
        }
      ]
    },
    {
      "@id": "PL324",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Przemyski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL32"
        }
      ]
    },
    {
      "@id": "PL325",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rzeszowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL32"
        }
      ]
    },
    {
      "@id": "PL326",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tarnobrzeski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL32"
        }
      ]
    },
    {
      "@id": "PL33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Świętokrzyskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL3"
        }
      ],
      "narrower": [
        {
          "@id": "PL331"
        },
        {
          "@id": "PL332"
        }
      ]
    },
    {
      "@id": "PL331",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kielecki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL33"
        }
      ]
    },
    {
      "@id": "PL332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sandomiersko-jędrzejowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL33"
        }
      ]
    },
    {
      "@id": "PL34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Podlaskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL3"
        }
      ],
      "narrower": [
        {
          "@id": "PL343"
        },
        {
          "@id": "PL344"
        },
        {
          "@id": "PL345"
        }
      ]
    },
    {
      "@id": "PL343",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Białostocki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL34"
        }
      ]
    },
    {
      "@id": "PL344",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Łomżyński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL34"
        }
      ]
    },
    {
      "@id": "PL345",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Suwalski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL34"
        }
      ]
    },
    {
      "@id": "PL4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGION PÓŁNOCNO-ZACHODNI",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL"
        }
      ],
      "narrower": [
        {
          "@id": "PL41"
        },
        {
          "@id": "PL42"
        },
        {
          "@id": "PL43"
        }
      ]
    },
    {
      "@id": "PL41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wielkopolskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL4"
        }
      ],
      "narrower": [
        {
          "@id": "PL411"
        },
        {
          "@id": "PL414"
        },
        {
          "@id": "PL415"
        },
        {
          "@id": "PL416"
        },
        {
          "@id": "PL417"
        },
        {
          "@id": "PL418"
        }
      ]
    },
    {
      "@id": "PL411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pilski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL41"
        }
      ]
    },
    {
      "@id": "PL414",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Koniński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL41"
        }
      ]
    },
    {
      "@id": "PL415",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miasto Poznań",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL41"
        }
      ]
    },
    {
      "@id": "PL416",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kaliski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL41"
        }
      ]
    },
    {
      "@id": "PL417",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leszczyński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL41"
        }
      ]
    },
    {
      "@id": "PL418",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Poznański",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL41"
        }
      ]
    },
    {
      "@id": "PL42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zachodniopomorskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL4"
        }
      ],
      "narrower": [
        {
          "@id": "PL422"
        },
        {
          "@id": "PL423"
        },
        {
          "@id": "PL424"
        },
        {
          "@id": "PL425"
        },
        {
          "@id": "PL426"
        },
        {
          "@id": "PL427"
        },
        {
          "@id": "PL428"
        }
      ]
    },
    {
      "@id": "PL424",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miasto Szczecin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL42"
        }
      ]
    },
    {
      "@id": "PL426",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Koszaliński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL42"
        }
      ]
    },
    {
      "@id": "PL427",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Szczecinecko-pyrzycki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL42"
        }
      ]
    },
    {
      "@id": "PL428",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Szczeciński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL42"
        }
      ]
    },
    {
      "@id": "PL43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lubuskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL4"
        }
      ],
      "narrower": [
        {
          "@id": "PL431"
        },
        {
          "@id": "PL432"
        }
      ]
    },
    {
      "@id": "PL431",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gorzowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL43"
        }
      ]
    },
    {
      "@id": "PL432",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zielonogórski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL43"
        }
      ]
    },
    {
      "@id": "PL5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGION POŁUDNIOWO-ZACHODNI",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL"
        }
      ],
      "narrower": [
        {
          "@id": "PL51"
        },
        {
          "@id": "PL52"
        }
      ]
    },
    {
      "@id": "PL51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dolnośląskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL5"
        }
      ],
      "narrower": [
        {
          "@id": "PL514"
        },
        {
          "@id": "PL515"
        },
        {
          "@id": "PL516"
        },
        {
          "@id": "PL517"
        },
        {
          "@id": "PL518"
        }
      ]
    },
    {
      "@id": "PL514",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Miasto Wrocław",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL51"
        }
      ]
    },
    {
      "@id": "PL515",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jeleniogórski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL51"
        }
      ]
    },
    {
      "@id": "PL516",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Legnicko-Głogowski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL51"
        }
      ]
    },
    {
      "@id": "PL517",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wałbrzyski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL51"
        }
      ]
    },
    {
      "@id": "PL518",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wrocławski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL51"
        }
      ]
    },
    {
      "@id": "PL52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Opolskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL5"
        }
      ],
      "narrower": [
        {
          "@id": "PL521"
        },
        {
          "@id": "PL522"
        },
        {
          "@id": "PL523"
        },
        {
          "@id": "PL524"
        }
      ]
    },
    {
      "@id": "PL523",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nyski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL52"
        }
      ]
    },
    {
      "@id": "PL524",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Opolski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL52"
        }
      ]
    },
    {
      "@id": "PL6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGION PÓŁNOCNY",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL"
        }
      ],
      "narrower": [
        {
          "@id": "PL61"
        },
        {
          "@id": "PL62"
        },
        {
          "@id": "PL63"
        }
      ]
    },
    {
      "@id": "PL61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kujawsko-Pomorskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL6"
        }
      ],
      "narrower": [
        {
          "@id": "PL613"
        },
        {
          "@id": "PL614"
        },
        {
          "@id": "PL615"
        },
        {
          "@id": "PL616"
        },
        {
          "@id": "PL617"
        },
        {
          "@id": "PL618"
        },
        {
          "@id": "PL619"
        }
      ]
    },
    {
      "@id": "PL613",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bydgosko-Toruński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL61"
        }
      ]
    },
    {
      "@id": "PL616",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Grudziądzki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL61"
        }
      ]
    },
    {
      "@id": "PL617",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Inowrocławski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL61"
        }
      ]
    },
    {
      "@id": "PL618",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Świecki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL61"
        }
      ]
    },
    {
      "@id": "PL619",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Włocławski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL61"
        }
      ]
    },
    {
      "@id": "PL62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Warmińsko-Mazurskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL6"
        }
      ],
      "narrower": [
        {
          "@id": "PL621"
        },
        {
          "@id": "PL622"
        },
        {
          "@id": "PL623"
        }
      ]
    },
    {
      "@id": "PL621",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Elbląski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL62"
        }
      ]
    },
    {
      "@id": "PL622",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Olsztyński",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL62"
        }
      ]
    },
    {
      "@id": "PL623",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ełcki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL62"
        }
      ]
    },
    {
      "@id": "PL63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pomorskie",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL6"
        }
      ],
      "narrower": [
        {
          "@id": "PL631"
        },
        {
          "@id": "PL633"
        },
        {
          "@id": "PL634"
        },
        {
          "@id": "PL635"
        },
        {
          "@id": "PL636"
        },
        {
          "@id": "PL637"
        },
        {
          "@id": "PL638"
        }
      ]
    },
    {
      "@id": "PL633",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trójmiejski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL63"
        }
      ]
    },
    {
      "@id": "PL634",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gdański",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL63"
        }
      ]
    },
    {
      "@id": "PL636",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Słupski",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL63"
        }
      ]
    },
    {
      "@id": "PL637",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Chojnicki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL63"
        }
      ]
    },
    {
      "@id": "PL638",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Starogardzki",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL63"
        }
      ]
    },
    {
      "@id": "PLZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PL"
        }
      ],
      "narrower": [
        {
          "@id": "PLZZ"
        }
      ]
    },
    {
      "@id": "PLZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PLZ"
        }
      ],
      "narrower": [
        {
          "@id": "PLZZZ"
        }
      ]
    },
    {
      "@id": "PLZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PLZZ"
        }
      ]
    },
    {
      "@id": "PT",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "PORTUGAL",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "PT1"
        },
        {
          "@id": "PT2"
        },
        {
          "@id": "PT3"
        },
        {
          "@id": "PTZ"
        }
      ]
    },
    {
      "@id": "PT1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "CONTINENTE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT"
        }
      ],
      "narrower": [
        {
          "@id": "PT11"
        },
        {
          "@id": "PT12"
        },
        {
          "@id": "PT13"
        },
        {
          "@id": "PT14"
        },
        {
          "@id": "PT15"
        },
        {
          "@id": "PT16"
        },
        {
          "@id": "PT17"
        },
        {
          "@id": "PT18"
        }
      ]
    },
    {
      "@id": "PT11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Norte",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT1"
        }
      ],
      "narrower": [
        {
          "@id": "PT111"
        },
        {
          "@id": "PT112"
        },
        {
          "@id": "PT113"
        },
        {
          "@id": "PT114"
        },
        {
          "@id": "PT115"
        },
        {
          "@id": "PT116"
        },
        {
          "@id": "PT117"
        },
        {
          "@id": "PT118"
        },
        {
          "@id": "PT119"
        },
        {
          "@id": "PT11A"
        },
        {
          "@id": "PT11B"
        },
        {
          "@id": "PT11C"
        },
        {
          "@id": "PT11D"
        },
        {
          "@id": "PT11E"
        }
      ]
    },
    {
      "@id": "PT111",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alto Minho",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT112",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cávado",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT119",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ave",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT11A",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Área Metropolitana do Porto",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT11B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alto Tâmega",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT11C",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tâmega e Sousa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT11D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Douro",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT11E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Terras de Trás-os-Montes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT11"
        }
      ]
    },
    {
      "@id": "PT15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Algarve",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT1"
        }
      ],
      "narrower": [
        {
          "@id": "PT150"
        }
      ]
    },
    {
      "@id": "PT150",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Algarve",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT15"
        }
      ]
    },
    {
      "@id": "PT16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Centro (PT)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT1"
        }
      ],
      "narrower": [
        {
          "@id": "PT161"
        },
        {
          "@id": "PT162"
        },
        {
          "@id": "PT163"
        },
        {
          "@id": "PT164"
        },
        {
          "@id": "PT165"
        },
        {
          "@id": "PT166"
        },
        {
          "@id": "PT167"
        },
        {
          "@id": "PT168"
        },
        {
          "@id": "PT169"
        },
        {
          "@id": "PT16A"
        },
        {
          "@id": "PT16B"
        },
        {
          "@id": "PT16C"
        },
        {
          "@id": "PT16D"
        },
        {
          "@id": "PT16E"
        },
        {
          "@id": "PT16F"
        },
        {
          "@id": "PT16G"
        },
        {
          "@id": "PT16H"
        },
        {
          "@id": "PT16I"
        },
        {
          "@id": "PT16J"
        }
      ]
    },
    {
      "@id": "PT16B",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oeste",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT16D",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Região de Aveiro",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT16E",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Região de Coimbra",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT16F",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Região de Leiria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT16G",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Viseu Dão Lafões",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT16H",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Beira Baixa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT16I",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Médio Tejo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT16J",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Beiras e Serra da Estrela",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT16"
        }
      ]
    },
    {
      "@id": "PT17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Área Metropolitana de Lisboa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT1"
        }
      ],
      "narrower": [
        {
          "@id": "PT171"
        },
        {
          "@id": "PT172"
        },
        {
          "@id": "PT170"
        }
      ]
    },
    {
      "@id": "PT170",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Área Metropolitana de Lisboa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT17"
        }
      ]
    },
    {
      "@id": "PT18",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alentejo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT1"
        }
      ],
      "narrower": [
        {
          "@id": "PT181"
        },
        {
          "@id": "PT182"
        },
        {
          "@id": "PT183"
        },
        {
          "@id": "PT184"
        },
        {
          "@id": "PT185"
        },
        {
          "@id": "PT186"
        },
        {
          "@id": "PT187"
        }
      ]
    },
    {
      "@id": "PT181",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alentejo Litoral",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT18"
        }
      ]
    },
    {
      "@id": "PT184",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Baixo Alentejo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT18"
        }
      ]
    },
    {
      "@id": "PT185",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lezíria do Tejo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT18"
        }
      ]
    },
    {
      "@id": "PT186",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alto Alentejo",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT18"
        }
      ]
    },
    {
      "@id": "PT187",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alentejo Central",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT18"
        }
      ]
    },
    {
      "@id": "PT2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGIÃO AUTÓNOMA DOS AÇORES",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT"
        }
      ],
      "narrower": [
        {
          "@id": "PT20"
        }
      ]
    },
    {
      "@id": "PT20",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Região Autónoma dos Açores",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT2"
        }
      ],
      "narrower": [
        {
          "@id": "PT200"
        }
      ]
    },
    {
      "@id": "PT200",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Região Autónoma dos Açores",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT20"
        }
      ]
    },
    {
      "@id": "PT3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "REGIÃO AUTÓNOMA DA MADEIRA",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT"
        }
      ],
      "narrower": [
        {
          "@id": "PT30"
        }
      ]
    },
    {
      "@id": "PT30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Região Autónoma da Madeira",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT3"
        }
      ],
      "narrower": [
        {
          "@id": "PT300"
        }
      ]
    },
    {
      "@id": "PT300",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Região Autónoma da Madeira",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT30"
        }
      ]
    },
    {
      "@id": "PTZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PT"
        }
      ],
      "narrower": [
        {
          "@id": "PTZZ"
        }
      ]
    },
    {
      "@id": "PTZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PTZ"
        }
      ],
      "narrower": [
        {
          "@id": "PTZZZ"
        }
      ]
    },
    {
      "@id": "PTZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "PTZZ"
        }
      ]
    },
    {
      "@id": "RO",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ROMÂNIA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "RO1"
        },
        {
          "@id": "RO2"
        },
        {
          "@id": "RO3"
        },
        {
          "@id": "RO4"
        },
        {
          "@id": "ROZ"
        }
      ]
    },
    {
      "@id": "RO1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MACROREGIUNEA UNU",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO"
        }
      ],
      "narrower": [
        {
          "@id": "RO11"
        },
        {
          "@id": "RO12"
        }
      ]
    },
    {
      "@id": "RO11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nord-Vest",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO1"
        }
      ],
      "narrower": [
        {
          "@id": "RO111"
        },
        {
          "@id": "RO112"
        },
        {
          "@id": "RO113"
        },
        {
          "@id": "RO114"
        },
        {
          "@id": "RO115"
        },
        {
          "@id": "RO116"
        }
      ]
    },
    {
      "@id": "RO111",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bihor",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO11"
        }
      ]
    },
    {
      "@id": "RO112",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bistriţa-Năsăud",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO11"
        }
      ]
    },
    {
      "@id": "RO113",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cluj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO11"
        }
      ]
    },
    {
      "@id": "RO114",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Maramureş",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO11"
        }
      ]
    },
    {
      "@id": "RO115",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Satu Mare",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO11"
        }
      ]
    },
    {
      "@id": "RO116",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sălaj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO11"
        }
      ]
    },
    {
      "@id": "RO12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Centru",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO1"
        }
      ],
      "narrower": [
        {
          "@id": "RO121"
        },
        {
          "@id": "RO122"
        },
        {
          "@id": "RO123"
        },
        {
          "@id": "RO124"
        },
        {
          "@id": "RO125"
        },
        {
          "@id": "RO126"
        }
      ]
    },
    {
      "@id": "RO121",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Alba",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO12"
        }
      ]
    },
    {
      "@id": "RO122",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Braşov",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO12"
        }
      ]
    },
    {
      "@id": "RO123",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Covasna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO12"
        }
      ]
    },
    {
      "@id": "RO124",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Harghita",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO12"
        }
      ]
    },
    {
      "@id": "RO125",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mureş",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO12"
        }
      ]
    },
    {
      "@id": "RO126",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sibiu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO12"
        }
      ]
    },
    {
      "@id": "RO2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MACROREGIUNEA DOI",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO"
        }
      ],
      "narrower": [
        {
          "@id": "RO21"
        },
        {
          "@id": "RO22"
        }
      ]
    },
    {
      "@id": "RO21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nord-Est",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO2"
        }
      ],
      "narrower": [
        {
          "@id": "RO211"
        },
        {
          "@id": "RO212"
        },
        {
          "@id": "RO213"
        },
        {
          "@id": "RO214"
        },
        {
          "@id": "RO215"
        },
        {
          "@id": "RO216"
        }
      ]
    },
    {
      "@id": "RO211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bacău",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO21"
        }
      ]
    },
    {
      "@id": "RO212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Botoşani",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO21"
        }
      ]
    },
    {
      "@id": "RO213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Iaşi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO21"
        }
      ]
    },
    {
      "@id": "RO214",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Neamţ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO21"
        }
      ]
    },
    {
      "@id": "RO215",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Suceava",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO21"
        }
      ]
    },
    {
      "@id": "RO216",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vaslui",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO21"
        }
      ]
    },
    {
      "@id": "RO22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sud-Est",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO2"
        }
      ],
      "narrower": [
        {
          "@id": "RO221"
        },
        {
          "@id": "RO222"
        },
        {
          "@id": "RO223"
        },
        {
          "@id": "RO224"
        },
        {
          "@id": "RO225"
        },
        {
          "@id": "RO226"
        }
      ]
    },
    {
      "@id": "RO221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brăila",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO22"
        }
      ]
    },
    {
      "@id": "RO222",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Buzău",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO22"
        }
      ]
    },
    {
      "@id": "RO223",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Constanţa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO22"
        }
      ]
    },
    {
      "@id": "RO224",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Galaţi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO22"
        }
      ]
    },
    {
      "@id": "RO225",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tulcea",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO22"
        }
      ]
    },
    {
      "@id": "RO226",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vrancea",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO22"
        }
      ]
    },
    {
      "@id": "RO3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MACROREGIUNEA TREI",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO"
        }
      ],
      "narrower": [
        {
          "@id": "RO31"
        },
        {
          "@id": "RO32"
        }
      ]
    },
    {
      "@id": "RO31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sud - Muntenia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO3"
        }
      ],
      "narrower": [
        {
          "@id": "RO311"
        },
        {
          "@id": "RO312"
        },
        {
          "@id": "RO313"
        },
        {
          "@id": "RO314"
        },
        {
          "@id": "RO315"
        },
        {
          "@id": "RO316"
        },
        {
          "@id": "RO317"
        }
      ]
    },
    {
      "@id": "RO311",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Argeş",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO31"
        }
      ]
    },
    {
      "@id": "RO312",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Călăraşi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO31"
        }
      ]
    },
    {
      "@id": "RO313",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dâmboviţa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO31"
        }
      ]
    },
    {
      "@id": "RO314",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Giurgiu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO31"
        }
      ]
    },
    {
      "@id": "RO315",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ialomiţa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO31"
        }
      ]
    },
    {
      "@id": "RO316",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prahova",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO31"
        }
      ]
    },
    {
      "@id": "RO317",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Teleorman",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO31"
        }
      ]
    },
    {
      "@id": "RO32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bucureşti - Ilfov",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO3"
        }
      ],
      "narrower": [
        {
          "@id": "RO321"
        },
        {
          "@id": "RO322"
        }
      ]
    },
    {
      "@id": "RO321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bucureşti",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO32"
        }
      ]
    },
    {
      "@id": "RO322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ilfov",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO32"
        }
      ]
    },
    {
      "@id": "RO4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "MACROREGIUNEA PATRU",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO"
        }
      ],
      "narrower": [
        {
          "@id": "RO41"
        },
        {
          "@id": "RO42"
        }
      ]
    },
    {
      "@id": "RO41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sud-Vest Oltenia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO4"
        }
      ],
      "narrower": [
        {
          "@id": "RO411"
        },
        {
          "@id": "RO412"
        },
        {
          "@id": "RO413"
        },
        {
          "@id": "RO414"
        },
        {
          "@id": "RO415"
        }
      ]
    },
    {
      "@id": "RO411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dolj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO41"
        }
      ]
    },
    {
      "@id": "RO412",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gorj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO41"
        }
      ]
    },
    {
      "@id": "RO413",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mehedinţi",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO41"
        }
      ]
    },
    {
      "@id": "RO414",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Olt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO41"
        }
      ]
    },
    {
      "@id": "RO415",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vâlcea",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO41"
        }
      ]
    },
    {
      "@id": "RO42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vest",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO4"
        }
      ],
      "narrower": [
        {
          "@id": "RO421"
        },
        {
          "@id": "RO422"
        },
        {
          "@id": "RO423"
        },
        {
          "@id": "RO424"
        }
      ]
    },
    {
      "@id": "RO421",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Arad",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO42"
        }
      ]
    },
    {
      "@id": "RO422",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Caraş-Severin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO42"
        }
      ]
    },
    {
      "@id": "RO423",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hunedoara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO42"
        }
      ]
    },
    {
      "@id": "RO424",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Timiş",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO42"
        }
      ]
    },
    {
      "@id": "ROZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "RO"
        }
      ],
      "narrower": [
        {
          "@id": "ROZZ"
        }
      ]
    },
    {
      "@id": "ROZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ROZ"
        }
      ],
      "narrower": [
        {
          "@id": "ROZZZ"
        }
      ]
    },
    {
      "@id": "ROZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "ROZZ"
        }
      ]
    },
    {
      "@id": "SE",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SVERIGE",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "SE0"
        },
        {
          "@id": "SE1"
        },
        {
          "@id": "SE2"
        },
        {
          "@id": "SE3"
        },
        {
          "@id": "SEZ"
        }
      ]
    },
    {
      "@id": "SE1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "ÖSTRA SVERIGE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE"
        }
      ],
      "narrower": [
        {
          "@id": "SE11"
        },
        {
          "@id": "SE12"
        }
      ]
    },
    {
      "@id": "SE11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stockholm",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE1"
        }
      ],
      "narrower": [
        {
          "@id": "SE110"
        }
      ]
    },
    {
      "@id": "SE110",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stockholms län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE11"
        }
      ]
    },
    {
      "@id": "SE12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Östra Mellansverige",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE1"
        }
      ],
      "narrower": [
        {
          "@id": "SE121"
        },
        {
          "@id": "SE122"
        },
        {
          "@id": "SE123"
        },
        {
          "@id": "SE124"
        },
        {
          "@id": "SE125"
        }
      ]
    },
    {
      "@id": "SE121",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Uppsala län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE12"
        }
      ]
    },
    {
      "@id": "SE122",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Södermanlands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE12"
        }
      ]
    },
    {
      "@id": "SE123",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Östergötlands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE12"
        }
      ]
    },
    {
      "@id": "SE124",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Örebro län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE12"
        }
      ]
    },
    {
      "@id": "SE125",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Västmanlands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE12"
        }
      ]
    },
    {
      "@id": "SE2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SÖDRA SVERIGE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE"
        }
      ],
      "narrower": [
        {
          "@id": "SE21"
        },
        {
          "@id": "SE22"
        },
        {
          "@id": "SE23"
        }
      ]
    },
    {
      "@id": "SE21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Småland med öarna",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE2"
        }
      ],
      "narrower": [
        {
          "@id": "SE211"
        },
        {
          "@id": "SE212"
        },
        {
          "@id": "SE213"
        },
        {
          "@id": "SE214"
        }
      ]
    },
    {
      "@id": "SE211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jönköpings län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE21"
        }
      ]
    },
    {
      "@id": "SE212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kronobergs län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE21"
        }
      ]
    },
    {
      "@id": "SE213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kalmar län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE21"
        }
      ]
    },
    {
      "@id": "SE214",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gotlands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE21"
        }
      ]
    },
    {
      "@id": "SE22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sydsverige",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE2"
        }
      ],
      "narrower": [
        {
          "@id": "SE221"
        },
        {
          "@id": "SE224"
        }
      ]
    },
    {
      "@id": "SE221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Blekinge län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE22"
        }
      ]
    },
    {
      "@id": "SE224",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Skåne län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE22"
        }
      ]
    },
    {
      "@id": "SE23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Västsverige",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE2"
        }
      ],
      "narrower": [
        {
          "@id": "SE231"
        },
        {
          "@id": "SE232"
        }
      ]
    },
    {
      "@id": "SE231",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hallands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE23"
        }
      ]
    },
    {
      "@id": "SE232",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Västra Götalands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE23"
        }
      ]
    },
    {
      "@id": "SE3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORRA SVERIGE",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE"
        }
      ],
      "narrower": [
        {
          "@id": "SE31"
        },
        {
          "@id": "SE32"
        },
        {
          "@id": "SE33"
        }
      ]
    },
    {
      "@id": "SE31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Norra Mellansverige",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE3"
        }
      ],
      "narrower": [
        {
          "@id": "SE311"
        },
        {
          "@id": "SE312"
        },
        {
          "@id": "SE313"
        }
      ]
    },
    {
      "@id": "SE311",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Värmlands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE31"
        }
      ]
    },
    {
      "@id": "SE312",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dalarnas län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE31"
        }
      ]
    },
    {
      "@id": "SE313",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gävleborgs län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE31"
        }
      ]
    },
    {
      "@id": "SE32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mellersta Norrland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE3"
        }
      ],
      "narrower": [
        {
          "@id": "SE321"
        },
        {
          "@id": "SE322"
        }
      ]
    },
    {
      "@id": "SE321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Västernorrlands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE32"
        }
      ]
    },
    {
      "@id": "SE322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jämtlands län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE32"
        }
      ]
    },
    {
      "@id": "SE33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Övre Norrland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE3"
        }
      ],
      "narrower": [
        {
          "@id": "SE331"
        },
        {
          "@id": "SE332"
        }
      ]
    },
    {
      "@id": "SE331",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Västerbottens län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE33"
        }
      ]
    },
    {
      "@id": "SE332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Norrbottens län",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE33"
        }
      ]
    },
    {
      "@id": "SEZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SE"
        }
      ],
      "narrower": [
        {
          "@id": "SEZZ"
        }
      ]
    },
    {
      "@id": "SEZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SEZ"
        }
      ],
      "narrower": [
        {
          "@id": "SEZZZ"
        }
      ]
    },
    {
      "@id": "SEZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SEZZ"
        }
      ]
    },
    {
      "@id": "SI",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SLOVENIJA",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "SI0"
        },
        {
          "@id": "SIZ"
        }
      ]
    },
    {
      "@id": "SI0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SLOVENIJA",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI"
        }
      ],
      "narrower": [
        {
          "@id": "SI01"
        },
        {
          "@id": "SI02"
        },
        {
          "@id": "SI03"
        },
        {
          "@id": "SI04"
        }
      ]
    },
    {
      "@id": "SI03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Vzhodna Slovenija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI0"
        }
      ],
      "narrower": [
        {
          "@id": "SI031"
        },
        {
          "@id": "SI032"
        },
        {
          "@id": "SI033"
        },
        {
          "@id": "SI034"
        },
        {
          "@id": "SI035"
        },
        {
          "@id": "SI036"
        },
        {
          "@id": "SI037"
        },
        {
          "@id": "SI038"
        }
      ]
    },
    {
      "@id": "SI031",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Pomurska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI032",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Podravska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI033",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Koroška",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI034",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Savinjska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI035",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zasavska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI036",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Posavska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI037",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Jugovzhodna Slovenija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI038",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Primorsko-notranjska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI03"
        }
      ]
    },
    {
      "@id": "SI04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zahodna Slovenija",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI0"
        }
      ],
      "narrower": [
        {
          "@id": "SI041"
        },
        {
          "@id": "SI042"
        },
        {
          "@id": "SI043"
        },
        {
          "@id": "SI044"
        }
      ]
    },
    {
      "@id": "SI041",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osrednjeslovenska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI04"
        }
      ]
    },
    {
      "@id": "SI042",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gorenjska",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI04"
        }
      ]
    },
    {
      "@id": "SI043",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Goriška",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI04"
        }
      ]
    },
    {
      "@id": "SI044",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Obalno-kraška",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI04"
        }
      ]
    },
    {
      "@id": "SIZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SI"
        }
      ],
      "narrower": [
        {
          "@id": "SIZZ"
        }
      ]
    },
    {
      "@id": "SIZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SIZ"
        }
      ],
      "narrower": [
        {
          "@id": "SIZZZ"
        }
      ]
    },
    {
      "@id": "SIZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SIZZ"
        }
      ]
    },
    {
      "@id": "SK",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SLOVENSKO",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "SK0"
        },
        {
          "@id": "SKZ"
        }
      ]
    },
    {
      "@id": "SK0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SLOVENSKO",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK"
        }
      ],
      "narrower": [
        {
          "@id": "SK01"
        },
        {
          "@id": "SK02"
        },
        {
          "@id": "SK03"
        },
        {
          "@id": "SK04"
        }
      ]
    },
    {
      "@id": "SK01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bratislavský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK0"
        }
      ],
      "narrower": [
        {
          "@id": "SK010"
        }
      ]
    },
    {
      "@id": "SK010",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bratislavský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK01"
        }
      ]
    },
    {
      "@id": "SK02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Západné Slovensko",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK0"
        }
      ],
      "narrower": [
        {
          "@id": "SK021"
        },
        {
          "@id": "SK022"
        },
        {
          "@id": "SK023"
        }
      ]
    },
    {
      "@id": "SK021",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trnavský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK02"
        }
      ]
    },
    {
      "@id": "SK022",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trenčiansky kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK02"
        }
      ]
    },
    {
      "@id": "SK023",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nitriansky kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK02"
        }
      ]
    },
    {
      "@id": "SK03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stredné Slovensko",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK0"
        }
      ],
      "narrower": [
        {
          "@id": "SK031"
        },
        {
          "@id": "SK032"
        }
      ]
    },
    {
      "@id": "SK031",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Žilinský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK03"
        }
      ]
    },
    {
      "@id": "SK032",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Banskobystrický kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK03"
        }
      ]
    },
    {
      "@id": "SK04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Východné Slovensko",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK0"
        }
      ],
      "narrower": [
        {
          "@id": "SK041"
        },
        {
          "@id": "SK042"
        }
      ]
    },
    {
      "@id": "SK041",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Prešovský kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK04"
        }
      ]
    },
    {
      "@id": "SK042",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Košický kraj",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK04"
        }
      ]
    },
    {
      "@id": "SKZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SK"
        }
      ],
      "narrower": [
        {
          "@id": "SKZZ"
        }
      ]
    },
    {
      "@id": "SKZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SKZ"
        }
      ],
      "narrower": [
        {
          "@id": "SKZZZ"
        }
      ]
    },
    {
      "@id": "SKZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "SKZZ"
        }
      ]
    },
    {
      "@id": "TR",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Türkiye",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "TR1"
        },
        {
          "@id": "TR2"
        },
        {
          "@id": "TR3"
        },
        {
          "@id": "TR4"
        },
        {
          "@id": "TR5"
        },
        {
          "@id": "TR6"
        },
        {
          "@id": "TR7"
        },
        {
          "@id": "TR8"
        },
        {
          "@id": "TR9"
        },
        {
          "@id": "TRA"
        },
        {
          "@id": "TRB"
        },
        {
          "@id": "TRC"
        }
      ]
    },
    {
      "@id": "TR1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "İstanbul",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR10"
        }
      ]
    },
    {
      "@id": "TR10",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "İstanbul",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR1"
        }
      ],
      "narrower": [
        {
          "@id": "TR100"
        }
      ]
    },
    {
      "@id": "TR100",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "İstanbul",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR10"
        }
      ]
    },
    {
      "@id": "TR2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bati Marmara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR21"
        },
        {
          "@id": "TR22"
        }
      ]
    },
    {
      "@id": "TR21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tekirdağ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR2"
        }
      ],
      "narrower": [
        {
          "@id": "TR211"
        },
        {
          "@id": "TR212"
        },
        {
          "@id": "TR213"
        }
      ]
    },
    {
      "@id": "TR211",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tekirdağ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR21"
        }
      ]
    },
    {
      "@id": "TR212",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Edirne",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR21"
        }
      ]
    },
    {
      "@id": "TR213",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kırklareli",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR21"
        }
      ]
    },
    {
      "@id": "TR22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Balıkesir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR2"
        }
      ],
      "narrower": [
        {
          "@id": "TR221"
        },
        {
          "@id": "TR222"
        }
      ]
    },
    {
      "@id": "TR221",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Balıkesir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR22"
        }
      ]
    },
    {
      "@id": "TR222",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Çanakkale",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR22"
        }
      ]
    },
    {
      "@id": "TR3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ege",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR31"
        },
        {
          "@id": "TR32"
        },
        {
          "@id": "TR33"
        }
      ]
    },
    {
      "@id": "TR31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "İzmir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR3"
        }
      ],
      "narrower": [
        {
          "@id": "TR310"
        }
      ]
    },
    {
      "@id": "TR310",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "İzmir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR31"
        }
      ]
    },
    {
      "@id": "TR32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aydın",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR3"
        }
      ],
      "narrower": [
        {
          "@id": "TR321"
        },
        {
          "@id": "TR322"
        },
        {
          "@id": "TR323"
        }
      ]
    },
    {
      "@id": "TR321",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aydın",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR32"
        }
      ]
    },
    {
      "@id": "TR322",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Denizli",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR32"
        }
      ]
    },
    {
      "@id": "TR323",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Muğla",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR32"
        }
      ]
    },
    {
      "@id": "TR33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Manisa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR3"
        }
      ],
      "narrower": [
        {
          "@id": "TR331"
        },
        {
          "@id": "TR332"
        },
        {
          "@id": "TR333"
        },
        {
          "@id": "TR334"
        }
      ]
    },
    {
      "@id": "TR331",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Manisa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR33"
        }
      ]
    },
    {
      "@id": "TR332",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Afyon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR33"
        }
      ]
    },
    {
      "@id": "TR333",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kütahya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR33"
        }
      ]
    },
    {
      "@id": "TR334",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Uşak",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR33"
        }
      ]
    },
    {
      "@id": "TR4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Doğu Marmara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR41"
        },
        {
          "@id": "TR42"
        }
      ]
    },
    {
      "@id": "TR41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bursa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR4"
        }
      ],
      "narrower": [
        {
          "@id": "TR411"
        },
        {
          "@id": "TR412"
        },
        {
          "@id": "TR413"
        }
      ]
    },
    {
      "@id": "TR411",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bursa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR41"
        }
      ]
    },
    {
      "@id": "TR412",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eskişehir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR41"
        }
      ]
    },
    {
      "@id": "TR413",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bilecik",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR41"
        }
      ]
    },
    {
      "@id": "TR42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kocaeli",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR4"
        }
      ],
      "narrower": [
        {
          "@id": "TR421"
        },
        {
          "@id": "TR422"
        },
        {
          "@id": "TR423"
        },
        {
          "@id": "TR424"
        },
        {
          "@id": "TR425"
        }
      ]
    },
    {
      "@id": "TR421",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kocaeli",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR42"
        }
      ]
    },
    {
      "@id": "TR422",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sakarya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR42"
        }
      ]
    },
    {
      "@id": "TR423",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Düzce",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR42"
        }
      ]
    },
    {
      "@id": "TR424",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bolu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR42"
        }
      ]
    },
    {
      "@id": "TR425",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Yalova",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR42"
        }
      ]
    },
    {
      "@id": "TR5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bati Anadolu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR51"
        },
        {
          "@id": "TR52"
        }
      ]
    },
    {
      "@id": "TR51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ankara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR5"
        }
      ],
      "narrower": [
        {
          "@id": "TR510"
        }
      ]
    },
    {
      "@id": "TR510",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ankara",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR51"
        }
      ]
    },
    {
      "@id": "TR52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Konya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR5"
        }
      ],
      "narrower": [
        {
          "@id": "TR521"
        },
        {
          "@id": "TR522"
        }
      ]
    },
    {
      "@id": "TR521",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Konya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR52"
        }
      ]
    },
    {
      "@id": "TR522",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Karaman",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR52"
        }
      ]
    },
    {
      "@id": "TR6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Akdeniz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR61"
        },
        {
          "@id": "TR62"
        },
        {
          "@id": "TR63"
        }
      ]
    },
    {
      "@id": "TR61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Antalya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR6"
        }
      ],
      "narrower": [
        {
          "@id": "TR611"
        },
        {
          "@id": "TR612"
        },
        {
          "@id": "TR613"
        }
      ]
    },
    {
      "@id": "TR611",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Antalya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR61"
        }
      ]
    },
    {
      "@id": "TR612",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Isparta",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR61"
        }
      ]
    },
    {
      "@id": "TR613",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Burdur",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR61"
        }
      ]
    },
    {
      "@id": "TR62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Adana",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR6"
        }
      ],
      "narrower": [
        {
          "@id": "TR621"
        },
        {
          "@id": "TR622"
        }
      ]
    },
    {
      "@id": "TR621",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Adana",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR62"
        }
      ]
    },
    {
      "@id": "TR622",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "İçel",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR62"
        }
      ]
    },
    {
      "@id": "TR63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hatay",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR6"
        }
      ],
      "narrower": [
        {
          "@id": "TR631"
        },
        {
          "@id": "TR632"
        },
        {
          "@id": "TR633"
        }
      ]
    },
    {
      "@id": "TR631",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hatay",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR63"
        }
      ]
    },
    {
      "@id": "TR632",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kahramanmaraş",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR63"
        }
      ]
    },
    {
      "@id": "TR633",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Osmaniye",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR63"
        }
      ]
    },
    {
      "@id": "TR7",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Orta Anadolu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR71"
        },
        {
          "@id": "TR72"
        }
      ]
    },
    {
      "@id": "TR71",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kırıkkale",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR7"
        }
      ],
      "narrower": [
        {
          "@id": "TR711"
        },
        {
          "@id": "TR712"
        },
        {
          "@id": "TR713"
        },
        {
          "@id": "TR714"
        },
        {
          "@id": "TR715"
        }
      ]
    },
    {
      "@id": "TR711",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kırıkkale",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR71"
        }
      ]
    },
    {
      "@id": "TR712",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aksaray",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR71"
        }
      ]
    },
    {
      "@id": "TR713",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Niğde",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR71"
        }
      ]
    },
    {
      "@id": "TR714",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nevşehir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR71"
        }
      ]
    },
    {
      "@id": "TR715",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kırşehir",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR71"
        }
      ]
    },
    {
      "@id": "TR72",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kayseri",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR7"
        }
      ],
      "narrower": [
        {
          "@id": "TR721"
        },
        {
          "@id": "TR722"
        },
        {
          "@id": "TR723"
        }
      ]
    },
    {
      "@id": "TR721",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kayseri",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR72"
        }
      ]
    },
    {
      "@id": "TR722",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sivas",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR72"
        }
      ]
    },
    {
      "@id": "TR723",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Yozgat",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR72"
        }
      ]
    },
    {
      "@id": "TR8",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bati Karadeniz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR81"
        },
        {
          "@id": "TR82"
        },
        {
          "@id": "TR83"
        }
      ]
    },
    {
      "@id": "TR81",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zonguldak",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR8"
        }
      ],
      "narrower": [
        {
          "@id": "TR811"
        },
        {
          "@id": "TR812"
        },
        {
          "@id": "TR813"
        }
      ]
    },
    {
      "@id": "TR811",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Zonguldak",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR81"
        }
      ]
    },
    {
      "@id": "TR812",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Karabük",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR81"
        }
      ]
    },
    {
      "@id": "TR813",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bartın",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR81"
        }
      ]
    },
    {
      "@id": "TR82",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kastamonu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR8"
        }
      ],
      "narrower": [
        {
          "@id": "TR821"
        },
        {
          "@id": "TR822"
        },
        {
          "@id": "TR823"
        }
      ]
    },
    {
      "@id": "TR821",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kastamonu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR82"
        }
      ]
    },
    {
      "@id": "TR822",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Çankırı",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR82"
        }
      ]
    },
    {
      "@id": "TR823",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sinop",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR82"
        }
      ]
    },
    {
      "@id": "TR83",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Samsun",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR8"
        }
      ],
      "narrower": [
        {
          "@id": "TR831"
        },
        {
          "@id": "TR832"
        },
        {
          "@id": "TR833"
        },
        {
          "@id": "TR834"
        }
      ]
    },
    {
      "@id": "TR831",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Samsun",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR83"
        }
      ]
    },
    {
      "@id": "TR832",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tokat",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR83"
        }
      ]
    },
    {
      "@id": "TR833",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Çorum",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR83"
        }
      ]
    },
    {
      "@id": "TR834",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Amasya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR83"
        }
      ]
    },
    {
      "@id": "TR9",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Doğu Karadeniz",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TR90"
        }
      ]
    },
    {
      "@id": "TR90",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trabzon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR9"
        }
      ],
      "narrower": [
        {
          "@id": "TR901"
        },
        {
          "@id": "TR902"
        },
        {
          "@id": "TR903"
        },
        {
          "@id": "TR904"
        },
        {
          "@id": "TR905"
        },
        {
          "@id": "TR906"
        }
      ]
    },
    {
      "@id": "TR901",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Trabzon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR90"
        }
      ]
    },
    {
      "@id": "TR902",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ordu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR90"
        }
      ]
    },
    {
      "@id": "TR903",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Giresun",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR90"
        }
      ]
    },
    {
      "@id": "TR904",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Rize",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR90"
        }
      ]
    },
    {
      "@id": "TR905",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Artvin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR90"
        }
      ]
    },
    {
      "@id": "TR906",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gümüşhane",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR90"
        }
      ]
    },
    {
      "@id": "TRA",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kuzeydoğu Anadolu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TRA1"
        },
        {
          "@id": "TRA2"
        }
      ]
    },
    {
      "@id": "TRA1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erzurum",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA"
        }
      ],
      "narrower": [
        {
          "@id": "TRA11"
        },
        {
          "@id": "TRA12"
        },
        {
          "@id": "TRA13"
        }
      ]
    },
    {
      "@id": "TRA11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erzurum",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA1"
        }
      ]
    },
    {
      "@id": "TRA12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Erzincan",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA1"
        }
      ]
    },
    {
      "@id": "TRA13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bayburt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA1"
        }
      ]
    },
    {
      "@id": "TRA2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ağrı",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA"
        }
      ],
      "narrower": [
        {
          "@id": "TRA21"
        },
        {
          "@id": "TRA22"
        },
        {
          "@id": "TRA23"
        },
        {
          "@id": "TRA24"
        }
      ]
    },
    {
      "@id": "TRA21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ağrı",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA2"
        }
      ]
    },
    {
      "@id": "TRA22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kars",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA2"
        }
      ]
    },
    {
      "@id": "TRA23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Iğdır",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA2"
        }
      ]
    },
    {
      "@id": "TRA24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ardahan",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRA2"
        }
      ]
    },
    {
      "@id": "TRB",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ortadoğu Anadolu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TRB1"
        },
        {
          "@id": "TRB2"
        }
      ]
    },
    {
      "@id": "TRB1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Malatya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB"
        }
      ],
      "narrower": [
        {
          "@id": "TRB11"
        },
        {
          "@id": "TRB12"
        },
        {
          "@id": "TRB13"
        },
        {
          "@id": "TRB14"
        }
      ]
    },
    {
      "@id": "TRB11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Malatya",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB1"
        }
      ]
    },
    {
      "@id": "TRB12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Elazığ",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB1"
        }
      ]
    },
    {
      "@id": "TRB13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bingöl",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB1"
        }
      ]
    },
    {
      "@id": "TRB14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tunceli",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB1"
        }
      ]
    },
    {
      "@id": "TRB2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Van",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB"
        }
      ],
      "narrower": [
        {
          "@id": "TRB21"
        },
        {
          "@id": "TRB22"
        },
        {
          "@id": "TRB23"
        },
        {
          "@id": "TRB24"
        }
      ]
    },
    {
      "@id": "TRB21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Van",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB2"
        }
      ]
    },
    {
      "@id": "TRB22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Muş",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB2"
        }
      ]
    },
    {
      "@id": "TRB23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bitlis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB2"
        }
      ]
    },
    {
      "@id": "TRB24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hakkari",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRB2"
        }
      ]
    },
    {
      "@id": "TRC",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Güneydoğu Anadolu",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TR"
        }
      ],
      "narrower": [
        {
          "@id": "TRC1"
        },
        {
          "@id": "TRC2"
        },
        {
          "@id": "TRC3"
        }
      ]
    },
    {
      "@id": "TRC1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gaziantep",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC"
        }
      ],
      "narrower": [
        {
          "@id": "TRC11"
        },
        {
          "@id": "TRC12"
        },
        {
          "@id": "TRC13"
        }
      ]
    },
    {
      "@id": "TRC11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gaziantep",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC1"
        }
      ]
    },
    {
      "@id": "TRC12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Adıyaman",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC1"
        }
      ]
    },
    {
      "@id": "TRC13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kilis",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC1"
        }
      ]
    },
    {
      "@id": "TRC2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Şanlıurfa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC"
        }
      ],
      "narrower": [
        {
          "@id": "TRC21"
        },
        {
          "@id": "TRC22"
        }
      ]
    },
    {
      "@id": "TRC21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Şanlıurfa",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC2"
        }
      ]
    },
    {
      "@id": "TRC22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Diyarbakır",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC2"
        }
      ]
    },
    {
      "@id": "TRC3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mardin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC"
        }
      ],
      "narrower": [
        {
          "@id": "TRC31"
        },
        {
          "@id": "TRC32"
        },
        {
          "@id": "TRC33"
        },
        {
          "@id": "TRC34"
        }
      ]
    },
    {
      "@id": "TRC31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mardin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC3"
        }
      ]
    },
    {
      "@id": "TRC32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Batman",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC3"
        }
      ]
    },
    {
      "@id": "TRC33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Şırnak",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC3"
        }
      ]
    },
    {
      "@id": "TRC34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Siirt",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "TRC3"
        }
      ]
    },
    {
      "@id": "UK",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "UNITED KINGDOM",
          "@language": "en"
        }
      ],
      "narrower": [
        {
          "@id": "UKE"
        },
        {
          "@id": "UKG"
        },
        {
          "@id": "UKK"
        },
        {
          "@id": "UKJ"
        },
        {
          "@id": "UKD"
        },
        {
          "@id": "UKC"
        },
        {
          "@id": "UKI"
        },
        {
          "@id": "UKH"
        },
        {
          "@id": "UKF"
        },
        {
          "@id": "UK1"
        },
        {
          "@id": "UK2"
        },
        {
          "@id": "UK3"
        },
        {
          "@id": "UK4"
        },
        {
          "@id": "UK5"
        },
        {
          "@id": "UK6"
        },
        {
          "@id": "UK7"
        },
        {
          "@id": "UK8"
        },
        {
          "@id": "UK9"
        },
        {
          "@id": "UKA"
        },
        {
          "@id": "UKB"
        },
        {
          "@id": "UKL"
        },
        {
          "@id": "UKM"
        },
        {
          "@id": "UKN"
        },
        {
          "@id": "UKZ"
        }
      ]
    },
    {
      "@id": "UKC",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORTH EAST (ENGLAND)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKC1"
        },
        {
          "@id": "UKC2"
        }
      ]
    },
    {
      "@id": "UKC1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tees Valley and Durham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC"
        }
      ],
      "narrower": [
        {
          "@id": "UKC11"
        },
        {
          "@id": "UKC12"
        },
        {
          "@id": "UKC13"
        },
        {
          "@id": "UKC14"
        }
      ]
    },
    {
      "@id": "UKC11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hartlepool and Stockton-on-Tees",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC1"
        }
      ]
    },
    {
      "@id": "UKC12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South Teesside",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC1"
        }
      ]
    },
    {
      "@id": "UKC13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Darlington",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC1"
        }
      ]
    },
    {
      "@id": "UKC14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Durham CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC1"
        }
      ]
    },
    {
      "@id": "UKC2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Northumberland and Tyne and Wear",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC"
        }
      ],
      "narrower": [
        {
          "@id": "UKC21"
        },
        {
          "@id": "UKC22"
        },
        {
          "@id": "UKC23"
        }
      ]
    },
    {
      "@id": "UKC21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Northumberland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC2"
        }
      ]
    },
    {
      "@id": "UKC22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tyneside",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC2"
        }
      ]
    },
    {
      "@id": "UKC23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sunderland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKC2"
        }
      ]
    },
    {
      "@id": "UKD",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORTH WEST (ENGLAND)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKD1"
        },
        {
          "@id": "UKD2"
        },
        {
          "@id": "UKD3"
        },
        {
          "@id": "UKD4"
        },
        {
          "@id": "UKD5"
        },
        {
          "@id": "UKD6"
        },
        {
          "@id": "UKD7"
        }
      ]
    },
    {
      "@id": "UKD1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cumbria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD"
        }
      ],
      "narrower": [
        {
          "@id": "UKD11"
        },
        {
          "@id": "UKD12"
        }
      ]
    },
    {
      "@id": "UKD11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Cumbria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD1"
        }
      ]
    },
    {
      "@id": "UKD12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Cumbria",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD1"
        }
      ]
    },
    {
      "@id": "UKD3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Greater Manchester",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD"
        }
      ],
      "narrower": [
        {
          "@id": "UKD31"
        },
        {
          "@id": "UKD32"
        },
        {
          "@id": "UKD33"
        },
        {
          "@id": "UKD34"
        },
        {
          "@id": "UKD35"
        },
        {
          "@id": "UKD36"
        },
        {
          "@id": "UKD37"
        }
      ]
    },
    {
      "@id": "UKD33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Manchester",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD3"
        }
      ]
    },
    {
      "@id": "UKD34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Greater Manchester South West",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD3"
        }
      ]
    },
    {
      "@id": "UKD35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Greater Manchester South East",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD3"
        }
      ]
    },
    {
      "@id": "UKD36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Greater Manchester North West",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD3"
        }
      ]
    },
    {
      "@id": "UKD37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Greater Manchester North East",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD3"
        }
      ]
    },
    {
      "@id": "UKD4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lancashire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD"
        }
      ],
      "narrower": [
        {
          "@id": "UKD41"
        },
        {
          "@id": "UKD42"
        },
        {
          "@id": "UKD43"
        },
        {
          "@id": "UKD44"
        },
        {
          "@id": "UKD45"
        },
        {
          "@id": "UKD46"
        },
        {
          "@id": "UKD47"
        }
      ]
    },
    {
      "@id": "UKD41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Blackburn with Darwen",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD4"
        }
      ]
    },
    {
      "@id": "UKD42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Blackpool",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD4"
        }
      ]
    },
    {
      "@id": "UKD44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lancaster & Wyre",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD4"
        }
      ]
    },
    {
      "@id": "UKD45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mid Lancashire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD4"
        }
      ]
    },
    {
      "@id": "UKD46",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Lancashire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD4"
        }
      ]
    },
    {
      "@id": "UKD47",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Chorley & West Lancashire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD4"
        }
      ]
    },
    {
      "@id": "UKD6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cheshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD"
        }
      ],
      "narrower": [
        {
          "@id": "UKD61"
        },
        {
          "@id": "UKD62"
        },
        {
          "@id": "UKD63"
        }
      ]
    },
    {
      "@id": "UKD61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Warrington",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD6"
        }
      ]
    },
    {
      "@id": "UKD62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cheshire East",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD6"
        }
      ]
    },
    {
      "@id": "UKD63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cheshire West and Chester",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD6"
        }
      ]
    },
    {
      "@id": "UKD7",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Merseyside",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD"
        }
      ],
      "narrower": [
        {
          "@id": "UKD71"
        },
        {
          "@id": "UKD72"
        },
        {
          "@id": "UKD73"
        },
        {
          "@id": "UKD74"
        }
      ]
    },
    {
      "@id": "UKD71",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Merseyside",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD7"
        }
      ]
    },
    {
      "@id": "UKD72",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Liverpool",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD7"
        }
      ]
    },
    {
      "@id": "UKD73",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sefton",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD7"
        }
      ]
    },
    {
      "@id": "UKD74",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wirral",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKD7"
        }
      ]
    },
    {
      "@id": "UKE",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "YORKSHIRE AND THE HUMBER",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKE1"
        },
        {
          "@id": "UKE2"
        },
        {
          "@id": "UKE3"
        },
        {
          "@id": "UKE4"
        }
      ]
    },
    {
      "@id": "UKE1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Yorkshire and Northern Lincolnshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE"
        }
      ],
      "narrower": [
        {
          "@id": "UKE11"
        },
        {
          "@id": "UKE12"
        },
        {
          "@id": "UKE13"
        }
      ]
    },
    {
      "@id": "UKE11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kingston upon Hull, City of",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE1"
        }
      ]
    },
    {
      "@id": "UKE12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Riding of Yorkshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE1"
        }
      ]
    },
    {
      "@id": "UKE13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North and North East Lincolnshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE1"
        }
      ]
    },
    {
      "@id": "UKE2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North Yorkshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE"
        }
      ],
      "narrower": [
        {
          "@id": "UKE21"
        },
        {
          "@id": "UKE22"
        }
      ]
    },
    {
      "@id": "UKE21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "York",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE2"
        }
      ]
    },
    {
      "@id": "UKE22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North Yorkshire CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE2"
        }
      ]
    },
    {
      "@id": "UKE3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South Yorkshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE"
        }
      ],
      "narrower": [
        {
          "@id": "UKE31"
        },
        {
          "@id": "UKE32"
        }
      ]
    },
    {
      "@id": "UKE31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Barnsley, Doncaster and Rotherham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE3"
        }
      ]
    },
    {
      "@id": "UKE32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sheffield",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE3"
        }
      ]
    },
    {
      "@id": "UKE4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Yorkshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE"
        }
      ],
      "narrower": [
        {
          "@id": "UKE41"
        },
        {
          "@id": "UKE42"
        },
        {
          "@id": "UKE43"
        },
        {
          "@id": "UKE44"
        },
        {
          "@id": "UKE45"
        }
      ]
    },
    {
      "@id": "UKE41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bradford",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE4"
        }
      ]
    },
    {
      "@id": "UKE42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leeds",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE4"
        }
      ]
    },
    {
      "@id": "UKE44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Calderdale and Kirklees",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE4"
        }
      ]
    },
    {
      "@id": "UKE45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wakefield",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKE4"
        }
      ]
    },
    {
      "@id": "UKF",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EAST MIDLANDS (ENGLAND)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKF1"
        },
        {
          "@id": "UKF2"
        },
        {
          "@id": "UKF3"
        }
      ]
    },
    {
      "@id": "UKF1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Derbyshire and Nottinghamshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF"
        }
      ],
      "narrower": [
        {
          "@id": "UKF11"
        },
        {
          "@id": "UKF12"
        },
        {
          "@id": "UKF13"
        },
        {
          "@id": "UKF14"
        },
        {
          "@id": "UKF15"
        },
        {
          "@id": "UKF16"
        }
      ]
    },
    {
      "@id": "UKF11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Derby",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF1"
        }
      ]
    },
    {
      "@id": "UKF12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Derbyshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF1"
        }
      ]
    },
    {
      "@id": "UKF13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South and West Derbyshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF1"
        }
      ]
    },
    {
      "@id": "UKF14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Nottingham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF1"
        }
      ]
    },
    {
      "@id": "UKF15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North Nottinghamshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF1"
        }
      ]
    },
    {
      "@id": "UKF16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South Nottinghamshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF1"
        }
      ]
    },
    {
      "@id": "UKF2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leicestershire, Rutland and Northamptonshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF"
        }
      ],
      "narrower": [
        {
          "@id": "UKF21"
        },
        {
          "@id": "UKF22"
        },
        {
          "@id": "UKF23"
        },
        {
          "@id": "UKF24"
        },
        {
          "@id": "UKF25"
        }
      ]
    },
    {
      "@id": "UKF21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leicester",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF2"
        }
      ]
    },
    {
      "@id": "UKF22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Leicestershire CC and Rutland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF2"
        }
      ]
    },
    {
      "@id": "UKF24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Northamptonshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF2"
        }
      ]
    },
    {
      "@id": "UKF25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North Northamptonshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF2"
        }
      ]
    },
    {
      "@id": "UKF3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lincolnshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF"
        }
      ],
      "narrower": [
        {
          "@id": "UKF30"
        }
      ]
    },
    {
      "@id": "UKF30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lincolnshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKF3"
        }
      ]
    },
    {
      "@id": "UKG",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "WEST MIDLANDS (ENGLAND)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKG1"
        },
        {
          "@id": "UKG2"
        },
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKG1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Herefordshire, Worcestershire and Warwickshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG"
        }
      ],
      "narrower": [
        {
          "@id": "UKG11"
        },
        {
          "@id": "UKG12"
        },
        {
          "@id": "UKG13"
        }
      ]
    },
    {
      "@id": "UKG11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Herefordshire, County of",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG1"
        }
      ]
    },
    {
      "@id": "UKG12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Worcestershire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG1"
        }
      ]
    },
    {
      "@id": "UKG13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Warwickshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG1"
        }
      ]
    },
    {
      "@id": "UKG2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Shropshire and Staffordshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG"
        }
      ],
      "narrower": [
        {
          "@id": "UKG21"
        },
        {
          "@id": "UKG22"
        },
        {
          "@id": "UKG23"
        },
        {
          "@id": "UKG24"
        }
      ]
    },
    {
      "@id": "UKG21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Telford and Wrekin",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG2"
        }
      ]
    },
    {
      "@id": "UKG22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Shropshire CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG2"
        }
      ]
    },
    {
      "@id": "UKG23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Stoke-on-Trent",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG2"
        }
      ]
    },
    {
      "@id": "UKG24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Staffordshire CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG2"
        }
      ]
    },
    {
      "@id": "UKG3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Midlands",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG"
        }
      ],
      "narrower": [
        {
          "@id": "UKG31"
        },
        {
          "@id": "UKG32"
        },
        {
          "@id": "UKG33"
        },
        {
          "@id": "UKG34"
        },
        {
          "@id": "UKG35"
        },
        {
          "@id": "UKG36"
        },
        {
          "@id": "UKG37"
        },
        {
          "@id": "UKG38"
        },
        {
          "@id": "UKG39"
        }
      ]
    },
    {
      "@id": "UKG31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Birmingham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKG32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Solihull",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKG33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Coventry",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKG36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dudley",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKG37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Sandwell",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKG38",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Walsall",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKG39",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wolverhampton",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKG3"
        }
      ]
    },
    {
      "@id": "UKH",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EAST OF ENGLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKH1"
        },
        {
          "@id": "UKH2"
        },
        {
          "@id": "UKH3"
        }
      ]
    },
    {
      "@id": "UKH1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Anglia",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH"
        }
      ],
      "narrower": [
        {
          "@id": "UKH11"
        },
        {
          "@id": "UKH12"
        },
        {
          "@id": "UKH13"
        },
        {
          "@id": "UKH14"
        },
        {
          "@id": "UKH15"
        },
        {
          "@id": "UKH16"
        },
        {
          "@id": "UKH17"
        }
      ]
    },
    {
      "@id": "UKH11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Peterborough",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH1"
        }
      ]
    },
    {
      "@id": "UKH12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cambridgeshire CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH1"
        }
      ]
    },
    {
      "@id": "UKH14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Suffolk",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH1"
        }
      ]
    },
    {
      "@id": "UKH15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Norwich & East Norfolk",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH1"
        }
      ]
    },
    {
      "@id": "UKH16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North & West Norfolk",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH1"
        }
      ]
    },
    {
      "@id": "UKH17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Breckland & South Norfolk",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH1"
        }
      ]
    },
    {
      "@id": "UKH2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bedfordshire and Hertfordshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH"
        }
      ],
      "narrower": [
        {
          "@id": "UKH21"
        },
        {
          "@id": "UKH22"
        },
        {
          "@id": "UKH23"
        },
        {
          "@id": "UKH24"
        },
        {
          "@id": "UKH25"
        }
      ]
    },
    {
      "@id": "UKH21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Luton",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH2"
        }
      ]
    },
    {
      "@id": "UKH23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hertfordshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH2"
        }
      ]
    },
    {
      "@id": "UKH24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bedford",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH2"
        }
      ]
    },
    {
      "@id": "UKH25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Central Bedfordshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH2"
        }
      ]
    },
    {
      "@id": "UKH3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Essex",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH"
        }
      ],
      "narrower": [
        {
          "@id": "UKH31"
        },
        {
          "@id": "UKH32"
        },
        {
          "@id": "UKH33"
        },
        {
          "@id": "UKH34"
        },
        {
          "@id": "UKH35"
        },
        {
          "@id": "UKH36"
        },
        {
          "@id": "UKH37"
        }
      ]
    },
    {
      "@id": "UKH31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Southend-on-Sea",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH3"
        }
      ]
    },
    {
      "@id": "UKH32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Thurrock",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH3"
        }
      ]
    },
    {
      "@id": "UKH34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Essex Haven Gateway",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH3"
        }
      ]
    },
    {
      "@id": "UKH35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Essex",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH3"
        }
      ]
    },
    {
      "@id": "UKH36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Heart of Essex",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH3"
        }
      ]
    },
    {
      "@id": "UKH37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Essex Thames Gateway",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKH3"
        }
      ]
    },
    {
      "@id": "UKI",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "LONDON",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKI1"
        },
        {
          "@id": "UKI2"
        },
        {
          "@id": "UKI3"
        },
        {
          "@id": "UKI4"
        },
        {
          "@id": "UKI5"
        },
        {
          "@id": "UKI6"
        },
        {
          "@id": "UKI7"
        }
      ]
    },
    {
      "@id": "UKI3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Inner London - West",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI"
        }
      ],
      "narrower": [
        {
          "@id": "UKI31"
        },
        {
          "@id": "UKI32"
        },
        {
          "@id": "UKI33"
        },
        {
          "@id": "UKI34"
        }
      ]
    },
    {
      "@id": "UKI31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Camden & City of London",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI3"
        }
      ]
    },
    {
      "@id": "UKI32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Westminster",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI3"
        }
      ]
    },
    {
      "@id": "UKI33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kensington and Chelsea & Hammersmith and Fulham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI3"
        }
      ]
    },
    {
      "@id": "UKI34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wandsworth",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI3"
        }
      ]
    },
    {
      "@id": "UKI4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Inner London - East",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI"
        }
      ],
      "narrower": [
        {
          "@id": "UKI41"
        },
        {
          "@id": "UKI42"
        },
        {
          "@id": "UKI43"
        },
        {
          "@id": "UKI44"
        },
        {
          "@id": "UKI45"
        }
      ]
    },
    {
      "@id": "UKI41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hackney & Newham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI4"
        }
      ]
    },
    {
      "@id": "UKI42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Tower Hamlets",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI4"
        }
      ]
    },
    {
      "@id": "UKI43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Haringey & Islington",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI4"
        }
      ]
    },
    {
      "@id": "UKI44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lewisham & Southwark",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI4"
        }
      ]
    },
    {
      "@id": "UKI45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lambeth",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI4"
        }
      ]
    },
    {
      "@id": "UKI5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Outer London - East and North East",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI"
        }
      ],
      "narrower": [
        {
          "@id": "UKI51"
        },
        {
          "@id": "UKI52"
        },
        {
          "@id": "UKI53"
        },
        {
          "@id": "UKI54"
        }
      ]
    },
    {
      "@id": "UKI51",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bexley & Greenwich",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI5"
        }
      ]
    },
    {
      "@id": "UKI52",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Barking and Dagenham & Havering",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI5"
        }
      ]
    },
    {
      "@id": "UKI53",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Redbridge & Waltham Forest",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI5"
        }
      ]
    },
    {
      "@id": "UKI54",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Enfield",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI5"
        }
      ]
    },
    {
      "@id": "UKI6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Outer London - South",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI"
        }
      ],
      "narrower": [
        {
          "@id": "UKI61"
        },
        {
          "@id": "UKI62"
        },
        {
          "@id": "UKI63"
        }
      ]
    },
    {
      "@id": "UKI61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bromley",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI6"
        }
      ]
    },
    {
      "@id": "UKI62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Croydon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI6"
        }
      ]
    },
    {
      "@id": "UKI63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Merton, Kingston upon Thames & Sutton",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI6"
        }
      ]
    },
    {
      "@id": "UKI7",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Outer London - West and North West",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI"
        }
      ],
      "narrower": [
        {
          "@id": "UKI71"
        },
        {
          "@id": "UKI72"
        },
        {
          "@id": "UKI73"
        },
        {
          "@id": "UKI74"
        },
        {
          "@id": "UKI75"
        }
      ]
    },
    {
      "@id": "UKI71",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Barnet",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI7"
        }
      ]
    },
    {
      "@id": "UKI72",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brent",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI7"
        }
      ]
    },
    {
      "@id": "UKI73",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Ealing",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI7"
        }
      ]
    },
    {
      "@id": "UKI74",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Harrow & Hillingdon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI7"
        }
      ]
    },
    {
      "@id": "UKI75",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hounslow & Richmond upon Thames",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKI7"
        }
      ]
    },
    {
      "@id": "UKJ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SOUTH EAST (ENGLAND)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKJ1"
        },
        {
          "@id": "UKJ2"
        },
        {
          "@id": "UKJ3"
        },
        {
          "@id": "UKJ4"
        }
      ]
    },
    {
      "@id": "UKJ1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Berkshire, Buckinghamshire and Oxfordshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ"
        }
      ],
      "narrower": [
        {
          "@id": "UKJ11"
        },
        {
          "@id": "UKJ12"
        },
        {
          "@id": "UKJ13"
        },
        {
          "@id": "UKJ14"
        }
      ]
    },
    {
      "@id": "UKJ11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Berkshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ1"
        }
      ]
    },
    {
      "@id": "UKJ12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Milton Keynes",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ1"
        }
      ]
    },
    {
      "@id": "UKJ13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Buckinghamshire CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ1"
        }
      ]
    },
    {
      "@id": "UKJ14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Oxfordshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ1"
        }
      ]
    },
    {
      "@id": "UKJ2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Surrey, East and West Sussex",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ"
        }
      ],
      "narrower": [
        {
          "@id": "UKJ21"
        },
        {
          "@id": "UKJ22"
        },
        {
          "@id": "UKJ23"
        },
        {
          "@id": "UKJ24"
        },
        {
          "@id": "UKJ25"
        },
        {
          "@id": "UKJ26"
        },
        {
          "@id": "UKJ27"
        },
        {
          "@id": "UKJ28"
        }
      ]
    },
    {
      "@id": "UKJ21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Brighton and Hove",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ2"
        }
      ]
    },
    {
      "@id": "UKJ22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Sussex CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ2"
        }
      ]
    },
    {
      "@id": "UKJ25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Surrey",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ2"
        }
      ]
    },
    {
      "@id": "UKJ26",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Surrey",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ2"
        }
      ]
    },
    {
      "@id": "UKJ27",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Sussex (South West)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ2"
        }
      ]
    },
    {
      "@id": "UKJ28",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Sussex (North East)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ2"
        }
      ]
    },
    {
      "@id": "UKJ3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Hampshire and Isle of Wight",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ"
        }
      ],
      "narrower": [
        {
          "@id": "UKJ31"
        },
        {
          "@id": "UKJ32"
        },
        {
          "@id": "UKJ33"
        },
        {
          "@id": "UKJ34"
        },
        {
          "@id": "UKJ35"
        },
        {
          "@id": "UKJ36"
        },
        {
          "@id": "UKJ37"
        }
      ]
    },
    {
      "@id": "UKJ31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Portsmouth",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ3"
        }
      ]
    },
    {
      "@id": "UKJ32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Southampton",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ3"
        }
      ]
    },
    {
      "@id": "UKJ34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Isle of Wight",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ3"
        }
      ]
    },
    {
      "@id": "UKJ35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South Hampshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ3"
        }
      ]
    },
    {
      "@id": "UKJ36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Central Hampshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ3"
        }
      ]
    },
    {
      "@id": "UKJ37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North Hampshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ3"
        }
      ]
    },
    {
      "@id": "UKJ4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kent",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ"
        }
      ],
      "narrower": [
        {
          "@id": "UKJ41"
        },
        {
          "@id": "UKJ42"
        },
        {
          "@id": "UKJ43"
        },
        {
          "@id": "UKJ44"
        },
        {
          "@id": "UKJ45"
        },
        {
          "@id": "UKJ46"
        }
      ]
    },
    {
      "@id": "UKJ41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Medway",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ4"
        }
      ]
    },
    {
      "@id": "UKJ43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Kent Thames Gateway",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ4"
        }
      ]
    },
    {
      "@id": "UKJ44",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Kent",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ4"
        }
      ]
    },
    {
      "@id": "UKJ45",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Mid Kent",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ4"
        }
      ]
    },
    {
      "@id": "UKJ46",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Kent",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKJ4"
        }
      ]
    },
    {
      "@id": "UKK",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SOUTH WEST (ENGLAND)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKK1"
        },
        {
          "@id": "UKK2"
        },
        {
          "@id": "UKK3"
        },
        {
          "@id": "UKK4"
        }
      ]
    },
    {
      "@id": "UKK1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gloucestershire, Wiltshire and Bristol/Bath area",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK"
        }
      ],
      "narrower": [
        {
          "@id": "UKK11"
        },
        {
          "@id": "UKK12"
        },
        {
          "@id": "UKK13"
        },
        {
          "@id": "UKK14"
        },
        {
          "@id": "UKK15"
        }
      ]
    },
    {
      "@id": "UKK11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bristol, City of",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK1"
        }
      ]
    },
    {
      "@id": "UKK12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bath and North East Somerset, North Somerset and South Gloucestershire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK1"
        }
      ]
    },
    {
      "@id": "UKK13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gloucestershire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK1"
        }
      ]
    },
    {
      "@id": "UKK14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Swindon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK1"
        }
      ]
    },
    {
      "@id": "UKK15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Wiltshire CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK1"
        }
      ]
    },
    {
      "@id": "UKK2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dorset and Somerset",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK"
        }
      ],
      "narrower": [
        {
          "@id": "UKK21"
        },
        {
          "@id": "UKK22"
        },
        {
          "@id": "UKK23"
        }
      ]
    },
    {
      "@id": "UKK21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bournemouth and Poole",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK2"
        }
      ]
    },
    {
      "@id": "UKK22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dorset CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK2"
        }
      ]
    },
    {
      "@id": "UKK23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Somerset",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK2"
        }
      ]
    },
    {
      "@id": "UKK3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cornwall and Isles of Scilly",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK"
        }
      ],
      "narrower": [
        {
          "@id": "UKK30"
        }
      ]
    },
    {
      "@id": "UKK30",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cornwall and Isles of Scilly",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK3"
        }
      ]
    },
    {
      "@id": "UKK4",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Devon",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK"
        }
      ],
      "narrower": [
        {
          "@id": "UKK41"
        },
        {
          "@id": "UKK42"
        },
        {
          "@id": "UKK43"
        }
      ]
    },
    {
      "@id": "UKK41",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Plymouth",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK4"
        }
      ]
    },
    {
      "@id": "UKK42",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Torbay",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK4"
        }
      ]
    },
    {
      "@id": "UKK43",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Devon CC",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKK4"
        }
      ]
    },
    {
      "@id": "UKL",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "WALES",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKL1"
        },
        {
          "@id": "UKL2"
        }
      ]
    },
    {
      "@id": "UKL1",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Wales and The Valleys",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL"
        }
      ],
      "narrower": [
        {
          "@id": "UKL11"
        },
        {
          "@id": "UKL12"
        },
        {
          "@id": "UKL13"
        },
        {
          "@id": "UKL14"
        },
        {
          "@id": "UKL15"
        },
        {
          "@id": "UKL16"
        },
        {
          "@id": "UKL17"
        },
        {
          "@id": "UKL18"
        }
      ]
    },
    {
      "@id": "UKL11",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Isle of Anglesey",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL12",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gwynedd",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL13",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Conwy and Denbighshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL14",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South West Wales",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL15",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Central Valleys",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL16",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Gwent Valleys",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL17",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Bridgend and Neath Port Talbot",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL18",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Swansea",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL1"
        }
      ]
    },
    {
      "@id": "UKL2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Wales",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL"
        }
      ],
      "narrower": [
        {
          "@id": "UKL21"
        },
        {
          "@id": "UKL22"
        },
        {
          "@id": "UKL23"
        },
        {
          "@id": "UKL24"
        }
      ]
    },
    {
      "@id": "UKL21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Monmouthshire and Newport",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL2"
        }
      ]
    },
    {
      "@id": "UKL22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Cardiff and Vale of Glamorgan",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL2"
        }
      ]
    },
    {
      "@id": "UKL23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Flintshire and Wrexham",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL2"
        }
      ]
    },
    {
      "@id": "UKL24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Powys",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKL2"
        }
      ]
    },
    {
      "@id": "UKM",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "SCOTLAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKM1"
        },
        {
          "@id": "UKM2"
        },
        {
          "@id": "UKM3"
        },
        {
          "@id": "UKM4"
        },
        {
          "@id": "UKM5"
        },
        {
          "@id": "UKM6"
        }
      ]
    },
    {
      "@id": "UKM2",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eastern Scotland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM"
        }
      ],
      "narrower": [
        {
          "@id": "UKM21"
        },
        {
          "@id": "UKM22"
        },
        {
          "@id": "UKM23"
        },
        {
          "@id": "UKM24"
        },
        {
          "@id": "UKM25"
        },
        {
          "@id": "UKM26"
        },
        {
          "@id": "UKM27"
        },
        {
          "@id": "UKM28"
        }
      ]
    },
    {
      "@id": "UKM21",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Angus and Dundee City",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM22",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Clackmannanshire and Fife",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM23",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Lothian and Midlothian",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM24",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Scottish Borders",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM25",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Edinburgh, City of",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM26",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Falkirk",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM27",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Perth & Kinross and Stirling",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM28",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West Lothian",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM2"
        }
      ]
    },
    {
      "@id": "UKM3",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South Western Scotland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM"
        }
      ],
      "narrower": [
        {
          "@id": "UKM31"
        },
        {
          "@id": "UKM32"
        },
        {
          "@id": "UKM33"
        },
        {
          "@id": "UKM34"
        },
        {
          "@id": "UKM35"
        },
        {
          "@id": "UKM36"
        },
        {
          "@id": "UKM37"
        },
        {
          "@id": "UKM38"
        }
      ]
    },
    {
      "@id": "UKM31",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Dunbartonshire, West Dunbartonshire and Helensburgh & Lomond",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM32",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Dumfries & Galloway",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM33",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East Ayrshire and North Ayrshire mainland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM34",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Glasgow City",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM35",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Inverclyde, East Renfrewshire and Renfrewshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM36",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North Lanarkshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM37",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South Ayrshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM38",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "South Lanarkshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM3"
        }
      ]
    },
    {
      "@id": "UKM5",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North Eastern Scotland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM"
        }
      ],
      "narrower": [
        {
          "@id": "UKM50"
        }
      ]
    },
    {
      "@id": "UKM50",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Aberdeen City and Aberdeenshire",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM5"
        }
      ]
    },
    {
      "@id": "UKM6",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Highlands and Islands",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM"
        }
      ],
      "narrower": [
        {
          "@id": "UKM61"
        },
        {
          "@id": "UKM62"
        },
        {
          "@id": "UKM63"
        },
        {
          "@id": "UKM64"
        },
        {
          "@id": "UKM65"
        },
        {
          "@id": "UKM66"
        }
      ]
    },
    {
      "@id": "UKM61",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Caithness & Sutherland and Ross & Cromarty",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM6"
        }
      ]
    },
    {
      "@id": "UKM62",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Inverness & Nairn and Moray, Badenoch & Strathspey",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM6"
        }
      ]
    },
    {
      "@id": "UKM63",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Lochaber, Skye & Lochalsh, Arran & Cumbrae and Argyll & Bute",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM6"
        }
      ]
    },
    {
      "@id": "UKM64",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Eilean Siar (Western Isles)",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM6"
        }
      ]
    },
    {
      "@id": "UKM65",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Orkney Islands",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM6"
        }
      ]
    },
    {
      "@id": "UKM66",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Shetland Islands",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKM6"
        }
      ]
    },
    {
      "@id": "UKN",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "NORTHERN IRELAND",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKN0"
        }
      ]
    },
    {
      "@id": "UKN0",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Northern Ireland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKN"
        }
      ],
      "narrower": [
        {
          "@id": "UKN01"
        },
        {
          "@id": "UKN02"
        },
        {
          "@id": "UKN03"
        },
        {
          "@id": "UKN04"
        },
        {
          "@id": "UKN05"
        }
      ]
    },
    {
      "@id": "UKN01",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Belfast",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKN0"
        }
      ]
    },
    {
      "@id": "UKN02",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Outer Belfast",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKN0"
        }
      ]
    },
    {
      "@id": "UKN03",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "East of Northern Ireland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKN0"
        }
      ]
    },
    {
      "@id": "UKN04",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "North of Northern Ireland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKN0"
        }
      ]
    },
    {
      "@id": "UKN05",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "West and South of Northern Ireland",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKN0"
        }
      ]
    },
    {
      "@id": "UKZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "EXTRA-REGIO NUTS 1",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UK"
        }
      ],
      "narrower": [
        {
          "@id": "UKZZ"
        }
      ]
    },
    {
      "@id": "UKZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 2",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKZ"
        }
      ],
      "narrower": [
        {
          "@id": "UKZZZ"
        }
      ]
    },
    {
      "@id": "UKZZZ",
      "@type": "skos:Concept",
      "prefLabel": [
        {
          "@value": "Extra-Regio NUTS 3",
          "@language": "en"
        }
      ],
      "broader": [
        {
          "@id": "UKZZ"
        }
      ]
    }
  ]
};
export default nuts

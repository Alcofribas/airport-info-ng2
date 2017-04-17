import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let airports = [
      {
        "city": "Lakselv",
        "country": "Norway",
        "iata": "LKL",
        "icao": "ENNA",
        "id": 653,
        "latitude": 70.068801879883,
        "longitude": 24.973499298096,
        "name": "Banak Airport"
      },
      {
        "city": "Bangui",
        "country": "Central African Republic",
        "iata": "BGF",
        "icao": "FEFF",
        "id": 888,
        "latitude": 4.39847993850708,
        "longitude": 18.5188007354736,
        "name": "Bangui M'Poko International Airport"
      },
      {
        "city": "Foumban",
        "country": "Cameroon",
        "iata": "FOM",
        "icao": "FKKM",
        "id": 899,
        "latitude": 5.63691997528076,
        "longitude": 10.7508001327515,
        "name": "Foumban Nkounja Airport"
      },
      {
        "city": "Moheli",
        "country": "Comoros",
        "iata": "NWA",
        "icao": "FMCI",
        "id": 913,
        "latitude": -12.2981004714966,
        "longitude": 43.7663993835449,
        "name": "Mohéli Bandar Es Eslam Airport"
      },
      {
        "city": "M'banza-congo",
        "country": "Angola",
        "iata": "SSY",
        "icao": "FNBC",
        "id": 944,
        "latitude": -6.26989984512329,
        "longitude": 14.2469997406006,
        "name": "Mbanza Congo Airport"
      },
      {
        "city": "Lubango",
        "country": "Angola",
        "iata": "SDD",
        "icao": "FNUB",
        "id": 959,
        "latitude": -14.9246997833252,
        "longitude": 13.5749998092651,
        "name": "Lubango Airport"
      },
      {
        "city": "Inhambane",
        "country": "Mozambique",
        "iata": "INH",
        "icao": "FQIN",
        "id": 976,
        "latitude": -23.8763999938965,
        "longitude": 35.4085006713867,
        "name": "Inhambane Airport"
      },
      {
        "city": "Bandoundu",
        "country": "Congo (Kinshasa)",
        "iata": "FDU",
        "icao": "FZBO",
        "id": 1024,
        "latitude": -3.31132006645203,
        "longitude": 17.3817005157471,
        "name": "Bandundu Airport"
      },
      {
        "city": "Mbandaka",
        "country": "Congo (Kinshasa)",
        "iata": "MDK",
        "icao": "FZEA",
        "id": 1026,
        "latitude": 0.0226000007242,
        "longitude": 18.2887001038,
        "name": "Mbandaka Airport"
      },
      {
        "city": "Kisangani",
        "country": "Congo (Kinshasa)",
        "iata": "FKI",
        "icao": "FZIC",
        "id": 1031,
        "latitude": 0.481638997793,
        "longitude": 25.3379993439,
        "name": "Bangoka International Airport"
      },
      {
        "city": "Banjul",
        "country": "Gambia",
        "iata": "BJL",
        "icao": "GBYD",
        "id": 1050,
        "latitude": 13.3380002975464,
        "longitude": -16.6522006988525,
        "name": "Banjul International Airport"
      },
      {
        "city": "Perpignan",
        "country": "France",
        "iata": "PGF",
        "icao": "LFMP",
        "id": 1356,
        "latitude": 42.7403984069824,
        "longitude": 2.87067008018494,
        "name": "Perpignan-Rivesaltes (Llabanère) Airport"
      },
      {
        "city": "Bandirma",
        "country": "Turkey",
        "iata": "BDM",
        "icao": "LTBG",
        "id": 1703,
        "latitude": 40.318000793457,
        "longitude": 27.9776992797852,
        "name": "Bandırma Airport"
      },
      {
        "city": "Coban",
        "country": "Guatemala",
        "iata": "CBV",
        "icao": "MGCB",
        "id": 1766,
        "latitude": 15.4689998626709,
        "longitude": -90.4067001342773,
        "name": "Coban Airport"
      },
      {
        "city": "Bandar Lengeh",
        "country": "Iran",
        "iata": "BDH",
        "icao": "OIBL",
        "id": 2110,
        "latitude": 26.531999588,
        "longitude": 54.824798584,
        "name": "Bandar Lengeh Airport"
      },
      {
        "city": "Bandar Abbas",
        "country": "Iran",
        "iata": "BND",
        "icao": "OIKB",
        "id": 2134,
        "latitude": 27.2182998657227,
        "longitude": 56.377799987793,
        "name": "Bandar Abbas International Airport"
      },
      {
        "city": "Sao Jose Dos Campos",
        "country": "Brazil",
        "iata": "SJK",
        "icao": "SBSJ",
        "id": 2615,
        "latitude": -23.2292003631592,
        "longitude": -45.861499786377,
        "name": "Professor Urbano Ernesto Stumpf Airport"
      },
      {
        "city": "Porbandar",
        "country": "India",
        "iata": "PBD",
        "icao": "VAPR",
        "id": 3018,
        "latitude": 21.6487007141,
        "longitude": 69.6572036743,
        "name": "Porbandar Airport"
      },
      {
        "city": "Colombo",
        "country": "Sri Lanka",
        "iata": "CMB",
        "icao": "VCBI",
        "id": 3024,
        "latitude": 7.1807599067688,
        "longitude": 79.8841018676758,
        "name": "Bandaranaike International Colombo Airport"
      },
      {
        "city": "Luang Prabang",
        "country": "Laos",
        "iata": "LPQ",
        "icao": "VLLB",
        "id": 3115,
        "latitude": 19.8973007202148,
        "longitude": 102.161003112793,
        "name": "Luang Phabang International Airport"
      },
      {
        "city": "Limbang",
        "country": "Malaysia",
        "iata": "LMN",
        "icao": "WBGJ",
        "id": 3264,
        "latitude": 4.80830001831055,
        "longitude": 115.01000213623,
        "name": "Limbang Airport"
      },
      {
        "city": "Brisbane",
        "country": "Australia",
        "iata": "BNE",
        "icao": "YBBN",
        "id": 3320,
        "latitude": -27.3841991424561,
        "longitude": 153.117004394531,
        "name": "Brisbane International Airport"
      },
      {
        "city": "Sydney",
        "country": "Australia",
        "iata": "BWU",
        "icao": "YSBK",
        "id": 3354,
        "latitude": -33.9244003295898,
        "longitude": 150.988006591797,
        "name": "Sydney Bankstown Airport"
      },
      {
        "city": "Jinghonggasa",
        "country": "China",
        "iata": "JHG",
        "icao": "ZPJH",
        "id": 3381,
        "latitude": 21.9738998413086,
        "longitude": 100.76000213623,
        "name": "Xishuangbanna Gasa Airport"
      },
      {
        "city": "Bangor",
        "country": "United States",
        "iata": "BGR",
        "icao": "KBGR",
        "id": 3463,
        "latitude": 44.8073997497559,
        "longitude": -68.8281021118164,
        "name": "Bangor International Airport"
      },
      {
        "city": "Cutbank",
        "country": "United States",
        "iata": "CTB",
        "icao": "KCTB",
        "id": 3470,
        "latitude": 48.6083984375,
        "longitude": -112.375999451,
        "name": "Cut Bank International Airport"
      },
      {
        "city": "Fairbanks",
        "country": "United States",
        "iata": "FAI",
        "icao": "PAFA",
        "id": 3832,
        "latitude": 64.81510162,
        "longitude": -147.8560028,
        "name": "Fairbanks International Airport"
      },
      {
        "city": "Amarillo",
        "country": "United States",
        "iata": "AMA",
        "icao": "KAMA",
        "id": 3840,
        "latitude": 35.2193984985352,
        "longitude": -101.706001281738,
        "name": "Rick Husband Amarillo International Airport"
      },
      {
        "city": "Albany",
        "country": "United States",
        "iata": "ALB",
        "icao": "KALB",
        "id": 3864,
        "latitude": 42.7482986450195,
        "longitude": -73.8016967773438,
        "name": "Albany International Airport"
      },
      {
        "city": "Tanjung Pandan",
        "country": "Indonesia",
        "iata": "TJQ",
        "icao": "WIOD",
        "id": 3904,
        "latitude": -2.74571990967,
        "longitude": 107.754997253,
        "name": "Buluh Tumbang (H A S Hanandjoeddin) Airport"
      },
      {
        "city": "Davao",
        "country": "Philippines",
        "iata": "DVO",
        "icao": "RPMD",
        "id": 4090,
        "latitude": 7.1255202293396,
        "longitude": 125.646003723145,
        "name": "Francisco Bangoy International Airport"
      },
      {
        "city": "Butuan",
        "country": "Philippines",
        "iata": "BXU",
        "icao": "RPME",
        "id": 4200,
        "latitude": 8.9515,
        "longitude": 125.4788,
        "name": "Bancasi Airport"
      },
      {
        "city": "Mbambanakira",
        "country": "Solomon Islands",
        "iata": "MBU",
        "icao": "AGGI",
        "id": 5408,
        "latitude": -9.7475004196167,
        "longitude": 159.839004516602,
        "name": "Babanakira Airport"
      },
      {
        "city": "Fort Albany",
        "country": "Canada",
        "iata": "YFA",
        "icao": "CYFA",
        "id": 5490,
        "latitude": 52.2014007568359,
        "longitude": -81.6968994140625,
        "name": "Fort Albany Airport"
      },
      {
        "city": "Tchibanga",
        "country": "Gabon",
        "iata": "TCH",
        "icao": "FOOT",
        "id": 5636,
        "latitude": -2.84999990463257,
        "longitude": 11.0170001983643,
        "name": "Tchibanga Airport"
      },
      {
        "city": "Lebanon",
        "country": "United States",
        "iata": "LEB",
        "icao": "KLEB",
        "id": 5749,
        "latitude": 43.6260986328,
        "longitude": -72.3041992188,
        "name": "Lebanon Municipal Airport"
      },
      {
        "city": "Banja Luka",
        "country": "Bosnia and Herzegovina",
        "iata": "BNX",
        "icao": "LQBK",
        "id": 5794,
        "latitude": 44.9413986206055,
        "longitude": 17.2975006103516,
        "name": "Banja Luka International Airport"
      },
      {
        "city": "Bannu",
        "country": "Pakistan",
        "iata": "BNP",
        "icao": "OPBN",
        "id": 5938,
        "latitude": 32.972900390625,
        "longitude": 70.5279006958008,
        "name": "Bannu Airport"
      },
      {
        "city": "Dalbandin",
        "country": "Pakistan",
        "iata": "DBA",
        "icao": "OPDB",
        "id": 5941,
        "latitude": 28.8782997131,
        "longitude": 64.3998031616,
        "name": "Dalbandin Airport"
      },
      {
        "city": "Puerto Inírida",
        "country": "Colombia",
        "iata": "PDA",
        "icao": "SKPD",
        "id": 6054,
        "latitude": 3.85353,
        "longitude": -67.9062,
        "name": "Obando Airport"
      },
      {
        "city": "Battambang",
        "country": "Cambodia",
        "iata": "BBM",
        "icao": "VDBG",
        "id": 6171,
        "latitude": 13.0956001281738,
        "longitude": 103.223999023438,
        "name": "Battambang Airport"
      },
      {
        "city": "Huay Xai",
        "country": "Laos",
        "iata": "OUI",
        "icao": "VLHS",
        "id": 6177,
        "latitude": 20.2572994232,
        "longitude": 100.43699646,
        "name": "Ban Huoeisay Airport"
      },
      {
        "city": "Banmaw",
        "country": "Burma",
        "iata": "BMO",
        "icao": "VYBM",
        "id": 6196,
        "latitude": 24.2689990997314,
        "longitude": 97.2462005615234,
        "name": "Banmaw Airport"
      },
      {
        "city": "Albany",
        "country": "Australia",
        "iata": "ALH",
        "icao": "YABA",
        "id": 6235,
        "latitude": -34.9432983398438,
        "longitude": 117.80899810791,
        "name": "Albany Airport"
      },
      {
        "city": "Bangda",
        "country": "China",
        "iata": "BPX",
        "icao": "ZUBD",
        "id": 6396,
        "latitude": 30.5536003112793,
        "longitude": 97.1082992553711,
        "name": "Qamdo Bangda Airport"
      },
      {
        "city": "North Connel",
        "country": "United Kingdom",
        "iata": "OBN",
        "icao": "EGEO",
        "id": 6467,
        "latitude": 56.4635009765625,
        "longitude": -5.39967012405396,
        "name": "Oban Airport"
      },
      {
        "city": "Lubang",
        "country": "Philippines",
        "iata": "LBX",
        "icao": "RPLU",
        "id": 7560,
        "latitude": 13.8554000854492,
        "longitude": 120.105003356934,
        "name": "Lubang Airport"
      },
      {
        "city": "Gbangbatok",
        "country": "Sierra Leone",
        "iata": "GBK",
        "icao": "GFGK",
        "id": 8337,
        "latitude": 7.76700019836426,
        "longitude": -12.3830003738403,
        "name": "Gbangbatok Airport"
      },
      {
        "city": "Bantry",
        "country": "Ireland",
        "iata": "BYT",
        "icao": "EIBN",
        "id": 8698,
        "latitude": 51.6685981750488,
        "longitude": -9.48416996002197,
        "name": "Bantry Aerodrome"
      },
      {
        "city": "Sir Bani Yas Island",
        "country": "United Arab Emirates",
        "iata": "XSB",
        "icao": "OMBY",
        "id": 8961,
        "latitude": 24.283611,
        "longitude": 52.580278,
        "name": "Sir Bani Yas Airport"
      },
      {
        "city": "Toowoomba",
        "country": "Australia",
        "iata": "WTB",
        "icao": "YBWW",
        "id": 9853,
        "latitude": -27.558333,
        "longitude": 151.793333,
        "name": "Brisbane West Wellcamp Airport"
      },
      {
        "city": "Banff",
        "country": "Canada",
        "iata": "YBA",
        "icao": "CYBA",
        "id": 11127,
        "latitude": 51.2073404699,
        "longitude": -115.541861057,
        "name": "Banff Airport"
      },
      {
        "city": "Banning",
        "country": "United States",
        "iata": "BNG",
        "icao": "KBNG",
        "id": 11131,
        "latitude": 33.9230995178,
        "longitude": -116.850997925,
        "name": "Banning Municipal Airport"
      },
      {
        "city": "Toli-Toli",
        "country": "Indonesia",
        "iata": "TLI",
        "icao": "WAMI",
        "id": 11401,
        "latitude": 1.123428,
        "longitude": 120.793658,
        "name": "Sultan Bantilan Airport"
      },
      {
        "city": "",
        "country": "Australia",
        "iata": "DRN",
        "icao": "YDBI",
        "id": 12020,
        "latitude": -28.5916996002197,
        "longitude": 148.216995239258,
        "name": "Dirranbandi Airport"
      }
    ];
    return {airports};
  }
}

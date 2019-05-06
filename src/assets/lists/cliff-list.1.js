const cliffs = [
  { name: "Agria Manmade", src: "/static/images/cliffs/Agria_Manmade.jpg" },
  { name: "Agria Organic", src: "/static/images/cliffs/Agria_Organic.jpg" },
  {
    name: "Aiur City Cliff0",
    src: "/static/images/cliffs/Aiur_City_Cliff0.jpg"
  },
  { name: "Aiur Manmade", src: "/static/images/cliffs/Aiur_Manmade.jpg" },
  { name: "Aiur Organic", src: "/static/images/cliffs/Aiur_Organic.jpg" },
  {
    name: "Aiur Temple Cliff0",
    src: "/static/images/cliffs/Aiur_Temple_Cliff0.jpg"
  },
  {
    name: "Aiur Temple Cliff1",
    src: "/static/images/cliffs/Aiur_Temple_Cliff1.jpg"
  },
  { name: "Avernus Manmade", src: "/static/images/cliffs/Avernus_Manmade.jpg" },
  { name: "Avernus Organic", src: "/static/images/cliffs/Avernus_Organic.jpg" },
  {
    name: "Bel'Shir Manmade",
    src: "/static/images/cliffs/Bel'Shir_Manmade.jpg"
  },
  {
    name: "Bel'Shir Organic",
    src: "/static/images/cliffs/Bel'Shir_Organic.jpg"
  },
  {
    name: "Black Ops Lab Cliff0",
    src: "/static/images/cliffs/Black_Ops_Lab_Cliff0.jpg"
  },
  {
    name: "Braxis Alpha Manmade",
    src: "/static/images/cliffs/Braxis_Alpha_Manmade.jpg"
  },
  {
    name: "Braxis Alpha Organic",
    src: "/static/images/cliffs/Braxis_Alpha_Organic.jpg"
  },
  {
    name: "Castanar Manmade",
    src: "/static/images/cliffs/Castanar_Manmade.jpg"
  },
  {
    name: "Castanar Organic",
    src: "/static/images/cliffs/Castanar_Organic.jpg"
  },
  {
    name: "Char Marsh Organic 0",
    src: "/static/images/cliffs/Char_Marsh_Organic_0.jpg"
  },
  {
    name: "Char Marsh Organic 1",
    src: "/static/images/cliffs/Char_Marsh_Organic_1.jpg"
  },
  { name: "Char Organic", src: "/static/images/cliffs/Char_Organic.jpg" },
  { name: "Char2 0", src: "/static/images/cliffs/Char2_0.jpg" },
  { name: "Char2 1", src: "/static/images/cliffs/Char2_1.jpg" },
  {
    name: "Compound Facility Cliff0",
    src: "/static/images/cliffs/Compound_Facility_Cliff0.jpg"
  },
  {
    name: "Compound Facility Cliff1",
    src: "/static/images/cliffs/Compound_Facility_Cliff1.jpg"
  },
  { name: "Cybross0", src: "/static/images/cliffs/Cybross0.jpg" },
  {
    name: "Daelaam Ark Manmade",
    src: "/static/images/cliffs/Daelaam_Ark_Manmade.jpg"
  },
  {
    name: "Elsecaro Manmade",
    src: "/static/images/cliffs/Elsecaro_Manmade.jpg"
  },
  {
    name: "Elsecaro Organic",
    src: "/static/images/cliffs/Elsecaro_Organic.jpg"
  },
  { name: "Endion0", src: "/static/images/cliffs/Endion0.jpg" },
  { name: "Endion1", src: "/static/images/cliffs/Endion1.jpg" },
  { name: "EndionProtoss1", src: "/static/images/cliffs/EndionProtoss1.jpg" },
  { name: "Haven Organic", src: "/static/images/cliffs/Haven_Organic.jpg" },
  {
    name: "Immortal Forge Manmade",
    src: "/static/images/cliffs/Immortal_Forge_Manmade.jpg"
  },
  {
    name: "Immortal Forge Organic",
    src: "/static/images/cliffs/Immortal_Forge_Organic.jpg"
  },
  {
    name: "Jarban Minor Jungle Manmade",
    src: "/static/images/cliffs/Jarban_Minor_Jungle_Manmade.jpg"
  },
  {
    name: "Jarban Minor Jungle Organic",
    src: "/static/images/cliffs/Jarban_Minor_Jungle_Organic.jpg"
  },
  {
    name: "Kaldir Organic 0",
    src: "/static/images/cliffs/Kaldir_Organic_0.jpg"
  },
  {
    name: "Kaldir Organic 1",
    src: "/static/images/cliffs/Kaldir_Organic_1.jpg"
  },
  { name: "Korhal City Ex2", src: "/static/images/cliffs/Korhal_City_Ex2.jpg" },
  {
    name: "Korhal City Manmade",
    src: "/static/images/cliffs/Korhal_City_Manmade.jpg"
  },
  { name: "Korhal Manmade", src: "/static/images/cliffs/Korhal_Manmade.jpg" },
  {
    name: "Korhal Platform Ex2",
    src: "/static/images/cliffs/Korhal_Platform_Ex2.jpg"
  },
  {
    name: "Korhal Platform Manmade",
    src: "/static/images/cliffs/Korhal_Platform_Manmade.jpg"
  },
  {
    name: "Korhal Skyscraper",
    src: "/static/images/cliffs/Korhal_Skyscraper.jpg"
  },
  {
    name: "Korhal Wastes Manmade",
    src: "/static/images/cliffs/Korhal_Wastes_Manmade.jpg"
  },
  {
    name: "Korhal Wastes Organic",
    src: "/static/images/cliffs/Korhal_Wastes_Organic.jpg"
  },
  {
    name: "Mar Sara Manmade",
    src: "/static/images/cliffs/Mar_Sara_Manmade.jpg"
  },
  {
    name: "Mar Sara Organic",
    src: "/static/images/cliffs/Mar_Sara_Organic.jpg"
  },
  { name: "MarSaraEx20", src: "/static/images/cliffs/MarSaraEx20.jpg" },
  { name: "MarSaraEx21", src: "/static/images/cliffs/MarSaraEx21.jpg" },
  {
    name: "Meinhoff Manmade",
    src: "/static/images/cliffs/Meinhoff_Manmade.jpg"
  },
  {
    name: "Meinhoff Organic",
    src: "/static/images/cliffs/Meinhoff_Organic.jpg"
  },
  { name: "MoebiumLab0", src: "/static/images/cliffs/MoebiumLab0.jpg" },
  { name: "MoebiusLab1", src: "/static/images/cliffs/MoebiusLab1.jpg" },
  { name: "Monlyth Manmade", src: "/static/images/cliffs/Monlyth_Manmade.jpg" },
  { name: "Monlyth Organic", src: "/static/images/cliffs/Monlyth_Organic.jpg" },
  { name: "Moros Manmade", src: "/static/images/cliffs/Moros_Manmade.jpg" },
  {
    name: "New Folsom Manmade",
    src: "/static/images/cliffs/New_Folsom_Manmade.jpg"
  },
  {
    name: "New Folsom Organic",
    src: "/static/images/cliffs/New_Folsom_Organic.jpg"
  },
  {
    name: "Phaethon Organic",
    src: "/static/images/cliffs/Phaethon_Organic.jpg"
  },
  { name: "PortCityCliff1", src: "/static/images/cliffs/PortCityCliff1.jpg" },
  {
    name: "Port Zion Manmade",
    src: "/static/images/cliffs/Port_Zion_Manmade.jpg"
  },
  {
    name: "Port Zion Organic",
    src: "/static/images/cliffs/Port_Zion_Organic.jpg"
  },
  {
    name: "Protoss Base Manmade",
    src: "/static/images/cliffs/Protoss_Base_Manmade.jpg"
  },
  {
    name: "Protoss Base Organic",
    src: "/static/images/cliffs/Protoss_Base_Organic.jpg"
  },
  {
    name: "Redstone Manmade",
    src: "/static/images/cliffs/Redstone_Manmade.jpg"
  },
  {
    name: "Redstone Organic",
    src: "/static/images/cliffs/Redstone_Organic.jpg"
  },
  {
    name: "ShadowCorpsPlatform0",
    src: "/static/images/cliffs/ShadowCorpsPlatform0.jpg"
  },
  {
    name: "ShadowCorpsPlatform1",
    src: "/static/images/cliffs/ShadowCorpsPlatform1.jpg"
  },
  {
    name: "Shakuras Manmade",
    src: "/static/images/cliffs/Shakuras_Manmade.jpg"
  },
  {
    name: "Shakuras Organic",
    src: "/static/images/cliffs/Shakuras_Organic.jpg"
  },
  { name: "ShakurasTemple0", src: "/static/images/cliffs/ShakurasTemple0.jpg" },
  { name: "ShakurasTemple1", src: "/static/images/cliffs/ShakurasTemple1.jpg" },
  {
    name: "Skygeirr Lab Manmade",
    src: "/static/images/cliffs/Skygeirr_Lab_Manmade.jpg"
  },
  {
    name: "Skygeirr Lab Natural",
    src: "/static/images/cliffs/Skygeirr_Lab_Natural.jpg"
  },
  {
    name: "Skygeirr Platform Manmade 0",
    src: "/static/images/cliffs/Skygeirr_Platform_Manmade_0.jpg"
  },
  {
    name: "Skygeirr Platform Manmade 1",
    src: "/static/images/cliffs/Skygeirr_Platform_Manmade_1.jpg"
  },
  { name: "Slayn0", src: "/static/images/cliffs/Slayn0.jpg" },
  { name: "Slayn1", src: "/static/images/cliffs/Slayn1.jpg" },
  {
    name: "SnowRefineryCliff1",
    src: "/static/images/cliffs/SnowRefineryCliff1.jpg"
  },
  {
    name: "TarsonisCityCliff0",
    src: "/static/images/cliffs/TarsonisCityCliff0.jpg"
  },
  {
    name: "TarsonisCityCliff1",
    src: "/static/images/cliffs/TarsonisCityCliff1.jpg"
  },
  {
    name: "Tarsonis Manmade",
    src: "/static/images/cliffs/Tarsonis_Manmade.jpg"
  },
  {
    name: "Tarsonis Organic",
    src: "/static/images/cliffs/Tarsonis_Organic.jpg"
  },
  { name: "TheVoid0", src: "/static/images/cliffs/TheVoid0.jpg" },
  { name: "TheVoid1", src: "/static/images/cliffs/TheVoid1.jpg" },
  { name: "Typhon Manmade", src: "/static/images/cliffs/Typhon_Manmade.jpg" },
  { name: "Typhon Organic", src: "/static/images/cliffs/Typhon_Organic.jpg" },
  { name: "Tyrador Manmade", src: "/static/images/cliffs/Tyrador_Manmade.jpg" },
  { name: "Ulaan Manmade", src: "/static/images/cliffs/Ulaan_Manmade.jpg" },
  { name: "Ulaan Organic", src: "/static/images/cliffs/Ulaan_Organic.jpg" },
  { name: "Ulna Inner1", src: "/static/images/cliffs/Ulna_Inner1.jpg" },
  { name: "Ulnar Inner0", src: "/static/images/cliffs/Ulnar_Inner0.jpg" },
  { name: "Ulnar Manmade", src: "/static/images/cliffs/Ulnar_Manmade.jpg" },
  { name: "Ulnar Organic", src: "/static/images/cliffs/Ulnar_Organic.jpg" },
  { name: "Ulnar Outer0", src: "/static/images/cliffs/Ulnar_Outer0.jpg" },
  { name: "Ulnar Outer1", src: "/static/images/cliffs/Ulnar_Outer1.jpg" },
  { name: "UlnarPortal0", src: "/static/images/cliffs/UlnarPortal0.jpg" },
  { name: "UlnarPortal1", src: "/static/images/cliffs/UlnarPortal1.jpg" },
  {
    name: "Umoja Lab Manmade",
    src: "/static/images/cliffs/Umoja_Lab_Manmade.jpg"
  },
  {
    name: "Umoja Lab Organic",
    src: "/static/images/cliffs/Umoja_Lab_Organic.jpg"
  },
  {
    name: "Valhalla Manmade",
    src: "/static/images/cliffs/Valhalla_Manmade.jpg"
  },
  {
    name: "Valhalla Organic",
    src: "/static/images/cliffs/Valhalla_Organic.jpg"
  },
  { name: "Xil Manmade", src: "/static/images/cliffs/Xil_Manmade.jpg" },
  { name: "Xil Organic", src: "/static/images/cliffs/Xil_Organic.jpg" },
  { name: "Zerus Organic 0", src: "/static/images/cliffs/Zerus_Organic_0.jpg" },
  { name: "Zerus Organic 1", src: "/static/images/cliffs/Zerus_Organic_1.jpg" },
  {
    name: "Zhakul'Das Manmade",
    src: "/static/images/cliffs/Zhakul'Das_Manmade.jpg"
  },
  {
    name: "Zhakul'Das Organic",
    src: "/static/images/cliffs/Zhakul'Das_Organic.jpg"
  }
];

export default cliffs;
const cliffs = [
  { name: 'Agria Manmade', url: 'Agria_Manmade.jpg', tags: '' },
  { name: 'Agria Organic', url: 'Agria_Organic.jpg', tags: '' },
  { name: 'Aiur City Cliff0', url: 'Aiur_City_Cliff0.jpg', tags: '' },
  { name: 'Aiur Manmade', url: 'Aiur_Manmade.jpg', tags: '' },
  { name: 'Aiur Organic', url: 'Aiur_Organic.jpg', tags: '' },
  { name: 'Aiur Temple Cliff0', url: 'Aiur_Temple_Cliff0.jpg', tags: '' },
  { name: 'Aiur Temple Cliff1', url: 'Aiur_Temple_Cliff1.jpg', tags: '' },
  { name: 'Avernus Manmade', url: 'Avernus_Manmade.jpg', tags: '' },
  { name: 'Avernus Organic', url: 'Avernus_Organic.jpg', tags: '' },
  { name: "Bel'Shir Manmade", url: "Bel'Shir_Manmade.jpg", tags: '' },
  { name: "Bel'Shir Organic", url: "Bel'Shir_Organic.jpg", tags: '' },
  { name: 'Black Ops Lab Cliff0', url: 'Black_Ops_Lab_Cliff0.jpg', tags: '' },
  { name: 'Braxis Alpha Manmade', url: 'Braxis_Alpha_Manmade.jpg', tags: '' },
  { name: 'Braxis Alpha Organic', url: 'Braxis_Alpha_Organic.jpg', tags: '' },
  { name: 'Castanar Manmade', url: 'Castanar_Manmade.jpg', tags: '' },
  { name: 'Castanar Organic', url: 'Castanar_Organic.jpg', tags: '' },
  { name: 'Char Marsh Organic 0', url: 'Char_Marsh_Organic_0.jpg', tags: '' },
  { name: 'Char Marsh Organic 1', url: 'Char_Marsh_Organic_1.jpg', tags: '' },
  { name: 'Char Organic', url: 'Char_Organic.jpg', tags: '' },
  { name: 'Char2 0', url: 'Char2_0.jpg', tags: '' },
  { name: 'Char2 1', url: 'Char2_1.jpg', tags: '' },
  { name: 'Compound Facility Cliff0', url: 'Compound_Facility_Cliff0.jpg', tags: '' },
  { name: 'Compound Facility Cliff1', url: 'Compound_Facility_Cliff1.jpg', tags: '' },
  { name: 'Cybross0', url: 'Cybross0.jpg', tags: '' },
  { name: 'Daelaam Ark Manmade', url: 'Daelaam_Ark_Manmade.jpg', tags: '' },
  { name: 'Elsecaro Manmade', url: 'Elsecaro_Manmade.jpg', tags: '' },
  { name: 'Elsecaro Organic', url: 'Elsecaro_Organic.jpg', tags: '' },
  { name: 'Endion0', url: 'Endion0.jpg', tags: '' },
  { name: 'Endion1', url: 'Endion1.jpg', tags: '' },
  { name: 'EndionProtoss1', url: 'EndionProtoss1.jpg', tags: '' },
  { name: 'Haven Organic', url: 'Haven_Organic.jpg', tags: '' },
  { name: 'Immortal Forge Manmade', url: 'Immortal_Forge_Manmade.jpg', tags: '' },
  { name: 'Immortal Forge Organic', url: 'Immortal_Forge_Organic.jpg', tags: '' },
  { name: 'Jarban Minor Jungle Manmade', url: 'Jarban_Minor_Jungle_Manmade.jpg', tags: '' },
  { name: 'Jarban Minor Jungle Organic', url: 'Jarban_Minor_Jungle_Organic.jpg', tags: '' },
  { name: 'Kaldir Organic 0', url: 'Kaldir_Organic_0.jpg', tags: '' },
  { name: 'Kaldir Organic 1', url: 'Kaldir_Organic_1.jpg', tags: '' },
  { name: 'Korhal City Ex2', url: 'Korhal_City_Ex2.jpg', tags: '' },
  { name: 'Korhal City Manmade', url: 'Korhal_City_Manmade.jpg', tags: '' },
  { name: 'Korhal Manmade', url: 'Korhal_Manmade.jpg', tags: '' },
  { name: 'Korhal Platform Ex2', url: 'Korhal_Platform_Ex2.jpg', tags: '' },
  { name: 'Korhal Platform Manmade', url: 'Korhal_Platform_Manmade.jpg', tags: '' },
  { name: 'Korhal Skyscraper', url: 'Korhal_Skyscraper.jpg', tags: '' },
  { name: 'Korhal Wastes Manmade', url: 'Korhal_Wastes_Manmade.jpg', tags: '' },
  { name: 'Korhal Wastes Organic', url: 'Korhal_Wastes_Organic.jpg', tags: '' },
  { name: 'Mar Sara Manmade', url: 'Mar_Sara_Manmade.jpg', tags: '' },
  { name: 'Mar Sara Organic', url: 'Mar_Sara_Organic.jpg', tags: '' },
  { name: 'MarSaraEx20', url: 'MarSaraEx20.jpg', tags: '' },
  { name: 'MarSaraEx21', url: 'MarSaraEx21.jpg', tags: '' },
  { name: 'Meinhoff Manmade', url: 'Meinhoff_Manmade.jpg', tags: '' },
  { name: 'Meinhoff Organic', url: 'Meinhoff_Organic.jpg', tags: '' },
  { name: 'MoebiumLab0', url: 'MoebiumLab0.jpg', tags: '' },
  { name: 'MoebiusLab1', url: 'MoebiusLab1.jpg', tags: '' },
  { name: 'Monlyth Manmade', url: 'Monlyth_Manmade.jpg', tags: '' },
  { name: 'Monlyth Organic', url: 'Monlyth_Organic.jpg', tags: '' },
  { name: 'Moros Manmade', url: 'Moros_Manmade.jpg', tags: '' },
  { name: 'New Folsom Manmade', url: 'New_Folsom_Manmade.jpg', tags: '' },
  { name: 'New Folsom Organic', url: 'New_Folsom_Organic.jpg', tags: '' },
  { name: 'Phaethon Organic', url: 'Phaethon_Organic.jpg', tags: '' },
  { name: 'PortCityCliff1', url: 'PortCityCliff1.jpg', tags: '' },
  { name: 'Port Zion Manmade', url: 'Port_Zion_Manmade.jpg', tags: '' },
  { name: 'Port Zion Organic', url: 'Port_Zion_Organic.jpg', tags: '' },
  { name: 'Protoss Base Manmade', url: 'Protoss_Base_Manmade.jpg', tags: '' },
  { name: 'Protoss Base Organic', url: 'Protoss_Base_Organic.jpg', tags: '' },
  { name: 'Redstone Manmade', url: 'Redstone_Manmade.jpg', tags: '' },
  { name: 'Redstone Organic', url: 'Redstone_Organic.jpg', tags: '' },
  { name: 'ShadowCorpsPlatform0', url: 'ShadowCorpsPlatform0.jpg', tags: '' },
  { name: 'ShadowCorpsPlatform1', url: 'ShadowCorpsPlatform1.jpg', tags: '' },
  { name: 'Shakuras Manmade', url: 'Shakuras_Manmade.jpg', tags: '' },
  { name: 'Shakuras Organic', url: 'Shakuras_Organic.jpg', tags: '' },
  { name: 'ShakurasTemple0', url: 'ShakurasTemple0.jpg', tags: '' },
  { name: 'ShakurasTemple1', url: 'ShakurasTemple1.jpg', tags: '' },
  { name: 'Skygeirr Lab Manmade', url: 'Skygeirr_Lab_Manmade.jpg', tags: '' },
  { name: 'Skygeirr Lab Natural', url: 'Skygeirr_Lab_Natural.jpg', tags: '' },
  { name: 'Skygeirr Platform Manmade 0', url: 'Skygeirr_Platform_Manmade_0.jpg', tags: '' },
  { name: 'Skygeirr Platform Manmade 1', url: 'Skygeirr_Platform_Manmade_1.jpg', tags: '' },
  { name: 'Slayn0', url: 'Slayn0.jpg', tags: '' },
  { name: 'Slayn1', url: 'Slayn1.jpg', tags: '' },
  { name: 'SnowRefineryCliff1', url: 'SnowRefineryCliff1.jpg', tags: '' },
  { name: 'TarsonisCityCliff0', url: 'TarsonisCityCliff0.jpg', tags: '' },
  { name: 'TarsonisCityCliff1', url: 'TarsonisCityCliff1.jpg', tags: '' },
  { name: 'Tarsonis Manmade', url: 'Tarsonis_Manmade.jpg', tags: '' },
  { name: 'Tarsonis Organic', url: 'Tarsonis_Organic.jpg', tags: '' },
  { name: 'TheVoid0', url: 'TheVoid0.jpg', tags: '' },
  { name: 'TheVoid1', url: 'TheVoid1.jpg', tags: '' },
  { name: 'Typhon Manmade', url: 'Typhon_Manmade.jpg', tags: '' },
  { name: 'Typhon Organic', url: 'Typhon_Organic.jpg', tags: '' },
  { name: 'Tyrador Manmade', url: 'Tyrador_Manmade.jpg', tags: '' },
  { name: 'Ulaan Manmade', url: 'Ulaan_Manmade.jpg', tags: '' },
  { name: 'Ulaan Organic', url: 'Ulaan_Organic.jpg', tags: '' },
  { name: 'Ulna Inner1', url: 'Ulna_Inner1.jpg', tags: '' },
  { name: 'Ulnar Inner0', url: 'Ulnar_Inner0.jpg', tags: '' },
  { name: 'Ulnar Manmade', url: 'Ulnar_Manmade.jpg', tags: '' },
  { name: 'Ulnar Organic', url: 'Ulnar_Organic.jpg', tags: '' },
  { name: 'Ulnar Outer0', url: 'Ulnar_Outer0.jpg', tags: '' },
  { name: 'Ulnar Outer1', url: 'Ulnar_Outer1.jpg', tags: '' },
  { name: 'UlnarPortal0', url: 'UlnarPortal0.jpg', tags: '' },
  { name: 'UlnarPortal1', url: 'UlnarPortal1.jpg', tags: '' },
  { name: 'Umoja Lab Manmade', url: 'Umoja_Lab_Manmade.jpg', tags: '' },
  { name: 'Umoja Lab Organic', url: 'Umoja_Lab_Organic.jpg', tags: '' },
  { name: 'Valhalla Manmade', url: 'Valhalla_Manmade.jpg', tags: '' },
  { name: 'Valhalla Organic', url: 'Valhalla_Organic.jpg', tags: '' },
  { name: 'Xil Manmade', url: 'Xil_Manmade.jpg', tags: '' },
  { name: 'Xil Organic', url: 'Xil_Organic.jpg', tags: '' },
  { name: 'Zerus Organic 0', url: 'Zerus_Organic_0.jpg', tags: '' },
  { name: 'Zerus Organic 1', url: 'Zerus_Organic_1.jpg', tags: '' },
  { name: "Zhakul'Das Manmade", url: "Zhakul'Das_Manmade.jpg", tags: '' },
  { name: "Zhakul'Das Organic", url: "Zhakul'Das_Organic.jpg", tags: '' },
];

export default cliffs;

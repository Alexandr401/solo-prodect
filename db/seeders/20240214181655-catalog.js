'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const category = [
      "Стол",
      "Стол",
      "Стол",

      "Кровать",
      "Кровать",
      "Кровать",

      "Диван",
      "Диван",
      "Диван",

      "Шкаф",
      "Шкаф",
      "Шкаф",

      "Тумба",
      "Тумба",
      "Тумба",

      "Стул",
      "Стул",
      "Стул",

      "Кресло",
      "Кресло", 
      "Кресло"
    ]
    const img = [
      "https://s4.lm-cdn.ru/photo/stoly/dlya_kuhni/dizaynerskie/stol_khasselvud_160_220_kh90kh77_baolai_chernyy/stol_khasselvud_160_220_kh90kh77_baolai_chernyy_1994_1055_1_0_5738947.webp",
      "https://s7.lm-cdn.ru/photo/stoly/dlya_komnat/kompyuternye/pismennyy_stol_layt_03_243_dub_zolotoy_craft_belyy_premium/pismennyy_stol_layt_03_243_dub_zolotoy_craft_belyy_premium_1994_1320_1_0_5625118.webp",
      "https://s7.lm-cdn.ru/photo/stoly/dlya_komnat/kompyuternye/stol_pismennyy_kolibri_bodega/stol_pismennyy_kolibri_bodega_1200_794_1_0_5686666.webp",
      
      "https://s7.lm-cdn.ru/photo/detskaya_mebel/krovati/krovati_detskie/polutoraspalnaya_krovat_reyk_leon_kmd_8_120kh200_chernaya/polutoraspalnaya_krovat_reyk_leon_kmd_8_120kh200_chernaya_1200_794_1_0_5692711.webp",
      "https://s7.lm-cdn.ru/photo/mebel_dlya_spalni/krovati/odnospalnye_krovati/krovat_sofa_90_sm_kh_200_sm/krovat_sofa_90_sm_kh_200_sm_1994_1320_1_0_5687418.webp",
      "https://s4.lm-cdn.ru/photo/mebel_dlya_spalni/krovati/dvuspalnye_krovati/dvuspalnaya_krovat_alberto_adelina_160x200_salyut_02_myagkaya_s_osnovaniem/dvuspalnaya_krovat_alberto_adelina_160x200_salyut_02_myagkaya_s_osnovaniem_1994_1100_1_0_5006036.webp",
      
      "https://s4.lm-cdn.ru/photo/mebel_dlya_gostinoy/myagkaya_mebel/divany/divan_uglovoy_polo_levyy_korfu_korfu_03/divan_uglovoy_polo_levyy_korfu_korfu_03_1939_1283_1_0_3441142.webp",
      "https://s4.lm-cdn.ru/photo/mebel_dlya_gostinoy/myagkaya_mebel/divany/divan_modeno_ekstra_apollo_lyuks_trekhmestnyy_pegas_krasnyy/divan_modeno_ekstra_apollo_lyuks_trekhmestnyy_pegas_krasnyy_1994_1320_1_0_3762174.png",
      "https://s4.lm-cdn.ru/photo/mebel_dlya_gostinoy/myagkaya_mebel/divany/divan_brayton_2_rogozhka_korfu_02/divan_brayton_2_rogozhka_korfu_02_1973_1306_1_0_4824677.webp",
      
      "https://s3.lm-cdn.ru/photo/shkafy/raspashnye/shkaf_ego_shk_1_na_nozhkakh_dub_kraft_zolotoy_belyy_glyanets/shkaf_ego_shk_1_na_nozhkakh_dub_kraft_zolotoy_belyy_glyanets_1994_1320_1_1_5485625.jpg",
      "https://s7.lm-cdn.ru/photo/shkafy/raspashnye/shkaf_beri_dub_kraft_zolotoy_grafit_800kh350kh1826_dvukhdvernyy/shkaf_beri_dub_kraft_zolotoy_grafit_800kh350kh1826_dvukhdvernyy_1200_794_1_0_5738739.webp",
      "https://s7.lm-cdn.ru/photo/shkafy/raspashnye/shkaf_lerdti_kubo_shk_50_artizan_chernyy_seryy_71705627/shkaf_lerdti_kubo_shk_50_artizan_chernyy_seryy_71705627_1200_794_1_0_5738204.webp",

      "https://s7.lm-cdn.ru/photo/mebel_dlya_gostinoy/tv_tumby/tv_tumba_ego_t_3_na_nozhkakh_beton_svetlyy_belyy_glyanets/tv_tumba_ego_t_3_na_nozhkakh_beton_svetlyy_belyy_glyanets_1200_794_1_0_5422318.webp",
      "https://s7.lm-cdn.ru/photo/mebel_dlya_spalni/shkafy_tumby_komody/tumby/prikrovatnaya_tumba_malgoma_chernaya_venge/prikrovatnaya_tumba_malgoma_chernaya_venge_1160_767_1_0_5743524.webp",
      "https://s7.lm-cdn.ru/photo/mebel_dlya_spalni/shkafy_tumby_komody/tumby/tumba_prikrovatnaya_liverpul_08_146_belyy_yasen_vanil_nm_1012_100_pvkh/tumba_prikrovatnaya_liverpul_08_146_belyy_yasen_vanil_nm_1012_100_pvkh_1200_794_1_0_5741369.webp",

      "https://s7.lm-cdn.ru/photo/stulya/barnie/barnyy_stul_taburet_kreley_modul_vanil_v_krapinku_svetlyy_muss_2300000058956/barnyy_stul_taburet_kreley_modul_vanil_v_krapinku_svetlyy_muss_2300000058956_1200_794_1_0_5250414.webp",
      "https://s7.lm-cdn.ru/photo/stulya/dlya_kuhni/derevyannye/stul_kornell_stella_orekh_temnyy_t_22_teddi_008_k/stul_kornell_stella_orekh_temnyy_t_22_teddi_008_k_1994_1320_1_0_5279213.webp",
      "https://s7.lm-cdn.ru/photo/stulya/dlya_kuhni/na_metallokarkase/stul_one_pc_015_chernyy/stul_one_pc_015_chernyy_1994_1320_1_0_5278520.webp",

      "https://s7.lm-cdn.ru/photo/mebel_dlya_gostinoy/myagkaya_mebel/kresla/kreslo_grand_velutto_18_belyy_serebro_dlya_otdykha/kreslo_grand_velutto_18_belyy_serebro_dlya_otdykha_1994_1320_1_0_5166884.webp",
      "https://s7.lm-cdn.ru/photo/mebel_dlya_gostinoy/myagkaya_mebel/kresla/kreslo_brody_7lv1803_dwb_black_k/kreslo_brody_7lv1803_dwb_black_k_1994_1320_1_0_4634611.webp",
      "https://s4.lm-cdn.ru/photo/stulya/dlya_komnat/kompyuternye/kompyuternoe_kreslo_byurokrat_antonio_black_chernoe/kompyuternoe_kreslo_byurokrat_antonio_black_chernoe_997_660_1_0_1718670.webp",
    ]
    
    const name = [
      "Керамический стол Хасселвуд",
      "Письменный стол Лайт",
      "Стол письменный Колибри",

      "Полутораспальная кровать Рейк",
      "Кровать Sofa",
      "Двуспальная кровать Алберто",

      "Диван угловой Поло левый корфу",
      "Диван Модено экстра",
      "Диван Брайтон 2",

      "Шкаф Эго Шк-1 на ножках дуб крафт золотой",
      "Шкаф Бери 80 дуб крафт золотой",
      "Шкаф Лердти ШК-50 артизан",

      "ТВ-тумба Эго Т-3 на ножках",
      "Прикроватная тумба Малгома",
      "Тумба прикроватная Ливерпуль",
      
      "Барный стул Kreley",
      "Деревянный стул Корнелл",
      "Стул One PC-015",

      "Кресло Гранд velutto 18",
      "Кресло Brody 7LV1803-dwb",
      "Компьютерное кресло Бюрократ ANTONIO",
    ]

    const description = [
      "Материал -> Столешницы: МДФ, керамика. Каркаса: металл. Механизм трансформации: раздвижной. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Столешницы: ЛДСП. Каркаса: ЛДСП. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Столешницы: ЛДСП. Каркаса: ЛДСП. Тип поверхности: текстурная. Производитель -> Страна: Россия. Гарантия: 12 мес.",

      "Материал -> Кровати: металл. Основания под матрас: с деревянными ламелями. Ножки: металл. Производитель -> Страна: Россия. Гарантия: 24 мес.",
      "Материал -> Кровати: металл. Основания под матрас: с деревянными ламелями. Ножки: металл. Производитель -> Страна: Малайзия. Гарантия: 12 мес.",
      "Материал -> Кровати: ЛДСП. Обивки: ткань, велюр. Основания под матрас: с деревянными ламелями. Ножки: пластик. Производитель -> Страна: Россия. Гарантия: 12 мес.",

      "Материал -> Обивки: ткань. Каркаса: ЛДСП. Наполнителя: ППУ. Механизм трансформации: еврокнижка. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Обивки: экокожа. Каркаса: фанера. Наполнителя: ППУ. Ножки: хромированные. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Обивки: ткань, рогожка. Каркаса: ЛДСП. Наполнителя: ППУ. Ножки: деревянные. Производитель -> Страна: Россия. Гарантия: 12 мес.",

      "Материал -> Каркаса: ЛДСП. Фасада: ЛДСП. Наполнителя: ППУ. Материал ножек/опоры: пластик. Тип направляющих ящиков: шариковые направляющие полного выдвижения. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Каркаса: ЛДСП. Фасада: ЛДСП. Наполнителя: ППУ. Ножки: деревянные. Ручка профиль: металл. Вставка МДФ 19 мм+ пленка. ПВХ Штанга для одежды: выдвижная. Опоры регулируемые. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Каркаса: ЛДСП. Фасада: ЛДСП. В комплект входит светодиодная лента подсветки. Производитель -> Страна: Россия. Гарантия: 12 мес.",

      "Материал -> Каркаса: ЛДСП. Фасада: ЛДСП. Тип поверхности: гладкая, глянцевая. Материал ручек: пластик. Материал ножек/опоры: пластик. Тип направляющих ящиков: шариковые направляющие полного выдвижения. Производитель -> Страна: Россия. Гарантия: 24 мес.",
      "Материал -> Каркаса: металл, ЛДСП. Тип поверхности: гладкая, глянцевая. Материал ручек: дерево. Материал ножек/опоры: металл. Тип направляющего ящика: шариковые направляющие полного выдвижения. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Каркаса: ЛДСП. Фасад: МДФ. Дверь на четырёхшарнирных петлях. Выдвижной ящик на шариковых направляющих полного выдвижения. Ручки: металл. Производитель -> Страна: Россия. Гарантия: 24 мес.",
      
      "Материал -> Каркаса: металл. Сиденья: искусственная кожа. Максимальная нагрузкадо 100 кг. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Каркаса: дерево, массив бука. Сиденья: велюр. Мягкость -> Сиденья: мягкое. Спинки: мягкая. Производитель -> Страна: Россия. Гарантия: 12 мес.",
      "Материал -> Каркаса: металл. Сиденья: пластик. Мягкость -> Сиденья: жесткое. Спинки: жесткая. Производитель -> Страна: Китай. Гарантия: 12 мес.",

      "Материал -> Обивки: велюр. Каркаса: ЛДСП, массив березы, фанера. Наполнителя: ППУ. Мягкость -> Сиденья: мягкое. Спинки: мягкая. Производитель -> Страна: Россия. Гарантия: 18 мес.",
      "Материал -> Обивки: велюр. Каркаса: массив бука. Мягкость -> Сиденья: мягкое. Спинки: мягкая. Производитель -> Страна: Китай. Гарантия: 12 мес.",
      "Материал -> Кресла: искусственная кожа, натуральная кожа. Крестовины: металл. Колеса: пластик. Механизм -> Тип механизма: мультиблок. Мягкость -> Жесткость сиденья -> средней жесткости. Производитель -> Страна: Россия. Гарантия: 24 мес.",
    ]

    const price = [
      "70390",
      "15390",
      "6800",
      
      "11480",
      "25850",
      "14620",
      
      "29990",
      "23288",
      "33990",
      
      "12060",
      "11790",
      "11390",

      "5820",
      "6140",
      "4550",

      "1999",
      "6870",
      "4790",

      "26880",
      "58050",
      "83790",
    ]

    const attribute = [
      "160(220)х90х77",
      "150x57x180",
      "110x60x75",
      
      "120x200",
      "90x200",
      "160x200",
      
      "200x135x85",
      "182x82x70",
      "139x80x85",
      
      "80x51x201,9",
      "80x35x182,6",
      "50x42x195",

      "145x40,4x41,6",
      "51x43x56",
      "50x41,3x53,3",

      "40x40x78",
      "45x55x94",
      "55x56x80",

      "84x83x118",
      "66x67x109",
      "75,5x72,5x122,5(129)",
    ]

    const catalog = category.map((el, i) => ({
      category: el,
      img: img[i],
      name: name[i],
      description: description[i],
      price: price[i],
      attribute: attribute[i],
      hide: 'N',
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Catalogs', catalog);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Catalogs', null, {})
  }
};

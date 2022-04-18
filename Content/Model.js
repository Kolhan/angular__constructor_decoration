/*Данные первой страницы (PAGE1)*/
var page1_model1 = {
    currentSelectBtn: -1,
    allSquare: 0,
    curHintIndex: -1,
    currentTabView: 0,
    list1: [
        { id: 0,  room: "Кухня",    hint: "Или комната в студии",   square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0},
        { id: 1,  room: "Прихожая", hint: "Включая все коридоры",                    square: 0, editshow: false, editFocus: false, constDoor: 0, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
        { id: 2,  room: "Комната",  hint: "Помещение с окном",                  square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
        { id: 3,  room: "Комната",  hint: "Помещение с окном",                  square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
		{ id: 4,  room: "Комната",  hint: "Помещение с окном",                  square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
		{ id: 5,  room: "Комната",  hint: "Помещение с окном",                  square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 }
    ], 
    
    list2: [
        { id: 6,  room: "Совмещ. с/у", hint: "Имеется ванна, раковина и унитаз", square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 1, constToilet: 1, constMixer: 2, countPoint:3, constElectrosushilo: 1, constMebel: 1 },
        { id: 7,  room: "Совмещ. с/у", hint: "Имеется ванна, раковина и унитаз", square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 1, constToilet: 1, constMixer: 2, countPoint:3, constElectrosushilo: 1, constMebel: 1 },
        { id: 8,  room: "Ванная",      hint: "Только ванна и раковина",          square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 1, constToilet: 0, constMixer: 2, countPoint:2, constElectrosushilo: 1, constMebel: 1 },
        { id: 9,  room: "Ванная",      hint: "Только ванна и раковина",          square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 1, constToilet: 0, constMixer: 2, countPoint:2, constElectrosushilo: 1, constMebel: 1 },
		{ id: 10, room: "Туалет",      hint: "Только унитаз",                    square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 1, constMixer: 0, countPoint:1, constElectrosushilo: 0, constMebel: 0 },
		{ id: 11, room: "Туалет",      hint: "Только унитаз",                    square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 1, constMixer: 0, countPoint:1, constElectrosushilo: 0, constMebel: 0 }
    ],
    
    list3: [
        { id: 12, room: "Кладовая",    hint: "Помещение без окон",               square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
        { id: 13, room: "Кладовая",    hint: "Помещение без окон",               square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
        { id: 14, room: "Кладовая",    hint: "Помещение без окон",               square: 0, editshow: false, editFocus: false, constDoor: 1, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 }
    ],

    list4: [
        { id: 15, room: "Лоджия",      hint: "Балкон, терраса",                 square: 0, editshow: false, editFocus: false, constDoor: 0, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
        { id: 16, room: "Лоджия",      hint: "Балкон, терраса",                 square: 0, editshow: false, editFocus: false, constDoor: 0, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 },
        { id: 17, room: "Лоджия",      hint: "Балкон, терраса",                 square: 0, editshow: false, editFocus: false, constDoor: 0, constBath: 0, constToilet: 0, constMixer: 0, constElectrosushilo: 0, constMebel: 0 }
    ], 
    
    selectLiteRoom: 1,
    squareLiteRoom: 0,
    liteRoom: [
        { id: 0, room: "Студия", fontsize: "18px",  rooms: [0,20,80,0,0,0],      balkon: 3, wc: [3.5,0,0,0,0,0]},
        { id: 1, room: "1", fontsize: "40px",       rooms: [30,20,50,0,0,0],     balkon: 3, wc: [4,0,0,0,0,0]},
        { id: 2, room: "2", fontsize: "40px",       rooms: [20,14,33,33,0,0],    balkon: 3, wc: [0,0,3.5,0,1.5,0]},
        { id: 3, room: "3", fontsize: "40px",       rooms: [21,15,21,21,21,0],   balkon: 3, wc: [0,0,3.5,0,1.5,0]},
        { id: 4, room: "4", fontsize: "40px",       rooms: [17,15,17,17,17,17],  balkon: 3, wc: [0,0,3.5,0,1.5,0]}
    ]
    
};


/*Данные второй страницы (PAGE2)*/
/*Готовые решения*/
var page2_model1 = {
	title: 'Готовые решения',

	selectTabIndex: 2,
    selectFurnitureIndex: 0,
	isShowPrice: false,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Москва',  		size: '', priceforOne:0, price: 0, hint: "Простая отделка, например, под аренду." },
        { id: 1, name: 'Неаполь',  		size: '', priceforOne:0, price: 0, hint: "Хороший баланс по наполнению и стоимости." },
        { id: 2, name: 'Хельсинки',  	size: '', priceforOne:0, price: 0, hint: "Свет и лаконичность скандинавского дизайна." },
        { id: 3, name: 'Берлин',  		size: '', priceforOne:0, price: 0, hint: "Практичный пакет с повышенным уровнем комфорта." },
		{ id: 4, name: 'Париж',  		size: '', priceforOne:0, price: 0, hint: "Современная классика, основательность." },
		{ id: 5, name: 'Манхэттен',  	size: '', priceforOne:0, price: 0, hint: "Современные решения, максимальное наполнение." }
		
    ],
	
	furniture: [
        { id: 0,  img: 'Furniture_00.png', color:'var(--color-lightgray)' },
        { id: 1,  img: 'Furniture_01.png', color:'white' },
        { id: 2,  img: 'Furniture_02.png', color:'white' },
        { id: 3,  img: 'Furniture_03.png', color:'white' },
        { id: 4,  img: 'Furniture_04.png', color:'white' },
		{ id: 5,  img: 'Furniture_05.png', color:'white' },
		{ id: 6,  img: 'Furniture_06.png', color:'white' },
        { id: 7,  img: 'Furniture_07.png', color:'white' },
        { id: 8,  img: 'Furniture_08.png', color:'white' },
        { id: 9,  img: 'Furniture_09.png', color:'white' },
		{ id: 10, img: 'Furniture_10.png', color:'white' }
        
    ]
};

/*Потолки*/
var page2_model2 = {
	title: 'Потолки',

	selectTabIndex: 1,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        
		{ id: 0, name: 'Окрашенные',  			size: '', sum:0, price: 590, hint: 'Классические выровненные и окрашенные потолки.' },
		{ id: 1, name: 'Натяжные в санузлах', 	size: '', sum:0, price: 750, hint: 'Окрашенные в комнатах, и натяжные в санузлах.' },
		{ id: 2, name: 'Натяжные',  			size: '', sum:0, price: 1200, hint: 'Натяжные потолки во всех помещениях.' }
		
		
		
        
       
    ]
};

/*Стены и цвет*/
var page2_model3 = {
	title: 'Стены и цвет',

	selectTabIndex: 1,
	selectColorIndex: 0,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Обои без окраски',	size: '', sum: 0, price: 840, hint: 'Выравнивание «под правило» и оклейка текстурными обоями.' },
        { id: 1, name: 'Окраска по гладким обоям',  size: '', sum: 0, price: 1250, hint: 'Выравнивание «под правило», шпаклевка, гладкие обои, краска DULUX.' },
        { id: 2, name: 'Окраска по стенам',	size: '', sum: 0, price: 1600, hint: 'Выравнивание "под маяк", армирующие обои, премиум-шпаклевка, краска DULUX.'}
    ],
    isShowColorsHint: true,
	colors: [
        //первые 14 кнопок с цветом
        { id: 0, color: '#D6CCC3',	name: 'цвет1', img: 'Wall1.png', hint: "«Ромовая карамель» Один из самых популярных цветов. Сложный оттенок, позволяет использовать как теплые, так и холодные акценты." },
        { id: 1, color: '#CEC2C6',	name: 'цвет2', img: 'Wall2.png', hint: "«Аристократ» Цвет викторианской классики в современном прочтении. Обволакивающий, замедляющий время, сдержанный." },
        { id: 2, color: '#E7E8ED',	name: 'цвет3', img: 'Wall3.png', hint: "«Финский белый» Классика от наших соседей. Максимум света и воздуха. Акценты из натурального дерева - идеально подойдут." },
		{ id: 3, color: '#E7E0D8',	name: 'цвет4', img: 'Wall4.png', hint: "«Греческий белый» Цвет выжженного солнцем камня, очень теплый и согревающий. При этом, скорее успокаивает, чем бодрит." },
        { id: 4, color: '#F2F0E4',	name: 'цвет5', img: 'Wall5.png', hint: "«Жасмин» Цвет молодости и легкости. Хорошо подойдет для комнаты молодой девушки или детской, лучше сочетать с полами теплого цвета." },
        { id: 5, color: '#85939C',	name: 'цвет6', img: 'Wall6.png', hint: "«Деним» Лучший цвет 2017 года по версии Dulux. Джинсы - вечная американская классика. Прекрасно сочетается с акцентами из дерева." },
		{ id: 6, color: '#BBBAB8',	name: 'цвет7', img: 'Wall7.png', hint: "«Графит» Можно не беспокоится о цветовом решении в мебели и декоре: подойдет любой вариант. Подходит к полам насыщенных оттенков." },
        { id: 7, color: '#EEE6E4',	name: 'цвет8', img: 'Wall8.png', hint: "«Устричный» Этот мягкий и теплый цвет создает ощущение благородного спокойствия, хорошо сочетается с темными полами." },
        { id: 8, color: '#D8DAD5',	name: 'цвет9', img: 'Wall9.png', hint: "«Фисташковый» Цвет уюта и комфорта, семьи и отдыха. Прекрасно сочетается с белой мебелью, насыщенно-цветовыми полами." },
		{ id: 9, color: '#DFDAD7',	name: 'цвет10', img: 'Wall10.png', hint: "«Дымчатый» Нейтрально-сдержанный, теплый оттенок. Хорошо подходит для оформления жилья в скандинавском стиле и минимализме."  },
        { id: 10, color: '#D2DCE5',	name: 'цвет11', img: 'Wall11.png', hint: "«Бриз» Идеально подойдет квартирам с окнами на юг: освежающий и воздушный цвет. Отлично сочетается с полами теплых цветов." },
		{ id: 11, color: '#E7E5EA',	name: 'цвет12', img: 'Wall12.png', hint: "«Холодный белый» Более насыщенный и сложный вариант Финского белого, с нотками фиолетовых тонов, придающими цвету прохладу." },
        { id: 12, color: '#E8E9ED',	name: 'цвет13', img: 'Wall13.png', hint: "«Полярное небо» Цвет любителей морозной свежести, но без лишней насыщенности. Тона серо-зеленого цвета добавляют спокойствия." },
        { id: 13, color: '#DFDAE0',	name: 'цвет14', img: 'Wall14.png', hint: "«Мягкий пурпур» Легко воспринимает температуру света, хорошо сочетается с акцентами, спокойный и практичный цвет." },
        
        //все оставшиеся
        { row:1, id: 14, color: '#966f5a',	name: 'цвет1', img: 'Wall15.png', hint: "«Шоколад» Благородный насыщенный коричневый цвет. Очень основательный. Лучше использовать в помещениях на солнечной стороне." },
        { row:1, id: 15, color: '#488697',	name: 'цвет2', img: 'Wall16.png', hint: "«Рэймонд» Современная классика, сложный цвет сине-зеленого оттенка. Хорошо подойдет для оформления кабинета или спальни." },
        { row:1, id: 16, color: '#b7c149',	name: 'цвет3', img: 'Wall17.png', hint: "«Вердэ» Очень насыщенный, но в то же время сложный смесовой цвет. Требователен к оттенкам мебели, лучше с теплыми тонами." },
		{ row:1, id: 17, color: '#be6c94',	name: 'цвет4', img: 'Wall18.png', hint: "«Вечерняя орхидея» Цвет для любителей сдержанной яркости. Прекрасно может сочетаться как со светлой, так и с темной мебелью." },
        { row:1, id: 18, color: '#b24143',	name: 'цвет5', img: 'Wall19.png', hint: "«Амарант» Для уверенных в себе людей. Крайне энергичный, но не раздражающий цвет. Отлично сочетается с белым и серым глянцем." },
        { row:1, id: 19, color: '#c9a8a5',	name: 'цвет6', img: 'Wall20.png', hint: "«Пудровый лавальер» Цвет 2018 года по версии DULUX. Нежнейший пудровый оттенок красно-коричневого тона, спокойный и респектабельный." },
		{ row:1, id: 20, color: '#e19d88',	name: 'цвет7', img: 'Wall21.png', hint: "«Танго» Цвет жаркого праздника и ярких эмоций. В меру насыщенный, очень и очень теплый, этот колер подарит вам только позитивные эмоции." },
        { row:1, id: 21, color: '#d09980',	name: 'цвет8', img: 'Wall22.png', hint: "«Терракотовый» Классический терракотовый цвет, хорошо подчеркнет атмосферу покоя в спальне. Хорошо сочетается с нейтральными полами." },
        { row:1, id: 22, color: '#dcb594',	name: 'цвет9', img: 'Wall23.png', hint: "«Шамуа» Более светлый вариант терракотового оттенка, менее насыщенный, сложнее по составу цветов. Для тех, кто любит основательность." },
		{ row:1, id: 23, color: '#b1b1a4',	name: 'цвет10', img: 'Wall24.png', hint: "«Лондонский дым» Еще один цвет из классической мировой линейки. Этот сложный цвет хорошо сочетается с различными акцентами."  },
        { row:1, id: 24, color: '#515354',	name: 'цвет11', img: 'Wall25.png', hint: "«Прюнел» Темно-серый цвет с легким холодно-фиолетовым оттенком. Хорошо подойдет для современных интерьеров с яркими акцентами." },
		{ row:1, id: 25, color: '#83619b',	name: 'цвет12', img: 'Wall26.png', hint: "«Фиолент» Бескомпромиссный цвет для любителей жить ярко и необычно. Лучше всего будет наполнить интерьер белой мебелью." },
        { row:1, id: 26, color: '#79aaaa',	name: 'цвет13', img: 'Wall27.png', hint: "«Марин» Если вы любите морские мотивы, то этот оттенок прекрасно подойдет для любого помещения. Оптимальный баланс по насыщенности." },
        { row:1, id: 27, color: '#8f7e88',	name: 'цвет14', img: 'Wall28.png', hint: "«Бристоль» Представитель классических цветов в пудровом исполнении. Гостиная или спальня будут выглядеть очень респектабельно." },
    ]
};

/*Покрытите пола*/
/* function_tabs - кнопки с ценами. Их видимость зависит от tabs.price, если tabs.price больше чем function_tabs.price_max то прячу */
/* Имена файлов для пола в папках формировать по принципу '<tabs.img>_<colors.id>.png'. Пример: Floor1_0.png, Floor1_1.png. Расширение всегда .png */
var page2_model4 = {
	title: 'Покрытите пола',

	selectTabIndex: 1,
	isShowPrice: false,
	isShowSize: false,
	isShowName: true,
	isShowHint: false,
	
    tabs_title: 'Тип покрытия',
    //Добавление в любую строку 'row: 1' переносит эту кнопку на вторую строчку
    tabs: [
        { id: 0, name: 'Ламинат', size: '', sum:0, price: 1030, img: 'Floor1', hint: 'Базовый ламинат Kronostar 32 класса. Цвет "Дуб авиньон". Спокойный теплый оттенок.' },
        { id: 1, name: 'Паркет', size: '', sum:0, price: 1999, img: 'Floor2', hint: 'Ламинат Kronospan с уменьшенными по размеру плашками, с фаской. Отлично имитирует паркет.' },
        { id: 2, name: 'Пробка', size: '', sum:0, price: 2499, img: 'Floor4', hint: 'Светлый и воздушный ламинат Eurohome с фаской, цвет "Дуб аспен".' },
		{ id: 3, name: 'Кварцвинил', size: '', sum:0, price: 2499, img: 'Floor3', hint: 'Kaindl - идеальный ламинат, если вы хотите максимально похожий на натуральное дерево пол.' },
		{ id: 4, name: 'Инж. доска',  	size: '', sum:0, price: 4999, img: 'Floor5', hint: 'Паркетная доска Polarwood Elara white matt однополосная, с молочным оттенком.' },
	    ],
    
    function_tabs_title: 'Стоимость (₽/м2)',
    selectFunctionTabIndex: 0,
    //Добавление в любую строку 'row: 1' переносит эту кнопку на вторую строчку
    function_tabs: [
        { id: 0, name: '300-500', price_min: 1000, price_max: 1300},
        { id: 1, name: '500-1000', price_min: 1300, price_max: 2000},
        { id: 2, name: '1000-1500', price_min: 2000, price_max: 2500},
		{ id: 3, name: '1500-2000', price_min: 2500, price_max: 3500},
		{ id: 4, name: '2000-3000', price_min: 3500, price_max: 5000},
		],
    
    colors_title: 'Цвет',
    isShowColorsHint: false,
    selectColorIndex: 0,
    colors: [
        //первые 14 кнопок с цветом
        { id: 0, color: '#f5f5f5',	name: 'цвет1', img: 'Wall1.png', hint: "«Ромовая карамель» Один из самых популярных цветов. Сложный оттенок, позволяет использовать как теплые, так и холодные акценты, усиливая их, при этом оставаясь спокойным и греющим." },
        { id: 1, color: '#dadada',	name: 'цвет2', img: 'Wall2.png', hint: "«Аристократ» Цвет викторианской классики в современном прочтении. Обволакивающий, замедляющий время, сдержанный - пожалуй, такими эпитетами можно описать этот интересный цвет." },
        { id: 2, color: '#e2dcd0',	name: 'цвет3', img: 'Wall3.png', hint: "«Финский белый» Классика от наших соседей. Максимум света и воздуха. Акценты из натурального дерева - идеальный партнер данному цвету." },
		{ id: 3, color: '#d6ccc5',	name: 'цвет4', img: 'Wall4.png', hint: "«Греческий белый» Цвет выжженного солнцем камня, очень теплый и согревающий. При этом, скорее успокаивает, чем бодрит." },
        { id: 4, color: '#c6b8ab',	name: 'цвет5', img: 'Wall5.png', hint: "«Жасмин» Цвет молодости и легкости. Хорошо подойдет для комнаты молодой девушки или детской, лучше всего сочетается с полами теплых оттенков." },
        { id: 5, color: '#bba9a5',	name: 'цвет6', img: 'Wall6.png', hint: "«Деним» Лучший цвет 2017 года по версии Dulux. Джинсы - вечная американская классика. Прекрасно сочетается с акцентами из натурального дерева." },
		{ id: 6, color: '#886f5c',	name: 'цвет7', img: 'Wall7.png', hint: "«Графит» Можно не беспокоится о цветовом решении в мебели и декоре: подойдет любой вариант. Хорошо смотрится с полами насыщенных оттенков." },
        { id: 7, color: '#7d7a78',	name: 'цвет8', img: 'Wall8.png', hint: "«Устричный» Этот мягкий и теплый цвет создает ощущение благородного спокойствия, хорошо сочетается с темными полами." },
        { id: 8, color: '#6e4a2f',	name: 'цвет9', img: 'Wall9.png', hint: "«Фисташковый» Цвет уюта и комфорта, семьи и отдыха. Пркрасно сочетается с белой мебелью, насыщенно-цветовыми полами." },
		{ id: 9, color: '#695450',	name: 'цвет10', img: 'Wall10.png', hint: "«Дымчатый» Нейтрально-сдержанный, теплый оттенок. Хорошо подходит для оформления жилья в стиле минимализм."  },
        { id: 10, color: '#2b2424',	name: 'цвет11', img: 'Wall11.png', hint: "«Бриз» Идеально подойдет квартирам с окнами на юг: освежающий и воздушный цвет. Отлично сочетается с полами теплых цветов." },
    ]
};

/*Двери*/
var page2_model5 = {
	title: 'Двери',

	selectTabIndex: 1,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Гладкие',	size: '', sum:0, price: 8360, img: 'Door1.png', hint: 'Гладкие двери начального уровня.' },
        { id: 1, name: 'Филенчатые',  	size: '', sum:0, price: 12650, img: 'Door2.png', hint: 'Украшенные филенкой двери выглядят дороже.' },
		{ id: 2, name: 'Массив 1',  	size: '', sum:0, price: 15400, img: 'Door5.png', hint: 'Двери из массива.' },
		{ id: 3, name: 'Массив 2',  	size: '', sum:0, price: 23650, img: 'Door4.png', hint: 'Двери из массива в стиле "прованс".' },
        { id: 4, name: 'Массив 3',  	size: '', sum:0, price: 32230, img: 'Door3.png', hint: 'Двери из массива с премиум-фурнитурой.' }       
    ]
};

/*Плинтус*/
var page2_model6 = {
    row: 1,
	title: 'Плинтус',

	selectTabIndex: 1,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Пластиковый',  size: '', sum:0, price: 98, img:'Gap1.png', hint: 'Простой плинтус с кабель-каналом.' },
        { id: 1, name: 'ПВХ', size: '', sum:0, price: 280, img:'Gap2.png', hint: 'Вспененный ПВХ, не боящийся влаги.' },
        { id: 2, name: 'МДФ', size: '', sum:0, price: 630, img:'Gap3.png', hint: 'Высокий плинтус из МДФ, ламинированный.' },
        { id: 3, name: 'Комплектный', size: '', sum:0, price: 560, img:'Gap4.png', hint: 'Плинтус от производителя дверей.' }
    ],
    
    footerCheckOptions: [
        {id: 'p2m6_1', name: 'Окраска плинтуса',   price: 100, checked: false},
        {id: 'p2m6_2', name: 'Потолочный плинтус с окраской', price: 300, checked: false}
    ]
};

/*Электрофурнитура*/
var page2_model7 = {
    row: 1,
	title: 'Электрофурнитура',

	selectTabIndex: 1,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Schneider Electric',	size: '', sum:0, price: 210, img: 'Electro1.png', hint: '"Электрофурнитура от известного производителя.' },
        { id: 1, name: 'GIRA STANDARD 55',  			size: '', sum:0, price: 400, img: 'Electro2.png', hint: 'Немецкая основательность и прагматизм.' },
        { id: 2, name: 'GIRA F100 MINIMAL',  			size: '', sum:0, price: 600, img: 'Electro3.png', hint: 'Изысканная простота и минимализм.' },
        { id: 3, name: 'GIRA СlassiX ART',  			size: '', sum:0, price: 1000, img: 'Electro4.png', hint: 'Классические решения в элегантной обертке.' }
    ]
};


/*Данные третьей страницы (PAGE3)*/
/*Плитка*/
var page3_model1 = {
	title: 'Плитка',

	selectTabIndex: 2,
	isShowPrice: true,
	isShowSize: true,
	isShowName: true,
	isShowHint: true,
    
    
    tabs: [
        { id: 0, name: 'СКАНДИ',	 size: '', sum:0, price: 1663, img: 'variant0', hint: '', colors: 
            [
                { id: 0, color: '#cbcbc9',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#c1c0bf',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#d1c6b9',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},
				
        { id: 1, name: 'КВИН',  	 size: '', sum:0, price: 2780, img: 'variant1', hint: '', colors: 
            [
                { id: 0, color: '#ccc1b6',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#c3bbb4',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#c8c0b8',	img: 'plitka2.jpg', hint: "" },                                            
            ],
            selectColorInBtn: 0
        },
        { id: 2, name: 'ГРАНЬ',  	     size: '', sum:0, price: 3000, img: 'variant2', hint: '', colors: 
            [
                { id: 0, color: '#dddcda',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#4C4B49',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#B6A595',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},
        { id: 3, name: 'ИНВЕР',  	             size: '', sum:0, price: 3000, img: 'variant3', hint: '', colors: 
            [
                { id: 0, color: '#D5D5D5',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#BEBDB9',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#ABA8A1',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},		   	
     	{ id: 4, name: 'МАРЧ',  	             size: '', sum:0, price: 2600, img: 'variant4', hint: '', colors: 
            [
                { id: 0, color: '#938882',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#8D8C8A',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#AAA098',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},
		{ row: 1, id: 5, name: 'СКЕТЧ',  	 size: '', sum:0, price: 2600, img: 'variant5', hint: '', colors: 
            [
                { id: 0, color: '#C4B5AA',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#C9BBB0',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#B3B2B0',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},
		
		{ row: 1, id: 6, name: 'ШЁЛК',  	             size: '', sum:0, price: 5100, img: 'variant6', hint: '', colors: 
            [
                { id: 0, color: '#97948F',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#C0B5A3',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#BCAF9F',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},
		{ row: 1, id: 7, name: 'СТОУН',  	             size: '', sum:0, price: 3850, img: 'variant7', hint: '', colors: 
            [
                { id: 0, color: '#A89684',	img: 'plitka2.jpg', hint: "" },
                { id: 1, color: '#817A6C',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#8A8170',	img: 'plitka0.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},
		{ row: 1, id: 8, name: 'ДЮНА',  	             size: '', sum:0, price: 4900, img: 'variant8', hint: '', colors: 
            [
                { id: 0, color: '#8F8377',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#CBCAC6',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#BFB7AA',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},
		{ row: 1, id: 9, name: 'ЛОФТ',  	             size: '', sum:0, price: 3850, img: 'variant9', hint: '', colors: 
            [
                { id: 0, color: '#4D4C48',	img: 'plitka0.jpg', hint: "" },
                { id: 1, color: '#988C85',	img: 'plitka1.jpg', hint: "" },
                { id: 2, color: '#716C61',	img: 'plitka2.jpg', hint: "" },
				],
            selectColorInBtn: 0
		},

	   ]
	
};

/*Мебель в ванной*/
var page3_model2 = {
	title: 'Мебель в ванной',

	selectTabIndex: 2,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Минимал',	    size: '', sum:0, price: 6985, img: 'mebel0.png', hint: 'Мебель в стиле минимализм не будет выглядеть дешево.' },
        { id: 1, name: 'Хилтон',  	size: '', sum:0, price: 13000, img: 'mebel1.png', hint: 'Раковина на пьедестале и зеркало со светящейся гранью.' },
        { id: 2, name: 'Меллоу',  	size: '', sum:0, price: 13200, img: 'mebel2.png', hint: 'Тумба с раковиной из литого мрамора, открывающийся вверх шкаф с подсветкой.' },
        { id: 3, name: 'Модерн',  	size: '', sum:0, price: 22000, img: 'mebel3.png', hint: 'IKEA: зеркальный шкаф с подсветкой и подвесная тумба с раковиной.' },
        { id: 4, name: 'Классик',  	size: '', sum:0, price: 27500, img: 'mebel4.png', hint: 'IKEA: набор с подсветкой из двух светильников, подарит максимум уюта.' }
    ]
};

/*Смесители и душ*/
var page3_model3 = {
    row: 1,
	title: 'Смесители и душ',

	selectTabIndex: 1,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Bravat',	size: '', sum:0, price: 6600, img: 'smes1.png', hint: 'Оптимальный баланс цены и качества.(Германия)' },
		{ id: 1, name: 'Oras',	size: '', sum:0, price: 10450, img: 'smes1.png', hint: 'Удобство и долгий срок службы.(Финляндия)' },
        { id: 2, name: 'Kludi White',  	size: '', sum:0, price: 18645, img: 'smes2.png', hint: 'Сдержанный стиль, исполнение в белом.(Германия)' },
        { id: 3, name: 'Kludi Black',  	size: '', sum:0, price: 18645, img: 'smes3.png', hint: 'Сдержанный стиль, исполнение в черном.(Германия)' }
    ]
};

/*Ванна*/
var page3_model4 = {
	title: 'Ванна и опции',

	selectTabIndex: 1,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
//    checked: false,
	
    tabs: [
        { id: 0, name: 'Александра',	size: '', sum:0, price: 8800, img: '', hint: 'Удобная и практичная пластиковая ванна, в комплекте со штатным экраном. (Россия)' },
        { id: 1, name: 'Jika Tansa S',  	size: '', sum:0, price: 14300, img: '', hint: 'Толстая сталь 3,5мм. Виброизоляция. Эмаль прочнее, чем на чугуне. (Чехия)' },
        { id: 2, name: 'Roca Easy',  	size: '', sum:0, price: 22000, img: '', hint: 'Акриловая ванна с увеличенной до 75см шириной.(Испания)' },
        { id: 3, name: 'Jacob Delafon',  	size: '', sum:0, price: 34100, img: '', hint: 'Классическая чугунная ванна, качественное литье. (Франция)' }
    ],
    
    footerCheckOptions: [
        {id: 'p3m4_1', name: 'Экран из плитки', price: 10000, checked: false},
		{id: 'p3m4_2', name: 'Подсветка', price: 50000, checked: false},
		{id: 'p3m4_3', name: 'Шторка', price: 15000, checked: false},
		{id: 'p3m4_4', name: 'Аксессуары', price: 20000, checked: false},
		{id: 'p3m4_5', name: 'Стиральная машина', price: 25000, checked: false},
		{id: 'p3m4_6', name: 'Шкаф', price: 5000, checked: false},
    ]
};

/*Унитаз*/
var page3_model5 = {
	title: 'Унитаз',

	selectTabIndex: 2,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Sensea',	      size: '', sum:0, price: 5610, img: 'unitaz1.png', hint: 'Надежный унитаз с хорошим сливом. (Польша)' },
        { id: 1, name: 'Roca',  	  size: '', sum:0, price: 14630, img: 'unitaz2.png', hint: 'Современный дизайн. (Испания)' },
        { id: 2, name: 'Vitra',  	      size: '', sum:0, price: 23100, img: 'unitaz3.png', hint: 'Классический стиль. (Турция)' },
        { id: 3, name: 'Grohe',  	  size: '', sum:0, price: 23100, img: 'unitaz4.png', hint: 'Инсталляция с подвесным унитазом (Германия)' }
    ]
};

/*Полотенцесушитель*/
var page3_model6 = {
	title: 'Полотенцесушитель',

	selectTabIndex: 2,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
	
    tabs: [
        { id: 0, name: 'Без установки',	    size: '', sum:0, price: 0, img: 'clear.png', hint: 'Если у вас уже есть водяной полотенцесушитель или установка не требуется.' },
        { id: 1, name: 'Domoterm',  	    size: '', sum:0, price: 7700, img: 'sushilo1.png', hint: 'Классическая "лесенка" с регулятором нагрева. (Россия)' },
        { id: 2, name: 'Сунержа',  	        size: '', sum:0, price: 24200, img: 'sushilo2.png', hint: 'Полотенцесушитель с полочкой, разные цвета. (Россия)' },
        { id: 3, name: 'Margaroli',   size: '', sum:0, price: 38500, img: 'sushilo3.png', hint: 'Абсолютный хай-тек. Может быть установлен горизонтально. (Италия)' }
    ]
};

/*Керамогранит*/
var page3_model7 = {
	row: 1,
	title: 'Керамогранит',

	selectTabIndex: 0,
	isShowPrice: true,
	isShowSize: false,
	isShowName: true,
	isShowHint: true,
    
//    kitchen_checked: false,
//    hallway_checked: false,
//    loggia_checked: false,
    
    headerCheckOptions: [
        {id: 'h_p3m7_1', name: 'Кухня',     checked: false, count: 0, endstr: 'м2'},
        {id: 'h_p3m7_2', name: 'Прихожия',  checked: false, count: 0, endstr: 'м2'},
        {id: 'h_p3m7_3', name: 'Лоджии',    checked: false, count: 0, endstr: 'м2'},
    ],
	
    tabs: [
        { id: 0, name: 'Крошка',	             size: '', sum:0, price: 1425,     img: '', btn_img: 'Keramo_1.jpg', hint: 'Практичный и недорогой.' },
        { id: 1, name: 'Песчаник',  	 size: '', sum:0, price: 2325,   img: '', btn_img: 'Keramo_2.jpg', hint: 'Отлично сочетается с ламинатами.' },
        { id: 2, name: 'Под дерево',  	         size: '', sum:0, price: 2990,   img: '', btn_img: 'Keramo_3.jpg', hint: "Плашки, имитирующие дерево." },
        { id: 3, name: 'Глянец',  	         size: '', sum:0, price: 3100,   img: '', btn_img: 'Keramo_4.jpg', hint: "Глянцевый керамогранит." }
    ]
    
    
};

/*всплывающие подсказки*/
var hints = {   
    currntItemIndex: 0,
    isShow: false,
    
    item: [
        { id: 0, url: './hint/hint0.html', name: 'КонструкторОтделки.рф'},
        { id: 1, url: './hint/hint1.html', name: 'Замена электрического щита'},
		{ id: 2, url: './hint/hint2.html', name: 'Дополнительная точка света или розетка'},
        { id: 3, url: './hint/hint3.html', name: 'Точка подключения стиральной машины'},
        { id: 4, url: './hint/hint4.html', name: 'Установка гигиенического душа'},
        { id: 5, url: './hint/hint5.html', name: 'Мини-раковина со смесителем'},
        { id: 6, url: './hint/hint6.html', name: 'Установка проточного нагревателя'},
        { id: 7, url: './hint/hint7.html', name: 'Замена лючков на скрытые'},
        { id: 8, url: './hint/hint8.html', name: 'Яркие потолочные LED-светильники в комнатах'},        
        { id: 9, url: './hint/hint9.html', name: 'Входная дверь с двумя замками'},
        { id: 10, url: './hint/hint10.html', name: 'Зашивка наружной стены ГКЛ'},
        { id: 11, url: './hint/hint11.html', name: 'Карниз и комплект гардин IKEA Ингерт'},
        { id: 12, url: './hint/formsend1.html', name: 'Заказ обратного звонка'},
        { id: 13, url: './hint/formsend2.html', name: 'Расчет на почту'},
		{ id: 14, url: './hint/hint15.html', name: 'электропакет'},
		{ id: 15, url: './hint/hint16.html', name: 'электропакет2'},
        
    ]  
}


/*Данные четвёртой страницы (PAGE4)*/
var page4_model1 = {	
    contacts: '+7 (999) 000-00-00, +7 (999) 000-00-00 ',
    contacts_for_tel: '+79990000000',
    
    rows: [
        { id: 0,  name: 'Заглубление эл. щита + слаботочный щит + роутер',    count: 1, sum:0, price: 23000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: 1},
        { id: 1,  name: 'Дополнительная точка света или розетка',               count: 1, sum:0, price: 2000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true,  hintindex: 2},
        { id: 2,  name: 'Базовый электропакет',                                 count: 1, sum:0, price: 350,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: 14},
        { id: 3,  name: 'Расширенный электропакет',                             count: 1, sum:0, price: 1200,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: 15},
        { id: 4,  name: 'Теплый пол под плитку, до 6м2',                        count: 1, sum:0, price: 15000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true, hintindex: -1},
        { id: 5,  name: 'Звукоизоляция фановой канализации',                    count: 1, sum:0, price: 4000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true, hintindex: -1},
        { id: 6,  name: 'Объединение санузла',                                  count: 1, sum:0, price: 3000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: -1},
        { id: 7,  name: 'Вытяжной вентилятор с отдельным выключателем',         count: 1, sum:0, price: 8000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true,  hintindex: -1},
        { id: 8,  name: 'Точка подключения стиральной машины',                  count: 1, sum:0, price: 5000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: 3},
        { id: 9,  name: 'Установка гигиенического душа',                        count: 1, sum:0, price: 15000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: 4},
        { id: 10, name: 'Мини-раковина со смесителем',                          count: 1, sum:0, price: 15000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: -1},
        { id: 11, name: 'Установка проточного нагревателя',                     count: 1, sum:0, price: 15000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: 6},
        { id: 12, name: 'Замена ревизионного люка на скрытый',                  count: 1, sum:0, price: 6000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true, hintindex: 7},
        { id: 13, name: 'Окраска стен лоджии фасадной краской',                 count: 1, sum:0, price: 8000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: -1},
        { id: 14, name: 'Выравнивание и окраска потолка на лоджии',             count: 1, sum:0, price: 4000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: -1},
        { id: 15, name: 'Укладка террасного настила ИКЕА Руннен на лоджиях',    count: 1, sum:0, price: 2000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: -1},
        { id: 16, name: 'Яркий потолочный LED-светильник в комнату',          count: 1, sum:0, price: 3000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true, hintindex: -1},
        { id: 17, name: 'Входная дверь VolDoor с повышенной шумоизоляцией',         count: 1, sum:0, price: 32000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: false, hintindex: -1},
        { id: 18, name: 'Зашивка наружной стены с установкой экрана',    count: 1, sum:0, price: 7000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true, hintindex: -1},
        { id: 19, name: 'Карниз и комплект гардин IKEA Ингерт',                 count: 1, sum:0, price: 7000,  sumView:0, priceEnd: ' р.', checked: false, isEditCount: true,  hintindex: -1}
        
    ]
};



/*опции для готовых решений*/
//f_bar 0-1 //опции под кнопками
//h_bar 0-2 //опции над кнопками
//clr_bar 0-13 //опция выбора цвета
var solutionsOptions = [
    {   name: 'Москва', 
        id: 0,
        item: [
            //Стены и цвет
            {pageModel: page2_model3,  clr_bar: 0},
            //Плинтус
			            {pageModel: page2_model6,  f_bar: []},
            //Ванна
            {pageModel: page3_model4,  f_bar: [0]},
            //Керамогранит
            {pageModel: page3_model7,  h_bar: [2]},
			//Покрытие пола 
            {pageModel: page2_model4, clr_bar: 2},
        ]
    },  
    {   name: 'Неаполь', 
        id: 1, 
        item: [
            //Стены и цвет
            {pageModel: page2_model3,  clr_bar: 0},
            //Плинтус
            {pageModel: page2_model6,  f_bar: []},
            //Ванна
            {pageModel: page3_model4,  f_bar: [0]},
            //Керамогранит
            {pageModel: page3_model7,  h_bar: [2]},
			//Покрытие пола 
            {pageModel: page2_model4, clr_bar: 3},
        ]
    }, 
    {   name: 'Хельсинки', 
        id: 2,         
        item: [
            //Стены и цвет 
            {pageModel: page2_model3,  clr_bar: 2},
            //Плинтус
            {pageModel: page2_model6,  f_bar: []},
            //Ванна
            {pageModel: page3_model4,  f_bar: [0,2]},
            //Керамогранит
            {pageModel: page3_model7,  h_bar: [2]},
			//Покрытие пола 
            {pageModel: page2_model4, clr_bar: 4},
        ]
    },
    {   name: 'Берлин', 
        id: 3, 
        item: [
            //Стены и цвет
            {pageModel: page2_model3,  clr_bar: 8},
            //Плинтус
            {pageModel: page2_model6,  f_bar: [0,1]},
            //Ванна
            {pageModel: page3_model4,  f_bar: [0,1,2]},
            //Керамогранит
            {pageModel: page3_model7,  h_bar: [2]},
			//Покрытие пола 
            {pageModel: page2_model4, clr_bar: 6},
        ]
    }, 
	{   name: 'Париж', 
        id: 4, 
        item: [
            //Стены и цвет
            {pageModel: page2_model3,  clr_bar: 6},
            //Плинтус
            {pageModel: page2_model6,  f_bar: [1,1]},
            //Ванна
            {pageModel: page3_model4,  f_bar: [0,2]},
            //Керамогранит
            {pageModel: page3_model7,  h_bar: [0,1,2]},
			//Покрытие пола 
            {pageModel: page2_model4, clr_bar: 9},
        ]
    },
    {   name: 'Манхэттен', 
        id: 5, 
        item: [
            //Стены и цвет
            {pageModel: page2_model3,  clr_bar: 5},
            //Плинтус
            {pageModel: page2_model6,  f_bar: [1]},
            //Ванна
            {pageModel: page3_model4,  f_bar: [0,1,2]},
            //Керамогранит
            {pageModel: page3_model7,  h_bar: [0,1,2]},
			//Покрытие пола 
            {pageModel: page2_model4, clr_bar: 0},
        ]
    },
    
];


/*Данные готовых решений*/
var solution = {	
    /*решение которое будет выбрано при начальной загрузке страницы*/
    defaultSelectSolution: 1,
    /*переменная для хранения текущего выбранного решения*/
    currentSelectSolution: -1,
    
    solutions: [
        { id: 0,   p2m2: 0, p2m3:0, p2m4:0, p2m5:0, p2m6:0, p2m7:0,   p3m1:0, p3m2:0, p3m3:0, p3m4:0, p3m5:0, p3m6:0, p3m7:0, options: solutionsOptions[0].item},  
        { id: 1,   p2m2: 0, p2m3:1, p2m4:0, p2m5:0, p2m6:1, p2m7:0,   p3m1:7, p3m2:1, p3m3:0, p3m4:0, p3m5:0, p3m6:1, p3m7:0, options: solutionsOptions[1].item},
        { id: 2,   p2m2: 0, p2m3:1, p2m4:0, p2m5:1, p2m6:1, p2m7:0,   p3m1:2, p3m2:1, p3m3:1, p3m4:1, p3m5:1, p3m6:1, p3m7:2, options: solutionsOptions[2].item},
        { id: 3,   p2m2: 1, p2m3:1, p2m4:0, p2m5:2, p2m6:1, p2m7:1,   p3m1:6, p3m2:2, p3m3:0, p3m4:2, p3m5:3, p3m6:1, p3m7:1, options: solutionsOptions[3].item},
        { id: 4,   p2m2: 1, p2m3:2, p2m4:1, p2m5:3, p2m6:2, p2m7:3,   p3m1:4, p3m2:4, p3m3:2, p3m4:3, p3m5:2, p3m6:2, p3m7:2, options: solutionsOptions[5].item},
	    { id: 5,   p2m2: 2, p2m3:2, p2m4:1, p2m5:4, p2m6:3, p2m7:2,   p3m1:3, p3m2:3, p3m3:3, p3m4:2, p3m5:3, p3m6:3, p3m7:3, options: solutionsOptions[4].item}
    ]
};

/*Шаги того как мы работаем*/
var step = {	
    steps: [
        { title: 'Мы будем рады предоставить Вам максимально возможные скидки и подарки при окончательном расчете стоимости'},
		{ id: 0,   title: 'Расчет стоимости',   img: 'step1.png', text: 'Конструктор отделки - это просто отправная точка: Вы можете изменить любой материал и добавить любые опции на свой вкус. Мы не увеличиваем стоимость в процессе производства работ.'},  
        { id: 1,   title: 'Договор',            img: 'step2.png', text: 'Мы можем заключить Договор с региональным покупателем просто путем пересылки подписанных экземпляров.'},  
        { id: 2,   title: 'Выполняем работу',   img: 'step3.png', text: 'Работы будут выполнены первоклассно и в срок людьми, которые знают и любят своё дело. Мы сами купим все материалы (включая выбранные Вами). Гарантия 3 года!'},  
        { id: 3,   title: 'Последний штрих',    img: 'step4.png', text: 'Вам остается только расставить мебель, чтобы получить уютную и индивидуальную квартиру.'}
		]
};

/*пути к картинкам слайдера*/
var slider = {
    slides: [
        {image: 'images/Slider/img01.jpg', description: 'Image 01'},
        {image: 'images/Slider/img02.jpg', description: 'Image 02'},
		{image: 'images/Slider/img03.jpg', description: 'Image 03'},
		{image: 'images/Slider/img04.jpg', description: 'Image 04'},
		{image: 'images/Slider/img05.jpg', description: 'Image 05'},
		{image: 'images/Slider/img06.jpg', description: 'Image 06'},
		{image: 'images/Slider/img07.jpg', description: 'Image 07'},
		{image: 'images/Slider/img08.jpg', description: 'Image 08'},
		{image: 'images/Slider/img09.jpg', description: 'Image 09'},
		{image: 'images/Slider/img10.jpg', description: 'Image 10'},
		{image: 'images/Slider/img11.jpg', description: 'Image 11'},
		{image: 'images/Slider/img12.jpg', description: 'Image 12'},
		{image: 'images/Slider/img13.jpg', description: 'Image 13'},
		{image: 'images/Slider/img14.jpg', description: 'Image 14'},
		{image: 'images/Slider/img15.jpg', description: 'Image 15'},
		{image: 'images/Slider/img16.jpg', description: 'Image 16'},
		{image: 'images/Slider/img17.jpg', description: 'Image 17'},
		{image: 'images/Slider/img18.jpg', description: 'Image 18'},
		{image: 'images/Slider/img19.jpg', description: 'Image 19'},
		{image: 'images/Slider/img20.jpg', description: 'Image 20'},
		{image: 'images/Slider/img21.jpg', description: 'Image 21'},
		    ]
}

/*Коэффициенты и прочие постоянные*/
var constants = {
    /*стен комнаты*/
    wall_room: 2.6,
    /*стен санузла*/
    wall_bathroom_toilet: 5.25, 
    /*стен вынной комнаты*/
    wall_bathroom: 5.86,
    /*стен туалета*/
    wall_toilet: 8.75,
    
    /*плинтус санузла*/
    plinth_room: 1.1,
    
    /*Ссылка на главный сайт*/
    url_mainsaite: '#',
    
    sumOption: [
        { id: 0,  name: "Разводка сантехники",                    count: 1, price: 5250},
        { id: 1,  name: "Прочие расходные материалы",             count: 0, price: 450},
		{ id: 2,  name: "Компл. работ по монтажу и накл. расх.",  count: 0, price: 2600},
        { id: 3,  name: "Стоимость пола санузлов",                count: 0, price: 575},
    ]
}



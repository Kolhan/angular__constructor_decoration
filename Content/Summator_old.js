var squareRooms = {
    room: [
        { id: 0,  room: "Кухня",       square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 1,  room: "Прихожая",    square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 2,  room: "Комната",     square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 3,  room: "Комната",     square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
		{ id: 4,  room: "Комната",     square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
		{ id: 5,  room: "Комната",     square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 6,  room: "Совмещ. с/у", square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 7,  room: "Совмещ. с/у", square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 8,  room: "Ванная",      square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 9,  room: "Ванная",      square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
		{ id: 10, room: "Туалет",      square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
		{ id: 11, room: "Туалет",      square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 12, room: "Кладовая",    square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 13, room: "Кладовая",    square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 14, room: "Кладовая",    square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 15, room: "Лоджия",      square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 16, room: "Лоджия",      square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0},
        { id: 17, room: "Лоджия",      square: 0, countDoor: 0, countBath: 0, countToilet: 0, countMixer: 0, countElectrosushilo: 0, countMebel: 0, countPoint: 0}
    ],
    
    counter: [
        { id: 0,  name: "Площадь квартиры без лоджии",                  val: 0},
        { id: 1,  name: "Потолок комнаты",                              val: 0},
        { id: 2,  name: "Потолок санузлы",                              val: 0},
        { id: 3,  name: "Пол комнаты",                                  val: 0},
		{ id: 4,  name: "Пол санузлы",                                  val: 0},
		{ id: 5,  name: "Пол лоджии",                                   val: 0},
        { id: 6,  name: "Стены комнаты",                                val: 0},
        { id: 7,  name: "Стены совм. с/у",                              val: 0},
        { id: 8,  name: "Стены ванны",                                  val: 0},
        { id: 9,  name: "Стены туалеты",                                val: 0},
		{ id: 10, name: "Плинтус",                                      val: 0},
        { id: 11, name: "Двери",                                        val: 0},
        { id: 12, name: "Ванна",                                        val: 0},
        { id: 13, name: "Унитаз",                                       val: 0},
        { id: 14, name: "Тумба+Зеркало или шкаф",                       val: 0},
        { id: 15, name: "Смесители(раковина+душ, считаются раздельно)", val: 0},
        { id: 16, name: "Электросушило",                                val: 0},
        { id: 17, name: "Общая площадь",                                val: 0},
        { id: 18, name: "Кол-во рабочих дней",                          val: 0},
    ],
    
    /*Итого по выбранным пунктам*/
    summaPoints: 0,
    sumPoint: [
        { id: 0,  name: "Стены",                                  price: 0, count: 0, sum: 0, pm: page2_model3},
        { id: 1,  name: "Потолок",                                price: 0, count: 0, sum: 0, pm: page2_model2},
        { id: 2,  name: "Разводка сантехники",                    price: 0, count: 0, sum: 0, pm: null},
        { id: 3,  name: "Прочие расходные материалы",             price: 0, count: 0, sum: 0, pm: null},
		{ id: 4,  name: "Компл. работ по монтажу и накл. расх.",  price: 0, count: 0, sum: 0, pm: null},
		{ id: 5,  name: "Пол",                                    price: 0, count: 0, sum: 0, pm: page2_model4},
        { id: 6,  name: "Двери",                                  price: 0, count: 0, sum: 0, pm: page2_model5},
        { id: 7,  name: "Плинтус",                                price: 0, count: 0, sum: 0, pm: page2_model6},
        { id: 8,  name: "Окраска плинтуса",                       price: 0, count: 0, sum: 0, pm: page2_model6},
        { id: 9,  name: "Электрика",                              price: 0, count: 0, sum: 0, pm: page2_model7},
		{ id: 10, name: "Плитка стены",                           price: 0, count: 0, sum: 0, pm: page3_model1},
        { id: 11, name: "Мозаика",                                price: 0, count: 0, sum: 0, pm: null},
        { id: 12, name: "Пол санузлов",                           price: 0, count: 0, sum: 0, pm: null},
        { id: 13, name: "Сантехника",                             price: 0, count: 0, sum: 0, pm: page3_model3},
        { id: 14, name: "Мебель",                                 price: 0, count: 0, sum: 0, pm: page3_model2},
        { id: 15, name: "Ванна",                                  price: 0, count: 0, sum: 0, pm: page3_model4},
        { id: 16, name: "Зашивка ванны",                          price: 0, count: 0, sum: 0, pm: page3_model4},
        { id: 17, name: "Унитаз",                                 price: 0, count: 0, sum: 0, pm: page3_model5},
        { id: 18, name: "Электросушило",                          price: 0, count: 0, sum: 0, pm: page3_model6},
        { id: 19, name: "Керамогранит в выбранных помещениях",    price: 0, count: 0, sum: 0, pm: page3_model7},
        { id: 20, name: "Потолочный плинтус",                     price: 0, count: 0, sum: 0, pm: page2_model6},
    ],
    
    /*Итого по выбранным опциям*/
    summaOptions: 0,
    sumOption: page4_model1.rows,
    
    allPagePanels: [page2_model1,page2_model2,page2_model3,page2_model4,page2_model5,page2_model6,page2_model7, page3_model1,page3_model2,page3_model3,page3_model4,page3_model5,page3_model6,page3_model7]
}

NextProjectApp.controller("SummatorController", function ($scope) {
    $scope.summator_p1m1 = page1_model1;
    $scope.summer = squareRooms;
    $scope.summator_p3m7 = page3_model7;
    $scope.currentHintIndex_sum = currentHintIndex;
    

    
    /*Заполняем массив комнат*/
    $scope.FillSquare = function (summer, p1m1) {
        var _allSquare = 0;

        //заполняем площади комнат в массив room
        for (var i = 0; i <= 17; i++) {
            var pm;
            var _i = i;
            
            if (i<= 5)  { pm = p1m1.list1; }
                else if  (i<= 11) { pm = p1m1.list2; _i = i-6; }
                else if  (i<= 14) { pm = p1m1.list3; _i = i-12; }
                else if  (i<= 17) { pm = p1m1.list4; _i = i-15; }            
            
            summer.room[i].square    = pm[_i].square;
            summer.room[i].countDoor = pm[_i].square > 0 ? pm[_i].constDoor : 0;
            
            summer.room[i].countBath            = pm[_i].square > 0 ? pm[_i].constBath :            0;
            summer.room[i].countToilet          = pm[_i].square > 0 ? pm[_i].constToilet :          0;
            summer.room[i].countMixer           = pm[_i].square > 0 ? pm[_i].constMixer :           0;
            summer.room[i].countElectrosushilo  = pm[_i].square > 0 ? pm[_i].constElectrosushilo :  0;
            summer.room[i].countMebel           = pm[_i].square > 0 ? pm[_i].constMebel :           0;
            
            //считаем количество точек разводки в сан узлах
            //(pm[_i].countPoint !== void 0) это проверка на undefine. Всё равно что => (pm[_i].countPoint !== undefine)
            if (pm[_i].countPoint !== void 0 && pm[_i].square > 0) summer.room[i].countPoint = pm[_i].countPoint        
            else summer.room[i].countPoint = 0;
            

            _allSquare = _allSquare + summer.room[i].square;

        };
        //сохраняем общую площадь
        summer.counter[17].val = roundPlus(_allSquare,1);

        //Высчитываем количество рабочих дней
       if  (summer.counter[17].val>0 && summer.counter[17].val<=34) {summer.counter[18].val=35}; 
        if  (summer.counter[17].val>34 && summer.counter[17].val<=60) {summer.counter[18].val=50};
        if  (summer.counter[17].val>60 && summer.counter[17].val<=80) {summer.counter[18].val=60};
        if  (summer.counter[17].val>80 && summer.counter[17].val<=110) {summer.counter[18].val=75};
        if  (summer.counter[17].val>110 && summer.counter[17].val<=150) {summer.counter[18].val=80};
        if  (summer.counter[17].val>150) {summer.counter[18].val=90};
        
        /*вычисляем площади и заполняем массив counter*/
        for (var g = 0; g <= 16; g++) { 
            var resultValue = 0; 
            
            //Площадь квартиры без лоджии
            if  (g == 0) { for (var j = 0; j <= 14; j++) { resultValue += summer.room[j].square }; resultValue = roundPlus(resultValue,1);  };
            //Потолок комнаты
            if  (g == 1) { 
                for (var j = 0; j <= 5; j++) { resultValue += summer.room[j].square };
                for (var j = 12; j <= 14; j++) { resultValue += summer.room[j].square };
                resultValue = roundPlus(resultValue,1); 
            };
            //Потолок санузлы
            if  (g == 2) { for (var j = 6; j <= 11; j++) { resultValue += summer.room[j].square }; resultValue = roundPlus(resultValue,1); };
            //Пол комнаты
            if  (g == 3) { resultValue = summer.counter[1].val; resultValue = Math.ceil(resultValue); };
            //Пол санузлы
            if  (g == 4) { for (var j = 6; j <= 11; j++) { resultValue += summer.room[j].square }; resultValue = roundPlus(resultValue,1);  };
            //Пол лоджии
            if  (g == 5) { for (var j = 15; j <= 17; j++) { resultValue += summer.room[j].square }; resultValue = roundPlus(resultValue,1);  };
            //Стены комнаты
            if  (g == 6) { resultValue = Math.ceil(summer.counter[1].val*constants.wall_room); resultValue = roundPlus(resultValue,1); };
            //Стены санузлы
            if  (g == 7) { for (var j = 6; j <= 7; j++) { resultValue += summer.room[j].square }; resultValue = Math.ceil(resultValue*constants.wall_bathroom_toilet) };
            //Стены ванны
            if  (g == 8) { for (var j = 8; j <= 9; j++) { resultValue += summer.room[j].square }; resultValue = Math.ceil(resultValue*constants.wall_bathroom) };
            //Стены туалеты
            if  (g == 9) { for (var j = 10; j <= 11; j++) { resultValue += summer.room[j].square }; resultValue = Math.ceil(resultValue*constants.wall_toilet) };
            //Плинтус
            if  (g == 10) { resultValue = Math.ceil(summer.counter[1].val*constants.plinth_room) };
            //Двери
            if  (g == 11) { for (var j = 0; j <= 17; j++) { resultValue += summer.room[j].countDoor } };
            //Ванна
            if  (g == 12) { for (var j = 0; j <= 17; j++) { resultValue += summer.room[j].countBath }};
            //Унитаз
            if  (g == 13) { for (var j = 0; j <= 17; j++) { resultValue += summer.room[j].countToilet }};
            //Тумба+Зеркало или шкаф
            if  (g == 14) { for (var j = 0; j <= 17; j++) { resultValue += summer.room[j].countMebel }};  
            //Смесители(раковина+душ, считаются раздельно)
            if  (g == 15) { for (var j = 0; j <= 17; j++) { resultValue += summer.room[j].countMixer }};
            //Электросушило
            if  (g == 16) { for (var j = 0; j <= 17; j++) { resultValue += summer.room[j].countElectrosushilo }};
            
            summer.counter[g].val = resultValue;
        }  
        
        summer.summaPoints = 0;
        /*заполняем и вычисляем суммы для массива sumPoint*/
        for (var g = 0; g <= summer.sumPoint.length-1; g++) {            
            var resultPrice = 0;
            var resultCount = 0;
            var resultSum = 0;
            
            function setSumTabs(indexSumPoint, sumCounter) {
                resultCount = sumCounter;
                
                for (var j = 0; j <= summer.sumPoint[indexSumPoint].pm.tabs.length-1; j++) {
                    summer.sumPoint[indexSumPoint].pm.tabs[j].sum = resultCount * summer.sumPoint[indexSumPoint].pm.tabs[j].price;
                }
                
                resultPrice = summer.sumPoint[indexSumPoint].pm.tabs[summer.sumPoint[indexSumPoint].pm.selectTabIndex].price;                 
                resultSum = roundPlus(resultPrice*resultCount,2); 
            }
            
            function fillSumPoint(count, price) {
                resultCount = 0; resultPrice = 0;
                resultCount = count;
                resultPrice = price;                 
                resultSum = CeilOfFloat(resultPrice*resultCount,1); 
            }
            
            //Стены
            if  (g == 0) { setSumTabs(g, summer.counter[6].val) };
            //Потолок
            if  (g == 1) { setSumTabs(g, summer.counter[0].val) };
            //Разводка сантехники
            if  (g == 2) { 
                var countPoint = 0;                
                for (var j = 0; j <= summer.room.length-1; j++) {countPoint += summer.room[j].countPoint};

                fillSumPoint(countPoint, constants.sumOption[0].price)
            };
            //Прочие расходные материалы
            if  (g == 3) { fillSumPoint(summer.counter[0].val, constants.sumOption[1].price)};
            //Компл. работ по монтажу и накл. расх.
            if  (g == 4) { 
                var price = 0;
                var S = summer.counter[0].val;
                
                if (S<=55) price = 2600;  
                else price = -20*S+3700
                //if (S>0) price = roundPlus(Math.pow(130*S, -0.3) * 140000,0);
                
                fillSumPoint(S, price)
            };
            //Пол
            if  (g == 5) { setSumTabs(g, summer.counter[3].val) };
            //Двери
            if  (g == 6) { setSumTabs(g, summer.counter[11].val) };
            //Плинтус
            if  (g == 7) { 
                var _count = summer.counter[10].val; 
                setSumTabs(g, _count);             
            };
            //Окраска плинтуса
            if  (g == 8) { fillSumPoint(summer.counter[10].val, summer.sumPoint[g].pm.footerCheckOptions[0].checked ? summer.sumPoint[g].pm.footerCheckOptions[0].price : 0)};
            //Электрика
            if  (g == 9) { setSumTabs(g, summer.counter[0].val)};
            //Плитка стены
            if  (g == 10) { setSumTabs(g, summer.counter[7].val+summer.counter[8].val+summer.counter[9].val+summer.counter[4].val)};
            //Мозаика
            if  (g == 11) { };
            //Пол санузлов
            if  (g == 12) { /*fillSumPoint(summer.counter[4].val, summer.counter[8].val+summer.counter[9].val)*/ };
            //Сантехника
            if  (g == 13) { setSumTabs(g, summer.counter[15].val) };
            //Мебель
            if  (g == 14) { setSumTabs(g, summer.counter[14].val) };  
            //Ванна
            if  (g == 15) { setSumTabs(g, summer.counter[12].val) };
            //Зашивка ванны
            if  (g == 16) { fillSumPoint(1, summer.sumPoint[g].pm.footerCheckOptions[0].checked ? summer.sumPoint[g].pm.footerCheckOptions[0].price : 0) };
            //Унитаз
            if  (g == 17) { setSumTabs(g, summer.counter[13].val) };
            //Электросушило
            if  (g == 18) { setSumTabs(g, summer.counter[16].val) };
            //Керамогранит в выбранных помещениях
            if  (g == 19) { 
                var _count = 0;
                for (var v = 0; v <= summer.sumPoint[g].pm.headerCheckOptions.length-1; v++) {
                    if  (summer.sumPoint[g].pm.headerCheckOptions[v].checked) { 
                        _count += summer.sumPoint[g].pm.headerCheckOptions[v].count                    
                    }
                }
                
                setSumTabs(g, _count)
            };
            //Потолочный плинтус
            if  (g == 20) { fillSumPoint(summer.counter[10].val, summer.sumPoint[g].pm.footerCheckOptions[1].checked ? summer.sumPoint[g].pm.footerCheckOptions[1].price : 0)};
            
            summer.sumPoint[g].price = resultPrice; 
            summer.sumPoint[g].count = resultCount; 
            summer.sumPoint[g].sum = resultSum; 
            
            //считаем общую сумму
            summer.summaPoints += resultSum;
        }  
        summer.summaPoints = CeilOf1000(summer.summaPoints);
        
        /*Заполняем площади для опций в p3m7*/
        $scope.summator_p3m7.headerCheckOptions[0].count = $scope.summer.room[0].square;
        $scope.summator_p3m7.headerCheckOptions[1].count = $scope.summer.room[1].square;
        $scope.summator_p3m7.headerCheckOptions[2].count = $scope.summer.counter[5].val;
        
        /*Вычисляем сумму опций*/
        summer.summaOptions = 0;
        for (var g = 0; g <= summer.sumOption.length-1; g++) {            
            var resultPrice = 0;
            var resultCount = 0;
            var resultSum = 0;
            
            resultCount = summer.sumOption[g].count;
            resultPrice = summer.sumOption[g].price;
            resultSum = resultCount * resultPrice;
            
            //В опции "укладка покрытия Ikea руннен" ее стоимость умножаем на метраж лоджий
            if(g==15){ resultCount = summer.counter[5].val; }
            
            
            summer.sumOption[g].price = resultPrice; 
            summer.sumOption[g].count = resultCount; 
            summer.sumOption[g].sum = summer.sumOption[g].checked ? resultSum : 0;  
            summer.sumOption[g].sumView = getNumberWhithSpace(resultSum);  
            
            //считаем общую сумму
            summer.summaOptions += summer.sumOption[g].sum;
        }
        
    }
    
    /*Количество дней которое требуется для выполнения*/
    $scope.sum_GetWantDay = function () {
        result = 0;
        
        $scope.FillSquare($scope.summer, $scope.summator_p1m1);  
        result = $scope.summer.counter[18].val;  
        
        return result + ' рабочих дней';
    }
    
    /*Общая стоимость*/
    $scope.sum_AllPrice = function () {
        var sum1 = squareRooms.summaPoints;
        var sum2 = squareRooms.summaOptions;
        
        result = getNumberWhithSpace(sum1 + sum2);       
        return result + ' руб.';       
    }
    
    /*Стоимость за квадратный метр*/
    $scope.sum_PricePerMeter = function () {
        var sum1 = squareRooms.summaPoints;
        var sum2 = squareRooms.summaOptions;
        var allSum = sum1+sum2;
        
        result = getNumberWhithSpace(CeilOf100($scope.summer.counter[17].val>0 ? allSum/$scope.summer.counter[17].val : 0));
        
        return result + ' руб./м2';
    }
    
    $scope.getNumberWhithSpace = function (n) { getNumberWhithSpace(n) } 
    
    $scope.filterRoom = function(item)
    {
        // Do some tests

        if(item.square > 0)
        {
            return true; // this will be listed in the results
        }

        return false; // otherwise it won't be within the results
    }
    
    
    $scope.ShowWindow = function (is_show) {
        $scope.windowinfo.isShow = is_show;        
    }
});
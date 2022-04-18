var pagePanels = {
    p2: [page2_model1,page2_model2,page2_model3,page2_model4,page2_model5,page2_model6,page2_model7],
    p3: [page3_model1,page3_model2,page3_model3,page3_model4,page3_model5,page3_model6,page3_model7],
}

var allPagePanels = [page2_model1,page2_model2,page2_model3,page2_model4,page2_model5,page2_model6,page2_model7,page3_model1,page3_model2,page3_model3,page3_model4,page3_model5,page3_model6,page3_model7]
    

var windowinfo = {isShow: false}

function CeilOf1000(inNum) {  return Math.ceil(inNum/1000) * 1000 }
function CeilOf100(inNum) {  return Math.ceil(inNum/100) * 100 }
function CeilOfFloat(inNum, CountNumber) {
    _countNum = 1;
    for (var i = 0; i < CountNumber; i++) {
        _countNum = _countNum*10;
    }
    return Math.ceil(inNum*_countNum) / _countNum;
}
function roundPlus(x, n) { //x - число, n - количество знаков
  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;
}
function getNumberWhithSpace (n) {
        n += "";
        n = new Array(4 - n.length % 3).join("U") + n;
        return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

var currentHintIndex = 0; 

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}





NextProjectApp.controller("PageController", function ($scope) {
    /*PAGE 1 ------------------------------------------------------------------*/
    /*ПЕРЕМЕННЫЕ*/
    $scope.page1_model1 = page1_model1;
    $scope.pagePanels = pagePanels;
    $scope.windowinfo = windowinfo;
    $scope.constants = constants;
    $scope.hints = hints;
    $scope.currentHintIndex = currentHintIndex;
    
    //выключаем загрузчик
    //setTimeout(function() {
    //    $('#loader').addClass("hide");
    //}, 1200);
        
    
    /*ФУНКЦИИ*/
    $scope.sumSquare = function () {
		var sum = 0;
		var index = 0;
		for (index = 0; index < $scope.page1_model1.list1.length; ++index) {
			sum = sum + page1_model1.list1[index].square;
		}
		index = 0;
		for (index = 0; index < $scope.page1_model1.list2.length; ++index) {
			sum = sum + page1_model1.list2[index].square;
		}
		index = 0;
		for (index = 0; index < $scope.page1_model1.list3.length; ++index) {
			sum = sum + page1_model1.list3[index].square;
		}
		index = 0;
		for (index = 0; index < $scope.page1_model1.list4.length; ++index) {
			sum = sum + page1_model1.list4[index].square;
		}

        page1_model1.allSquare = sum;
		return CeilOfFloat(sum, 1);
	}
    $scope.editShow = function (item) { item.editshow = true; };
	$scope.editHide = function (item) { item.editshow = false };
    
    /*Распределение площадей по пдредварительной схеме*/
    $scope.FillSquareLite = function (item) {
        if(item !== null) $scope.page1_model1.selectLiteRoom = item.id;
        _item = $scope.page1_model1.liteRoom[$scope.page1_model1.selectLiteRoom];
        squareLiteRoom = $scope.page1_model1.squareLiteRoom;
        //console.log(squareLiteRoom);
        
        if (squareLiteRoom !== 0) {
            //Сан.узлы
            for (index = 0; index < $scope.page1_model1.list2.length; ++index) {
                $scope.page1_model1.list2[index].square = _item.wc[index];
                squareLiteRoom = squareLiteRoom-_item.wc[index];
            }


            //Лоджии
            $scope.page1_model1.list4[0].square = _item.balkon;
            $scope.page1_model1.list4[1].square = 0;
            $scope.page1_model1.list4[2].square = 0;
            squareLiteRoom = squareLiteRoom-_item.balkon;


            //Комнаты
            for (index = 0; index < $scope.page1_model1.list1.length; ++index) {
                procent = 0;
                if (_item.rooms[index]>0) procent = _item.rooms[index]/100; 

                result = roundPlus(squareLiteRoom * procent, 1);
                if(result<0) result = 0;

                $scope.page1_model1.list1[index].square = result;
            } 
            
            //$scope.reShowBtnRoom();
        } else
        {
            //Обнуление комнат
            $scope.clearSquareRoom();
            //$scope.reShowBtnRoom();
        }
        
        
        
    };
    
    $scope.onChangeLiteRoom = function () {
        alert('Xxxx');
    };
    
    //Функция для обнуления площадей комнат
    $scope.clearSquareRoom = function () {
        //Комнаты
        for (index = 0; index < $scope.page1_model1.list1.length; ++index) {
            $scope.page1_model1.list1[index].square = 0;
        } 
        
        //Сан.узлы
        for (index = 0; index < $scope.page1_model1.list2.length; ++index) {
            $scope.page1_model1.list2[index].square = 0;
        }
        
        //Кладовые
        for (index = 0; index < $scope.page1_model1.list3.length; ++index) {
            $scope.page1_model1.list3[index].square = 0;
        }
        
        //Лоджии
        for (index = 0; index < $scope.page1_model1.list4.length; ++index) {
            $scope.page1_model1.list4[index].square = 0;
        }
        
        $scope.reShowBtnRoom();
        sleep(1);
    }
    
    $scope.reShowBtnRoom = function (item) { 
        for (index = 0; index < $scope.page1_model1.list1.length; ++index) {
			square = $scope.page1_model1.list1[index].square;
            if (square>0) $scope.page1_model1.list1[index].editshow = true;
            else $scope.page1_model1.list1[index].editshow = false;
		}
		index = 0;
		for (index = 0; index < $scope.page1_model1.list2.length; ++index) {
			square = $scope.page1_model1.list2[index].square;
            if (square>0) $scope.page1_model1.list2[index].editshow = true;
            else $scope.page1_model1.list2[index].editshow = false;
		}
		index = 0;
		for (index = 0; index < $scope.page1_model1.list3.length; ++index) {
			square = $scope.page1_model1.list3[index].square;
            if (square>0) $scope.page1_model1.list3[index].editshow = true;
            else $scope.page1_model1.list3[index].editshow = false;
		}
		index = 0;
		for (index = 0; index < $scope.page1_model1.list4.length; ++index) {
			square = $scope.page1_model1.list4[index].square;
            if (square>0) $scope.page1_model1.list4[index].editshow = true;
            else $scope.page1_model1.list4[index].editshow = false;
		}
    };

	$scope.editFocus = function (item) { 
        item.editFocus = true; 
        $scope.page1_model1.currentSelectBtn = item.id;
    };
	$scope.editBlur = function (item) { 
		item.editFocus = false 
        $scope.page1_model1.currentSelectBtn = -1;
		
		if (item.square==null) { item.square=0 }	
		if (item.square==0) { item.editshow = false }
	};
    
    $scope.isCurrentSelect = function (id) { 
        result = '';
        
        if  (id == page1_model1.currentSelectBtn) {result = 'active';}
        else {
            _item = '';
            
            for (index = 0; index < page1_model1.list1.length; ++index) {
                if (page1_model1.list1[index].id==id) { _item=page1_model1.list1[index]; };
            }
            index = 0;
            for (index = 0; index < page1_model1.list2.length; ++index) {
                if (page1_model1.list2[index].id==id) { _item=page1_model1.list2[index]; };
            }
            index = 0;
            for (index = 0; index < page1_model1.list3.length; ++index) {
                if (page1_model1.list3[index].id==id) { _item=page1_model1.list3[index]; };
            }
            index = 0;
            for (index = 0; index < page1_model1.list4.length; ++index) {
                if (page1_model1.list4[index].id==id) { _item=page1_model1.list4[index]; };
            }
            
            if (_item.square>0) {result = 'active_mute';}             
        }
        
        return result;
    };

	$scope.btn_room_class = function (item) { 
		var className = "";
		
		/*if (item.editFocus == true) {className="btn_room active"} 
		else { 
			if	(item.square>0) {className="btn_room active_mute"}
			if	(item.square=0) {className="btn_room"}
		}*/
		
		return className
	};
    
    
    
    
    /*PAGE 2,3,4 ---------------------------------------------------------------*/
    /*ПЕРЕМЕННЫЕ*/
	$scope.page2_model1 = page2_model1;
	$scope.page2_model2 = page2_model2;
	$scope.page2_model3 = page2_model3;
	$scope.page2_model4 = page2_model4;
	$scope.page2_model5 = page2_model5;
	$scope.page2_model6 = page2_model6;
	$scope.page2_model7 = page2_model7;
	
    $scope.page3_model1 = page3_model1;
	$scope.page3_model2 = page3_model2;
	$scope.page3_model3 = page3_model3;
	$scope.page3_model4 = page3_model4;
	$scope.page3_model5 = page3_model5;
	$scope.page3_model6 = page3_model6;
	$scope.page3_model7 = page3_model7;
    
    $scope.page4_model1 = page4_model1;
    $scope.steps = step.steps;
    $scope.allPagePanels = allPagePanels;
    
    $scope.currentSelectSolution = solution.currentSelectSolution; 
    
    /*ФУНКЦИИ*/
	$scope.selectReadySolutions = function (indexTab) { 
		var select = solution.solutions[indexTab];
        
        $scope.page2_model1.selectTabIndex = indexTab;
        $scope.currentSelectSolution = indexTab;
	   
        
        //Установка опций 
        var curSolOptions = solutionsOptions[indexTab].item;
        
        for (var i = 0; i <= curSolOptions.length-1; i++) {
            for (var j = 0; j <= $scope.allPagePanels.length-1; j++) {
                if (curSolOptions[i].pageModel == $scope.allPagePanels[j] )
                {
                    if (curSolOptions[i].clr_bar !== void 0) $scope.allPagePanels[j].selectColorIndex = curSolOptions[i].clr_bar;
                    
                    if (curSolOptions[i].h_bar !== void 0){
                        for (var g = 0; g <= $scope.allPagePanels[j].headerCheckOptions.length-1; g++) {
                            if (curSolOptions[i].h_bar.includes(g)){
                                $scope.allPagePanels[j].headerCheckOptions[g].checked = true;
                            } else $scope.allPagePanels[j].headerCheckOptions[g].checked = false;                            
                        }
                    }
                    
                    if (curSolOptions[i].f_bar !== void 0){
                        for (var g = 0; g <= $scope.allPagePanels[j].footerCheckOptions.length-1; g++) {
                            if (curSolOptions[i].f_bar.includes(g)){
                                $scope.allPagePanels[j].footerCheckOptions[g].checked = true;
                            } else $scope.allPagePanels[j].footerCheckOptions[g].checked = false;                            
                        }
                    }                    
                    break;
                }
            }
        }
        
        //Установка табов        
        $scope.changeTab($scope.page2_model2, select.p2m2);
        $scope.changeTab($scope.page2_model3, select.p2m3);
        $scope.changeTab($scope.page2_model4, select.p2m4);
        $scope.changeTab($scope.page2_model5, select.p2m5);
        $scope.changeTab($scope.page2_model6, select.p2m6);
        $scope.changeTab($scope.page2_model7, select.p2m7);

        $scope.changeTab($scope.page3_model1, select.p3m1);
        $scope.changeTab($scope.page3_model2, select.p3m2);
        $scope.changeTab($scope.page3_model3, select.p3m3);
        $scope.changeTab($scope.page3_model4, select.p3m4);
        $scope.changeTab($scope.page3_model5, select.p3m5);
        $scope.changeTab($scope.page3_model6, select.p3m6);
        $scope.changeTab($scope.page3_model7, select.p3m7);
        
        
        //$scope.page4_model1.rows
	};
    
    $scope.lostReadySolution = function () {
        $scope.currentSelectSolution = -1
        $scope.page2_model1.selectTabIndex = -1;
    }
    
    $scope.changeTab = function (pageModel, indexTab) {
        for (var j = 0; j <= $scope.allPagePanels.length-1; j++) {
            if (pageModel == $scope.allPagePanels[j]) {
                $scope.allPagePanels[j].selectTabIndex = indexTab;
                if (pageModel == page2_model3 && indexTab == 0) $scope.allPagePanels[j].selectColorIndex = 2;
            }
        }
    }
    
    $scope.changeFunctionTab = function (pageModel, indexTab) {
        for (var j = 0; j <= $scope.allPagePanels.length-1; j++) {
            if (pageModel == $scope.allPagePanels[j]) {
                $scope.allPagePanels[j].selectFunctionTabIndex = indexTab;
            }
        }
    }
    
    /*Вычисления цены относительно выбраного пункта*/
    $scope.getPrice = function (item, page_model) {
        var curPrice = 0;
        if (page_model != page2_model1) {
            curPrice = CeilOf1000(item.sum-page_model.tabs[page_model.selectTabIndex].sum);
            var numSpace = getNumberWhithSpace(Math.abs(curPrice));
            var znak = '';

            if  (curPrice>0) znak='+ ';
            if  (curPrice<0) znak='- ';

            curPrice = znak + numSpace;
        }
        
        return curPrice;
    };
    $scope.getNumberWhithSpace = function (n) { getNumberWhithSpace(n) }
    
    /*КОД*/
    /*Установка значения по умолчанию*/
    $scope.selectReadySolutions(solution.defaultSelectSolution);
    
    
    
    
    $scope.slides = slider.slides;

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

    $scope.inputBtn_plus = function (item) { item.count ++; }
    $scope.inputBtn_minus = function (item) { if (item.count>1) item.count --; }  
    
    $scope.CloseWindow = function () {
        //$scope.page2_model1.curHintIndex = 1;     
        $scope.windowinfo.isShow = false;
        $("#windowWait").addClass("hide");
    }
    
    $scope.hideFunctionBtn = function (panel,item) {
        if  (panel==page2_model4 && item.price_max < panel.tabs[panel.selectTabIndex].price)
        {
            result = true;
            isFound = false;
            minIndex = 0;
            
            for (var i = 0; i < panel.function_tabs.length; i++) {
                var ftab = panel.function_tabs[i];
                
                if (ftab.price_max > panel.tabs[panel.selectTabIndex].price && isFound == false) {
                    minIndex = i;
                    break;
                }

            }
            if  (minIndex>panel.selectFunctionTabIndex) $scope.page2_model4.selectFunctionTabIndex = minIndex;
        } else result = false;

        return result;
    }

    
});
//Больше чем
NextProjectApp.filter('moreThan', function () {
  return function (items, _number) {
    var filtered = []; 
    
    if (item != void 0)  
    for (var i = 0; i < items.length; i++) {
      var item = items[i];   
    
      //if (item.index == void 0) filtered.push(item); else
      if (i >= _number) filtered.push(item);
    }
    return filtered;
  };
});
//Реализация хитрых фильтров ng-repeat
NextProjectApp.filter('rowIs0', function () {
  return function (items) {
    var filtered = []; 
    
    if (items == void 0) return filtered;
      
    for (var i = 0; i < items.length; i++) {
      var item = items[i];   
    
      if (item.row == void 0) filtered.push(item); else
      if (item.row == 0) filtered.push(item);
    }
    return filtered;
  };
});


/*
NextProjectApp.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });*/
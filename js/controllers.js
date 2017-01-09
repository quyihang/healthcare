angular.module('starter.controllers', ['onezone-datepicker', 'ion-affix'])
.directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'AE',
        link: function ($scope) {
            $rootScope.hideTabs = 'tabs-item-hide';
            $scope.$on('$destroy', function () {
                $rootScope.hideTabs = '';
            })
        }
    }

})
.controller('DashCtrl', function ($scope, News, Userinfo, Foods, $ionicModal) {
    $scope.user = Userinfo.get(0);
    $scope.dishs = Foods.all();
    $scope.materials = ["豆腐", "鸡蛋", "牛奶", "蔬菜"]

    //-----------------------modal------------------------//
    $ionicModal.fromTemplateUrl('templates/tab-dash-search.html', {
        scope: $scope,
        animation: 'slide-in-down'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
      
        $scope.modal.show();
        document.getElementById("searchbar").focus();
        document.getElementById("searchbar").value = '';
    };
    $scope.data=[{search:''}]
    $scope.closeModal = function () {
     
        $scope.modal.hide();
      
    };
    $scope.message = function () {
        var msg;
        
        if(document.getElementById("searchbar").value.length !==0)
        {
            msg="未查找到相应数据"
        }
        return msg
        
    }

})

.controller('TodayCtrl', function ($scope, Nutritions) {
    //--------------inject userinfo-----//
    $scope.nutritions = Nutritions.all()
    for (var i = 0; i < $scope.nutritions.length; i++) {
        if ($scope.nutritions[i].status === 0) {
            $scope.nutritions[i].state = "正常";
        }
        else if ($scope.nutritions[i].status === 1) {
            $scope.nutritions[i].state = "偏高";
        }
        else { $scope.nutritions[i].state = "偏低" }
    }
})
.controller('BookCtrl', function ($scope, $ionicModal, $state, Chats, Wins, Foods, Items, $stateParams, Canteens) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    console.log('BookCtrl');

    $scope.foods = Foods.all();
    $scope.wins = Wins.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
    /*--------gettotalcount-----*/
    $scope.gettotalcount = function () {
        var i = 0, totalcount = 0;
        for (i; i < Items.length; i = i + 1) {
            if (Items[i].count) {
                totalcount = totalcount + Items[i].count;
            }
        }
        return totalcount;
    };

    $scope.meals = [
            { id: 0, text: "早餐", selected: false, info: "（后台数据）显示饮食状态" },
            { id: 1, text: "午餐", selected: false, info: "（后台数据）显示饮食状态" },
            { id: 2, text: "晚餐", selected: false, info: "" },
            { id: 3, text: "加餐", selected: false, info: "" }
    ];
    $scope.hasinfo = function (index) {
        if ($scope.meals[index].info == "") {
            return false
        }
        else {
            return true
        }
    }
    /*--------MealSelected-----*/
   
    $scope.isOpen = function () {
       
        return $scope.Open

    }
    $scope.Openmeal=function()
    {if ($scope.Open ) {
        $scope.Open = null;
    } else { $scope.Open = true }
    }
    $scope.selcanteen = function (index) {
        for (var i = 0; i < 4; i++) {
            if (index == i) {
                $scope.meals[i].selected = true;
                $scope.selectmeal = $scope.meals[i].text;
                $scope.mealSelected = i;
                $scope.Open = null;
            }
            else {
                $scope.meals[i].selected = false;

            };


        }
    }

    for (var i = 0; i < 4; i++) {
        if ($stateParams.mealId == null) {
        }
        else {
            if (i == $stateParams.mealId) {$scope.meals[i].selected= true
                $scope.selectmeal = $scope.meals[i].text;
                $scope.mealSelected = i;
              
            };
        }
    };
    $scope.ismealSelected = function (index) {
        return $scope.mealSelected === index;
    }


    /*--------CanteenSelected-----*/
    $scope.Selected = 0;
   
    $scope.canteens = Canteens.all();
    
    $scope.floors = $scope.canteens[0].items;
   
    $scope.getcanteen = function (index) {
        $scope.floors = $scope.canteens[index].items;
        if ($scope.isSelected(index) ){
            $scope.Selected = null;
        } else {
            $scope.Selected = index;
        }};
    $scope.isSelected = function (index) {
        return $scope.Selected === index;
    }
  
    /*--------test-----*/

})
.controller('BookDetailCtrl', function ($scope, $stateParams, $state, $ionicModal, Chats, Foods, Wins, Items, Canteens, $ionicScrollDelegate, $location, $anchorScroll) {
    $scope.chat = Canteens.get($stateParams.bookId);
    $scope.foods = Foods.all();
    $scope.wins = Wins.all();
    $scope.items = Items.all();
    $scope.sel = Foods.get(0)
    $scope.getfood = function (sel) {

        $scope.sel = Foods.get(sel);


    };
    //------------showselect-----------//
    $scope.Showsel = function (item) {
        if ($scope.isShowsel(item)) {
            $scope.setShowsel = item;
        } else {
            $scope.setShowsel = null;
        }
    };
    $scope.isShowsel = function (item) {
        return $scope.setShowsel === null;
    };


    //--------Itemchange-----//
    $scope.Itemchange = function (index, num) {
        if ($scope.items[index].count == 1 && num == -1) {
            $scope.items.splice($scope.items[index], 1);
        }
        else {
            $scope.items[index].count += num

        }
    };

    //--------ItemDelete-----//

    $scope.ItemDelete = function (item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
        $scope.setShowsel = item;
    };
    $scope.count = function (item) {
        var i = 0, dishcount = 0;
        for (i; i < $scope.items.length; i = i + 1) {
            if ($scope.items[i].count) {
                dishcount = $scope.items[i].count;
            }
        }
        return dishcount;
    };


    //--------gettotalcount-----//
    $scope.gettotalcount = function () {
        var i = 0, totalcount = 0;
        for (i; i < $scope.items.length; i = i + 1) {
            if ($scope.items[i].count) {
                totalcount = totalcount + $scope.items[i].count;
            }
        }
        return totalcount;
    };
    //-------gettotalprice----//
    $scope.gettotalprice = function () {
        var i = 0, totalprice = 0;
        for (i; i < $scope.items.length; i = i + 1) {
            if ($scope.items[i].count) {
                totalprice = totalprice + $scope.items[i].count * $scope.items[i].price;
            }
        }
        return totalprice;
    };
    //-------------------modal------------//
    $ionicModal.fromTemplateUrl('templates/tab-book-choose.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (sel) {
        $scope.modal.show();
        $scope.nowdish = Foods.get(sel);
        $scope.gram = 0;
        $scope.selid=sel
        $scope.set = 0;
        $scope.nowqk = 0;
        $scope.unit = 1;
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };


    $scope.togglelist = function (items) {
        if ($scope.islistShown(items)) {
            $scope.shownlist = null;

        } else {
            $scope.shownlist = items;
        }
    };
    $scope.islistShown = function (items) {
        return $scope.shownlist === items;
    };

    $scope.adddish = function () {
        $scope.hasdish = false
        if (parseFloat($scope.set) === 0) { }
        else
        {
            for (var i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].id === $scope.nowdish.id) {
                    $scope.items[i].count = $scope.items[i].count + $scope.set;
                    $scope.hasdish = true;
               
                }
            }
            if ($scope.hasdish === false) {
                $scope.nowdish.count = $scope.set;
                $scope.items.push($scope.nowdish);
      
            }
        }
        $scope.modal.hide();
    }
    //----------------calculator----------------//
    
    $scope.setunit = function (num) {
        $scope.unit = num;
        $scope.gram = 0;
        
        $scope.set = 0;
        $scope.nowqk = 0;
        
    }
    $scope.isunit = function (num) {
        return $scope.unit === num;
    };

    $scope.calculate = function (num) {
        
          
        if ($scope.unit === 0) {
            if ($scope.gram + String(num) < 9999) {
                $scope.gram = $scope.gram + String(num);
                $scope.gram = parseFloat($scope.gram);
                if ($scope.gram > parseInt($scope.gram)) {
                    if (String($scope.gram).length - String($scope.gram).indexOf(".") > 3) {
                        $scope.gram = String($scope.gram).substr(0, String($scope.gram).indexOf(".") + 3);

                    };}
                $scope.nowqk = $scope.nowdish.proqk * $scope.gram / 100;
                $scope.set = $scope.nowdish.set * $scope.gram / $scope.nowdish.gram;
            }
        }
        else if ($scope.unit === 1) {
            if ($scope.nowdish.gram * ($scope.set + String(num)) / $scope.nowdish.set < 9999) {
                $scope.set = $scope.set + String(num);
                $scope.set = parseFloat($scope.set);
                if ($scope.set > parseInt($scope.set)) {
                    if (String($scope.set).length - String($scope.set).indexOf(".") > 2) {
                        $scope.set = String($scope.set).substr(0, String($scope.set).indexOf(".") + 2);
                    }
                };
                $scope.gram = $scope.nowdish.gram * $scope.set / $scope.nowdish.set;
                $scope.nowqk = $scope.nowdish.proqk * $scope.gram / 100;
                     
            }
           
        }
        if ($scope.gram > parseInt($scope.gram)) {
            if (String($scope.gram).length - String($scope.gram).indexOf(".") > 3) {
                $scope.gram = String($scope.gram).substr(0, String($scope.gram).indexOf(".") + 3);

            };
        }
        if ($scope.set > parseInt($scope.set)) {
            if (String($scope.set).length - String($scope.set).indexOf(".") > 2) {
                $scope.set = String($scope.set).substr(0, String($scope.set).indexOf(".") + 2);
            }
        };
               
        if ($scope.nowqk > parseInt($scope.nowpk)) {
            if (String($scope.nowqk).length - String($scope.nowqk).indexOf(".") > 2) {
                $scope.nowqk = String($scope.nowqk).substr(0, String($scope.nowqk).indexOf(".") + 2);
            }
        }
    }
   
    $scope.clear = function () {
        if ($scope.unit === 0) {
            var n = String($scope.gram).length;

            if (n != 1) {
                $scope.gram = String($scope.gram).substr(0, n - 1);
            }
            else {
                $scope.gram = 0;
            }
            $scope.nowqk = $scope.nowdish.proqk * $scope.gram / 100;
            $scope.set = $scope.nowdish.set * $scope.gram / $scope.nowdish.gram;
        }
        else if ($scope.unit === 1) {
            var n = String($scope.set).length;

            if (n != 1) {
                $scope.set = String($scope.set).substr(0, n - 1);
            }
            else {
                $scope.set = 0;
            }
            $scope.gram = $scope.nowdish.gram * $scope.set / $scope.nowdish.set;
            $scope.nowqk = $scope.nowdish.proqk * $scope.gram / 100;


        }
        if ($scope.gram > parseInt($scope.gram)) {
            if (String($scope.gram).length - String($scope.gram).indexOf(".") > 3) {
                $scope.gram = String($scope.gram).substr(0, String($scope.gram).indexOf(".") + 3);

            }
        }
        if ($scope.set > parseInt($scope.set)) {
            if (String($scope.set).length - String($scope.set).indexOf(".") > 2) {
                $scope.set = String($scope.set).substr(0, String($scope.set).indexOf(".") + 2);
            }
        }
        if ($scope.nowqk > parseInt($scope.nowpk)) {
            if (String($scope.nowqk).length - String($scope.nowqk).indexOf(".") > 2) {
                $scope.nowqk = String($scope.nowqk).substr(0, String($scope.nowqk).indexOf(".") + 2);
            }
        }
    }

    $scope.point = function () {
        if ($scope.unit === 0) {
            if ($scope.gram > parseInt($scope.gram)) { }
            else {
                $scope.gram = $scope.gram + ".";
            }
        }
        else if ($scope.unit === 1) {
            if ($scope.set > parseInt($scope.set)) { }
            else {
                $scope.set = $scope.set + ".";
            }
        }
    };
    //----------------scroll----------------//
    $scope.tag = 1;
    var current = 0;
    $scope.scrollTo = function (anchor) {
        current = 0;
        for (var i = 1; i <anchor  ; i++) {
            var elementHeight = document.getElementById(i).offsetHeight;
            current = current + elementHeight }
        if (current - 44< 0)
        { $ionicScrollDelegate.scrollTo(0, -(current)); }
        else {
            $ionicScrollDelegate.scrollTo(0, current);
           
        }
        $scope.tag = anchor;
        console.log(current - 44);
    };
    $scope.tagtop = [0];
   
   

    $scope.getScrollPosition = function () {
        for (var i = 1; i < 6 ; i++) {
            $scope.tagtop[i] = document.getElementById(i).getBoundingClientRect().top;
            if ($scope.tagtop[i] > 44) {
                $scope.tag = i - 1;
               
                break;
            }
            else if ($scope.tagtop[5] < 0) {
                $scope.tag = 5;
            }
        }
       
    }
   
    $scope.istag = function(num) {
        return $scope.tag === num;
       
    };

 

   
})
 .controller('BookDishCtrl', function ($scope, $stateParams, $state, $ionicModal, Chats, Foods, Wins, Items) {
     $scope.dish = Foods.get($stateParams.dishID);
   
   
    

 })
.controller('BookEvaluationCtrl', function ($scope, $stateParams, $state, $ionicModal, Chats, Foods, Wins, Items) {
    var currentDate = new Date();
    
    $scope.today = currentDate.getFullYear() + "." + currentDate.getMonth() + "." + currentDate.getDate()




})
 .controller('LoginCtrl', function ($scope, $state, $http, $rootScope) {
     $scope.signIn = function (u) {
         console.log(u.username);
         $http({
             url: $rootScope.host + 'healthcare/login.php',
             method: 'POST',
             data: u
         }).success(function (data, status) {
             //响应成功
             if (status == 200) {
                 localStorage.token = data.token_string;
                 $state.go('tab.me', {});
             } else {
                 $scope.error_message = '用户名密码不正确';
             }
         }).error(function (data, status) {
             //处理响应失败
         });

     };
     $scope.tosignup = function () {
         $state.go('tab.signup', {});
     };
     $scope.tologin = function () {
         $state.go('tab.login', {});
     };
     $scope.user=[]


     //------------Validation

    
     $scope.same = function () {
         if ($scope.user.password !== $scope.user.repassword) {
             $scope.error = true;
         } else {
             $scope.error = false;
         
         }
     }
     //--------------clear
     $scope.clearname = function () {
         $scope.user.username = "";
     }
     $scope.clearpas = function () {
        
         console.log($scope.user.password);
         $scope.user.password = "";
     }
     $scope.clearrepas = function () {
         $scope.user.repassword = "";
     }

 })
.controller('SportCtrl', function ($scope, Userinfo, Sports, Sportitems,UserSportitems, $ionicSlideBoxDelegate, $ionicModal) {
    //------------------Sport------------------------//
    $scope.token = localStorage.token;





    $scope.user = Userinfo.get(0);
    $scope.sports = Sports.get(0);
    
 
    $scope.sportitems = Sportitems.all();
      
    $scope.usersportitems = UserSportitems.all();
    //------------------add  Search------------------------//
       
      

    //------------------Slidebbox------------------------//
    $scope.activeTab = 0;
    $scope.onSlideChanged = function (slideIndex) {
        $scope.activeTab = slideIndex;
    };
    $scope.slideTo = function (slideIndex) {
        // delay prevents icons from displaying too early
        $scope.activeTab = slideIndex;
          
        $ionicSlideBoxDelegate.slide(slideIndex);
           
    }
    //----------------------Modal---------------//
    $ionicModal.fromTemplateUrl('templates/tab-sport-additem.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function (sel) {
        $scope.modal.show();
        $scope.nowitem = Sportitems.get(sel);
       
        $scope.min = 0;
        $scope.selid=sel;
        $scope.nowqk = 0;
       
    };
    $scope.data = [{ search: '' }]
    $scope.closeModal = function () {

        $scope.modal.hide();

    };
    //----------------Sportcalculator----------------//
    $scope.calculate = function (num) {
        if ($scope.min + String(num) < 999) {
            $scope.min = $scope.min  + String(num);
            $scope.min = parseFloat($scope.min );
            if ($scope.min  > parseInt($scope.min )) {
                if (String($scope.min ).length - String($scope.min ).indexOf(".") > 2) {
                    $scope.min  = String($scope.min ).substr(0, String($scope.min ).indexOf(".") + 2);

                };}
            $scope.nowqk = $scope.nowitem.proqk * $scope.min / 60;
            if ($scope.nowqk > parseInt(String($scope.nowqk))) {
                if (String($scope.nowqk).length - String($scope.nowqk).indexOf(".") > 2) {
                    $scope.nowqk = String($scope.nowqk).substr(0, String($scope.nowqk).indexOf(".") + 2);
                }
            };
         
        };
    }
        
    $scope.clear = function () {

        var n = String($scope.min).length;

        if (n != 1) {
            $scope.min = String($scope.min).substr(0, n - 1);
        }
        else {
            $scope.min = 0;
        }
        $scope.nowqk = $scope.nowitem.proqk * $scope.min / 60;
        if ($scope.nowqk > parseInt(String($scope.nowqk))) {
            if (String($scope.nowqk).length - String($scope.nowqk).indexOf(".") > 2) {
                $scope.nowqk = String($scope.nowqk).substr(0, String($scope.nowqk).indexOf(".") + 2);
            }
        };
    }
    $scope.point = function () {
      
        if ($scope.min > parseInt($scope.min)) { }
        else {
            $scope.min = $scope.min + ".";
        }
    }       
              
               
               
})

.controller('MeCtrl', function ($scope, Userinfo) {
    $scope.settings = {
        enableFriends: true
    };

    $scope.user = Userinfo.get(0);
    //-------打卡
    $scope.dakatext = "打卡";
    $scope.daka = function (index) {
        if ($scope.Checked === index) {
            $scope.user.day += 1;
            $scope.Checked = null
            $scope.dakatext = "已打卡";
        }
        else {
            $scope.Checked = index
        }
    };
   
    $scope.isChecked = function (index) {
        return $scope.Checked === null;
    }
    //-----------SelectState

    
    $scope.data = Userinfo.get(0);//--find id
    
    $scope.stationsels = [
    {
        id: 0,
        name:"减肥中"
    },{
        id: 1,
        name: "健身练肌肉中"
    },{
        id: 2,
        name: "平常状态"
    }]
  
    var currentDate = new Date();
    var thisYear = currentDate.getFullYear();
    var thisMonth = currentDate.getMonth() + 1;
    var thisDay = currentDate.getDate();
    $scope.getSta = function () {
       
        $scope.user.stadate = thisYear + "." + thisMonth + "." + thisDay;
    }
  
    //----------------myinfo
    var date = new Date($scope.data.birth);
    var bYear = date.getFullYear();
    var bMonth = date.getMonth();
    var bDay = date.getDate();
    
    var age = "输入生日有误"
    if (thisYear - bYear > 0)
    {
        if (thisMonth - bMonth < 0) {
            age = thisYear - bYear - 1;
        }
        else {
            if (thisDay - bDay >= 0) {
                age = thisYear - bYear;
            }
            else { age = thisYear - bYear - 1; }
        }
    };
    $scope.age = age
})
.controller('AboutCtrl', function ($scope, $ionicActionSheet, $timeout, $ionicNavBarDelegate, $ionicHistory, $state, Userinfo, University) {
    //--------photo
    $scope.actshow = function () {// Show the action sheet,
        var hideSheet = $ionicActionSheet.show({

            buttons: [
				{ text: "拍照" },
				{ text: "从手机相册选择" }
            ],
            buttonClicked: function (index) {
                return true;
            },
            cancelText: "取消",
            cancel: function () {
                // add cancel code..
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function () {
            //	hideSheet();
        }, 2000);

    };
    //--------name
  
    //--------uni
    $scope.unis = University.all()

    $scope.seluni = Userinfo.get(0)
    $scope.user = Userinfo.get(0)
    //---------------gender
    $scope.gender = [
  { text: "男", value: "男" },
  { text: "女", value: "女" }
    ];
    $scope.data = Userinfo.get(0);//链接用户数据

    //-------------date
   
    //var currentDate = new Date();
   // var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 23);
    var date =new Date( $scope.data.birth);
    $scope.myFunction = function (date) {
        $ionicHistory.goBack()
        $scope.data.birth = date;
    };
    $scope.onezoneDatepicker = {
        date: date,
        mondayFirst: false,

        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        daysOfTheWeek: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        startDate: new Date(1950, 1, 1),
        endDate: new Date(2050, 12, 31),
        disablePastDays: false,
        disableSwipe: true,
        disableWeekend: false,
        disableDates:false,
        showDatepicker: true,
        showTodayButton: true,
        calendarMode: false,
        hideCancelButton:true,
        hideSetButton: false,
        callback: $scope.myFunction
    };
    
})

.controller('AboutnameCtrl', function ($scope, Chats) {
    $scope.settings = {
        enableFriends: true
    };
    $scope.chats = Chats.all();
})


.controller('AimCtrl', function ($scope, Userinfo) {
    $scope.items = ["养心", "祛寒", "补肾", "润肺", "减肥", "滋阴", "补血",
        "抗衰老", "降血压", "祛痘", "丰胸", "防癌", "增肌", "养胃", "明目",
        "防辐射降血脂", "健脑益智", "排毒", "壮阳", "乌发", "调经", "助睡眠",
        "健脾胃","便秘痔疮","提高免疫力","清热去火","美白","降血糖","改善肠道菌群"]
    $scope.shortitems = ["口腔溃疡", "感冒", "润肠通便"]
    $scope.activeaim = Userinfo.get(0).aims
    $scope.setaim = function (id, item) {
        if ($scope.activeaim.indexOf(item) != -1) {
            //if exist remove it.
            $scope.activeaim.splice($scope.activeaim.indexOf(item), 1);
        } else {
            //if don't add it.
            if ($scope.activeaim.length < 3) {
                $scope.activeaim.push(item);
            } }
         
    }
    $scope.setshortaim = function (id, item) {
        if ($scope.activeaim.indexOf(item) != -1) {
            //if exist remove it.
            $scope.activeaim.splice($scope.activeaim.indexOf(item), 1);
        } else {
            //if don't add it.
            if ($scope.activeaim.length < 3) {
                $scope.activeaim.push(item);
            }
        }
         
    }
    $scope.deleteaim = function (item) {
        $scope.activeaim.splice($scope.activeaim.indexOf(item), 1);
    }
})


    

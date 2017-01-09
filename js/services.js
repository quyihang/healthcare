angular.module('starter.services', [])
    .factory('News', function () {
        // Might use a resource here that returns a JSON array
        var news = [{

        }]
        //for (var i = 0; i < 4; i++) {
        // for (var j = 0; j < 3; j++) {
        // items[i].lists.push(i + '-' + j);
        // }
        // }
        return {
            all: function () {
                return news;
            }
        };

    })
    .factory('Sports', function () {
        // Might use a resource here that returns a JSON array
        var sports = [{
            id: 0,
            userid: 0,
            date: 2016 - 02 - 16,
            items: [
                {
                    name: "跑步",
                    time: 20,
                    costqk: 200

                }, {
                    name: "游泳",
                    time: 20,
                    costqk: 800
                }
            ]
        }];
        // Some fake testing data

        return {
            all: function () {
                return sports;
            },
            remove: function (sport) {
                chats.splice(chats.indexOf(sport), 1);
            },
            get: function (sportId) {
                for (var i = 0; i < sports.length; i++) {
                    if (sports[i].id === parseInt(sportId)) {
                        return sports[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('Sportitems', function () {
        // Might use a resource here that returns a JSON array
        var sportitems = [{
            id:0,
            name: "走路（快）",
            proqk: 279,
            icon: "ion-android-walk"

        }, {
            id: 1,
            name: "走路（慢）",
            proqk: 91,
            icon: "ion-android-walk"

        }, {
            id: 2,
            name: "骑车",
            proqk: 800,
            icon: "ion-android-bicycle"
        }];
        // Some fake testing data

        return {
            all: function () {
                return sportitems;
            },
            remove: function (sportitem) {
                chats.splice(chats.indexOf(sportitem), 1);
            },
            get: function (sportitemId) {
                for (var i = 0; i < sportitems.length; i++) {
                    if (sportitems[i].id === parseInt(sportitemId)) {
                        return sportitems[i];
                    }
                }
                return null;
            }
        };

    })
     .factory('UserSportitems', function () {
         // Might use a resource here that returns a JSON array
         var sportitems = [{
             id: 0,
             name: "走路（快）",
             proqk: 279,
             icon: "ion-android-walk"

         }, {
             id: 1,
             name: "走路（慢）",
             proqk: 91,
             icon: "ion-android-walk"

         }, {
             id: 2,
             name: "骑车",
             proqk: 800,
             icon: "ion-android-bicycle"
         }];
         // Some fake testing data

         return {
             all: function () {
                 return sportitems;
             },
             remove: function (sportitem) {
                 chats.splice(chats.indexOf(sportitem), 1);
             },
             get: function (sportitemId) {
                 for (var i = 0; i < sportitems.length; i++) {
                     if (sportitems[i].id === parseInt(sportitemId)) {
                         return sportitems[i];
                     }
                 }
                 return null;
             }
         };

     })
    .factory('Items', function () {
        // Might use a resource here that returns a JSON array
        var items = [];

        //for (var i = 0; i < 4; i++) {
        // for (var j = 0; j < 3; j++) {
        // items[i].lists.push(i + '-' + j);
        // }
        // }
        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            indexOf: function (item) {
                return items.indexOf(item);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array
        var chats = [{
            id: 0,
            name: '学苑食堂'
        },
        {
            id: 1,
            name: '西苑食堂'
        },
        {
            id: 2,
            name: '西北食堂'
        },
        {
            id: 3,
            name: '北苑食堂'
        },
        {
            id: 4,
            name: '留学生食堂'
        },
        {
            id: 5,
            name: '第四食堂'
        }];
        // Some fake testing data

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('Canteens', function () {
        // Might use a resource here that returns a JSON array
        var canteens = [{
            id: 1,
            name: '学苑',
            items: [{
                id: 11,
                name: '一楼小炒'
            }, {
                id: 12,
                name: '一楼大众'
            }, {
                id: 13,
                name: '二楼风味'
            }, {
                id: 14,
                name: '二楼自选'
            }]
        },
        {
            id: 2,
            name: '西苑',
            items: [{
                id: 21,
                name: '一楼小炒'
            }, {
                id: 22,
                name: '二楼风味'
            }, {
                id: 23,
                name: '二楼自选'
            }, {
                id: 24,
                name: '三楼大众'
            }, {
                id: 25,
                name: '三楼清真'
            }]
        },
        {
            id: 3,
            name: '西北'
        },
        {
            id: 4,
            name: '北苑'
        },
        {
            id: 5,
            name: '留食'
        },
        {
            id: 6,
            name: '南校区'
        }];
        // Some fake testing data

        return {
            all: function () {
                return canteens;
            },
            remove: function (canteen) {
                canteens.splice(canteens.indexOf(canteen), 1);
            },
            get: function (canteenId) {
                for (var i = 0; i < canteens.length; i++) {
                    if (canteens[i].id === parseInt(canteenId)) {
                        return canteens[i];
                    }
                    for (var j = 0; j < canteens[i].items.length; j++) {
                        if (canteens[i].items[j].id === parseInt(canteenId)) {
                            return canteens[i].items[j];
                        }
                    }
                }
                return null;
            }
        };

    })
    .factory('recommend', function () {
        // Might use a resource here that returns a JSON array
        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: '..img/ccccccc.jpg'
        },
        {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: '..img/ccccccc.jpg'
        },
        {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: '..img/ccccccc.jpg'
        },
        {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: '..img/ccccccc.jpg'
        },
        {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: '..img/ccccccc.jpg'
        }];

        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Nutritions', function () {
        var nutritions = [
            {
                name: "碳水化合物", status: 0
            }, {
                name: "蛋白质", status: 0
            }, {
                name: "脂肪", status: 1
            },
        ];
        return {
            all: function () {
                return nutritions;
            },
            remove: function (nutrition) {
                nutritions.splice(nutritions.indexOf(nutrition), 1);
            },
            get: function (nutritionId) {
                for (var i = 0; i < nutritions.length; i++) {
                    if (nutritions[i].id === parseInt(nutritionId)) {
                        return nutritions[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Foods', function () {
        // Might use a resource here that returns a JSON array
        var foods = [{
            id: 0,
            name: '糖醋鲤鱼',
            price: 3.5,
            lastText: 'You on your way?',
            face: 'img/ccccccc.jpg',
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 1,
            name: '糖醋排骨',
            price: 3.5,
            lastText: 'Hey, it\'s me',
            face: 'img/ccccccc.jpg',
            list11: '133KJ',
            list12: '23%',
            list21: '133KJ',
            list22: '23%',
            list31: '133KJ',
            list32: '23%',
            list41: '133KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 2,
            name: '清蒸咸鱼',
            price: 3.5,
            lastText: 'I should buy a boat',
            face: 'img/ccccccc.jpg',
            list11: '143KJ',
            list12: '23%',
            list21: '143KJ',
            list22: '23%',
            list31: '143KJ',
            list32: '23%',
            list41: '43KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 3,
            name: '辣炒蛤蜊',
            price: 3.5,
            lastText: 'Look at my mukluks!',
            face: 'img/ccccccc.jpg',
            list11: '113KJ',
            list12: '23%',
            list21: '153KJ',
            list22: '23%',
            list31: '163KJ',
            list32: '23%',
            list41: '173KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 4,
            name: '翡翠虾环',
            price: 3.5,
            lastText: 'This is wicked good ice cream.',
            face: 'img/ccccccc.jpg',
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
            count: 1,
        },
        {
            id: 5,
            name: '鱼香肉丝',
            price: 3.5,
            lastText: 'Hey, it\'s me',
            face: 'img/ccccccc.jpg',
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        },
        {
            id: 6,
            name: '宫保鸡丁',
            price: 3.5,
            lastText: 'I should buy a boat',
            face: 'img/ccccccc.jpg',
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        },
        {
            id: 7,
            name: '回锅肉',
            price: 3.5,
            lastText: 'Look at my mukluks!',
            face: 'img/ccccccc.jpg',
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        },
        {
            id: 8,
            name: '麻婆豆腐',
            price: 3.5,
            lastText: 'This is wicked good ice cream.',
            face: 'img/ccccccc.jpg',
            list11: '123KJ',
            list12: '23%',
            list21: '123KJ',
            list22: '23%',
            list31: '123KJ',
            list32: '23%',
            list41: '123KJ',
            list42: '23%',
            tag1: '川菜',
            tag2: '助眠',
            tag3: '生肌',
            gram: 150,
            set: 1,
            proqk: 170,
        }];;
        // Some fake testing data
        return {
            all: function () {
                return foods;
            },
            remove: function (food) {
                foods.splice(chats.indexOf(food), 1);
            },
            get: function (foodId) {
                for (var i = 0; i < foods.length; i++) {
                    if (foods[i].id === parseInt(foodId)) {
                        return foods[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('SAims', function () {
        // Might use a resource here that returns a JSON array
        var items = [{
            id: 0,
            name: '粉蒸牛肉',

        },
        {
            id: 1,

        },
        {
            id: 2,

        },
        {
            id: 3,

        }];

        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('Userinfo', function () {
        // Might use a resource here that returns a JSON array
        var items = [{
            id: 0,
            day: 2,
            img: "img/ccccccc.jpg",
            idcode: "health",
            name: '好食',
            birth: "1994-02-17T16:00:00.000Z",
            gender: "男",
            uni: "同济大学",
            height: 180,
            weight: 60,
            state: "天天向上",
            station: "减肥中",
            stadate:"2015.8.11",
            aims: ["明目", "祛痘", "降血压"],
            qk: 3000,
            nowqk: 1000,
        },
        ];

        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('University', function () {
        // Might use a resource here that returns a JSON array
        var items = [

        {
            id: 0,
            name: "同济大学",
        },
        {
            id: 1,
            name: "复旦大学",
        },
        {
            id: 2,
            name: "上海交通大学",
        },
        {
            id: 3,
            name: "华东师范大学",
        },
        {
            id: 4,
            name: "上海财经大学",
        },
        {
            id: 5,
            name: "上海外国语大学",
        },
        {
            id: 6,
            name: "上海大学",
        },
        ];

        return {
            all: function () {
                return items;
            },
            remove: function (item) {
                items.splice(items.indexOf(item), 1);
            },
            get: function (itemId) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id === parseInt(itemId)) {
                        return items[i];
                    }
                }
                return null;
            }
        };

    })
    .factory('Wins', function () {
        var wins = [{
            id: 0,
            name: '窗口一'
        },
        {
            id: 1,
            name: '窗口二'
        },
        {
            id: 2,
            name: '窗口三'
        },
        {
            id: 3,
            name: '窗口四'
        },
        {
            id: 4,
            name: '窗口五'
        }];
        return {
            all: function () {
                return wins;
            },
            remove: function (win) {
                wins.splice(wins.indexOf(win), 1);
            },
            get: function (winId) {
                for (var i = 0; i < wins.length; i++) {
                    if (wins[i].id === parseInt(winId)) {
                        return wins[i];
                    }
                }
                return null;
            }
        };
    })















;
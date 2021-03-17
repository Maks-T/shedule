
function createTT() {
const oneDay = 1000*3600*24;
let fisrtDay = new Date(2021,0,11);

let todayDate = new Date();
todayDate -= oneDay;
let todayNumberWeek = Math.round((todayDate-fisrtDay)/oneDay/7)+1;
console.log("Текущий номер недели: "+todayNumberWeek);


document.getElementById("week").children[todayNumberWeek-1].setAttribute("selected", "selected");

var week = document.getElementById("week").value;
var group = document.getElementById("group").value;
var subgroup = document.getElementById("subgroup").value;


let days = [
new Date(fisrtDay.getTime() + oneDay*((+week-1)*7+0)),
new Date(fisrtDay.getTime() + oneDay*((+week-1)*7+1)),
new Date(fisrtDay.getTime() + oneDay*((+week-1)*7+2)),
new Date(fisrtDay.getTime() + oneDay*((+week-1)*7+3)),
new Date(fisrtDay.getTime() + oneDay*((+week-1)*7+4)),
];

console.log("monday " + days[0]);
console.log("tueday " + days[1]);
console.log("w " + days[2]);
console.log("th " + days[3]);
console.log("fr " + days[4]);


/*----------------------monday----------------*/
var monday_name = [
"Фармацевтическая технология",  //1
"Латинский язык и фарм. терминология",  //2
"Аналитическая  химия",  //3
"Физиология с основами анатомии",  //4
"Основы социально-гуманитарных наук",  //5
"Фармацевтическая технология",  //6
"Фармакология",  //7
"Патологическая физиология",  //8
"Патологическая физиология",  //9
"Патологическая физиология",  //10
"Основы охраны труда ",  //11
"Основы охраны труда ",  //12
"Организация и экономика фармации",  //13
"Аналитическая  химия",  //14
"Аналитическая  химия",  //15
"Фармакология"  //16
];

var monday_time = [
"9:50 - 11:30",  //1
"11:50 - 13:30",  //2
"11:50 - 13:30",  //3
"11:50 - 13:30",  //4
"11:50 - 13:30",  //5
"11:50 - 13:30",  //6
"13:40 - 15:20",  //7
"13:40 - 15:20",  //8
"13:40 - 15:20",  //9
"13:40 - 15:20",  //10
"13:40 - 15:20",  //11
"13:40 - 15:20",  //12
"15:30 - 17:10",  //13
"15:30 - 17:10",  //14
"17:30 - 19:10",  //15
"17:30 - 19:10"  //16
];
var monday_group = [
"0",  //1
"0",  //2
"0",  //3
"0",  //4
"0",  //5
"0",  //6
"0",  //7
"0",  //8
"0",  //9
"0",  //10
"0",  //11
"0",  //12
"0",  //13
"0",  //14
"0",  //15
"0"  //16
]

var monday = [
[6,7,8,10,16,17,18,19],  //1
[2],  //2
[3,4,5,11,12,13,14],  //3
[6,7,8,10],  //4
[16,17,18,19],  //5
[15,2],  //6
[2],  //7
[3,4,5],  //8
[6,7,8],  //9
[16,17,18],  //10
[10,13,14,15,19,20,21],  //11
[11,12],  //12
[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21],  //13
[15],  //14
[2],  //15
[3,4,5,11,12,13,14,15]  //16
];

monday_hall = [
127,  //1
119,  //2
119,  //3
327,  //4
119,  //5
127,  //6
119,  //7
126,  //8
127,  //9
123,  //10
123,  //11
126,  //12
134,  //13
134,  //14
118,  //15
133  //16
];


monday_table = document.getElementById("monday_table");
monday_table.innerHTML ="<caption>Понедельник ("+days[0].toString().slice(0,10)+")</caption><tr><th>Время</th><th>Предмет</th><th>Каб.</th><th>П/Л</th></tr>";

j = 0;
monday.forEach(function(item, i, arr) {
var positiveArr = arr[i].filter(function(number) {

  return number == week;
});

if (positiveArr>0) {

 if ((monday_group[i] == group)||(monday_group[i] == subgroup)||(monday_group[i] == 0)) {

isLecture = "П";
if (monday_group[i] == 0) {
isLecture = "Л";
}

j++;

var row = monday_table.insertRow(j);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = monday_time[i];
cell2.innerHTML = monday_name[i];
cell3.innerHTML = monday_hall[i];
cell4.innerHTML = isLecture;
  }
 }
});

if (j==0) {monday_table.innerHTML ="<caption>Понедельник ("+days[0].toString().slice(0,10)+")</caption><tr><th id=\"wMes\"> СЕГОДНЯ ВЫХОДНОЙ!!! </th></tr>";}
/*----------------------tuesday----------------*/
var tuesday_name = [
"Организация и экономика фармации",  //1
"Физиология с основами анатомии",  //2
"Фармацевтическая технология",  //3
"Фармакология",  //4
"Организация и экономика фармации",  //5
"Фармацевтическая технология",  //6
"Аналитическая  химия",  //7
"Аналитическая  химия",  //8
"Фармацевтическая технология",  //9
"Организация и экономика фармации",  //10
"Физическая культура и здоровье",  //11
"Фармакогнозия с элементами ботаники",  //12
"Аналитическая  химия",  //13
"Фармакология",  //14
"Фармакогнозия с элементами ботаники",  //15
"Фармакогнозия с элементами ботаники",  //16
"Фармацевтическая технология",  //17
"Аналитическая  химия",  //18
"Организация и экономика фармации"  //19
];

var tuesday_time = [
"8:00 - 9:40",  //1
"9:50 - 11:30",  //2
"8:00 - 11:30",  //3
"8:00 - 11:30",  //4
"8:00 - 11:30",  //5
"8:00 - 11:30",  //6
"8:00 - 11:30",  //7
"8:00 - 11:30",  //8
"8:00 - 11:30",  //9
"8:00 - 11:30",  //10
"11:50 - 13:30",  //11
"13:40 - 15:20",  //12
"15:30 - 17:10",  //13
"15:30 - 19:10",  //14
"15:30 - 19:10",  //15
"15:30 - 19:10",  //16
"15:30 - 19:10",  //17
"15:30 - 19:10",  //18
"15:30 - 19:10"  //19
];
var tuesday_group = [
"0",  //1
"0",  //2
"7",  //3
"7",  //4
"8",  //5
"8",  //6
"8",  //7
"9",  //8
"9",  //9
"9",  //10
"0",  //11
"0",  //12
"0",  //13
"7",  //14
"8",  //15
"8",  //16
"8",  //17
"9",  //18
"9"  //19
]

var tuesday = [
[1,2],  //1
[1,2],  //2
[3,4,5,6,7,8,9,10,15,16,17,19,20],  //3
[21],  //4
[5,6,7,8,9,10],  //5
[14],  //6
[15],  //7
[6,8,10,12,21],  //8
[13],  //9
[17,19],  //10
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21],  //11
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21],  //12
[1,2],  //13
[11,12,13,14],  //14
[3,4,11,12,13],  //15
[16,17,19,20],  //16
[21],  //17
[3,5,7,9,11,14,15,16,20],  //18
[4]  //19
];

tuesday_hall = [
117,  //1
327,  //2
127,  //3
131,  //4
134,  //5
127,  //6
118,  //7
118,  //8
127,  //9
134,  //10
"с/з",  //11
138,  //12
118,  //13
131,  //14
138,  //15
114,  //16
127,  //17
118,  //18
133 //19
];

tuesday_table = document.getElementById("tuesday_table");
tuesday_table.innerHTML ="<caption>Вторник ("+days[1].toString().slice(0,10)+")</caption><tr><th>Время</th><th>Предмет</th><th>Каб.</th><th>П/Л</th></tr>";

j = 0;
tuesday.forEach(function(item, i, arr) {
var positiveArr = arr[i].filter(function(number) {

  return number == week;

});

if (positiveArr>0) {

 if ((tuesday_group[i] == group)||(tuesday_group[i] == subgroup)||(tuesday_group[i] == 0)) {

isLecture = "П";
if (tuesday_group[i] == 0) {
isLecture = "Л";
}

j++;
var row = tuesday_table.insertRow(j);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = tuesday_time[i];
cell2.innerHTML = tuesday_name[i];
cell3.innerHTML = tuesday_hall[i];
cell4.innerHTML = isLecture;
  }
 }
});
if (j==0) {tuesday_table.innerHTML ="<caption>Вторник ("+days[1].toString().slice(0,10)+")</caption><tr><th id=\"wMes\"> СЕГОДНЯ ВЫХОДНОЙ!!! </th></tr>";}


/*----------------------webnesday----------------*/
var wednesday_name = [
"Факультатив. Основы идеологии белорусского государства",
"Факультатив. Изучаем международное гуманитарное право",
"Факультатив. Физическая культура и здоровье",
"Физическая культура и здоровье",  //1
"Организация и экономика фармации",  //2
"Физиология с основами анатомии",  //3
"Фармакология",  //4
"Фармакология",  //5
"Скорая медицинская помощь",  //6
"Физиология с основами анатомии",  //7
"Основы социально-гуманитарных наук",  //8
"Латинский язык и фарм. терминология",  //9
"Патологическая физиология",  //10
"Основы права",  //11
"Фармацевтическая технология",  //12
"Латинский язык и фарм. терминология",  //13
"Патологическая физиология",  //14
"Основы права",  //15
"Физиология с основами анатомии",  //16
"Основы социально-гуманитарных наук"  //17
];

var wednesday_time = [
"8:00 - 8:45",
"8:00 - 8:45",
"8:55 - 9:40",
"8:00 - 8:55",  //1
"9:50 - 11:30",  //2
"11:50 - 13:30",  //3
"11:50 - 13:30",  //4
"11:50 - 13:30",  //5
"13:40 - 15:20",  //6
"13:40 - 15:20",  //7
"13:40 - 15:20",  //8
"13:40 - 15:20",  //9
"13:40 - 15:20",  //10
"13:40 - 15:20",  //11
"15:30 - 17:10",  //12
"15:30 - 17:10",  //13
"15:30 - 17:10",  //14
"15:30 - 17:10",  //15
"15:30 - 17:10",  //16
"15:30 - 17:10"  //17
];

var wednesday_group = [
"0",
"0",
"0",
"0",  //1
"0",  //2
"0",  //3
"0",  //4
"0",  //5
"0",  //6
"I",  //7
"I",  //8
"II",  //9
"II",  //10
"II",  //11
"0",  //12
"I",  //13
"I",  //14
"I",  //15
"II",  //16
"II"  //17
]

var wednesday = [
[1,2,3,4,5,6,7,8,9,10],
[11,12,13,14,15,16,17,18,19,20],
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
[21],  //1
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],  //2
[1,2,3],  //3
[4,5,6,7,8,9,10,11,12,13,14,15,16,20,21],  //4
[17,18,19],  //5
[1,2],  //6
[3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19],  //7
[20,21],  //8
[3,4,5,6,7,8,9],  //9
[10,11,12,13,14,15,16,17,18],  //10
[19,20,21],  //11
[1,2],  //12
[3,4,5,6,7,8,9],  //13
[10,11,12,13,14,15,16,17,18],  //14
[19,20,21],  //15
[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],  //16
[20,21]  //17
];


var wednesday_hall = [
119,
119,
"с/з",
"с/з",  //1
122,  //2
327,  //3
133,  //4
124,  //5
118,  //6
3217,  //7
122,  //8
"общ. №1",  //9
"общ. №1",  //10
110,  //11
127,  //12
"общ. №1",  //13
"общ. №1",  //14
110,  //15
3217,  //16
122  //17
];


wednesday_table = document.getElementById("wednesday_table");
wednesday_table.innerHTML ="<caption>Среда ("+days[2].toString().slice(0,10)+")</caption><tr><th>Время</th><th>Предмет</th><th>Каб.</th><th>П/Л</th></tr>";

j = 0;
wednesday.forEach(function(item, i, arr) {
var positiveArr = arr[i].filter(function(number) {

  return number == week;

});

if (positiveArr>0) {

 if ((wednesday_group[i] == group)||(wednesday_group[i] == subgroup)||(wednesday_group[i] == 0)) {

isLecture = "П";
if (wednesday_group[i] == 0) {
isLecture = "Л";
}

j++;
var row = wednesday_table.insertRow(j);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = wednesday_time[i];
cell2.innerHTML = wednesday_name[i];
cell3.innerHTML = wednesday_hall[i];
cell4.innerHTML = isLecture;
  }
 }
});
if (j==0) {wednesday_table.innerHTML ="<caption>Среда ("+days[2].toString().slice(0,10)+")</caption><tr><th id=\"wMes\"> СЕГОДНЯ ВЫХОДНОЙ!!! </th></tr>";}
/*----------------------thursday----------------*/
var thursday_name = [
"Фармакология",  //1
"Фармакогнозия с элементами ботаники",  //2
"Организация и экономика фармации",  //3
"Фармакогнозия с элементами ботаники",  //4
"Фармакология",  //5
"Аналитическая  химия",  //6
"Фармацевтическая технология",  //7
"Организация и экономика фармации",  //8
"Фармацевтическая технология",  //9
"Аналитическая  химия",  //10
"Фармацевтическая технология",  //11
"Фармакология",  //12
"Фармакология"  //13
];

var thursday_time = [
"8:00 - 9:40",  //1
"9:50 - 11:30",  //2
"8:00 - 11:30",  //3
"8:00 - 11:30",  //4
"8:00 - 11:30",  //5
"8:00 - 11:30",  //6
"8:00 - 11:30",  //7
"11:50 - 13:30",  //8
"13:40 - 15:20",  //9
"11:50 - 15:20",  //10
"11:50 - 15:20",  //11
"11:50 - 15:20",  //12
"15:30 - 17:10"  //13
];
var thursday_group = [
"0",  //1
"0",  //2
"7",  //3
"7",  //4
"8",  //5
"8",  //6
"9",  //7
"0",  //8
"0",  //9
"7",  //10
"8",  //11
"9",  //12
"0"  //13
]

var thursday = [
[1,2],  //1
[1,2,3,4],  //2
[5,6,7,8,9,10,11,12],  //3
[13,14,15,16,17,18,19,20,21],  //4
[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],  //5
[21],  //6
[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],  //7
[1,2],  //8
[1,2],  //9
[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],  //10
[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],  //11
[3,4,5,6,7,8,9,10,13,14,15,16,17,18,19,20],  //12
[3,4]  //13
];


var thursday_hall = [
133,  //1
138,  //2
114,  //3
114,  //4
133,  //5
117,  //6
127,  //7
127,  //8
127,  //9
118,  //10
127,  //11
118,  //12
133  //13
];

thursday_table = document.getElementById("thursday_table");
thursday_table.innerHTML ="<caption>Четверг ("+days[3].toString().slice(0,10)+")</caption><tr><th>Время</th><th>Предмет</th><th>Каб.</th><th>П/Л</th></tr>";

j = 0;
thursday.forEach(function(item, i, arr) {
var positiveArr = arr[i].filter(function(number) {

  return number == week;

});

if (positiveArr>0) {

 if ((thursday_group[i] == group)||(thursday_group[i] == subgroup)||(thursday_group[i] == 0)) {

isLecture = "П";
if (thursday_group[i] == 0) {
isLecture = "Л";
}

j++;
var row = thursday_table.insertRow(j);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = thursday_time[i];
cell2.innerHTML = thursday_name[i];
cell3.innerHTML = thursday_hall[i];
cell4.innerHTML = isLecture;
  }
 }
});
if (j==0) {thursday_table.innerHTML ="<caption>Четверг ("+days[3].toString().slice(0,10)+")</caption><tr><th id=\"wMes\"> СЕГОДНЯ ВЫХОДНОЙ!!! </th></tr>";}
/*----------------------friday----------------*/
var friday_name = [
"Основы права",  //1
"Фармацевтическая технология",  //2
"Фармацевтическая технология",  //3
"Фармакология",  //4
"Скорая медицинская помощь",  //5
"Аналитическая  химия",  //6
"Фармакогнозия с элементами ботаники",  //7
"Аналитическая  химия",  //8
"Скорая медицинская помощь",  //9
"Фармацевтическая технология",  //10
"Скорая медицинская помощь",  //11
"Основы социально-гуманитарных наук",  //12
"Основы охраны труда ",  //13
"Основы социально-гуманитарных наук",  //14
"Основы права",  //15
"Основы социально-гуманитарных наук",  //16
"Основы права",  //17
"Фармакология",  //18
"Основы социально-гуманитарных наук",  //19
"Аналитическая  химия",  //20
"Скорая медицинская помощь",  //21
"Организация и экономика фармации",  //22
"Аналитическая  химия",  //23
"Аналитическая  химия",  //24
"Организация и экономика фармации",  //25
"Фармакогнозия с элементами ботаники",  //26
"Фармацевтическая технология"  //27
];

var friday_time = [
"8:00 - 9:40",  //1
"9:50 - 11:30",  //2
"8:00 - 11:30",  //3
"8:00 - 11:30",  //4
"8:00 - 11:30",  //5
"8:00 - 11:30",  //6
"8:00 - 11:30",  //7
"8:00 - 11:30",  //8
"8:00 - 11:30",  //9
"8:00 - 11:30",  //10
"11:50 - 13:30",  //11
"11:50 - 13:30",  //12
"11:50 - 13:30",  //13
"11:50 - 13:30",  //14
"11:50 - 13:30",  //15
"11:50 - 13:30",  //16
"11:50 - 13:30",  //17
"13:40 - 15:20",  //18
"13:40 - 15:20",  //19
"13:40 - 15:20",  //20
"11:50 - 15:20",  //21
"11:50 - 15:20",  //22
"11:50 - 15:20",  //23
"11:50 - 15:20",  //24
"11:50 - 15:20",  //25
"11:50 - 15:20",  //26
"11:50 - 15:20"  //27
];
var friday_group = [
"0",  //1
"0",  //2
"7",  //3
"7",  //4
"8",  //5
"8",  //6
"9",  //7
"9",  //8
"9",  //9
"9",  //10
"0",  //11
"0",  //12
"0",  //13
"I",  //14
"I",  //15
"II",  //16
"II",  //17
"0",  //18
"0",  //19
"0",  //20
"7",  //21
"8",  //22
"8",  //23
"9",  //24
"9",  //25
"9",  //26
"9"  //27
]

var friday = [
[1,2],  //1
[1,2],  //2
[3,4,10,11,12,13,14],  //3
[5,6,7,8,9,15,16,17,18,19,20],  //4
[3,4,5,6,7,8,9,10],  //5
[11,12,13,14,15,16,17,18,19,20],  //6
[3,4,5,6,7,17,18,19],  //7
[8],  //8
[9,10,11,12,13,14,15,16],  //9
[20],  //10
[1,2],  //11
[12],  //12
[13,14],  //13
[15],  //14
[16,18],  //15
[16],  //16
[15,17],  //17
[1,2,16],  //18
[13,14],  //19
[15],  //20
[3,4,5,6,7,8,9,10],  //21
[3,4],  //22
[5,6,7,8,9,10],  //23
[3,4,20],  //24
[5,6,7,8,9],  //25
[10],  //26
[19]  //27
];



var friday_hall = [
1311,  //1
127,  //2
127,  //3
131,  //4
"кор. №2",  //5
118,  //6
114,  //7
118,  //8
"кор. №2",  //9
127,  //10
127,  //11
119,  //12
119,  //13
119,  //14
110,  //15
119,  //16
110,  //17
133,  //18
119,  //19
133,  //20
"кор. №2",  //21
122,  //22
117,  //23
118,  //24
134,  //25
131,  //26
127  //27
];

friday_table = document.getElementById("friday_table");
friday_table.innerHTML ="<caption>Пятница ("+days[4].toString().slice(0,10)+")</caption><tr><th>Время</th><th>Предмет</th><th>Каб.</th><th>П/Л</th></tr>";

j = 0;
friday.forEach(function(item, i, arr) {
var positiveArr = arr[i].filter(function(number) {

  return number == week;

});

if (positiveArr>0) {

 if ((friday_group[i] == group)||(friday_group[i] == subgroup)||(friday_group[i] == 0)) {

isLecture = "П";
if (friday_group[i] == 0) {
isLecture = "Л";
}

j++;
var row = friday_table.insertRow(j);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells:
cell1.innerHTML = friday_time[i];
cell2.innerHTML = friday_name[i];
cell3.innerHTML = friday_hall[i];
cell4.innerHTML = isLecture;
  }
 }
});

if (j==0) {friday_table.innerHTML ="<caption>Пятница ("+days[4].toString().slice(0,10)+")</caption><tr><th id=\"wMes\"> СЕГОДНЯ ВЫХОДНОЙ!!! </th></tr>";}

}//end function createTT()

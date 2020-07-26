
/*
Kaushal= {
	name:"Kaushal",
	year:1999,
	job:"Student"
};
var Person= function(name,year,job){
	this.name=name;
	this.year=year;
	this.job=job;
	this.calcAge=function(){
		console.log(2021-this.year);
	}
}
Person.prototype.hello=function(){
	console.log("Hello" +" "+ this.name)};

var Kaushal=new Person("Kaushal",1999,"Student");
var karki=new Person("Karki",2000,"CE");
console.log(Kaushal);
console.log(karki);
*/
/*
var personProto ={
	calcAge:function(){
		console.log(2020-this.year)
	}
};
var John =Object.create(personProto);
John.name='John';
John.year=1998;
John.job="Student";

var Jane=Object.create(personProto,{
	name:{value:'Jane'},
	year:{value:2000},
	job:{value:'Designer'}
});

var Obj1={
	name:"Kaushal",
	age:21,
	city:"Haldwani"
};
var a =25;
function change(a,b){
	a=30;
	b.city="Dehradun";
}
change(a,Obj1);
console.log(a);
console.log(Obj1.city);
*/

var years=[1998,1999,2000,2005,2002];

function calcAge(array,fn){
	var newarray=[];
	for(var i=0;i<years.length;i++)
		{
		newarray.push(fn(array[i]));
		}
	return newarray;
}

function age(el){
	return 2020-el;
}
var ages=calcAge(years,age);
console.log(ages);
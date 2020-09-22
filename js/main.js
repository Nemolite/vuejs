let app = new Vue({
	el: '#app',
	data: {
		message1: 'hello1',
		message2: 'hello2',
		name: 'Вася',
	    surname: 'Иванов',
	},
});


let app2 = new Vue({
	el: '#app2',
	data: {
		var1: 1,
		var2: 2,
		num: 5,
	},
});

let app3 = new Vue({
	el: '#app3',
	data: {
		arr: [1, 2, 3],
	},
});

let app4 = new Vue({
	el: '#app4',
	data: {
		obj: {a: 1, b: 2, c: 3},
	},
});


let app5 = new Vue({
	el: '#app5',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
});

let app6 = new Vue({
	el: '#app6',
	data: {
		arr: [1, 2, 3, 4, 5],
	},
});

// Варианты циклов

let app7 = new Vue({
	el: '#app7',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
});

let app8 = new Vue({
	el: '#app8',
	data: {
		array: ['user1', 'user2', 'user3']
	},
});

let app9 = new Vue({
	el: '#app9',
	data: {
		array: ['user1', 'user2', 'user3']
	},
});

let app10 = new Vue({
	el: '#app10',
	data: {
		users: {user1: '300$', user2: '400$', user3: '500$'},
	},
});


let app11 = new Vue({
	el: '#app11',
	data: {
		users: {user1: '300$', user2: '400$', user3: '500$'},
	},
});


let app12 = new Vue({
	el: '#app12',
	data: {
		users: {user1: '300$', user2: '400$', user3: '500$'},
	},
});



let app13 = new Vue({
	el: '#app13',
	data: {
		arr13: 

		{
	employee1: '100$',
	employee2: '200$',
	employee3: '300$',
} //arr13
	}, //data
});


let app14 = new Vue({
	el: '#app14',
	data: {
		arr14: 

		{
	employee1: '100$',
	employee2: '200$',
	employee3: '300$',
} //arr14
	}, //data
});


let app15 = new Vue({
	el: '#app15',
	data: {
		arr15: 

		{
	employee1: '100$',
	employee2: '200$',
	employee3: '300$',
} //arr15
	}, //data
});

let app16 = new Vue({
	el: '#app16',
	data: {
		arr16: 

		{
	employee1: '100$',
	employee2: '200$',
	employee3: '300$',
} //arr16
	}, //data
});


// Многомерные массивы и циклы

let app17 = new Vue({
	el: '#app17',
	data: {
		// Элемент массива = массив
		users: [
			{name: 'user1', salary: '300$'},
			{name: 'user2', salary: '400$'},
			{name: 'user3', salary: '500$'},
		],
	},
});



let app18 = new Vue({
	el: '#app18',
	data: {
		// Элемент массива = массив
		hrefs: [
	{href: '1.html', text: 'ссылка 1'},
	{href: '2.html', text: 'ссылка 2'},
	{href: '3.html', text: 'ссылка 3'},
]
	},
});


let app19 = new Vue({
	el: '#app19',
	data: {
		
products: [
	{name: 'product1', price: 100, quantity: 5},
	{name: 'product2', price: 200, quantity: 4},
	{name: 'product3', price: 300, quantity: 3},
]


	},
});

// Директива v-for и тег template

let app20 = new Vue({
	el: '#app20',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
});

//  Решение задачи 10


let app21 = new Vue({
	el: '#app21',
	data: {
		items: ['a', 'b', 'c', 'd', 'e','a1', 'b1', 'c1', 'd1', 'e1'],
	},
});

// Работа с методами и событиями

let amper = new Vue({
	el: '#amper',
	data: {
		message: 'hello',
	},
	methods: {
		show: function() {
			console.log(111)


		}
	}
});


let amper1= new Vue({
	el: '#amper1',
	data: {
		message: 'hello',
	},
	methods: {
		show1: function() {
			console.log(this.message); // выведет 'hello'
		}
	}
});


let amper2= new Vue({
	el: '#amper2',
	
data: {
	num1: 1,
	num2: 2,
},
	methods: {
		show2: function() {
			console.log(this.num1+this.num2); // выведет 'hello'
		}
	}
});


let amper3 = new Vue({
	el: '#amper3',
	data: {
		message: 'hello',
	},
	methods: {
		show: function() {
			alert(this.message);
		}
	}
});

// Дана кнопка. 
//В data дано свойство text, 
//в котором хранится текст 'hello'. 
//Сделайте так, чтобы по нажатию 
//на кнопку алертом вывелся 
//текст из свойства text.


let possibility = new Vue({
	el: '#possibility',
	data: {
		text: 'hello',
	},
	methods: {
		show: function() {
			alert(this.text);
		}
	}
});

let possibility1 = new Vue({
	el: '#possibility1',
	data: {
		text: 'Наведение мыши',
	},
	methods: {
		show: function() {
			alert(this.text);
		}
	}
});



let possibility2 = new Vue({
	el: '#possibility2',
	data: {
		num1: 1,
		num2: 2,
		num3: 3,
    },
	methods: {
		show: function() {
			alert(this.num1+this.num2+this.num3);
		}
	}
});

// Реактивность

let pos = new Vue({
	el: '#pos',
	data: {
		message: 'привет',
	},
	methods: {
		changeMessage: function() {
			this.message = 'пока';
		}
	}
});

// Дано свойство text, 
//в котором хранится текст 
//'12345'. Выведите содержимое
// свойства text в каком-нибудь 
// абзаце. Дана также кнопка. 
// Сделайте так, чтобы по нажатию 
// на кнопку текст в нашем абзаце 
// мгновенно поменялся 
// с '12345' на 'abcde'.

let pos1 = new Vue({
	el: '#pos1',
	data: {
		text: '12345',
	},
	methods: {
		changeText: function() {
			this.text = 'abcde';
		}
	}
});

// Изменения массива на лету

let most = new Vue({
	el: '#most',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
	methods: {
	addItem: function() {
		this.items.push('пункт');
	}
},
});

// 19092020
/*Дана кнопка. Дан массив. 
Выведите элементы этого 
массива в виде списка ul. 
Сделайте так, чтобы по 
нажатию на кнопку пункты 
списка стали в обратном порядке.*/

let most2 = new Vue({
	el: '#most2',
	data: {
		items: ['a', 'c', 'b',  'd', 'e'],
		arr1: [1, 2],
        arr2: [3, 4],
        arr3: [5, 6],
        result:[],
	},
	methods: {
	addItem: function() {
		this.items.reverse();
	},
	addItem2: function() {
		this.items.sort();
	},
	addItem3: function() {
		result = [1, 2].concat([3, 4], [5, 6]);
		console.log(result);
	},
},
});


let most3 = new Vue({
	el: '#most3',
	data: {
		items: ['a', 'b', 'c', 'd', 'e'],
	},
	methods: {
	addItem: function() {
		items = [1, 2].concat([3, 4], [5, 6]);
	}
},
});


let app217 = new Vue({
	el: '#app217',
	data: {
		name: 'Коля',
		age: 20,
	},
	methods: {
		// Вспомогательный метод:
		changeName: function() {
			this.name = 'Вася';
		},
		
		// Вспомогательный метод:
		changeAge: function() {
			this.age = 30;
		},
		
		// Этот метод привязан к кнопке:
		changeUser: function() {
			this.changeName(); // изменим имя
			this.changeAge(); // изменим возраст
		},
	}
});


let app44 = new Vue({
	el: '#app44',
	methods: {
		showMessage: function(message) {
			alert(message);
		},
	}
});

let app45 = new Vue({
	el: '#app45',
	data: {
		message: 'hello',
	},
});


let app46 = new Vue({
	el: '#app46',
	data: {
		num: null, // изначально числа нет
		result2: 0,
	},
	methods: {
		calc: function() {
			this.result2 = this.num * this.num;
		}
	}
});

let app47 = new Vue({
	el: '#app47',
	data: {
		newItem: '',
		items: ['a', 'b', 'c', 'd', 'e'],
	},
	methods: {
		addItem: function() {
			this.items.push(this.newItem);
		}
	}
});


let app48 = new Vue({
	el: '#app48',
	data: {
		str: 'www',
	},
});
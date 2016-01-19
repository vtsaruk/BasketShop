
var basketModule;
		basketModule = angular.module('basketModule', []);

		basketModule.controller('baskCtrl', function() {
			this.products=[
				{ price:10, imgName:"img/sandal.PNG" },
				{ price:21, imgName:"img/sandal.PNG" },
				{ price:12, imgName:"img/sandal.PNG" },
				{ price:33.5, imgName:"img/sandal.PNG" }
			];
			this.sumPric = function (){
		        var count = 0;
		        for(var i=0; i<this.products.length; i++) {
		            count+=this.products[i].price;		          
		        }
		        return count;
		    }

		    this.delProd = function(arg) {
		    	
		    	 this.products.splice(arg, 1);
		    }
		    })
		/*--------------ПРОВЕРКА ФОРМЫ--------------------*/

	function check(form) {
		var inpName = form.Name.value;	
		if((inpName.length<=3)||(inpName.length>16))
			alert("Имя должно содержать не меньше 4 и не больше 15 символов");
		var inpTel = form.Tel.value;
		if(!/^[0-9]*$/.test(inpTel)|| inpTel.length<=9)//&&(inpTel.length<=9))||((inpTel!=/^\d*$/)&&(inpTel.length=>11))
			alert("Номер телефона состоит из 10 цифр");
		var inpEmail = form.mail.value;
		if(!/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i.test(inpEmail))
			alert('Не правильно введён e-mail');
	}
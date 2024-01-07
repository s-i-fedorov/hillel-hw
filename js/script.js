'use strict';
(function (){
    function Human(name,age){
        this.name = name;
        this.age = age;
    }
    let user = new Human('Vovan',26);
    let user2 = new Human('Serhii',36);
    let userYoung = new Human('Valera',17);
    Human.prototype.userInfo = function (){
        let fullInfo = {
            name: this.name,
            age: this.age,
        }
        return fullInfo
    }
    console.log(user.userInfo());
    console.log(user2.userInfo());
//     -----------------task 2, car
    function Car(brand,model,age,color){
        this.brand = brand;
        this.model = model;
        this.age = age;
        this.color = color;
    }
    let auto = new Car('Ford','Transit',2003,'white');
    let auto2 = new Car('Mitsubishi','Lancer',2008,'black');
    Car.prototype.setUser = function (user){
        if(user.age<18) console.log('Permission denied')
        else {
            this.user = user
        }
    }
    Car.prototype.showInfo = function (){
        console.log(
            'Owner '+ user.userInfo().name +
            this.brand+this.model+this.age
        )
    }
    auto.setUser(user)
    console.log(auto)
    auto.showInfo()

})()
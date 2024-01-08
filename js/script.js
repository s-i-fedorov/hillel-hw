'use strict';
(function (){
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    let user = new Person('Vovan',26);
    let user2 = new Person('Serhii',36);
    let userYoung = new Person('Valera',17);
    Person.prototype.userInfo = function (){
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
        if(user.age<18) {
            console.log('Permission denied');
            this.user = null;
        }
        else {
            this.user = user
        }
    }
    Car.prototype.showInfo = function (){
        console.log(
            {'Owner':this.user ,
            'Car':this}
        )
    }
    auto.setUser(user)
    auto2.setUser(userYoung)
    auto.showInfo()
    auto2.showInfo()

})()
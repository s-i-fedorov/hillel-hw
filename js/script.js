'use strict';
(function (){
    function Student(name,surname, yearBirth, marks, visiting){
        this.name = name;
        this.surname = surname;
        this.yearBirth = yearBirth;
        this.marks = marks;
        this.visiting = Array(25).fill(null)
    }

    Student.prototype.age = function () {
        let today = new Date().getFullYear();
        return today - this.yearBirth
        }
    Student.prototype.summary = function() {
        let avrMark = this.marks.reduce((acc, i) => acc + i, 0) / this.marks.length;
        let avrVisiting = this.visiting.reduce((acc, i) => acc + i, 0) / this.visiting.length;
        if(avrMark>90 && avrVisiting>0.9) {
            return 'Молодець!'
        } else if(avrMark<90 && avrVisiting<0.9) {
            return 'Редиска!'
        }
        else return 'Добре, але можна краще!'
        }
    Student.prototype.absent = function (){
        let i = this.visiting.findIndex(item=>item===null);
        if (i===-1) return;
        this.visiting[i]=0;
    }
    Student.prototype.present = function (){
        let i = this.visiting.findIndex(item=>item===null);
        if (i===-1) return;
        this.visiting[i]=1;
    }
    Student.prototype.allInfo = function (){
        const allInfo = {
            user: this.name,
            age: this.age(),
            visiting: this.visiting,
            summary: this.summary(),
        }
        console.log(allInfo)
    }

//---------create different users
    let studentVovan = new Student('Vovan','Shaitan',1997,[100,100,80,80,90,100]);
    let studentSerhii= new Student('Serhii','Fedorov', 1987,[80,100,100,100,100,90,100,80]);
    let studentVasia= new Student('Vasia','Coco', 2005,[80,10,10,100,100,90,100,80]);

    //this loops fill arrays 'visiting'

    for (let i = 0; i<3;i++){
        studentSerhii.absent()
    }
    for (let i = 0; i<23;i++){
        studentVasia.absent()
    }
    for (let i = 0; i<25;i++){
        studentSerhii.present()
        studentVovan.present()
    }

    studentSerhii.allInfo()
    studentVovan.allInfo()
    studentVasia.allInfo()

})()
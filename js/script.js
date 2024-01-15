'use strict';
(function () {
    function Student(name, surname, yearBirth, lessonsCount = 25) {
        const grades = {
            min: 0,
            max: 100
        }
        this.name = name;
        this.surname = surname;
        this.yearBirth = yearBirth;
        this.grades = new Array(lessonsCount);
        this.visiting = new Array(lessonsCount);
        this.currentLesson = 0;

        Student.prototype.age = function () {
            if(typeof this.yearBirth !== 'number') throw new Error('Birth year should be a number')
            let today = new Date().getFullYear();
            if((today-this.yearBirth)<14) throw new Error('This student is too young')
            return today - this.yearBirth
        }
        Student.prototype.summary = function () {
            let avrMark = this.grades.reduce((acc, i) => acc + i, 0) / this.grades.length;
            let avrVisiting = this.visiting.reduce((acc, i) => acc + i, 0) / this.visiting.length;
            if (avrMark > 90 && avrVisiting > 0.9) {
                return 'Молодець!'
            } else if (avrMark < 90 && avrVisiting < 0.9) {
                return 'Редиска!'
            } else return 'Добре, але можна краще!'
        }

        Student.prototype.checkVisiting = function (lessonVisited = true){
            if(this.visiting>=24) return console.log(`Lessons can't be more than 25`)
            this.visiting[this.currentLesson] = lessonVisited;
            this.currentLesson++
        }

        Student.prototype.absent = function () {
            this.checkVisiting(false)
        }
        Student.prototype.present = function () {
            this.checkVisiting()
        }

        Student.prototype.setGrade = function (grade){
            if(typeof grade !== 'number') throw new Error('Grade is not a number')
            if(grade < grade.min || grade > grade.max) throw new Error('Invalid value');
            const currentLessonIndex = this.currentLesson - 1;
            if(!this.visiting[currentLessonIndex]) throw new Error('Student has not been on the lesson')
            this.grades[currentLessonIndex] = grade;
        }

        Student.prototype.allInfo = function () {
            const allInfoObj = {
                user: this.name,
                age: this.age(),
                visiting: this.visiting,
                grades: this.grades,
                summary: this.summary(),
            }
            console.log(allInfoObj)
        }
    }

//---------create different users
    let studentVovan = new Student('Vovan','Shaitan',1997);
    let studentSerhii= new Student('Serhii','Fedorov', 1987);
    // let studentVasia= new Student('Vasia','Coco', 2015,);

    //this loops fill arrays 'visiting'
    //
    // for (let i = 0; i<3;i++){
    //     studentSerhii.absent()
    // }
    // for (let i = 0; i<23;i++){
    //     studentVasia.absent()
    // }
    // for (let i = 0; i<25;i++){
    //     studentSerhii.present()
    //     studentVovan.present()
    // }

    studentSerhii.allInfo()
    studentVovan.allInfo()
    // studentVasia.allInfo()

})()
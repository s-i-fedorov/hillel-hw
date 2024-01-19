'use strict';
(function () {

    class Student {
        constructor(name, surname, yearBirth, lessonsCount = 25) {
            // super(props);
            this.name = name;
            this.surname = surname;
            this.yearBirth = yearBirth;
            this.grades = new Array(lessonsCount);
            this.visiting = new Array(lessonsCount);
        }

    }

    function studentConstructor(){
        const grades = {
            min: 0,
            max: 100
        }
        function age() {
            if(typeof this.yearBirth !== 'number') throw new Error('Birth year should be a number')
            let today = new Date().getFullYear();
            if((today-this.yearBirth)<14) throw new Error('This student is too young')
            return today - this.yearBirth
        }
        function checkVisiting (lessonVisited, currentLesson, lessonsCount){
            if(currentLesson>=lessonsCount) return console.log(`Lessons can't be more than 25`)
            this.visiting[currentLesson] = lessonVisited;
        }
        function summary () {
            let avrMark = this.grades.reduce((acc, i) => acc + i, 0) / this.grades.length;
            let avrVisiting = this.visiting.reduce((acc, i) => acc + i, 0) / this.visiting.length;
            console.log(avrMark, avrVisiting)
            if (avrMark > 90 && avrVisiting > 0.9) {
                return  'Молодець!'
            } else if (avrMark < 90 && avrVisiting < 0.9) {
                return 'Редиска!'
            } else return 'Добре, але можна краще!'
        }
        function setGrade(grade, currentLesson){
            if(typeof grade !== 'number') throw new Error('Grade is not a number')
            if(grade < grades.min || grade > grades.max) throw new Error('Invalid value');
            const currentLessonIndex = currentLesson - 1 ;
            if(!this.visiting[currentLessonIndex]) throw new Error('Student has not been on the lesson')
            this.grades[currentLessonIndex] = grade;
        }

        return function newStudent(name, surname, yearBirth, lessonsCount = 25) {
            let currentLesson = 0;

            return {
                name,
                surname,
                yearBirth,
                grades: new Array(lessonsCount),
                visiting: new Array(lessonsCount),
                age() {
                    return age.call(this)
                },
                absent() {
                    checkVisiting.call(this,false, currentLesson,lessonsCount)
                    currentLesson++
                },
                present() {
                    checkVisiting.call(this,true, currentLesson, lessonsCount)
                    currentLesson++
                },
                setGrade(grade){
                    setGrade.call(this, grade, currentLesson)
                },
                summary(){
                    return summary.call(this)
                }
            }
        }
    }

//---------create different users
    const student = studentConstructor()
    let studentVovan = new student('Vovan','Shaitan',1997);
    let studentSerhii= new student('Serhii','Fedorov', 1987);

    //this loops fill information
    //
    for (let i = 0; i<2;i++){
        studentSerhii.absent()
    }

    for (let i = 0; i<23;i++){
        studentSerhii.present()
        studentSerhii.setGrade(90)
    }

    console.log(studentSerhii.summary());

})()
'use strict';
(function () {

    class Student {
        constructor(name, surname, yearBirth, lessonsCount=25 ) {
            this.name = name;
            this.surname = surname;
            this.yearBirth = yearBirth;
            this.grades = new Array(lessonsCount);
            this.visiting = new Array(lessonsCount);
            this.lessonsCount = lessonsCount;
            this.currentLesson = 0;
        };

            grades = {
                min: 0,
                max: 100
            }
        age() {
                    if(typeof this.yearBirth !== 'number') throw new Error('Birth year should be a number')
                    let today = new Date().getFullYear();
                    if((today-this.yearBirth)<14) throw new Error('This student is too young')
                    return today - this.yearBirth
                }
        checkVisiting (lessonVisited) {
            if (this.currentLesson >= this.lessonsCount) return console.log(`Lessons can't be more than ${this.lessonsCount}`)
            this.visiting[this.currentLesson] = lessonVisited;
        }
        absent(){
            const lessonVisited = false;
            this.checkVisiting(lessonVisited,this.currentLesson)
            this.currentLesson++
        }
        present(){
            const lessonVisited = true;
            this.checkVisiting(lessonVisited,this.currentLesson)
            this.currentLesson++
        }

        summary () {
                    let avrMark = this.grades.reduce((acc, i) => acc + i, 0) / this.grades.length;
                    let avrVisiting = this.visiting.reduce((acc, i) => acc + i, 0) / this.visiting.length;
                    console.log(avrMark, avrVisiting)
                    if (avrMark > 90 && avrVisiting > 0.9) {
                        return  'Молодець!'
                    } else if (avrMark < 90 && avrVisiting < 0.9) {
                        return 'Редиска!'
                    } else return 'Добре, але можна краще!'
                }
        setGrade(grade){
                    if(typeof grade !== 'number') throw new Error('Grade is not a number')
                    if(grade < this.grades.min || grade > this.grades.max) throw new Error('Invalid value');
                    const currentLessonIndex = this.currentLesson - 1 ;
                    if(!this.visiting[currentLessonIndex]) throw new Error('Student has not been on the lesson')
                    this.grades[currentLessonIndex] = grade;
                }
    }


//---------create different users
    let studentVovan = new Student('Vovan','Shaitan',1997);
    let studentSerhii= new Student('Serhii','Fedorov', 1987);

    //this loops fill information
    for (let i = 0; i<2;i++){
        studentSerhii.absent()
    }
    studentVovan.absent()
    studentVovan.absent()

    for (let i = 0; i<23;i++){
        studentSerhii.present()
        studentSerhii.setGrade(90)
        studentVovan.present()
        studentVovan.setGrade(100)
    }
    console.log(studentSerhii)
    console.log(studentSerhii.summary());
    console.log(studentVovan)
    console.log(studentVovan.summary());

})()
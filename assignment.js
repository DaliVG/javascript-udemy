class Course {
    constructor (courseTitle, coursePrice, courseLength){
        this.title = courseTitle;
        this.price = coursePrice;
        this.length = courseLength;
    }


    calculateValue() {
        return this.length / this.price;
    }

    printSummary() {
        console.log(`Course Title: ${this.title}`);
        console.log(`Course Price: ${this.price}`);
        console.log(`Course Length: ${this.length}`);
        console.log(`Value: ${this.calculateValue()}`);
    }
}

const jsCourse = new Course("JavaScript - The complete guide", 50, 44);
const reactCourse = new Course("React.js - The complete guide", 50, 36);

console.log(jsCourse);
console.log(reactCourse);
console.log(jsCourse.calculateValue());

class PracticalCourse extends Course {
    constructor (title, price, length, excercisesCount){
        super(title, price, length);
        this.projects = courseProjects;
    }

    printSummary() {
        super.printSummary();
        console.log(`Number of projects: ${this.projects}`);
    }
}
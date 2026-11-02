const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]

const buttonResults = document.querySelector("#buttonResults");
const totalCredits = document.querySelector("#totalCredits");
const cseButton = document.querySelector("#CSE");
const wddButton = document.querySelector("#WDD");
const allButton = document.querySelector("#All");

courses.forEach(function (course) {
    let createP = document.createElement("p");
    createP.setAttribute('class', 'courseTaken');
    createP.textContent = course.title;
    buttonResults.appendChild(createP);
})

totalCredits.textContent = courses.reduce(function (acc, course) {
    if (course.completed == true) {
        return acc + course.credits
    }
}, 0)


cseButton.addEventListener("click", function () {
    buttonResults.replaceChildren();
    const newcourse = courses.filter(course => course.subject == "CSE");
    newcourse.forEach(function (course) {
        let createP = document.createElement("p");
        createP.setAttribute('class', 'courseTaken');
        if (course.completed == true) {
            createP.classList.toggle('completed');
        }
        createP.textContent = course.title;
        buttonResults.appendChild(createP);

    })
    totalCredits.textContent = newcourse.reduce(function (acc, course) {
        if (course.completed == true) {
            return acc + course.credits
        }
    }, 0)
})

wddButton.addEventListener("click", function () {
    buttonResults.replaceChildren();
    currentCredits = 0;
    const newcourse = courses.filter(course => course.subject == "WDD");
    newcourse.forEach(function (course) {
        let createP = document.createElement("p");
        createP.setAttribute('class', 'courseTaken');
        if (course.completed == true) {
            createP.classList.toggle('completed');
        }
        createP.textContent = course.title;
        buttonResults.appendChild(createP);
        totalCredits.textContent = currentCredits;
    })
    totalCredits.textContent = newcourse.reduce(function (acc, course) {
        if (course.completed == true) {
            return acc + course.credits
        }
    }, 0)
})

allButton.addEventListener("click", function () {
    buttonResults.replaceChildren();
    courses.forEach(function (course) {
        let createP = document.createElement("p");
        currentCredits += course.credits;
        createP.setAttribute('class', 'courseTaken');
        if (course.completed == true) {
            createP.classList.toggle('completed');
        }
        createP.textContent = course.title;
        buttonResults.appendChild(createP);
        totalCredits.textContent = currentCredits;
    })
    totalCredits.textContent = courses.reduce(function (acc, course) {
        if (course.completed == true) {
            return acc + course.credits
        }
    }, 0)
})









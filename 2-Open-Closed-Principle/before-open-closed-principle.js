function printQuiz(questions) {
    //exiting code start
    questions.forEach(question => {
        console.log(question.description);
        switch (question.type) {
            case 'boolean':
                console.log('1. True');
                console.log('2. False')
                break;
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`);
                })
            case 'text':
                console.log('Answer: ____________________');
                break;
            //end
           
            //add new case is not possible because it might violate the open/close principle
            // If it is add always new case then simply we can violate open/close principle every time
            case 'range':
                console.log('Minimum: ____________________');
                console.log('Maximum: ____________________');
                break;        
            default:
                break;
        }
        console.log('');
    });
}


const questions = [
    {
        type: 'boolean',
        description: 'This document is very helpful'
    },
    {
        type: 'multipleChoice',
        description: 'What is your favourite language?',
        options: ['CSS', 'HTML', 'JS', 'Python']
    },
    {
        type: 'text',
        description: 'Describe your favourite JS feature'
    },
    {
        type: 'range',
        description: 'What is the speed limit in your city?'
    },
];

printQuiz(questions);
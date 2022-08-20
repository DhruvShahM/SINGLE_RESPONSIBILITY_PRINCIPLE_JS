const logMessage=require('./logMessage');

//here this class is only responsible for the changing of the tracking calorie functionality
class CalorieTracker {

    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount;
        if (this.currentCalories > this.maxCalories) {
            this.logCaloriesSurPlus();
        }
    }

    //here i have some reason to change the log message functionality 
    // broke the single responsibility principle
    // logCaloriesSurPlus() {
    //     console.log('Max calories exceeded');
    // }

    //here i have some reason to change the log message functionality 
    //single responsibility follow
    logCaloriesSurPlus() {
        logMessage('Max calories exceeed')
    }

}


const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)
/* Your Code Here */
function createEmployeeRecord(testEmployee){
    return {
        firstName:testEmployee[0],
        familyName:testEmployee[1],
        title:testEmployee[2],
        payPerHour:testEmployee[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function createEmployeeRecords(testEmployees){
    return testEmployees.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp) {
    this.timeInEvents.push({    
      type: "TimeIn",
      hour: +dateStamp.split(" ")[1],
      date: dateStamp.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    this.timeOutEvents.push({    
      type: "TimeOut",
      hour: +dateStamp.split(" ")[1],
      date: dateStamp.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date).hour
    const timeOut = this.timeOutEvents.find(e => e.date === date).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(testEmployees) {
    return testEmployees.map(testEmployee => allWagesFor.call(testEmployee)).reduce((total, wages) => total + wages)
}

function findEmployeeByFirstName(testEmployees, firstName) {
    return testEmployees.find((testEmployee) => testEmployee.firstName === firstName)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


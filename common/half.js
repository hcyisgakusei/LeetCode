class Schduler {
    limit = 2;
    taskList = [];
    add(promiseCreator) {
        return new Promise((resovle) => {

        })
    }
}

const setTimeOut = () => {}
const scheduler = new Schduler();
const addTask = (task) => {
    scheduler.add(task).then((val) => {
        console.log(val)
    })
};

addTask()
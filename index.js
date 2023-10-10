document.addEventListener('DOMContentLoaded', function () {
    const inputEl = document.getElementById("input-el");
    const searchBtnEl = document.getElementById("search-btn");
    const divLiEl = document.getElementById("list-el");
    const trashIconEl = document.getElementById("trash-icon")
    const clearBtnEl = document.getElementById("clear-btn")
    const radioBtnEl = document.getElementById("radio-btn")
    const clearTaskEl = document.getElementById("clear-task")
    let taskArray = [];
    let taskCounter = 0

    function updateList() {

        divLiEl.innerHTML = "";
        taskArray.forEach((task, index) => {
            const listItem = document.createElement("div");
            listItem.classList.add("div--li");
            listItem.innerHTML = `
                <li>
                    <input type="radio" class="radio--button" id="radio-btn">${task}
                </li>
                <button class="remove--btn" data-index="${index}"><i class="fa-solid fa-trash" id="trash-icon"></i></button>
            `;

            divLiEl.appendChild(listItem);
        });
    }

    function addTasks() {
        searchBtnEl.addEventListener("click", function () {
            const taskText = inputEl.value.trim();
            if (taskText !== "") {
                taskArray.push(taskText);
                inputEl.value = "";
                console.log(taskArray)
                taskCounter++
                pendingTasks()
                updateList();
            }
        });
    }

    divLiEl.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove--btn")) {
            const indexToRemove = parseInt(event.target.getAttribute("data-index"));
            if (!isNaN(indexToRemove) && indexToRemove >= 0 && indexToRemove < taskArray.length) {
                taskArray.splice(indexToRemove, 1);
                taskCounter--
                pendingTasks()
                updateList();
            }
        }
    });
    

    clearBtnEl.addEventListener("click", function () {
        const taskReset = 0
        taskCounter = taskReset
        taskArray = []
        clearTaskEl.innerHTML = `
            <p> You have ${taskReset} pending tasks </p>
        `
        updateList();
    })


    function pendingTasks() {
        clearTaskEl.innerHTML = `
            <p> You have ${taskCounter} pending tasks </p>
        `
    }

    /*
    radioBtnEl.addEventListener("click", function() {
        
    })
    */

    pendingTasks()
    addTasks();
    updateList();
    
});

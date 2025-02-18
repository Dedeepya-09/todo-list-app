document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const completedList = document.getElementById("completedList");

    function loadTasks() {
        taskList.innerHTML = localStorage.getItem("tasks") || "";
        completedList.innerHTML = localStorage.getItem("completed") || "";
    }

    function addTask() {
        if (taskInput.value.trim() === "") return;
        const li = document.createElement("li");
        li.innerHTML = `${taskInput.value} <button onclick="completeTask(this)">✔</button>`;
        taskList.appendChild(li);
        saveTasks();
        taskInput.value = "";
    }

    function completeTask(button) {
        const li = button.parentElement;
        li.removeChild(button);
        completedList.appendChild(li);
        saveTasks();
    }

    function saveTasks() {
        localStorage.setItem("tasks", taskList.innerHTML);
        localStorage.setItem("completed", completedList.innerHTML);
    }

    loadTasks();
    window.addTask = addTask;
    window.completeTask = completeTask;
});

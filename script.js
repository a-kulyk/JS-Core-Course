function initToDoList() {

    var textBox = document.getElementById('textBox');
    var list = document.getElementById('todoList');
    var addButton = document.getElementById('btnAdd');
    textBox.addEventListener("keypress", function() {
        if (event.keyCode == 13) addItem();
    });
    addButton.addEventListener("click", addItem);


    function addItem() {
        var entry = document.createElement('tr');
        var cell = document.createElement('td');
        entry.appendChild(cell).innerHTML = textBox.value;
        if (textBox.value) {
            entry.appendChild(createDeleteButton());
            list.appendChild(entry);
            textBox.value = "";
        }
    }

    function createDeleteButton() {
        var deleteButton = document.createElement('button');
        deleteButton.setAttribute("class", "btnDelete");
        deleteButton.innerHTML = "Remove item";
        deleteButton.addEventListener("click", removeItem);
        return deleteButton;
    }

    function removeItem() {
        var parent = this.parentNode.parentNode;
        var child = this.parentNode;

        parent.removeChild(child);
    }
}
initToDoList();

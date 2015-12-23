(function initToDoList() {

    var textBox = document.getElementById('textBox');
    var list = document.getElementById('todoList');
    var addButton = document.getElementById('btnAdd');
    textBox.addEventListener("keypress", function() {
        if (event.keyCode == 13) onAddItem();
    });
    addButton.addEventListener("click", onAddItem);

    function onAddItem() {
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
        deleteButton.addEventListener("click", onRemoveItem);
        return deleteButton;
    }

    function onRemoveItem() {
        var parent = this.parentNode.parentNode;
        var child = this.parentNode;

        parent.removeChild(child);
    }
})();

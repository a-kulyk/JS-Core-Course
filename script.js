(function () {
    var newList = document.getElementById('newList');
    newList.addEventListener("click", onNewList);




    function onNewList() {
        var instance = document.createElement('div');
        var textBox = document.createElement('input');
        textBox.className = "textBox";
        textBox.setAttribute("placeholder", "Add your Todo item");
        var addButton = document.createElement('button');
        addButton.innerHTML = "Add Item";
        var closeButton = document.createElement('input');
        closeButton.setAttribute("type", "image");
        closeButton.setAttribute("src", "close.png");
        var list = document.createElement('table');


        document.body.appendChild(instance);
        instance.appendChild(textBox);
        instance.appendChild(addButton);
        instance.appendChild(closeButton);
        instance.appendChild(list);
        textBox.addEventListener("keypress", function() {
                if (event.keyCode == 13) onAddItem();
        });
        addButton.addEventListener("click", onAddItem);
        closeButton.addEventListener("click", onRemoveItem);

        function onAddItem() {
            var entry = document.createElement('tr');
            var cell = document.createElement('td');
            entry.appendChild(cell).innerHTML = textBox.value;
            if (textBox.value) {
                entry.appendChild(createDeleteButton());
                list.appendChild(entry);
                textBox.value = "";
            }
            textBox.focus();
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
    }
})();

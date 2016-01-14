var myModule = (function() {

    function init(rootId) {
        var div = document.getElementById(rootId);
        var textBox = div.getElementsByTagName('input')[0];
        var list = document.createElement('table');
        div.appendChild(list);
        textBox.addEventListener("keypress", function() {
            if (event.keyCode == 13) onAddItem(list, textBox);
        });
    }

    function onAddItem(list, textBox) {
        var entry = document.createElement('tr');
        var cell = document.createElement('td');        
        if (textBox.value) {
            entry.appendChild(cell).innerHTML = "- " + textBox.value;
            entry.appendChild(createDeleteButton());
            list.appendChild(entry);
            textBox.value = null;
        }
    }

    function createDeleteButton() {
        var deleteButton = document.createElement('button');
        deleteButton.setAttribute("class", "btnDelete");
        deleteButton.innerHTML = "Remove";
        deleteButton.addEventListener("click", onRemoveItem);
        return deleteButton;
    }

    function onRemoveItem() {
        var child = this.parentNode;
        var parent = child.parentNode;
        parent.removeChild(child);
    }

    return {
        create: init
    }
})();

myModule.create('firstList');
myModule.create('secondList');

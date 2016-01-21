var myModule = (function() {

    var DEL_BTN_CLS = 'btnDelete';
    var DEL_BTN_INN_HTML = "Remove";

    function init(rootId) {
        var div = document.getElementById(rootId);
        var textBox = div.getElementsByTagName('input')[0];
        var addButton = div.getElementsByTagName('button')[0];
        var list = document.createElement('table');
        div.appendChild(list);
        textBox.addEventListener("keypress", function() {
            if (event.keyCode == 13) onAddItem(list, textBox);
        });
        addButton.addEventListener("click", function() {
            onAddItem(list, textBox)
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
        deleteButton.setAttribute("class", DEL_BTN_CLS);
        deleteButton.innerHTML = DEL_BTN_INN_HTML;
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

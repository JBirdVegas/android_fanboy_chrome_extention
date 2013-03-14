walk(document.body);

function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    // Apple
    var n = v.match(/Apple/i);
    var m = v.match(/apple/i);
    if (n || m) {
        this.handled = true;
    }
    v = v.replace(/\bApple\b/g, "The Fruit Cult");
    v = v.replace(/\bapple\b/g, "the fruit cult");

    textNode.nodeValue = v;
}

var handled;
window.onload = function () {
    if (this.handled) {
        confirm("So... are you apple's bitch yet?");
    }
}

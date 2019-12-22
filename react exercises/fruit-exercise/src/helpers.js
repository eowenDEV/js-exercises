//returns a randomly selected item from array of items
function choice (items) {
    const randomItems = Math.floor(Math.random() * items.length);
    return items[randomItems];
}

//removes the first matching item from items, if item exists and returns it. If not found, return undefined
function remove(items, item) {
    //console.log(`Find ${item}`);
    const found = items.indexOf(item);
    if(found !== -1)
    {
        items.splice(found, 1);
    } else {
        return undefined;
    }
    return items.length;
}

export {choice, remove};
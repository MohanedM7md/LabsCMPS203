//We Have Big inventory (Object) => Contains Item as Obejcts
// every item is array and each index has a specfic value and name
//{
// [0]:name, [1]:category, [2]:quantity,
//  [3]:price, [4]:unit, addedDate: new Date(),
//  [5]:customField || {}
// };

let inventory = [], transactions = [], categories = [], customFields = {};

const add = (itemArr)=>{
    const item = { name: itemArr[0], category: itemArr[1], quantity: itemArr[2], price: itemArr[3], unit: itemArr[4], addedDate: new Date(), customField: itemArr[5] || {} };
    inventory.push(item);
    if (!categories.includes(category)) 
        categories.push(category);
    
        transactions.push({ type: "add", item });
}

const adit = (itemArr)=>{
    const oldItem = inventory[itemArr[0]]; // The old name of the item
    if(!oldItem)
        return; //if the item is not exist in the inventory return

    const newItem = itemArr.slice(1); //slice without
    transactions.push({ type: "edit", old: oldItem, new: newItem});
    inventory[itemArr[0]] = { ...inventory[b[0]],name: itemArr[1], category: itemArr[2], quantity: itemArr[3], price: itemArr[4], unit: itemArr[5], customField: itemArr[6] || {}};
}

const removeItem = (ItemArr) =>{
    transactions.push({ type: "delete", item: inventory[ItemArr[0]] });
    inventory.splice(ItemArr[0], 1);
    window.alert(`Item: ${ItemArr[0]}  Removed`)
}


const printDashboard = ()=>{
    console.log("=== Dashboard ===\nItems: "
        + inventory.length
        + "\nTotal: $" 
        +inventory.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2) 
        + "\nCats: " + c.join(', '));
}


const handleSale = (itemArr)=>{
    for(let item of inventory){
        if(item.name ==itemArr[0]){
            item.quantity -= itemArr[1];
            transactions.push({ type: "sale", item: item, quantity: b[1], addedDate: new Date() });
            if(item.quantity < 10)
                window.alert(`Item: ${item} quantity is less than 10`);
            console.log(`Saled ${itemArr[1]} ${item.unit} of ${item.name}`);
        }
    }
}


const handleRestock = (itemArr)=>{
    for(let item of inventory){
        if(item.name ==itemArr[0]){
            item.quantity += itemArr[1];
            transactions.push({ type: "sale", item: item, quantity: b[1], addedDate: new Date() });
            console.log(`Restocked ${itemArr[1]} ${item.unit} of ${item.name}`);
        }
    }
}

//it takes 
const searchItems = (itemArr)=> {
    console.log(inventory.filter(
        item => [item.name, item.category, item.price].some(
            v => v.toString().toLowerCase().includes(itemArr[0].toLowerCase())
        )));
}

const viewInventory= ()=>{
    console.log("=== Inv ===", i);
}


const exportAll = ()=> {
    console.log(
        "CSV:\n" + ["Name,Category,Quantity,Price,Unit,AddedAt"].concat(
        items.map(item => Object.values(item).join(','))
        ).join('\n'));
}


const viewAllTransactions = ()=> {
    console.log("Transactions:\n", transactions);
}

const viewItemAges = ()=> {
    console.log(
        items.map(
            item => `${item.name}: ${Math.floor((new Date() - new Date(item.added)) / (1000 * 60 * 60 * 24))}d`
        ).join('\n')
    );
}

const  importItem = (itemArr) => {
    itemArr.forEach(
        item => addItem([item.name, item.category, item.quantity, item.price, item.unit])
    );
}

const addCustomField = (itemArr) => {
    if (!customFields[itemArr[0]])
        customFields[field] = null;
}

const  updateCustomField = (itemArr) =>{
    const item = inventory.find(item => item.name === itemArr[0]);
    if (item) 
        item.customFields[itemArr[1]] = itemArr[2];
}


//dostuff funtion is the main Logic of our Program which contains all the operations done on the inventory 



function doStuff(action, itemArr) {
    switch (action) {
        case "add":
            addItem(itemArr);
            break;
        case "edit":
            editItem(itemArr);
            break;
        case "removeItem":
            removeItem(itemArr);
            break;
        case "Sale":
            handleSale(itemArr);
            break;
        case "restock":
            handleRestock(itemArr);
            break;
        case "search":
            searchItems(itemArr);
            break;
        case "viewItem":
            viewInventory();
            break;
        case "xportAll":
            exportAll();
            break;
        case "viewAllItems":
            viewAllTransactions();
            break;
        case "viewItemAges":
            viewItemAges();
            break;
        case "importItem":
            importItem(itemArr);
            break;
        case "addCustomField":
            addCustomField(itemArr);
            break;
        case "updateCustomField":
            updateCustomField(itemArr);
            break;
        default:
            console.log("Invalid action");
    }
}
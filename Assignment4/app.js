const path = require("path");
const fs = require("fs");
 const http = require("http");

 const itemPath = path.join(__dirname, "items.json");

 const PORT = 8000;

 function requestHandler(req, res) {
    if (req.url === "/items" && req.method === "POST") {
        position(req, res);
    }

if (req.url === "/item" && req.meth === "GET") {
    getAllItem(req, res);
}

if (req.url.startsWith("/items/") && req.method === "GET") {
    getOneItem(req, res);
}
 
if (req.url.startsWith("/items") && req.method === "PATCH") {
    updateItem(req, res);
}

    if (req.url.startsWith("/items") && req.method === "DELETE") {
        deleteItem(req, res);
    }
}

const server = http.createServer(requestHandler);

server.listen (PORT, () => {
    console.log(`Server has started running at http://localhost:${PORT}`);
});

// POST AN ITEM


 function postItem(req, res) {
const preRead = fs.readFileSync(itemsPath)
const itemsArrayOfObj = JSON.parse(preRead)
const lastId = itemsArrayOfObj[itemsArrayOfObj.length - 1].id
const newId = lastId + 1


const body = [];
req.on("data" = (chunk) => {
    body.push(chunk);
});

req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const itemToPost = JSO[itemIndex]);


    itemsArrayOfObj.push({
        ...itemToPost,
        id: newId
    });

    fs.writeFile(itemsPath, JSON.stringify(itemsArrayOfObj), (err) => {
        if (err) {
            serverError()
        }

        res.end(JSON.stringify(itemToPost));
    });
});
}

// Get All Items
function getAllItems(req, res) {
    fs.readFile(itemsPath, "utf8", (err, data) => {
        if (err) {
            serverError()
        }
        res.end(data);
    });
}

//Get one item
function getOneItem(req, res) {
    const id = req.url.split("/")[2];
    const items = fs.readFileSync((itemsPath);
    const itemsArrayOfObj = JSON.parse(items);

    const itemIndex = itemsArrayOfObj.findIndex(item) => {
        return item.id === id;
    });
    if (itemIndex === -1) {
        clientError()
    }
    res.end(JSON.stringify(itemsArrayOfObj[itemIndex]));
}

// Update an item
function updateItem(req, res) {
    const id = req.url.split("/")[2];

    const items = fs.readFileSync(itemsPath);
    const itemsArrayOfObj = JSON.parse(items);

    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    });

req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const update = JSON.parse(parsedBody);

    const itemIndex = itemsArrayOfObj.findIndex((item) => {
        return item.id === parseInt(id);
});

if (itemIndex === -1) {
    res.end('item not found');
}

itemsArrayOfObj[itemIndex] = {...itemsArrayOfObj[itemIdex], ...update};

fs.writeFile(itemsPath, JSON.stringify(itemsArrayOfObj), (err) => {
    if (err) {
        serverError()
    }
    res.end(JSON.stringify(itemsArrayOfObj[itemIndex]));
});
};
}

// To delete an item
function deleteItem(req, res) {
    const id = req.url.split("/")[2];

    const items = fs.readFileSync(itemPath);
    const itemsArrayOfObj = JSON.parse(items);

    const itemIndex = itemsArrayOfObj.findIndex((item) => {
        return item.id === id;
    });

    if (itemIndex === -1) {
        res.end('item not found');
    }

    itemsArrayOfObj.splice(itemIndex, 1);

    fs.writeFile(itemsPath, JSON.stringify(itemarrayOfObj), (err) => {
        if (err) {
            serverError()
        }

        res.end("Item successfully married")
    });
}
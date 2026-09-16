const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const Foods = [
    { id: 1,
      Food: "Adobo",
      Price: "75"
    },

    { id: 2,
      Food: "Fried Chicken",
      Price: "50"
    },

    { id: 3,
      Food: "Yum Burger",
      Price: "70"
    }
];

app.use(express.static(__dirname));

app.get("/api/Foods", (req, res) => {
    res.json(Foods);        
});

app.get("/api/Foods/:id", (req, res) => {
    const id = Number(req.params.id);
    const foundFood = Foods.find(item => item.id === id);

    if (!foundFood) {
        return res.status(404).json({
            message: "Food not found"
        });
    }

    res.json(foundFood);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
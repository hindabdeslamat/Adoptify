const animals = [
    {
        name: "Bella",
        age: "2 years",
        type: "Dog",
        image: "images/img2.jpg"
    },
    {
        name: "Milo",
        age: "1 year",
        type: "Cat",
        image: "images/img3.jpg"
    },
    {
        name: "Rocky",
        age: "3 years",
        type: "Dog",
        image: "images/img1.jpg"
    }
];

const container = document.getElementById("animalList");

animals.forEach(animal => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}">
        <h3>${animal.name}</h3>
        <p>${animal.type}</p>
        <p>Age: ${animal.age}</p>
    `;
    
    container.appendChild(card);
});

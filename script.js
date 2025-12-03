const animals = [
    {
        name: "Bella",
        age: "2 years",
        type: "Dog",
        image: "https://place-puppy.com/300x300"
    },
    {
        name: "Milo",
        age: "1 year",
        type: "Cat",
        image: "https://placekitten.com/300/300"
    },
    {
        name: "Rocky",
        age: "3 years",
        type: "Dog",
        image: "https://place-puppy.com/301x301"
    },
    {
        name: "Luna",
        age: "4 months",
        type: "Cat",
        image: "https://placekitten.com/301/301"
    }
];

const container = document.getElementById("animalList");

animals.forEach(animal => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}">
        <h3>${animal.name}</h3>
        <p>Type: ${animal.type}</p>
        <p>Age: ${animal.age}</p>
        <a href="#" class="btn">Adopt Me</a>
    `;
    
    container.appendChild(card);
});

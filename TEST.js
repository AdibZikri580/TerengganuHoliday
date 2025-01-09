// script.js
const foodData = {
    nasiDagang: {
        title: "Nasi Dagang",
        description: `A most sought after dish that is made from a mixture of rice and glutinous rice,
        steamed twice in coconut milk to get the right texture and eaten with a red tuna fish curry
        accompanied by pickled cucumber and carrot “acar” or relish.`,
        image: "nasidagang.jpg" // Letakkan imej dalam folder projek
    },
    laksaTerengganu: {
        title: "Laksa Terengganu",
        description: `A traditional noodle dish served with a rich, creamy, and spicy fish gravy,
        often enjoyed with a squeeze of lime.`,
        image: "laksa_terengganu.jpg" // Letakkan imej dalam folder projek
    },
    keropokLekor: {
        title: "Keropok Lekor",
        description: `A popular snack made from fish paste mixed with sago flour, shaped into long sausages,
        and deep-fried until crispy.`,
        image: "keropoklekor.jpg" // Letakkan imej dalam folder projek
    }
    // Tambah data makanan lain di sini
};

function showDetails(food) {
    const detailsDiv = document.getElementById("foodDetails");
    const foodItem = foodData[food];
    detailsDiv.innerHTML = `
        <h2>${foodItem.title}</h2>
        <p>${foodItem.description}</p>
        <img src="${foodItem.image}" alt="${foodItem.title}">
    `;
}

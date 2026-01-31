//* Note: This code is intended to run in a Browser environment, not Node.js terminal.

let pagTitle = "Elzero", pagDescrition = "Elzero Web School", pagDate = "25/10";

let Card = `
    <div class="card">
        <h3>Hello ${pagTitle}</h3>
        <p>${pagDescrition}</p>
        <span>${pagDate}</span>
    </div>
`;
document.write(Card.repeat(4));

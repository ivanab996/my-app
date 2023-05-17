const adjectives = ['Blue', 'Green', 'Lilac'];
const nouns = ['Lagoon', 'Butterfly', 'Car'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}

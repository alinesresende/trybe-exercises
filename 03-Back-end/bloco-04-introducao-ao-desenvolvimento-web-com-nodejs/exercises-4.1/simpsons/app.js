const fs = require('fs').promises;
const path = require('path');

// const fileSimpsons = './simpsons.json'

const readSimpsons = async (pathSimpsons = './simpsons.json') => {
  try {
    const read = await fs.readFile(path.resolve(__dirname, pathSimpsons), 'utf-8');
    return JSON.parse(read);
  } catch (err) {
    console.error(err);
  }
}

const isCharacter = async (id) => {
  const list = await readSimpsons();
  
  const character = list.find((character) => id === character.id)
  if (character === undefined) {
    throw new Error('id não encontrado');
  } 
  return character;
}

const writingCharacter = async (id1, id2) => {
  const list = await readSimpsons();
  
  const character = list.filter((character) => id1 !== character.id && id2 !== character.id);
  console.log(character)

  const strigList = JSON.stringify(character)

  const write = fs.writeFile(path.resolve(__dirname, './simpsons.json'), strigList);
  return write;
}
const simpsonFamily = async () => {
  const list = await readSimpsons();

  const character = list.filter((character) => '1' === character.id || '2' === character.id || '3' === character.id || '4' === character .id);

  const strigList = JSON.stringify(character)

  const newFamily = fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), strigList);

  return character;
}

const newCharacter = async () => {
  const familySimposon = await readSimpsons('./simpsonFamily.json')
  const newMember = {
    id:"11",
    name:"Nelson Muntz"
  }

  // familySimposon.push(newMember);
  // return familySimposon;

  const news = [...familySimposon, newMember];

  const newlist = JSON.stringify(news)

  const newCharacterMember = fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), newlist);
    return newCharacterMember;
}

const subsCharacter = async () => {
  const familySimposon = await readSimpsons('./simpsonFamily.json');
  const characterNM = familySimposon.map((character) => {
    if (character.name === 'Nelson Muntz') {
      return {
        id: '5',
        name: 'Maggie Simpson',
      }
    }
    return character
  })
  return characterNM;
}


async function main() {
  try{
    const r = await subsCharacter();
    console.log(r)
  } catch(err) {
    console.error(err)
  }
}

main();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

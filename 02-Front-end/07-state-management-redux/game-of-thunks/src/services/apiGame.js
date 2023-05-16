const apiGameOfThrones = async (nameCharacter) => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${nameCharacter}`);
  const data = await response.json();
  return data;
}

export default apiGameOfThrones;

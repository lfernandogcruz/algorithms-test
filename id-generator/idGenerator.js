const generateId = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const generateSection = (length) => {
    let section = '';
    for (let i = 0; i < length; i++) {
      section += characters[Math.floor(Math.random() * characters.length)];
    }
    return section;
  }

  const result = `${generateSection(4)}-${generateSection(4)}-${generateSection(4)}-${generateSection(4)}`;

  return result;
};

const id = generateId();
console.log(id);

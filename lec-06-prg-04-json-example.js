const fs = require('fs');

// 객체 정의
const superHeroes = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
};

// 데이터 접근 테스트
console.log(superHeroes['homeTown']);
console.log(superHeroes['active']);
console.log(superHeroes['members'][1]['powers'][2]);

// JSON.stringify로 문자열 변환 후 fs.writeFileSync로 저장
try {
    const jsonString = JSON.stringify(superHeroes, null, '\t');

    fs.writeFileSync('lec-06-prg-04-json-example.json', jsonString, 'utf8');
    console.log("## JSON file saved successfully.");
} catch (err) {
    console.error("파일 저장 중 오류 발생:", err);
}
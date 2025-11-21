// 'fs' 모듈 사용하여 파일 읽음. JSON 처리 내장 객체 사용함.
const fs = require('fs');

try {
    // 파일을 동기적으로 읽어옴.
    const jsonInFile = fs.readFileSync('lec-06-prg-03-json-example.json', 'utf8');
    // 문자열을 JSON 객체로 파싱.
    const superHeroes = JSON.parse(jsonInFile);
    
    console.log(superHeroes['homeTown']);
    console.log(superHeroes['active']);
    console.log(superHeroes['members'][1]['powers'][2]);
} catch (err) {
    console.error("파일을 읽는 중 오류 발생:", err);
}
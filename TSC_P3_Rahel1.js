let siswa1 = {
  name: "Tono",
  age: 20,
  grades: [90, 85, 88]
};

let siswa2 = {
  name: "Tini",
  age: 22,
  grades: [78, 82, 85]
};

let mergedStudent = {
  name:  `${siswa1.name} dan ${siswa2.name}`,
  age: (siswa1.age + siswa2.age) / 2,
  grades: [...siswa1.grades, ...siswa2.grades]
};

console.log(mergedStudent);
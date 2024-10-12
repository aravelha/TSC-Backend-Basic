const FavData = {
  user: {
    id: 1,
    name: "Rahel V",
    age: 19,
    favorites: {
      books: ["The Stranger", "On Earth We're Briefly Gorgeous", "Scythe"],
      movies: ["Interstellar", "Good Will Hunting"],
    },
  },
};
const {
  user: {
    name,
    age,
    favorites: { movies },
  },
} = FavData;

console.log(name);
console.log(age);
console.log(movies);
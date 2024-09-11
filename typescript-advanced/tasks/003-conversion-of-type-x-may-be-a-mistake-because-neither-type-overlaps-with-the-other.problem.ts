interface Dog {
  bark: boolean;
}
// it's enough to have 'bark' property in an obeject to be casted into Dog interface
let cat = { purr: true, bark: false }; // I don't totally understand this question

let dog = cat as Dog;

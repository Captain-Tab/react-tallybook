// 函数封装法
let id = 0;

const createId = (): number => {
  id += 1;
  return id;
};

export default createId;

// class封装法
// let id = 0
//
// class CreateId {
//   value: number
//   constructor() {
//     id +=1
//     this.value = id
//   }
// }
// export {createId}
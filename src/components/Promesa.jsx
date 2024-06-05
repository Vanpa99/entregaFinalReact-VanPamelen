const Promesa = (data, delay = 1000) => {
    return new Promise ((resolve) => {
       setTimeout(() => {
        resolve(data);
       }, delay);
    });
};
  
  export default Promesa;
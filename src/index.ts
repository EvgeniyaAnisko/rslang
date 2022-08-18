console.log('Hello, RS Lang');

fetch('https://evgeniyaanisko-rslang.herokuapp.com/words?page=2&group=0')
  .then((res: Response) => res.json())
  .then((data) => console.log(data))
  .catch((err: Error) => console.log(err));

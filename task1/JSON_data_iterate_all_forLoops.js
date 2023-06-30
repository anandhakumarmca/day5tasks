const data = {
    "name": "Anandh",
    "age": 32,
    "email": "accetanandhmca@gmail.com",
    "hobbies": ["netflix", "broswing", "gaming"],
    "address": "79/B, Valliyappa Garden, Palani , Tamilnadu, 624601"
  };
  
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = data[key];
    console.log(`${key}: ${value}`);
  }
  
  for (const key in data) {
    console.log(`${key}: ${data[key]}`);
  }
  
  const hobbies = data.hobbies;
  for (const hobby of hobbies) {
    console.log(hobby);
  }
  
  Object.keys(data).forEach((key) => {
    console.log(`${key}: ${data[key]}`);
  });


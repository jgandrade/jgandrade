function titleCase(str) {
  str=str.toLowerCase().split(" ").map(e =>  e[0].toUpperCase().concat(e.slice(1,e.length))).join(" ");

  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
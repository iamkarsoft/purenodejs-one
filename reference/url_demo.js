const url = require("url");

const myUrl = new url('https://kofi.work/hello.html?id=1232&status=active');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString()); 

// getting the host
console.log(myUrl.host);

// hostname
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);



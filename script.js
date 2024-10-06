function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s = s1.trim();
	let str = s.indexof(" ");

	if(str === -1)
	{
		return s
	}
	return s.substring(0,str);
	
}

// Please do not change the code below
//const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
//alert(indexOfIgnoreCase(s1, s2));

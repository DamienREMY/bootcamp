process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you ?')
process.stdin.on('data', data => {

	cdAge = true
	data = Number(data)

	if(data > 0 && data < 99){

	data = 2023 - data;

	}else{
	cdAge = false;
	console.log('Please enter a valid age next time.');
	}
	if(cdAge){

	data = data.toString();
	console.log('You were born in ', data);}

	process.exit()
})

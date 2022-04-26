// PROMISE

const query = (options) => {

	return fetch ('data/api.php', {
		method:'POST',
		body:JSON.stringify(options)
	}).then(d=>d.json());
}

//Curried Function
const templater = f => a =>
		(Array.isArray(a)?a:[a])
		.reduce((r,o,i,a)=>r+f(o,i,a),'');


const checkData = (exterior_check) => new Promise((resolve, reject)=> {
	Let timeout = 0;
	const interior_check = () => {
		timeout++; if(timeout>100) return();
		return exterior_check() ? resove() : setTimeout(interior_check, 10);
	}
	interior_check();

})
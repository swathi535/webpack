import('./bootstrap')
	.catch(err => console.error(err));
	export function mount() {
		return new Promise((resolve, reject) => {
		  // Always reject with an Error.
		  reject(new Error('hi'));
		});
	  }
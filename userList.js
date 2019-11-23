class UserList{
	constructor(users) {
		this._users = users;
  	}
    
	showNames() {
        this._users.forEach(user => {
			console.log(user.name);
		});
		return this;		
    }
	showById(id) {
		for (let user of this._users) {
			if (user.id === id) {
				console.log(`${JSON.stringify(user)}`);
				return this;
		  	}
		}
		console.error(`Unable to find user with id ${id}`);
		return this;
	}
  	add(user) {
    	if(!user.name) {
			  console.error("this user is not aded, because 'name' is required");
    	} else {
      		console.log(`Hi everyone, i am ${user.name}`);
      		user.id = +new Date;
			this._users.push(user);
		}
		return this;
  	}
  	removeById(id) {
  		for (let user of this._users) {
        	if (user.id === id) {
          		this._users.splice(user, 1);
          		console.log(`bye bye ${user.name}`);
          		return this;
        	} 
      	}
		  console.error(`Unable to find user with id: ${id}`);
		  return this;
	}
	logUsersCould() {
		console.log(this._users.length);
		return this;
	}
}

// let newUsers;
// let list;
// (async () => {
// 	let response = await fetch('https://jsonplaceholder.typicode.com/users');
// 	newUsers = await response.json();
// 	list = new UserList(newUsers);
// 	list.showNames().showById(3).add({name: "Ivanka"}).removeById(5).logUsersCould();
// })();


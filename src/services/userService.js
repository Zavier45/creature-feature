export default class UserService {
  getAllUsers() {
    return fetch("http://localhost:4513/users").then((response) =>
      response.json()
    );
  }
  getUserByEmail(email) {
    return fetch(`http://localhost:4513/users?email=${email}`).then(
      (response) => response.json()
    );
  }

  createUser(user) {
    return fetch("http://localhost:4513/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  }

  saveProfileChanges(profile) {
    return fetch("http://localhost:4513/users", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profile),
    }).then((response) => response.json());
  }

  getUserById(id) {
    return fetch(`http://localhost:4513/users?id=${id}`).then((response) =>
      response.json()
    );
  }
}

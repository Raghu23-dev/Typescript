function createUser(User) {
    return { name: User.name, email: User.email };
}
console.log(createUser({ name: "User1", email: "user1@gmail.com" }));

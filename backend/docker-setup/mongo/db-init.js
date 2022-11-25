db.createUser({
  user: 'afshan',
  pwd: 'afshan',
  roles: [
    {
      role: 'readWrite',
      db: 'mern_docker_starter',
    },
  ],
});

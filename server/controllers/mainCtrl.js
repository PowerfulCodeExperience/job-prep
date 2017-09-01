module.exports = {
  signIn: (req, res) => {
    console.log('User:', req.user);
    res.status(200).send(req.user);
  },

  signOut: (req, res) => {
    req.logout();
    console.log("User has signed out")
    res.status(200).send(true);
  },

  getResources: (req, res) => {
    const db = req.app.get('db');

    db.get_resources().then(resources => {
      console.log(resources)
      res.status(200).send(resources)
    })
  },

  postCompany: (req, res) => {
    const db = req.app.get('db');

    console.log("Post Company", req.body)
    console.log("User on Session", req.user.id)

    db.post_company(req.body.company, req.body.linkedin, req.user.id).then(response => {
      console.log(response)
      res.status(200).send(response)
    })
    
  }
}
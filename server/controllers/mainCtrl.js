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
  getGoals: (req, res) => {
    const db = req.app.get('db');

    db.get_goals(req.user.id)
    .then(goal => res.status(200).send(goal))
    res.status(200);
  },
  postGoal: (req,res) => {
    const db = req.app.get('db');
    let added = req.body;

    db.post_goal([
      added.goal
    ])
    .then( goal => res.status(200).send('goal added backend'))
    .catch(() => res.status(500).send());
  }
}
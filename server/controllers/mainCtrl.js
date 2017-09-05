

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

    db.get_resources()
      .then(resources => {
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
  },
  postTask: (req, res) => {
    const db = req.app.get('db')
    let addedTask = req.body

    db.post_task([
      addedTask.task
    ])
    .then( task => res.status(200).send('task added backend'))
    .catch(() => res.status(500).send(error))
    .catch( err => console.log(err));
  },

  getCompany: (req, res) => {
    const db = req.app.get('db');

    db.get_companies(req.user.id)
    .then(response => {
      res.status(200).send(response)
    })
    .catch( err => console.log(err));
  },

  returnCompany: (req, res) => {
    const db = req.app.get('db');
    console.log("id", req.params.id);
    db.get_company(req.params.id)
      .then(response => {
        res.status(200).send(response);
    })
    .catch( err => console.log(err));
  },

  getContacts: (req, res) => {
    const db = req.app.get('db');

    db.get_contacts(req.params.id)
      .then(response => {
        res.status(200).send(response)
    })
    .catch( err => console.log(err));
  },

  postCompany: (req, res) => {
    const db = req.app.get('db');

    db.post_company(req.body.company, req.body.linkedin, req.user.id)
      .then(response => {
        db.get_companies(req.user.id).then(companies => {
          res.status(200).send(companies)
      })
    })
    .catch( err => console.log(err));
  },

  postContact: (req, res) => {
    const db = req.app.get('db');

    const { company, name, position, linkedin, email } = req.body;

    db.post_contact(name, position, linkedin, company.id, email)
      .then(response => {
        db.get_contacts(company.id)
          .then(contacts => {
            console.log("contacts: ", contacts)
            res.status(200).send(contacts)
          })
      })
      .catch( err => console.log(err));
  },

  updateStatus: (req, res) => {
    const db = req.app.get('db');

    console.log("req.body", req.body);
    const {status, date, id, company_id} = req.body;

    db.update_status(status, date, id, company_id)
      .then(response => {
        db.get_contacts(company_id)
          .then(contacts => {
            console.log("contacts", contacts)
            res.status(200).send(contacts)
          })
      })
      .catch( err => console.log(err));
  }

}
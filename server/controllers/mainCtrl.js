

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
    db.post_goal([req.body.goal, req.user.id])
    .then(response => {
      db.get_goals(req.user.id).then(goals => {
        res.status(200).send(goals)
    })
  })
  .catch(err => console.log(err));
},
  postProfile: (req, res) => {
    const db = req.app.get('db');
    const {linked, resume, portfolio} = req.body;
    console.log(req.user)
    const {id} = req.user
    db.update_profile(id, linked, resume, portfolio)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(err => err);
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
        console.log("Returned contacts", response)
        res.status(200).send(response)
    })
    .catch( err => console.log(err));
  },

  getNotes: (req, res) => {
    const db = req.app.get('db');

    const { id } = req.params

    db.get_notes(id)
    .then(response => {
      console.log("res", response)
      res.status(200).send(response)
    })
    .catch( err => console.log(err));
  },

  allContacts: (req, res) => {
    const db = req.app.get('db');

    db.get_all_contacts(req.user.id)
      .then(response => {
        console.log('response', response);
        res.status(200).send(response);
      })
      .catch( err => console.log(err));
  },

  postCompany: (req, res) => {
    const db = req.app.get('db');

    const {company, linkedin} = req.body;
    const {id} = req.user;

    db.post_company(company, linkedin, id)
      .then(response => {
        console.log("response", response)
        db.get_companies(id).then(companies => {
          console.log("companies", companies)
          res.status(200).send(companies)
      })
    })
    .catch( err => console.log(err));
  },

  postContact: (req, res) => {
    const db = req.app.get('db');

    const { company, name, position, linkedin, email } = req.body;

    let status = "No Action Taken";

    db.post_contact(name, position, linkedin, company.id, email, status)
      .then(response => {
        db.get_contacts(company.id)
          .then(contacts => {
            console.log("contacts: ", contacts)
            res.status(200).send(contacts)
          })
      })
      .catch( err => console.log(err));
  },

  updateNote: (req, res) => {
    const db = req.app.get('db');

    const {note, date, contact_id, company_id} = req.body;
    console.log("req.body", req.body)
    db.post_note(note, date, contact_id)
      .then(note => {
        db.get_notes(contact_id)
        .then(response => {
          console.log("res", response)
          res.status(200).send(response)
        })
        .catch( err => console.log(err));
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
  },

  updateEmail: (req, res) => {
    const db = req.app.get('db');

    const {email, id, company_id} = req.body;
    console.log("body", req.body)
    db.update_email(email, id)
      .then(response => {
        db.get_contacts(company_id)
          .then(contacts => {
            console.log("contacts", contacts)
            res.status(200).send(contacts)
          })
          .catch( err => console.log(err));
      })
      .catch( err => console.log(err));
  },

  updateApplied: (req, res) => {
    const db = req.app.get('db');

    const { applied, id } = req.body;

    db.update_applied(applied, id)
      .then(response => {
        db.get_companies(req.user.id)
          .then(companies => {
            console.log("comp", companies)
            res.status(200).send(companies)
          })
          .catch( err => console.log(err));
      })
      .catch( err => console.log(err));
  }

}

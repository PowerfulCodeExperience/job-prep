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

  postNote: (req, res) => {
    const db = req.app.get('db');

    const {note, date, contact_id} = req.body;

    db.post_note(note, date, contact_id)
      .then(response => {
        res.status(200).send(response)
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

}

import React, {Component} from 'react';
import './AllContacts.css';

class AllContacts extends Component {
  
  render() {
    return (
      <div className="AllContacts">

        <header className="AllHeader">
          <h1 className="AllTitle"> Contacts </h1>
          <div className="SearchWrap">
            <input className="Search"/>
            <button className="SearchButton">
              <div className="Mag"> &#9906; </div>
            </button>
          </div>
        </header>

        <main className="AllWrap">

          <section className="SingleWrap">
            <h1 className="SingleTitle"> Company Name </h1>
            <div className="InnerWrap">

              <div className="Card">
                <div className="Plus"> + </div>
                <span> New Contact </span>
              </div>

              <div className="Card">
                <div className="Plus"> + </div>
                <span> New Contact </span>
              </div>

              <div className="Card">
                <div className="Plus"> + </div>
                <span> New Contact </span>
              </div>

              <div className="Card">
                <div className="Plus"> + </div>
                <span> New Contact </span>
              </div>

            </div>
          </section>

        </main>

      </div>
    )
  }
}

export default AllContacts;
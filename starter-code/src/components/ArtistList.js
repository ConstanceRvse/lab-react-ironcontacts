import React from "react";
import contacts from "../contacts.json";

class ArtistList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: contacts.slice(0, 5)
    };
  }

  randomContact() {
    const { contactList } = this.state;
    const randomNumber = Math.floor(Math.random() * contacts.length);
    contactList.push(contacts[randomNumber]);

    // for (let i = contacts.length - 1; i >= 1; i--) {
    //   let randomNumber = Math.floor(Math.random() * (i + 1));
    //   let save = contacts[i];
    //   contacts[i] = contacts[randomNumber];
    //   contacts[randomNumber] = save;
    // }

    this.setState({ contactList });
  }

  sortByName() {
    const { contactList } = this.state;

    contactList.sort(function(itemA, itemB) {
      if (itemA.name < itemB.name) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ contactList });
  }

  sortByPop() {
    const { contactList } = this.state;

    contactList.sort(function(itemA, itemB) {
      if (itemA.popularity > itemB.popularity) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ contactList });
  }

  deleteContact(artistIndex) {
    const { contactList } = this.state;
    contactList.splice(artistIndex, 1);

    this.setState({ contactList });
  }

  render() {
    const { contactList } = this.state;

    const artistItems = contactList.map((oneArtist, index) => (
      <tr key={index}>
        <th>
          <img src={oneArtist.pictureUrl} alt={oneArtist.name} />
        </th>
        <th>{oneArtist.name}</th>
        <th>{oneArtist.popularity.toFixed(2)}</th>
        <button onClick={() => this.deleteContact(index)}>Delete</button>
      </tr>
    ));

    return (
      <section className="artist-list">
        <h2>IronContacts</h2>

        <button onClick={() => this.randomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPop()}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>{artistItems}</tbody>
        </table>
      </section>
    );
  }
}

export default ArtistList;

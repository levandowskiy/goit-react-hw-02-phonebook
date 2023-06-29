import { Component } from "react";
import PropTypes from "prop-types";
import {ListItem, Btn} from "./ContactList.styled";

export class ContactList extends Component {
  state = {};

  render() {
    const { contacts, handlerDelete } = this.props;
    return (
      <>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <ListItem key={id}>
                <p>
                  {name}: <span>{number}</span>
                </p>
                <Btn onClick={() => handlerDelete(id)}>Delete</Btn>
              </ListItem>
            );
          })}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handlerDelete: PropTypes.func.isRequired,
};

import React from 'react';
import 'tachyons';
class Card extends React.Component {
  state = {};

  render() {
    const { name, email, id } = this.props;
    return (
      <div
        className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
        // style={{ width: 300, height: 300 }}
      >
        <img src={`https://robohash.org/${id}?size=200x200`} alt="sul pic" />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;

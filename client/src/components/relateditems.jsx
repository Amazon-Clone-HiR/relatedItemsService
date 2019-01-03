import React from "react";
import RelatedEntry from "./relatedentry.jsx";
import ReactDOM from "react-dom";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

export default class Related extends React.Component {
  constructor() {
    super();

    this.state = {
      related: [
        {
          name: "Rebelxt",
          desc: "A great starting DSLR",
          img: "https://s3.us-east-2.amazonaws.com/recpictures/guitardood.jpg",
          price: "contact seller"
        },
        {
          name: "NokiaFlip",
          desc: "A handheld high pixel camera",
          img: "https://s3.us-east-2.amazonaws.com/recpictures/firelady.jpeg",
          price: "contact seller"
        },
        {
          name: "RED Camera",
          desc: "Top of the line video camera",
          img: "https://s3.us-east-2.amazonaws.com/recpictures/funko.jpeg",
          price: 30000
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3003/find`)
      .then(res => {
        console.log("res is,", res);
      })
      .catch(err => {
        console.log("nope, error->", err);
      });
  }

  render() {
    return (
      <div>
        {this.state.related.map(item => (
          <RelatedEntry
            key={item.name}
            name={item.name}
            desc={item.desc}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<Related />, document.getElementById("Related"));

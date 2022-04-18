import React from 'react';

export default function Detail(props) {
  console.log(props);
  return <span>Описание фильма</span>;
}

// /* eslint-disable react/prop-types */
// import React from "react";

// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//   }
//   render() {
//     const { location } = this.props;
//     if (location.state) {
//       return <span>{location.state.title}</span>;
//     } else {
//       return null;
//     }
//   }
// }

// export default Detail;

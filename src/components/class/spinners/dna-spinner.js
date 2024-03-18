import { Component } from "react";
import { DNA } from "react-loader-spinner";
class DNASpinner extends Component {
  render() {
    return (
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }
}
export default DNASpinner

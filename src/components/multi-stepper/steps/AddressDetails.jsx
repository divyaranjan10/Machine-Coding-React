const AddressDetails = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2>Address Details</h2>

      <div className="btn-container">
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default AddressDetails;

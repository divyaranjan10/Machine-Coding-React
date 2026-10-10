const PersonalDetails = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2>Personal Details</h2>

      <div className="btn-container">
        <button onClick={prevStep} disabled>
          Previous
        </button>

        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default PersonalDetails;

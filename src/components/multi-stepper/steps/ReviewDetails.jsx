const ReviewDetails = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2>Review Details</h2>

      <div className="btn-container">
        <button onClick={prevStep}>Previous</button>

        <button onClick={nextStep} disabled>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewDetails;

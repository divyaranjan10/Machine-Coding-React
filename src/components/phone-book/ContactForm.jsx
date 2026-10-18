const ContactForm = ({ contactDetails, setContactDetails, handleSubmit }) => {
  return (
    <div>
      <div>Phone Book</div>
      <div>Add Contact</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          First Name:
          <input
            type="text"
            id="first-name"
            value={contactDetails.firstName}
            onChange={(e) =>
              setContactDetails((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
        </label>

        <label htmlFor="last-name">
          Last Name:
          <input
            type="text"
            id="last-name"
            value={contactDetails.lastName}
            onChange={(e) =>
              setContactDetails((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />
        </label>

        <label htmlFor="phone-number">
          Phone Number:
          <input
            type="number"
            id="tel"
            value={contactDetails.phone}
            onChange={(e) =>
              setContactDetails((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
          />
        </label>

        <button
          className="bg-amber-400 p-2 border rounded-sm my-2"
          type="submit"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { useState } from "react";

const ContactPage = () => {
  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [contacts, setContacts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setContacts((prev) => [...prev, { ...contactDetails, id: Date.now() }]);

    setContactDetails({
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  return (
    <>
      <ContactForm
        contactDetails={contactDetails}
        setContactDetails={setContactDetails}
        handleSubmit={handleSubmit}
      />

      <ContactTable contacts={contacts} />
    </>
  );
};

export default ContactPage;

const ContactTable = ({ contacts }) => {
  const sortedContacts = [...contacts].sort((a, b) =>
    a.lastName.localeCompare(b.lastName, undefined, {
      sensitivity: "base",
    }),
  );

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>

      <tbody>
        {sortedContacts.map((tdata) => (
          <tr key={tdata.id}>
            <td>{tdata.firstName}</td>
            <td>{tdata.lastName}</td>
            <td>{tdata.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;

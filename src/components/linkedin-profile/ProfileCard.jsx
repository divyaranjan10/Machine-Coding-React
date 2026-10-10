import { memo } from "react";

const ProfileCard = memo(function ProfileCard({
  user,
  isPending,
  handleConnectionStatus,
}) {
  return (
    <div className="border">
      {console.log("first")}
      <img src={user?.img} alt="" />
      <h6>{user.firstName + " " + user.lastName}</h6>
      <h6>{user.company.name}</h6>
      <button
        className="border p-1 cursor-pointer"
        onClick={() => handleConnectionStatus(user.id)}
      >
        {isPending ? "Pending" : "Connect"}
      </button>
    </div>
  );
});

export default ProfileCard;

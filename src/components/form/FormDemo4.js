import React, { useState } from "react";

const initialUsers = [
  {
    fName: "sanjay",
    lName: "samantra",
    skills: [
      { skillname: "HTML", exp: 5 },
      { skillname: "CSS", exp: 4 },
    ],
  },
];
const emptyUser = {
  fName: "",
  lName: "",
  skills: [],
};
const emptySkill = { skillname: "New Skill", exp: 0 };

export default function FormDemo4() {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, emptyUser]);
  };
  const addSkill = (userInd) => {
    users[userInd].skills.push(emptySkill);
    console.log(users)
    setUsers([...users]);
  };

  return (
    <div>
      <form>
        {users.map((user, userInd) => {
          return (
            <div key={userInd} className="border p-2 m-2">
              First Name:
              <input
                name="fName"
                placeholder="First Name"
                value={user.fName}
                onChange={(e) => {}}
              />
              Last Name:
              <input
                name="lName"
                placeholder="Last Name"
                value={user.lName}
                onChange={(e) => {}}
              />
              <br />
              Skills :
              {user.skills.map((skill, skillInd) => {
                return (
                  <>
                    {skill.skillname}-{skill.exp},
                  </>
                );
              })}
              <input placeholder="skillName" />
              <input placeholder="experience" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addSkill(userInd);
                }}
                className="m-2"
              >
                Add Skill
              </button>
            </div>
          );
        })}
        <button onClick={addUser} className="m-2">
          Add User
        </button>
      </form>
    </div>
  );
}

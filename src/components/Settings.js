import React, { useState } from "react";
import "../style/Settings.css";

function Settings() {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "Daniel Acme", initials: "DA" },
    { id: 2, name: "Ragip Diler", initials: "RD" },
    { id: 3, name: "Nouri Cshain", initials: "NC" },
    { id: 4, name: "Kylian Mbappe", initials: "KM" },
  ]);

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const removeMember = (memberId) => {
    setMembers(members.filter((member) => member.id !== memberId));
  };
  return (
    <div className="s-container">
      <div className="container-upper">
        <div className="settings-container">
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className="settings-subtitle">
          <p className="settings-title-text">Settings</p>
          <span className="settings-subtitle-text-s">
            Inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </span>
        </div>
      </div>
      <div className="lower-container">
        <div className="btn-grp">
          <button className="btn-1">General</button>
          <button className="btn-1">Biling</button>
          <button className="btn-1">Notifications</button>
          <button className="btn-1">Team</button>
        </div>
        <div className="your-teams">
          <p className="your-teams-text">Your Teams</p>
          <button className="team-btn">
            <i className="fa-solid fa-plus"></i> Add Team Members
          </button>
        </div>
        <div className="team-form">
          <b>Change your team</b>
          <div className="form-field">
            <select name="" id="">
              <option value="team Name">Team Name</option>
              <option value="team1">Team 1</option>
              <option value="team2">Team 2</option>
            </select>
          </div>
          <b>Members</b>
          <ul className="member-list">
            {members.map((member) => (
              <li key={member.id} className="member-item">
                <div className="member-info">
                  <span className="member-initials">{member.initials}</span>
                  <span className="member-name">{member.name}</span>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeMember(member.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Settings;

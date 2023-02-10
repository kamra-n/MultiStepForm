import { FormsContainer } from "./FormsContainer";

export const UserForm = ({
  firstName,
  lastName,
  age,
  handleChange,
  errors,
}) => {
  return (
    <FormsContainer title="User Details">
      <label>Name</label>
      <input
        type="text"
        autoFocus
        name="firstName"
        value={firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p>{errors.firstName}</p>}
      <label>Last Name</label>
      <input
        type="text"
        autoFocus
        name="lastName"
        value={lastName}
        onChange={handleChange}

      />
      {errors.lastName && <p>{errors.lastName}</p>}

      <label>Age</label>
      <input
        type="number"
        name="age"
        autoFocus
        value={age}
        onChange={handleChange}

      />
      {errors.age && <p>{errors.age}</p>}
    </FormsContainer>
  );
};

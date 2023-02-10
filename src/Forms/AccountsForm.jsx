import React from "react";
import { FormsContainer } from "./FormsContainer";
export const AccountsForm = ({ password, email, handleChange, errors }) => {
  return (
    <FormsContainer title="Accounts Details">
      <label>Email</label>
      <input
        type="email"
        name="email"
        autoFocus
        value={email}
        onChange={handleChange}
        // onChange={(e) => updateFields({ email: e.target.value })}
      />

      {errors.email && <p>{errors.email}</p>}

      <label>Password</label>
      <input
        type="Password"
        autoFocus
        name="password"
        value={password}
        onChange={handleChange}

        // onChange={(e) => updateFields({ password: e.target.value })}
      />

      {errors.password && <p>{errors.password}</p>}
    </FormsContainer>
  );
};

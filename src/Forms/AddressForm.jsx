import { FormsContainer } from "./FormsContainer";

export const AddressForm = ({
  street,
  city,
  zip,
  state,
  handleChange,
  errors,
}) => {
  return (
    <FormsContainer title="Address Details">
      <label>Street</label>
      <input
        type="text"
        autoFocus
        name="street"
        value={street}
        onChange={handleChange}

        // onChange={(e) => updateFields({ street: e.target.value })}
      />
      {errors.street && <p>{errors.street}</p>}

      <label>City</label>
      <input
        type="text"
        autoFocus
        name="city"
        value={city}
        onChange={handleChange}

        // onChange={(e) => updateFields({ city: e.target.value })}
      />
      {errors.city && <p>{errors.city}</p>}

      <label>State</label>
      <input
        type="text"
        autoFocus
        name="state"
        value={state}
        onChange={handleChange}

        // onChange={(e) => updateFields({ state: e.target.value })}
      />

      {errors.state && <p>{errors.state}</p>}

      <label>zip</label>
      <input
        type="text"
        name="zip"
        autoFocus
        value={zip}
        onChange={handleChange}

        // onChange={(e) => updateFields({ zip: e.target.value })}
      />
      {errors.zip && <p>{errors.zip}</p>}
    </FormsContainer>
  );
};

export const registerFormConfig = [
  {
    variable: "name",
    inputType: "text",
    labelText: "Your name",
    validation: {
      required: "This is required field",
      minLength: { value: 3, message: "Name minimum length is 3" },
    },
  },
  {
    variable: "email",
    inputType: "email",
    labelText: "Enter email",
    validation: {
      required: "This is required field",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Not valid email",
      },
    },
  },
  {
    variable: "password",
    inputType: "password",
    labelText: "Enter password",
    validation: {
      required: "This is required field",
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,
        message: "Not valid password",
      },
      minLength: { value: 8, message: "Too short password" },
    },
  },
];

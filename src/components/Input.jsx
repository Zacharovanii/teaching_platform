import React from "react";

function Input({ inputData, hook, errorData, ...props }) {
  const { variable, inputType, labelText } = inputData;

  return (
    <div className="mb-2">
      <label
        htmlFor={variable}
        className="block text-sm font-medium text-white"
      >
        {labelText}
      </label>
      <input
        className={`
				w-full mt-1 py-1 pl-2
				bg-slate-600/50 text-white/70 caret-white/40
				outline-none border-2 rounded-lg
				${errorData ? "border-red-500/60" : "border-transparent"}
				`}
        type={inputType}
        id={variable}
        name={variable}
        {...hook}
        {...props}
      />
      {errorData && (
        <p className="mt-1 text-sm text-red-500">{errorData.message}</p>
      )}
    </div>
  );
}

export default Input;

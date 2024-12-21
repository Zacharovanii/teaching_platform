import React from "react";
import RegisterForm from "../components/RegisterForm";
import ThemeToggle from "../components/ThemeToggle";
import TranslationToggle from "../components/TranslationToggle";

function Registration() {
  return (
    <section
      className="
			flex flex-col h-screen w-screen
			justify-center items-center font-mono
			bg-purple-100/50 dark:bg-gray-900"
    >
      <h1 className="block w-full mb-6 text-center text-white text-6xl font-bold">
        Znanium
      </h1>
      <RegisterForm />
      <ThemeToggle />
      <TranslationToggle />
    </section>
  );
}

export default Registration;

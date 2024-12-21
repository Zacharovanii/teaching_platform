import { useForm } from "react-hook-form";
import Input from "./Input";
import { registerFormConfig } from "../formConfigs/registerFormConfig";
import { useTranslation } from "react-i18next";

function RegisterForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onRegisterSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div
      className="flex flex-col items-center bg-gray-800 bg-opacity-80
			w-3/5 h-fit py-6 px-3 border rounded-lg
			border-gray-700 shadow-lg
			xxs:w-11/12 xs:w-4/5 sm:w-3/5 md:w-2/5

			"
    >
      <p
        className="w-4/5 mx-auto mt-2 mb-3
				text-center text-white
				font-semibold tracking-tighter
				xxs:text-lg xs:text-2xl 
				lg:text-2xl
				xxl:text-4xl"
      >
        {t("register.title")}
      </p>
      <form
        onSubmit={handleSubmit(onRegisterSubmit)}
        className="w-full h-full mt-1"
      >
        <div className="w-4/5 mx-auto text-white mb-4">
          {registerFormConfig.map(({ variable, inputType, validation }) => (
            <Input
              key={variable}
              inputData={{
                variable,
                inputType,
                labelText: t(`register.${variable}`),
              }}
              hook={{ ...register(variable, validation) }}
              errorData={errors[variable]}
            />
          ))}
        </div>

        <p className="block w-4/5 mx-auto text-white/40">
          {t("register.terms_text")}
          <a href="*" className="text-blue-700/50 hover:text-cyan-600">
            {" "}
            {t("register.terms_url")}
          </a>
        </p>
        <button
          type="submit"
          className="w-3/5 bg-purple-800 block
					py-1.5 rounded-lg mx-auto mt-7 mb-4
					border-2 border-transparent
					text-white
					disabled:bg-opacity-50 disabled:text-opacity-50
					hover:border-purple-400/50
				"
          disabled={isSubmitting}
          onClick={() => console.log("click")}
        >
          {isSubmitting ? "Loading..." : t("register.submit")}
        </button>
      </form>

      <div className="flex flex-row justify-between w-4/5 text-white/40">
        <p>{t("register.already_have")}</p>
        <p className="text-blue-700/50 hover:text-cyan-600">
          {t("register.login")}
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;

interface LoginFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    username: string;
    password: string;
  };
}

function LoginForm({ handleSubmit, handleChange, formData }: LoginFormProps) {
  return (
    <form className={tw_form} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          className="h-10 rounded-md px-4"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="h-10 rounded-md px-4"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button className={tw_submitButton} type="submit">
        Sign up
      </button>
    </form>
  );
}

export default LoginForm;

const tw_submitButton = [
  "sm:self-center",
  "bg-green-700",
  "font-semibold",
  "rounded-lg",
  "border-black",
  "w-32",
  "h-10",
  "lg:w-40",
  "lg:h-12",
  "mt-8",
].join(" ");

const tw_form = ["flex", "flex-col", "gap-4", "sm:w-1/2", "lg:w-1/3"].join(" ");

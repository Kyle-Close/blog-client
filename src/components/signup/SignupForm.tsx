interface SignupFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    username: string;
    password: string;
    confirmPassword: string;
    isAuthor: boolean;
  };
}

function SignupForm({ handleSubmit, handleChange, formData }: SignupFormProps) {
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="h-10 rounded-md px-4"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-green-500 rounded-lg border-black w-40 h-12 mt-8"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
}

export default SignupForm;

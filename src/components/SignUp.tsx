import Button from './Button';

function SignUp() {
  return (
    <div className="mt-4 flex w-full items-center">
      <input
        type="text"
        className="text-darkprimary ring-none inline flex-1 p-4 outline-none"
        placeholder="your@email.com"
      />
      <Button className="w-fit p-4">Sign Up</Button>
    </div>
  );
}

export default SignUp;

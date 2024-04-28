import Button from './Button';
type SignUpProps = {
  invert?: boolean;
};

function SignUp({ invert }: SignUpProps) {
  return (
    <div className="mt-4 flex w-full items-center ">
      <input
        type="text"
        className={`${invert ? 'bg-primary text-white placeholder:text-white' : 'text-darkprimary bg-side placeholder:text-darkprimary'}  ring-none inline flex-1 p-4 outline-none`}
        placeholder="your@email.com"
      />
      <Button
        className={` ${invert ? 'bg-side text-darkprimary hover:bg-side' : 'bg-darkprimary text-side'}w-fit p-4`}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default SignUp;

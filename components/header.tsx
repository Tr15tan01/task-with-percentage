const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-4xl">🔐 auth</h1>
      <p>{label}</p>
    </div>
  );
};
export default Header;

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-12 items-center justify-center bg-sky-700">
      {children}
    </div>
  );
};
export default ProtectedLayout;

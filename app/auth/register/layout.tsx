const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-slate-300">
      {children}
    </div>
  );
};
export default AuthLayout;
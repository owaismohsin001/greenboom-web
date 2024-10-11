const Loader = ({ isLoading = true, children }) => {
  return (
    <>
      {isLoading && (
        <div className="flex h-screen items-center justify-center bg-white">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      )}
      {children}
    </>
  );
};

export default Loader;

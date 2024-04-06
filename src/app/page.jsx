import AuthForm from "../components/AuthForm";

export default function Home() {
  return (
    <div className=" bg-gray-900 min-h-screen text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to your Watch List
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Your personal space to curate and manage your favorite shows and
          movies.
          <br />
          Sign in to add your favorite show today
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="w-full flex justify-between items-center mx-auto navbar py-10 px-10 bg-teal-200">
      <Link href="/">
        <h1 className="text-2xl">Productive Minds</h1>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <p className=" text-lg py-2 px-4 bg-cyan-600 text-white rounded-lg font-medium ml-8">
              Join Now
            </p>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="font-medium bg-cyan-600 text-white py-2 px-4 ml-5 rounded-mg textx-sm">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}

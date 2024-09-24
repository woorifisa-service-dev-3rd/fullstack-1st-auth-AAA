import { SignIn } from "./components/auth/signin-button";
import { SignOut } from "./components/auth/signout-button";

export default function Home() {
  return (
    <div>
      <p>Main page</p>
      <SignIn />
      <SignOut />
    </div>
  );
}

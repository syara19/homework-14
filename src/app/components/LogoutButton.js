export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/logout", {
        method: "POST",
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleLogout} className="btn btn-ghost btn-sm">Logout</button>;
}

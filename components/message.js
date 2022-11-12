export default function Message({ children, avatar, username, description }) {
  return (
    <div className="bg-purple-50 p-8 border-b-2 rounded-lg max-w-lg">
      <div className="flex items-center gap-2">
        <img src={avatar} className="w-10 rounded-full" />
        <h2>{username}</h2>
      </div>
      <div className="py-6">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

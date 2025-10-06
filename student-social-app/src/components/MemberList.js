export default function MemberList({ members }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {members.map((m) => (
        <div key={m.id} className="bg-white rounded shadow p-3 text-center">
          <p className="font-medium">{m.name}</p>
          <p className="text-sm text-gray-500">{m.year}</p>
        </div>
      ))}
    </div>
  );
}

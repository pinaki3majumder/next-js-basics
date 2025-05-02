type PageProps = {
  params: { id: string };
};

const UserDetailPage = async ({ params }: PageProps) => {
  const { id } = params; // Destructure first

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return (
    <div>
      <h1>User Detail</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserDetailPage;

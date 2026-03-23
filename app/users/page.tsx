interface User {
    id: number,
    name: string
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const Users: User[] = await res.json();
    return (
        <>
            <p>{new Date().toLocaleTimeString()}</p>
            <h1>User</h1>
            <ul>
                {
                    Users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </>
    )
}

export default UsersPage
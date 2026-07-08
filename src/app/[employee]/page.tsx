interface PageProps {
    params: {
        user: string;
    };
    searchParams?: {
        [key: string]: string | string[] | undefined;
    };
}

export default function UserPage({ params }: PageProps) {
    const { user } = params;

    return (
        <div>
            <h1>Профиль пользователя: {user}</h1>
            <p>Параметр: {user}</p>
        </div>
    );
}
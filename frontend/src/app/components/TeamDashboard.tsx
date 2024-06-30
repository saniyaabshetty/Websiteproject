export default function TeamDashboard() {
    const members = [
        { id: 1, name: "John Doe", profession: "Software Engineer" },
        { id: 2, name: "Jane Smith", profession: "Data Scientist" },
        { id: 3, name: "Alice Johnson", profession: "UX Designer" },
        { id: 4, name: "Bob Williams", profession: "Product Manager" },
        { id: 5, name: "Charlie Brown", profession: "Marketing Specialist" },
        { id: 6, name: "Alice Johnson", profession: "UX Designer" },
        { id: 7, name: "Bob Williams", profession: "Product Manager" },
        { id: 8, name: "Charlie Brown", profession: "Marketing Specialist" },
    ];

    return (
        <div className="w-full mt-[10vh] max-w-md mx-auto">
            <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                            >
                                Sr. No
                            </th>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                            >
                                Members
                            </th>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                scope="col"
                            >
                                Profession
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900">
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{member.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{member.profession}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

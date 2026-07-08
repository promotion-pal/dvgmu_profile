import { FC } from "react"

interface ProfileItemProps {
    item: PROFILES
}
const ProfileItem: FC<ProfileItemProps> = ({ }) => {
    return <section className="min-h-screen bg-[#0f0f11] text-gray-200 p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
            <div className="text-xs text-gray-600 mb-8 tracking-wider">
                <span className="hover:text-gray-400 transition-colors cursor-pointer">Dashboard</span>
                <span className="mx-2">/</span>
                <span className="hover:text-gray-400 transition-colors cursor-pointer">Employees</span>
                <span className="mx-2">/</span>
                <span className="text-gray-400">{employee.id}</span>
            </div>

            <div className="bg-[#1a1a1e] rounded-2xl border border-[#2a2a2e] p-6 md:p-8 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                        {employee.avatar ? (
                            <img
                                src={employee.avatar}
                                alt={employee.name}
                                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#3a3a3e]"
                            />
                        ) : (
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-medium text-white border-2 border-[#3a3a3e]">
                                {getInitials(employee.name)}
                            </div>
                        )}
                    </div>

                    {/* Информация */}
                    <div className="flex-1 space-y-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-100">
                                    {employee.name}
                                </h1>
                                <p className="text-gray-400 text-sm md:text-base mt-1">
                                    {employee.position}
                                </p>
                            </div>
                            <span className="px-3 py-1 text-xs font-medium bg-emerald-600/20 text-emerald-400 rounded-full border border-emerald-600/30">
                                {employee.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {employee.email}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {employee.phone}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {employee.location}
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Joined {employee.joinDate}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Разделитель */}
                <div className="my-6 border-t border-[#2a2a2e]" />

                {/* Статистика */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-[#121214] rounded-xl border border-[#2a2a2e]">
                        <p className="text-2xl font-semibold text-gray-100">{employee.stats.tasksCompleted}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Tasks Completed</p>
                    </div>
                    <div className="text-center p-3 bg-[#121214] rounded-xl border border-[#2a2a2e]">
                        <p className="text-2xl font-semibold text-gray-100">{employee.stats.projectsActive}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Active Projects</p>
                    </div>
                    <div className="text-center p-3 bg-[#121214] rounded-xl border border-[#2a2a2e]">
                        <p className="text-2xl font-semibold text-gray-100">{employee.stats.yearsExperience}+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
                    </div>
                </div>

                {/* Навыки */}
                <div className="mb-6">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {employee.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 text-xs bg-[#121214] text-gray-300 rounded-lg border border-[#2a2a2e] hover:border-[#3a3a3e] transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Проекты */}
                <div>
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Projects</h2>
                    <div className="space-y-2">
                        {employee.projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-[#121214] rounded-xl border border-[#2a2a2e] hover:border-[#3a3a3e] transition-colors"
                            >
                                <div>
                                    <p className="text-sm text-gray-200">{project.name}</p>
                                    <p className="text-xs text-gray-500">{project.role}</p>
                                </div>
                                <span className={`px-2.5 py-1 text-xs rounded-full border ${project.status === 'In Progress'
                                    ? 'bg-blue-600/20 text-blue-400 border-blue-600/30'
                                    : project.status === 'Completed'
                                        ? 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30'
                                        : 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export { ProfileItem }
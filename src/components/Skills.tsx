import React from 'react';
import { Code2, Database, Smartphone, Wrench, Cloud } from 'lucide-react';

const SkillSection = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="h-5 w-5 text-red-500 mr-2" />
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-100"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillCategories = [
    {
      title: 'フロントエンド',
      skills: ['TypeScript', 'Next.js', 'React', 'Vue'],
      icon: Code2,
    },
    {
      title: 'バックエンド',
      skills: ['Golang', 'TypeScript', 'gRPC', 'GraphQL'],
      icon: Database,
    },
    {
      title: 'モバイル',
      skills: ['Flutter', 'React Native'],
      icon: Smartphone,
    },
    {
      title: 'インフラ',
      skills: ['AWS', 'Docker', 'Terraform'],
      icon: Cloud,
    },
    {
      title: '開発ツール',
      skills: ['Git', 'CI/CD', 'テスト自動化'],
      icon: Wrench,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-red-500 text-sm font-medium">Skills</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">技術スタック</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillSection
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
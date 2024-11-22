import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'manamu株式会社',
    position: '代表取締役',
    period: '現在',
    description: '受託案件の開発に従事',
  },
  {
    company: 'AGRI-PASS株式会社',
    position: 'フルスタックエンジニア',
    period: '2023',
    description: '大分でのヒアリング、要件定義、開発など一期通貫で開発',
  },
  {
    company: 'SKY株式会社',
    position: 'フロントエンド、バックエンドエンジニア',
    period: '2022',
    description: '人事系webアプリの開発をインターンとして1年経験',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-red-500 text-sm font-medium">About</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">経歴</h2>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-3 -bottom-9 w-px bg-gray-200" />
              )}
              <div className="absolute left-0 top-2 rounded-full bg-red-100 p-1">
                <Briefcase className="h-4 w-4 text-red-500" />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-red-500 mb-2">{exp.position}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
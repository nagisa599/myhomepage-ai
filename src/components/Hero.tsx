import React from 'react';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-red-500 text-base font-normal mb-4">Mission Statement</span>
            <span className="block">技術で価値を創造し、</span>
            <span className="block">可能性を広げる</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            フルスタックエンジニアとして、最新技術を駆使してプロダクト開発に取り組んでいます。
            2年間のソフトウェア開発経験を活かし、現在は受託開発会社の代表として、
            クライアントの課題解決に向き合っています。
          </p>
        </div>
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
import React from "react";

const MEMBERS = [
  {
    img: "/images/research1.jpg",
    name: "김연구",
    title: "Lead Researcher",
    desc: "로봇 시스템 및 제어 알고리즘 전문가. 자율주행 및 협업 로봇 연구 담당."
  },
  {
    img: "/images/research2.jpg",
    name: "이연구",
    title: "AI Researcher",
    desc: "컴퓨터 비전/딥러닝 연구자. 물체 인식 및 로봇-환경 상호작용 모델 개발."
  },
  {
    img: "/images/research3.jpg",
    name: "박연구",
    title: "Systems Engineer",
    desc: "하드웨어 통합 및 시스템 아키텍처 담당. 로봇 안정성/성능 최적화."
  }
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">연구진 소개</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          저희 팀은 로봇 기술의 연구와 실용화에 집중하는 전문 인력으로 구성되어 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERS.map((m, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 w-full overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{m.name}</h3>
                <p className="text-sm text-blue-600 mb-2">{m.title}</p>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
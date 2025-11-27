import React from 'react';
import { UseCase } from '../types';
import { ChevronDown } from 'lucide-react';

const cases: UseCase[] = [
  { id: 1, category: '제조', categoryColor: 'blue', title: '팔레타이징', image: 'https://images.unsplash.com/photo-1565514020176-db7935496462?auto=format&fit=crop&q=80&w=400' },
  { id: 2, category: '제조', categoryColor: 'blue', title: '레이저 용접', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=400' },
  { id: 3, category: '제조', categoryColor: 'blue', title: '샌딩', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400' },
  { id: 4, category: '제조', categoryColor: 'blue', title: '머신텐딩', image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=400' },
  { id: 5, category: '서비스', categoryColor: 'green', title: 'Dr.Presso', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400' },
  { id: 6, category: '서비스', categoryColor: 'green', title: '튀김', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400' },
  { id: 7, category: '서비스', categoryColor: 'green', title: '공항 수하물 핸들링', image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=400' },
  { id: 8, category: '서비스', categoryColor: 'green', title: '전기차 충전', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=400' },
  { id: 9, category: '이벤트 & 전시', categoryColor: 'gray', title: '입생로랑 팝업 스토어 이벤트', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400' },
  { id: 10, category: '이벤트 & 전시', categoryColor: 'gray', title: '디올 사진촬영 이벤트', image: 'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?auto=format&fit=crop&q=80&w=400' },
  { id: 11, category: '이벤트 & 전시', categoryColor: 'gray', title: '마산 로봇랜드 전시', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400' },
  { id: 12, category: '이벤트 & 전시', categoryColor: 'gray', title: '미디어 아트 전시', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">Use cases</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
                    로봇 도입으로 일하는 방식이<br />
                    새로워집니다.
                </h2>
                <p className="text-slate-600">
                    <span className="text-blue-600 font-bold cursor-pointer hover:underline">다양한 성공사례</span>를 통해 일터를 혁신할 새로운 아이디어를 얻어보세요.
                </p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-gray-300 rounded hover:bg-gray-50 transition mt-4 md:mt-0">
                더 많은 도입사례 <ChevronDown className="w-4 h-4" />
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                 {/* Floating badge inside image for mobile style, or overlay effect */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="flex items-center gap-3">
                 <span className={`
                    text-[10px] px-2 py-0.5 border rounded-sm font-medium
                    ${item.categoryColor === 'blue' ? 'border-blue-600 text-blue-600' : ''}
                    ${item.categoryColor === 'green' ? 'border-green-600 text-green-600' : ''}
                    ${item.categoryColor === 'gray' ? 'border-gray-600 text-gray-600' : ''}
                 `}>
                    {item.category}
                 </span>
                 <h3 className="text-slate-900 font-medium group-hover:text-blue-700 transition-colors">
                    {item.title}
                 </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
            <button className="w-full flex justify-center items-center gap-2 px-6 py-3 border border-gray-300 rounded hover:bg-gray-50 transition">
                더 많은 도입사례 <ChevronDown className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
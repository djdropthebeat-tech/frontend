export interface NavItem {
  label: string;
  href: string;
}

export interface UseCase {
  id: number;
  category: string;
  categoryColor: 'blue' | 'green' | 'gray';
  title: string;
  image: string;
}

export interface Product {
  id: number;
  series: string;
  description: string;
  models: string[];
  image: string;
}

export interface Solution {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  theme: 'light' | 'dark';
}
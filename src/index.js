import React from 'react';
import ReactDOM from 'react-dom/client';
import FilterComponent from './filter-component/FilterComponent';

const data = {
	buttonName: 'жк, округ, район, метро',
	tabs: ['жк', 'округ', 'район', 'метро'],
	items: [
		{
			id: '1',
			tab: 'жк',
			name: 'Искра',
			selected: false,
		},
		{
			id: '2',
			tab: 'жк',
			name: 'Созвездие',
			selected: false,
		},
		{
			id: '3',
			tab: 'жк',
			name: 'Лес',
			selected: false,
		},
		{
			id: '4',
			tab: 'жк',
			name: 'Юность',
			selected: false,
		},
		{
			id: '5',
			tab: 'жк',
			name: 'Ампир',
			selected: false,
		},
		{
			id: '6',
			tab: 'жк',
			name: 'Форсаж',
			selected: false,
		},
		{
			id: '7',
			tab: 'жк',
			name: 'Лагуна',
			selected: false,
		},
		{
			id: '8',
			tab: 'жк',
			name: 'Скай',
			selected: false,
		},
		{
			id: '9',
			tab: 'округ',
			name: 'Центральный',
			selected: false,
		},
		{
			id: '10',
			tab: 'округ',
			name: 'Северный',
			selected: false,
		},
		{
			id: '11',
			tab: 'округ',
			name: 'Северо-Восточный',
			selected: false,
		},
		{
			id: '12',
			tab: 'округ',
			name: 'Восточный',
			selected: false,
		},
		{
			id: '13',
			tab: 'округ',
			name: 'Юго-Восточный',
			selected: false,
		},
		{
			id: '14',
			tab: 'округ',
			name: 'Южный',
			selected: false,
		},
		{
			id: '15',
			tab: 'район',
			name: 'Арбат',
			selected: false,
		},
		{
			id: '16',
			tab: 'район',
			name: 'Пресненский',
			selected: false,
		},
		{
			id: '17',
			tab: 'район',
			name: 'Лефортово',
			selected: false,
		},
		{
			id: '18',
			tab: 'район',
			name: 'Басманный',
			selected: false,
		},
		{
			id: '19',
			tab: 'район',
			name: 'Хамовники',
			selected: false,
		},
		{
			id: '20',
			tab: 'район',
			name: 'Замоскворечье',
			selected: false,
		},
		{
			id: '21',
			tab: 'район',
			name: 'Таганский',
			selected: false,
		},
		{
			id: '22',
			tab: 'район',
			name: 'Тверской',
			selected: false,
		},
		{
			id: '23',
			tab: 'район',
			name: 'Красносельский',
			selected: false,
		},
		{
			id: '24',
			tab: 'район',
			name: 'Мещанский',
			selected: false,
		},
		{
			id: '25',
			tab: 'метро',
			name: 'Краснопресненская',
			selected: false,
		},
		{
			id: '26',
			tab: 'метро',
			name: 'Парк Культуры',
			selected: false,
		},
		{
			id: '27',
			tab: 'метро',
			name: 'Таганская',
			selected: false,
		},
		{
			id: '28',
			tab: 'метро',
			name: 'Кропоткинская',
			selected: false,
		},
		{
			id: '29',
			tab: 'метро',
			name: 'Баррикадная',
			selected: false,
		},
		{
			id: '30',
			tab: 'метро',
			name: 'Курская',
			selected: false,
		},
		{
			id: '31',
			tab: 'метро',
			name: 'Чеховская',
			selected: false,
		},
		{
			id: '32',
			tab: 'метро',
			name: 'Тверская',
			selected: false,
		},
	],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilterComponent data={data} />);

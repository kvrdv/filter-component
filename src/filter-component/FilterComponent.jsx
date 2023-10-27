import { useEffect, useState } from 'react';
import Button from './button/Button';
import DropDown from './drop-down/DropDown';
import styles from './FilterComponent.module.scss';
import {
	isShowContext,
	countContext,
	activeTabContext,
	checkboxesContext,
} from './context';

function FilterComponent({ data }) {
	const [isShow, setIsShow] = useState(false);
	const [count, setCount] = useState(0);
	const [activeTab, setActiveTab] = useState('жк');
	const [checkboxes, setCheckboxes] = useState(data.items);

	useEffect(() => {
		const storedFormData = JSON.parse(
			localStorage.getItem('filter-component')
		);
		if (storedFormData !== null) {
			setCheckboxes(JSON.parse(JSON.stringify(storedFormData)));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('filter-component', JSON.stringify(checkboxes));
	}, [checkboxes]);

	return (
		<checkboxesContext.Provider value={{ checkboxes, setCheckboxes }}>
			<activeTabContext.Provider value={{ activeTab, setActiveTab }}>
				<isShowContext.Provider value={{ isShow, setIsShow }}>
					<countContext.Provider value={{ count, setCount }}>
						<div className={styles.filterComponent}>
							<Button
								buttonName={data.buttonName}
								count={count}
							/>
							<DropDown tabs={data.tabs} items={data.items} />
						</div>
					</countContext.Provider>
				</isShowContext.Provider>
			</activeTabContext.Provider>
		</checkboxesContext.Provider>
	);
}

export default FilterComponent;

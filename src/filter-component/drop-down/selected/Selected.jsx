import { useContext } from 'react';
import { activeTabContext, checkboxesContext } from '../../context';
import styles from './Selected.module.scss';
import cn from 'classnames';
import deleteLogo from './delete-logo.svg';

function Selected() {
	const { activeTab } = useContext(activeTabContext);
	const { checkboxes, setCheckboxes } = useContext(checkboxesContext);

	const showSelected =
		checkboxes.filter(
			({ tab, selected }) => tab === activeTab && selected === true
		).length === 0;

	const handleCheckboxChange = (event) => {
		let targetBox = checkboxes.find(
			({ name }) => event.target.parentElement.textContent === name
		);

		setCheckboxes((prevCheckboxes) => [
			...prevCheckboxes,
			(targetBox.selected = !targetBox.selected),
		]);
	};

	return (
		<div
			className={cn({
				[styles.hidden]: showSelected,
				[styles.selected]: true,
			})}
		>
			{checkboxes
				.filter(({ tab }) => tab === activeTab)
				.filter(({ selected }) => selected === true)
				.map(({ id, name, selected }) => {
					return (
						<div key={id}>
							<span>{name}</span>
							<img
								src={deleteLogo}
								alt="delete logo"
								className={styles.logo}
								draggable={false}
								onClick={handleCheckboxChange}
							/>
						</div>
					);
				})}
		</div>
	);
}

export default Selected;

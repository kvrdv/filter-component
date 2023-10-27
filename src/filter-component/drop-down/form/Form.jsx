import { useContext, useEffect } from 'react';
import {
	activeTabContext,
	checkboxesContext,
	countContext,
} from '../../context';
import styles from './Form.module.scss';

function Form() {
	const { activeTab } = useContext(activeTabContext);
	const { setCount } = useContext(countContext);
	const { checkboxes, setCheckboxes } = useContext(checkboxesContext);

	const handleCheckboxChange = (checkboxName) => {
		let targetBox = checkboxes.find(({ name }) => checkboxName === name);

		setCheckboxes((prevCheckboxes) => [
			...prevCheckboxes,
			(targetBox.selected = !targetBox.selected),
		]);
	};

	useEffect(() => {
		let calcCount = checkboxes.filter(
			({ selected }) => selected === true
		).length;

		setCount(calcCount);
	}, [checkboxes, setCount]);

	return (
		<div className={styles.list}>
			<form className={styles.form}>
				{checkboxes
					.filter(({ tab }) => tab === activeTab)
					.map(({ id, name, selected }) => {
						return (
							<label
								key={id}
								htmlFor={name}
								className={styles.label}
							>
								{name}
								<input
									type="checkbox"
									className={styles.checkbox}
									id={name}
									onChange={() => handleCheckboxChange(name)}
									checked={selected}
								/>
								<span className={styles.checked}></span>
							</label>
						);
					})}
			</form>
		</div>
	);
}

export default Form;

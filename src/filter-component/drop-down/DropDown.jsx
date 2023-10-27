import { useContext } from 'react';
import { isShowContext } from '../context';
import styles from './DropDown.module.scss';
import cn from 'classnames';
import Tabs from './tabs/Tabs';
import Selected from './selected/Selected';
import Form from './form/Form';

function DropDown({ tabs }) {
	const { isShow } = useContext(isShowContext);

	return (
		<div
			className={cn({
				[styles.dropDown]: true,
				[styles.hidden]: !isShow,
			})}
		>
			<div className={styles.mask}></div>
			<Tabs tabs={tabs} />
			<Selected />
			<Form />
		</div>
	);
}

export default DropDown;

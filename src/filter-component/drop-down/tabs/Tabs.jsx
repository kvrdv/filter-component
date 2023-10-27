import { useContext } from 'react';
import { activeTabContext } from '../../context';
import styles from './Tabs.module.scss';
import cn from 'classnames';

function Tabs({ tabs }) {
    const { activeTab, setActiveTab } = useContext(activeTabContext);

	return (
		<ul className={styles.tabs}>
			{tabs.map((element) => {
				return (
					<li
						className={cn({
							[styles.activeTab]: element === activeTab,
						})}
						key={element}
						onClick={(event) => {
							setActiveTab(event.target.textContent);
						}}
					>
						{element}
					</li>
				);
			})}
		</ul>
	);
}

export default Tabs;

import { useContext } from 'react';
import { isShowContext } from '../context';
import styles from './Button.module.scss';
import searchLogo from './search-logo.svg';
import cn from 'classnames';

function Button({ buttonName, count }) {
	const { isShow, setIsShow } = useContext(isShowContext);

	return (
		<button
		className={cn({
			[styles.button]: true,
			[styles.active]: isShow,
		})}
			onClick={() => setIsShow(!isShow)}
		>
			<div className={styles.info}>
				<img
					src={searchLogo}
					alt="search logo"
					className={styles.logo}
					draggable={false}
				/>
				<span className={styles.title}>{buttonName}</span>
			</div>
			{count > 0 ? <div className={styles.counter}>{count}</div> : null}
		</button>
	);
}

export default Button;

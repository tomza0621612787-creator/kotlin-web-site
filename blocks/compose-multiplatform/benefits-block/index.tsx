import cn from 'classnames';
import { createTextCn } from '@rescui/typography';
import styles from './benefits-block.module.css';

export const BenefitsBlock = () => {
    const textCn = createTextCn('light');
    return (
        <section className={cn(styles.benefits, 'ktl-layout', 'ktl-layout--center')}>
            <div className={styles.wrapper} data-testid={'benefits-block'}>
                <div className={styles.intro}>
                    <div className={cn(textCn('rs-h1'), styles.title)}>
                        Android skills. Every platform.
                    </div>
                    <div className={cn(textCn('rs-subtitle-2'), styles.subtitle)}>
                        Use your Jetpack Compose skills across platforms.
                    </div>
                    <div
                        className={textCn('rs-text-1', { hardness: 'hard' })}
                    >
                        Compose Multiplatform supports familiar APIs like state management, layout, and animations as well as Material components, making it easy to bring your Android architecture to other platforms.
                    </div>
                </div>

                <div className={styles.grid}>
                    <div className={cn(styles.card, styles.showcase)} />
                    <div className={cn(styles.card, styles.stat)} />
                    <div className={cn(styles.card, styles.stat)} />
                    <div className={cn(styles.card, styles.stat)} />
                </div>
            </div>
        </section>
    );
};

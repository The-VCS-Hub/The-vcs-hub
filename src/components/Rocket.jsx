import { motion } from 'framer-motion';

const Rocket = () => {
    return (
        <motion.div
            className="rocket-container"
            style={{
                position: 'absolute',
                right: '5%',
                top: '10%',
                zIndex: 0,
                pointerEvents: 'none', // Don't block clicks
                opacity: 0.1 // Subtle background element
            }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.15 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <motion.svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <path
                    d="M12 2.5C12 2.5 15.5 6 16.5 10.5C17.5 15 15.5 18.5 15.5 18.5H8.5C8.5 18.5 6.5 15 7.5 10.5C8.5 6 12 2.5 12 2.5Z"
                    fill="var(--color-primary)"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 18.5V21.5"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.5 18.5C8.5 18.5 7 20 6 20.5"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.5 18.5C15.5 18.5 17 20 18 20.5"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 6C12 6 12.5 7 12.5 8C12.5 9 12 10 12 10"
                    stroke="var(--color-bg-main)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* Flames */}
                <motion.path
                    d="M12 21.5L11 23L12 24L13 23L12 21.5Z"
                    fill="var(--color-accent)"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.svg>
        </motion.div>
    );
};

export default Rocket;

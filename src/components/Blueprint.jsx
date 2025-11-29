import { motion } from 'framer-motion';

const Blueprint = () => {
    return (
        <motion.div
            className="blueprint-container"
            style={{
                position: 'absolute',
                left: '5%',
                top: '15%',
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.15
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <motion.svg
                width="200"
                height="200"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Grid Lines */}
                <motion.path
                    d="M10 10 H90 M10 30 H90 M10 50 H90 M10 70 H90 M10 90 H90"
                    stroke="var(--color-primary)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M10 10 V90 M30 10 V90 M50 10 V90 M70 10 V90 M90 10 V90"
                    stroke="var(--color-primary)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Structure Drawing */}
                <motion.path
                    d="M30 70 L30 40 L50 20 L70 40 L70 70 Z"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
                />

                {/* Door */}
                <motion.path
                    d="M45 70 V55 H55 V70"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 2.5 }}
                />

                {/* Window */}
                <motion.circle
                    cx="50"
                    cy="40"
                    r="5"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
                />

                {/* Floating Elements */}
                <motion.g
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <circle cx="85" cy="15" r="2" fill="var(--color-accent)" />
                    <circle cx="15" cy="85" r="2" fill="var(--color-accent)" />
                </motion.g>
            </motion.svg>
        </motion.div>
    );
};

export default Blueprint;

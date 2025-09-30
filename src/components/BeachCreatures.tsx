import { motion } from 'motion/react';
import { useState } from 'react';

export function BeachCreatures() {
  const [clickedCreature, setClickedCreature] = useState<string | null>(null);

  const creatures = [
    { id: 'starfish-1', x: 10, delay: 0 },
    { id: 'crab-1', x: 25, delay: 1 },
    { id: 'shell-1', x: 40, delay: 2 },
    { id: 'starfish-2', x: 60, delay: 0.5 },
    { id: 'crab-2', x: 75, delay: 1.5 },
    { id: 'shell-2', x: 88, delay: 2.5 }
  ];

  const handleCreatureClick = (id: string) => {
    setClickedCreature(id);
    setTimeout(() => setClickedCreature(null), 1000);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
      {creatures.map((creature) => {
        const isStarfish = creature.id.includes('starfish');
        const isCrab = creature.id.includes('crab');
        const isShell = creature.id.includes('shell');
        const isClicked = clickedCreature === creature.id;

        return (
          <motion.div
            key={creature.id}
            className="absolute bottom-4 cursor-pointer pointer-events-auto"
            style={{ left: `${creature.x}%` }}
            animate={{
              y: [0, -8, 0],
              rotate: isCrab ? [0, 5, -5, 0] : [0, 10, 0]
            }}
            transition={{
              duration: 4 + creature.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: creature.delay
            }}
            whileHover={{ scale: 1.2, y: -15 }}
            onClick={() => handleCreatureClick(creature.id)}
          >
            {/* Starfish */}
            {isStarfish && (
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                animate={isClicked ? { rotate: 360, scale: [1, 1.5, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <defs>
                  <radialGradient id="starfishGradient">
                    <stop offset="0%" stopColor="#ff6b6b" />
                    <stop offset="100%" stopColor="#ff8787" />
                  </radialGradient>
                </defs>
                {/* Center */}
                <circle cx="16" cy="16" r="5" fill="url(#starfishGradient)" />
                {/* Arms */}
                {Array.from({ length: 5 }).map((_, i) => {
                  const angle = (i * 72 - 90) * (Math.PI / 180);
                  const x = 16 + Math.cos(angle) * 10;
                  const y = 16 + Math.sin(angle) * 10;
                  return (
                    <path
                      key={i}
                      d={`M 16 16 Q ${x} ${y - 2} ${x + Math.cos(angle) * 2} ${y + Math.sin(angle) * 2}`}
                      fill="url(#starfishGradient)"
                      stroke="#e63946"
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Texture dots */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <circle
                    key={`dot-${i}`}
                    cx={16 + Math.cos(i * 45 * Math.PI / 180) * 3}
                    cy={16 + Math.sin(i * 45 * Math.PI / 180) * 3}
                    r="0.5"
                    fill="#d00000"
                    opacity="0.6"
                  />
                ))}
              </motion.svg>
            )}

            {/* Crab */}
            {isCrab && (
              <motion.svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                animate={
                  isClicked
                    ? { x: [0, 10, -10, 0], rotate: [0, -10, 10, 0] }
                    : { x: [0, 2, 0] }
                }
                transition={
                  isClicked
                    ? { duration: 0.6 }
                    : { duration: 2, repeat: Infinity }
                }
              >
                <defs>
                  <linearGradient id="crabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b35" />
                    <stop offset="100%" stopColor="#f7931e" />
                  </linearGradient>
                </defs>
                {/* Body */}
                <ellipse cx="18" cy="16" rx="10" ry="8" fill="url(#crabGradient)" />
                {/* Left claw */}
                <motion.g
                  animate={{ rotate: isClicked ? [-20, 20, -20] : [-10, 10, -10] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ transformOrigin: '8px 12px' }}
                >
                  <ellipse cx="8" cy="12" rx="3" ry="2.5" fill="url(#crabGradient)" />
                  <path d="M 5 12 L 3 10 L 2 11" stroke="#ff6b35" strokeWidth="1.5" fill="none" />
                </motion.g>
                {/* Right claw */}
                <motion.g
                  animate={{ rotate: isClicked ? [20, -20, 20] : [10, -10, 10] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ transformOrigin: '28px 12px' }}
                >
                  <ellipse cx="28" cy="12" rx="3" ry="2.5" fill="url(#crabGradient)" />
                  <path d="M 31 12 L 33 10 L 34 11" stroke="#ff6b35" strokeWidth="1.5" fill="none" />
                </motion.g>
                {/* Eyes */}
                <circle cx="15" cy="14" r="1.5" fill="#ffffff" />
                <circle cx="15" cy="14" r="0.8" fill="#000000" />
                <circle cx="21" cy="14" r="1.5" fill="#ffffff" />
                <circle cx="21" cy="14" r="0.8" fill="#000000" />
                {/* Legs */}
                {[-3, -1, 1, 3].map((offset, i) => (
                  <motion.line
                    key={`leg-l-${i}`}
                    x1="12"
                    y1="20"
                    x2={8 + offset * 2}
                    y2="24"
                    stroke="#ff6b35"
                    strokeWidth="1"
                    animate={{ y2: [24, 26, 24] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
                {[-3, -1, 1, 3].map((offset, i) => (
                  <motion.line
                    key={`leg-r-${i}`}
                    x1="24"
                    y1="20"
                    x2={28 + offset * 2}
                    y2="24"
                    stroke="#ff6b35"
                    strokeWidth="1"
                    animate={{ y2: [24, 26, 24] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 + 0.25 }}
                  />
                ))}
              </motion.svg>
            )}

            {/* Shell */}
            {isShell && (
              <motion.svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                animate={isClicked ? { scale: [1, 1.3, 1], rotate: [0, 20, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <defs>
                  <linearGradient id="shellGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f4e1d2" />
                    <stop offset="50%" stopColor="#e6ccb2" />
                    <stop offset="100%" stopColor="#ddb892" />
                  </linearGradient>
                </defs>
                {/* Shell shape - spiral conch */}
                <path
                  d="M 14 4 Q 20 6 22 12 Q 22 18 18 24 Q 14 28 10 24 Q 6 18 8 12 Q 10 6 14 4 Z"
                  fill="url(#shellGradient)"
                  stroke="#c9a77c"
                  strokeWidth="1"
                />
                {/* Spiral lines */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M 14 ${6 + i * 3} Q ${16 + i} ${10 + i * 2} ${16 + i * 0.5} ${14 + i * 3}`}
                    stroke="#b8956a"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.6"
                  />
                ))}
                {/* Opening */}
                <ellipse cx="12" cy="22" rx="3" ry="4" fill="#b8956a" opacity="0.4" />
                {/* Ridges */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={`ridge-${i}`}
                    x1="14"
                    y1={8 + i * 2}
                    x2="18"
                    y2={10 + i * 2}
                    stroke="#a67c52"
                    strokeWidth="0.3"
                    opacity="0.5"
                  />
                ))}
              </motion.svg>
            )}

            {/* Ripple effect on click */}
            {isClicked && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#7fdbff]"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </motion.div>
        );
      })}

      {/* Sand bubbles (from crabs) */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#7fdbff]/30"
          style={{
            left: `${30 + i * 15}%`,
            bottom: `${8}%`
          }}
          animate={{
            scale: [0, 1, 0],
            y: [0, -15, -30],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 1.5 + 3
          }}
        />
      ))}
    </div>
  );
}
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cells } from "./cells";
import { BootSequence } from "./components/BootSequence";
import { Notebook } from "./components/Notebook";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!booted ? (
        <BootSequence key="boot" onDone={() => setBooted(true)} />
      ) : (
        <motion.div key="notebook" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Notebook cells={cells} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

import React, { useState, useEffect } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false);

  // Center the circle when enabled is false
  useEffect(() => {
    const circle = document.querySelector('.circle') as HTMLElement;
    if (circle && !enabled) {
      circle.style.left = '50%';
      circle.style.top = '50%';
      circle.style.transform = 'translate(-50%, -30%)';
    }
  }, [enabled]);

  // Update the circle position on mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const circle = document.querySelector('.circle') as HTMLElement;
      if (circle) {
        circle.style.left = `${event.clientX}px`;
        circle.style.top = `${event.clientY}px`;
      }
    };

    if (enabled) {
      window.addEventListener('pointermove', handleMouseMove);
    };
    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, [enabled]);

  // Hide cursor pointer when enabled mouse follower
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);
    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  return (
    <div className="project-mouse-follower">
      <div className="project-mouse-follower-info">
        <h1>Mouse Follower</h1>
        <p>Welcome to the Mouse Follower app!</p>
      </div>
      <div className="circle"/>
      <button 
        className={enabled ? 'disabled' : 'enabled' }
        onClick={() => setEnabled(!enabled)}
      >
        <span>{enabled ? 'Disable' : 'Enable'} Mouse Follower</span>
      </button>
    </div>
  )
}

export default App

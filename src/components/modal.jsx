import { useEffect } from "react";

export default function Modal({ width = 30, title, children, open, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <>
      {open 
      ?(
        <>
          <div className="fixed inset-0 bg-gray-400 opacity-30 z-30 "></div>
          <div className="fixed inset-0 z-40" onMouseDown={onClose}>
            <div className="flex justify-center items-center min-h-screen">
              <div
                className="bg-white rounded-lg shadow-lg"
                style={{ width: `${width}rem` }}
                onMouseDown={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b">
                  <button className="invisible">&#10005;</button>
                  <h1 className="text-4xl font-mediumbold">{title}</h1>
                  <button onClick={onClose}>&#10005;</button>
                </div>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </>

      ) : null}
    </>
  );
}

//ถ้าเป็น true render div แรก

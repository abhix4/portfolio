export default function OpenToWork() {
    return (
      <div className="w-[100px] h-[100px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
          <defs>
            {/* Path for the circular text */}
            <path
              id="circlePath"
              d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
            />
          </defs>
  
          {/* Outer white circle */}
          <circle cx="150" cy="150" r="150" fill="white" />
  
          {/* Rotating group */}
          <g className="rotating-group">
            {/* Inner black circle */}
            <circle cx="150" cy="150" r="95" fill="black" />
  
            {/* Circular text */}
            <text fill="black" fontSize="28" fontWeight="bold">
              <textPath
                href="#circlePath"
                startOffset="50%"
                textAnchor="middle"
                className="tracking-widest"
              >
                • AVAILABLE FOR NEW PROJECTS •
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    );
  }
  
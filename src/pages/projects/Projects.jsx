import React, { useEffect } from "react";
import "./Project.css";
import { startAnimation } from "../../shared/utils/animation.utils";

export const Projects = () => {
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="mt-20 min-w-[85vh] w-[80%] m-auto">
      <div className="flex flex-col items-center justify-center flex-nowrap">
        <div className="flex flex-row justify-center flex-wrap items-center">
          <div className="boxes">
            <div className="title">{"title"}</div>
            <div className="overlay">
              <div className="project-info">
                <div className="title info">{"title"}</div>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="title">{"title"}</div>
            <div className="overlay">
              <div className="project-info">
                <div className="title info">{"title"}</div>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="title">{"title"}</div>
            <div className="overlay">
              <div className="project-info">
                <div className="title info">{"title"}</div>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="title">{"title"}</div>
            <div className="overlay">
              <div className="project-info">
                <div className="title info">{"title"}</div>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="title">{"title"}</div>
            <div className="overlay">
              <div className="project-info">
                <div className="title info">{"title"}</div>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="title">{"title"}</div>
            <div className="overlay">
              <div className="project-info">
                <div className="title info">{"title"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

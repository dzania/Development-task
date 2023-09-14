import React, { useEffect, useRef, useState } from "react";
import { User } from "./shared/types";
import { fetchUser, setDisplayedPhoto } from "./shared/api";
import { useIntersection } from "./shared/intersection";
import { Link } from "react-router-dom";

export const UserPage = () => {
  const [user, setUser] = useState<User>();
  const [displayed, setDisplayed] = useState(false);
  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "0px");

  useEffect(() => {
    // Fetch user data from the backend/API and set active user.
    fetchUser().then((user) => {
      setUser(user);
    });
  }, [fetchUser, setUser]);

  useEffect(() => {
    if (isVisible && !displayed && user && !user.displayed_picture) {
      setDisplayedPhoto(user.uid);
      setDisplayed(true);
    }
  }, [isVisible]);

  const lines = Array.from({ length: 20 }, (_, index) => `Line ${index + 1}`);
  // Join the lines into a single string with line breaks
  const text = lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div>
      <Link to="/report">
        <button>Report</button>
      </Link>
      {Array.from({ length: 10 }, (_, index) => (
        <p key={index}>{text}</p>
      ))}
      <div ref={triggerRef}>
        {user && <img src={user.avatar} alt="User Avatar" />}
      </div>
      {Array.from({ length: 10 }, (_, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
};

import { memo } from "react";
import "./NotFoundUser.scss"

export const NotFoundUser = memo(() => {

  return (
    <div className="NotFoundUser">
      <h1 className="NotFoundUser__title">
        User not found
      </h1>
      <p>
        The user you requested was not found. Please check your spelling and try again.
      </p>
    </div>

  );
});